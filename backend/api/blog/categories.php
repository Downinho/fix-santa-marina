<?php
require_once '../config/database.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    Response::error('Método não permitido', 405);
}

try {
    $db = new Database();
    
    $categories = $db->fetchAll(
        'SELECT bc.*, COUNT(bp.id) as post_count 
         FROM blog_categories bc 
         LEFT JOIN blog_posts bp ON bc.id = bp.category_id AND bp.status = "published" 
         GROUP BY bc.id 
         ORDER BY bc.name'
    );
    
    Response::success($categories);
    
} catch (Exception $e) {
    Response::error('Erro no servidor: ' . $e->getMessage(), 500);
}
?>