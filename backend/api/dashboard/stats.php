<?php
require_once '../config/database.php';
require_once '../utils/jwt.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    Response::error('Método não permitido', 405);
}

$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$payload = JWT::verify($authHeader);

if (!$payload) {
    Response::unauthorized();
}

try {
    $db = new Database();
    
    // Vessel stats
    $vesselStats = $db->fetch('SELECT COUNT(*) as total, SUM(CASE WHEN status = "published" THEN 1 ELSE 0 END) as published FROM vessels');
    
    // Sailor stats
    $sailorStats = $db->fetch('SELECT COUNT(*) as total, SUM(CASE WHEN status = "active" THEN 1 ELSE 0 END) as verified FROM sailors');
    
    // Blog stats
    $blogStats = $db->fetch('SELECT COUNT(*) as total, SUM(CASE WHEN status = "published" THEN 1 ELSE 0 END) as published FROM blog_posts');
    
    // Recent activity (last 10 actions)
    $recentActivity = $db->fetchAll(
        'SELECT al.*, u.display_name as user_name 
         FROM activity_logs al 
         LEFT JOIN users u ON al.user_id = u.id 
         ORDER BY al.created_at DESC 
         LIMIT 10'
    );
    
    Response::success([
        'vessels' => [
            'total' => (int)$vesselStats['total'],
            'published' => (int)$vesselStats['published']
        ],
        'sailors' => [
            'total' => (int)$sailorStats['total'],
            'verified' => (int)$sailorStats['verified']
        ],
        'blog_posts' => [
            'total' => (int)$blogStats['total'],
            'published' => (int)$blogStats['published']
        ],
        'recent_activity' => $recentActivity
    ]);
    
} catch (Exception $e) {
    Response::error('Erro no servidor: ' . $e->getMessage(), 500);
}
?>