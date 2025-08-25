<?php
require_once '../config/database.php';
require_once '../utils/jwt.php';
require_once '../utils/response.php';

$method = $_SERVER['REQUEST_METHOD'];
$segments = explode('/', trim(str_replace('/api/blog/posts', '', $_SERVER['REQUEST_URI']), '/'));
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
                // Get single post
                $post = $db->fetch(
                    'SELECT bp.*, bc.name as category_name, u.display_name as author_name 
                     FROM blog_posts bp 
                     LEFT JOIN blog_categories bc ON bp.category_id = bc.id 
                     LEFT JOIN users u ON bp.author_id = u.id 
                     WHERE bp.id = ? AND bp.status = "published"',
                    [$id]
                );
                
                if (!$post) {
                    Response::notFound('Post não encontrado');
                }
                
                Response::success($post);
            } else {
                // Get all posts with filters
                $page = $_GET['page'] ?? 1;
                $limit = $_GET['limit'] ?? 10;
                $status = $_GET['status'] ?? 'published';
                $category = $_GET['category'] ?? '';
                
                $offset = ($page - 1) * $limit;
                
                $where = 'WHERE bp.status = ?';
                $params = [$status];
                
                if ($category) {
                    $where .= ' AND bc.slug = ?';
                    $params[] = $category;
                }
                
                $sql = "SELECT bp.*, bc.name as category_name, u.display_name as author_name 
                        FROM blog_posts bp 
                        LEFT JOIN blog_categories bc ON bp.category_id = bc.id 
                        LEFT JOIN users u ON bp.author_id = u.id 
                        $where 
                        ORDER BY bp.published_at DESC 
                        LIMIT ? OFFSET ?";
                
                $params[] = $limit;
                $params[] = $offset;
                
                $posts = $db->fetchAll($sql, $params);
                
                // Get total count
                $countSql = "SELECT COUNT(*) as total FROM blog_posts bp LEFT JOIN blog_categories bc ON bp.category_id = bc.id $where";
                $total = $db->fetch($countSql, array_slice($params, 0, -2))['total'];
                
                Response::success([
                    'posts' => $posts,
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
            
            $required = ['title', 'content', 'category_id'];
            foreach ($required as $field) {
                if (empty($input[$field])) {
                    Response::error("Campo '$field' é obrigatório");
                }
            }
            
            $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $input['title'])));
            
            $postId = $db->query(
                'INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, category_id, author_id, status, meta_title, meta_description, published_at) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    $input['title'],
                    $slug,
                    $input['content'],
                    $input['excerpt'] ?? '',
                    $input['featured_image'] ?? '',
                    $input['category_id'],
                    $payload['user_id'],
                    $input['status'] ?? 'draft',
                    $input['meta_title'] ?? $input['title'],
                    $input['meta_description'] ?? '',
                    $input['status'] === 'published' ? date('Y-m-d H:i:s') : null
                ]
            );
            
            $postId = $db->lastInsertId();
            
            Response::success(['id' => $postId], 'Post criado com sucesso');
            break;
            
        case 'PUT':
            if (!$id || !is_numeric($id)) {
                Response::error('ID do post é obrigatório');
            }
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $input['title'] ?? '')));
            
            $publishedAt = null;
            if ($input['status'] === 'published') {
                $publishedAt = date('Y-m-d H:i:s');
            }
            
            $db->execute(
                'UPDATE blog_posts SET title = ?, slug = ?, content = ?, excerpt = ?, featured_image = ?, category_id = ?, status = ?, meta_title = ?, meta_description = ?, published_at = ?, updated_at = NOW() WHERE id = ?',
                [
                    $input['title'] ?? '',
                    $slug,
                    $input['content'] ?? '',
                    $input['excerpt'] ?? '',
                    $input['featured_image'] ?? '',
                    $input['category_id'] ?? 1,
                    $input['status'] ?? 'draft',
                    $input['meta_title'] ?? $input['title'] ?? '',
                    $input['meta_description'] ?? '',
                    $publishedAt,
                    $id
                ]
            );
            
            Response::success(null, 'Post atualizado com sucesso');
            break;
            
        case 'DELETE':
            if (!$id || !is_numeric($id)) {
                Response::error('ID do post é obrigatório');
            }
            
            $db->execute('DELETE FROM blog_posts WHERE id = ?', [$id]);
            
            Response::success(null, 'Post removido com sucesso');
            break;
            
        default:
            Response::error('Método não permitido', 405);
    }
    
} catch (Exception $e) {
    Response::error('Erro no servidor: ' . $e->getMessage(), 500);
}
?>