<?php
require_once '../config/database.php';
require_once '../utils/jwt.php';
require_once '../utils/response.php';

$method = $_SERVER['REQUEST_METHOD'];
$segments = explode('/', trim(str_replace('/api/sailors', '', $_SERVER['REQUEST_URI']), '/'));
$id = $segments[0] ?? null;

// Authentication check for write operations
if (in_array($method, ['POST', 'PUT', 'DELETE'])) {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    $payload = JWT::verify($authHeader);
    
    if (!$payload) {
        Response::unauthorized();
    }
}

try {
    $db = new Database();
    
    switch ($method) {
        case 'GET':
            if ($id && is_numeric($id)) {
                // Get single sailor
                $sailor = $db->fetch(
                    'SELECT s.*, GROUP_CONCAT(si.image_url) as images 
                     FROM sailors s 
                     LEFT JOIN sailor_images si ON s.id = si.sailor_id 
                     WHERE s.id = ? AND s.status = "active"
                     GROUP BY s.id',
                    [$id]
                );
                
                if (!$sailor) {
                    Response::notFound('Marinheiro não encontrado');
                }
                
                $sailor['images'] = $sailor['images'] ? explode(',', $sailor['images']) : [];
                
                Response::success($sailor);
            } else {
                // Get all sailors with filters
                $page = $_GET['page'] ?? 1;
                $limit = $_GET['limit'] ?? 12;
                $status = $_GET['status'] ?? 'active';
                
                $offset = ($page - 1) * $limit;
                
                $sql = "SELECT s.*, si.image_url as main_image 
                        FROM sailors s 
                        LEFT JOIN sailor_images si ON s.id = si.sailor_id AND si.is_main = 1 
                        WHERE s.status = ? 
                        ORDER BY s.created_at DESC 
                        LIMIT ? OFFSET ?";
                
                $sailors = $db->fetchAll($sql, [$status, $limit, $offset]);
                
                // Get total count
                $total = $db->fetch('SELECT COUNT(*) as total FROM sailors WHERE status = ?', [$status])['total'];
                
                Response::success([
                    'sailors' => $sailors,
                    'pagination' => [
                        'page' => $page,
                        'limit' => $limit,
                        'total' => $total,
                        'pages' => ceil($total / $limit)
                    ]
                ]);
            }
            break;
            
        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true);
            
            $required = ['name', 'bio', 'experience_years', 'hourly_rate', 'daily_rate'];
            foreach ($required as $field) {
                if (!isset($input[$field])) {
                    Response::error("Campo '$field' é obrigatório");
                }
            }
            
            $db->beginTransaction();
            
            try {
                $sailorId = $db->query(
                    'INSERT INTO sailors (name, bio, experience_years, specialties, hourly_rate, daily_rate, contact_phone, contact_email, location, availability, status, created_by) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [
                        $input['name'],
                        $input['bio'],
                        $input['experience_years'],
                        $input['specialties'] ?? '',
                        $input['hourly_rate'],
                        $input['daily_rate'],
                        $input['contact_phone'] ?? '',
                        $input['contact_email'] ?? '',
                        $input['location'] ?? '',
                        $input['availability'] ?? 'available',
                        $input['status'] ?? 'active',
                        $payload['user_id']
                    ]
                );
                
                $sailorId = $db->lastInsertId();
                
                // Add images if provided
                if (!empty($input['images'])) {
                    foreach ($input['images'] as $index => $imageUrl) {
                        $db->execute(
                            'INSERT INTO sailor_images (sailor_id, image_url, is_main) VALUES (?, ?, ?)',
                            [$sailorId, $imageUrl, $index === 0 ? 1 : 0]
                        );
                    }
                }
                
                $db->commit();
                
                Response::success(['id' => $sailorId], 'Marinheiro criado com sucesso');
            } catch (Exception $e) {
                $db->rollback();
                throw $e;
            }
            break;
            
        case 'PUT':
            if (!$id || !is_numeric($id)) {
                Response::error('ID do marinheiro é obrigatório');
            }
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            $db->beginTransaction();
            
            try {
                $db->execute(
                    'UPDATE sailors SET name = ?, bio = ?, experience_years = ?, specialties = ?, hourly_rate = ?, daily_rate = ?, contact_phone = ?, contact_email = ?, location = ?, availability = ?, status = ?, updated_at = NOW() WHERE id = ?',
                    [
                        $input['name'] ?? '',
                        $input['bio'] ?? '',
                        $input['experience_years'] ?? 0,
                        $input['specialties'] ?? '',
                        $input['hourly_rate'] ?? 0,
                        $input['daily_rate'] ?? 0,
                        $input['contact_phone'] ?? '',
                        $input['contact_email'] ?? '',
                        $input['location'] ?? '',
                        $input['availability'] ?? 'available',
                        $input['status'] ?? 'active',
                        $id
                    ]
                );
                
                // Update images if provided
                if (isset($input['images'])) {
                    $db->execute('DELETE FROM sailor_images WHERE sailor_id = ?', [$id]);
                    
                    foreach ($input['images'] as $index => $imageUrl) {
                        $db->execute(
                            'INSERT INTO sailor_images (sailor_id, image_url, is_main) VALUES (?, ?, ?)',
                            [$id, $imageUrl, $index === 0 ? 1 : 0]
                        );
                    }
                }
                
                $db->commit();
                
                Response::success(null, 'Marinheiro atualizado com sucesso');
            } catch (Exception $e) {
                $db->rollback();
                throw $e;
            }
            break;
            
        case 'DELETE':
            if (!$id || !is_numeric($id)) {
                Response::error('ID do marinheiro é obrigatório');
            }
            
            $db->beginTransaction();
            
            try {
                $db->execute('DELETE FROM sailor_images WHERE sailor_id = ?', [$id]);
                $db->execute('DELETE FROM sailors WHERE id = ?', [$id]);
                
                $db->commit();
                
                Response::success(null, 'Marinheiro removido com sucesso');
            } catch (Exception $e) {
                $db->rollback();
                throw $e;
            }
            break;
            
        default:
            Response::error('Método não permitido', 405);
    }
    
} catch (Exception $e) {
    Response::error('Erro no servidor: ' . $e->getMessage(), 500);
}
?>