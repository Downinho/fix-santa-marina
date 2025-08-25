<?php
require_once '../config/database.php';
require_once '../utils/jwt.php';
require_once '../utils/response.php';

$method = $_SERVER['REQUEST_METHOD'];
$segments = explode('/', trim(str_replace('/api/vessels', '', $_SERVER['REQUEST_URI']), '/'));
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
                // Get single vessel
                $vessel = $db->fetch(
                    'SELECT v.*, GROUP_CONCAT(vi.image_url) as images, GROUP_CONCAT(ve.equipment_name) as equipment 
                     FROM vessels v 
                     LEFT JOIN vessel_images vi ON v.id = vi.vessel_id 
                     LEFT JOIN vessel_equipment ve ON v.id = ve.vessel_id 
                     WHERE v.id = ? AND v.status = "published"
                     GROUP BY v.id',
                    [$id]
                );
                
                if (!$vessel) {
                    Response::notFound('Embarcação não encontrada');
                }
                
                $vessel['images'] = $vessel['images'] ? explode(',', $vessel['images']) : [];
                $vessel['equipment'] = $vessel['equipment'] ? explode(',', $vessel['equipment']) : [];
                
                Response::success($vessel);
            } else {
                // Get all vessels with filters
                $page = $_GET['page'] ?? 1;
                $limit = $_GET['limit'] ?? 12;
                $status = $_GET['status'] ?? 'published';
                $type = $_GET['type'] ?? '';
                
                $offset = ($page - 1) * $limit;
                
                $where = 'WHERE v.status = ?';
                $params = [$status];
                
                if ($type) {
                    $where .= ' AND v.type = ?';
                    $params[] = $type;
                }
                
                $sql = "SELECT v.*, vi.image_url as main_image 
                        FROM vessels v 
                        LEFT JOIN vessel_images vi ON v.id = vi.vessel_id AND vi.is_main = 1 
                        $where 
                        ORDER BY v.created_at DESC 
                        LIMIT ? OFFSET ?";
                
                $params[] = $limit;
                $params[] = $offset;
                
                $vessels = $db->fetchAll($sql, $params);
                
                // Get total count
                $countSql = "SELECT COUNT(*) as total FROM vessels v $where";
                $total = $db->fetch($countSql, array_slice($params, 0, -2))['total'];
                
                Response::success([
                    'vessels' => $vessels,
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
            
            $required = ['name', 'type', 'length', 'year', 'price', 'location', 'description'];
            foreach ($required as $field) {
                if (empty($input[$field])) {
                    Response::error("Campo '$field' é obrigatório");
                }
            }
            
            $db->beginTransaction();
            
            try {
                $vesselId = $db->query(
                    'INSERT INTO vessels (name, type, brand, model, year, length, beam, draft, guests, cabins, bathrooms, fuel, price, location, description, status, created_by) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [
                        $input['name'],
                        $input['type'],
                        $input['brand'] ?? '',
                        $input['model'] ?? '',
                        $input['year'],
                        $input['length'],
                        $input['beam'] ?? 0,
                        $input['draft'] ?? 0,
                        $input['guests'] ?? 0,
                        $input['cabins'] ?? 0,
                        $input['bathrooms'] ?? 0,
                        $input['fuel'] ?? '',
                        $input['price'],
                        $input['location'],
                        $input['description'],
                        $input['status'] ?? 'draft',
                        $payload['user_id']
                    ]
                );
                
                $vesselId = $db->lastInsertId();
                
                // Add images if provided
                if (!empty($input['images'])) {
                    foreach ($input['images'] as $index => $imageUrl) {
                        $db->execute(
                            'INSERT INTO vessel_images (vessel_id, image_url, is_main) VALUES (?, ?, ?)',
                            [$vesselId, $imageUrl, $index === 0 ? 1 : 0]
                        );
                    }
                }
                
                // Add equipment if provided
                if (!empty($input['equipment'])) {
                    foreach ($input['equipment'] as $equipment) {
                        $db->execute(
                            'INSERT INTO vessel_equipment (vessel_id, equipment_name) VALUES (?, ?)',
                            [$vesselId, $equipment]
                        );
                    }
                }
                
                $db->commit();
                
                Response::success(['id' => $vesselId], 'Embarcação criada com sucesso');
            } catch (Exception $e) {
                $db->rollback();
                throw $e;
            }
            break;
            
        case 'PUT':
            if (!$id || !is_numeric($id)) {
                Response::error('ID da embarcação é obrigatório');
            }
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            $db->beginTransaction();
            
            try {
                $db->execute(
                    'UPDATE vessels SET name = ?, type = ?, brand = ?, model = ?, year = ?, length = ?, beam = ?, draft = ?, guests = ?, cabins = ?, bathrooms = ?, fuel = ?, price = ?, location = ?, description = ?, status = ?, updated_at = NOW() WHERE id = ?',
                    [
                        $input['name'] ?? '',
                        $input['type'] ?? '',
                        $input['brand'] ?? '',
                        $input['model'] ?? '',
                        $input['year'] ?? 0,
                        $input['length'] ?? 0,
                        $input['beam'] ?? 0,
                        $input['draft'] ?? 0,
                        $input['guests'] ?? 0,
                        $input['cabins'] ?? 0,
                        $input['bathrooms'] ?? 0,
                        $input['fuel'] ?? '',
                        $input['price'] ?? 0,
                        $input['location'] ?? '',
                        $input['description'] ?? '',
                        $input['status'] ?? 'draft',
                        $id
                    ]
                );
                
                // Update images if provided
                if (isset($input['images'])) {
                    $db->execute('DELETE FROM vessel_images WHERE vessel_id = ?', [$id]);
                    
                    foreach ($input['images'] as $index => $imageUrl) {
                        $db->execute(
                            'INSERT INTO vessel_images (vessel_id, image_url, is_main) VALUES (?, ?, ?)',
                            [$id, $imageUrl, $index === 0 ? 1 : 0]
                        );
                    }
                }
                
                // Update equipment if provided
                if (isset($input['equipment'])) {
                    $db->execute('DELETE FROM vessel_equipment WHERE vessel_id = ?', [$id]);
                    
                    foreach ($input['equipment'] as $equipment) {
                        $db->execute(
                            'INSERT INTO vessel_equipment (vessel_id, equipment_name) VALUES (?, ?)',
                            [$id, $equipment]
                        );
                    }
                }
                
                $db->commit();
                
                Response::success(null, 'Embarcação atualizada com sucesso');
            } catch (Exception $e) {
                $db->rollback();
                throw $e;
            }
            break;
            
        case 'DELETE':
            if (!$id || !is_numeric($id)) {
                Response::error('ID da embarcação é obrigatório');
            }
            
            $db->beginTransaction();
            
            try {
                $db->execute('DELETE FROM vessel_images WHERE vessel_id = ?', [$id]);
                $db->execute('DELETE FROM vessel_equipment WHERE vessel_id = ?', [$id]);
                $db->execute('DELETE FROM vessels WHERE id = ?', [$id]);
                
                $db->commit();
                
                Response::success(null, 'Embarcação removida com sucesso');
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