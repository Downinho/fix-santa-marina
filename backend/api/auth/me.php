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
    
    $user = $db->fetch(
        'SELECT id, email, display_name, role, is_active, created_at, last_login FROM users WHERE id = ? AND is_active = 1',
        [$payload['user_id']]
    );
    
    if (!$user) {
        Response::unauthorized('Usuário não encontrado');
    }
    
    Response::success($user);
    
} catch (Exception $e) {
    Response::error('Erro no servidor: ' . $e->getMessage(), 500);
}
?>