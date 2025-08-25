<?php
require_once '../config/database.php';
require_once '../utils/jwt.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Método não permitido', 405);
}

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

if (empty($email) || empty($password)) {
    Response::error('Email e senha são obrigatórios');
}

try {
    $db = new Database();
    
    $user = $db->fetch(
        'SELECT id, email, password_hash, display_name, role, is_active FROM users WHERE email = ? AND is_active = 1',
        [$email]
    );
    
    if (!$user || !password_verify($password, $user['password_hash'])) {
        Response::error('Credenciais inválidas', 401);
    }
    
    // Update last login
    $db->execute('UPDATE users SET last_login = NOW() WHERE id = ?', [$user['id']]);
    
    // Generate JWT token
    $payload = [
        'user_id' => $user['id'],
        'email' => $user['email'],
        'role' => $user['role'],
        'exp' => time() + (24 * 60 * 60) // 24 hours
    ];
    
    $token = JWT::encode($payload);
    
    unset($user['password_hash']);
    
    Response::success([
        'token' => $token,
        'user' => $user
    ], 'Login realizado com sucesso');
    
} catch (Exception $e) {
    Response::error('Erro no servidor: ' . $e->getMessage(), 500);
}
?>