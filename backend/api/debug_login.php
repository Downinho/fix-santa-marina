<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/database.php';
require_once 'utils/response.php';

$email = 'guilhermewariesp@gmail.com';
$password = 'judeu1234';

try {
    $db = new Database();
    
    // 1. Verificar se o usuário existe
    $user = $db->fetch(
        'SELECT id, email, password_hash, display_name, role, is_active, created_at FROM users WHERE email = ?',
        [$email]
    );
    
    $debug_info = [
        'step_1_user_exists' => $user ? true : false,
        'user_data' => $user ? [
            'id' => $user['id'],
            'email' => $user['email'],
            'display_name' => $user['display_name'],
            'role' => $user['role'],
            'is_active' => $user['is_active'],
            'created_at' => $user['created_at']
        ] : null,
        'step_2_password_test' => null,
        'step_3_login_simulation' => null
    ];
    
    if ($user) {
        // 2. Testar se a senha está correta
        $password_valid = password_verify($password, $user['password_hash']);
        $debug_info['step_2_password_test'] = [
            'password_hash_from_db' => $user['password_hash'],
            'password_being_tested' => $password,
            'password_valid' => $password_valid
        ];
        
        // 3. Simular o processo de login completo
        if ($password_valid && $user['is_active']) {
            require_once 'utils/jwt.php';
            
            $payload = [
                'user_id' => $user['id'],
                'email' => $user['email'],
                'role' => $user['role'],
                'exp' => time() + (24 * 60 * 60)
            ];
            
            $token = JWT::encode($payload);
            
            $debug_info['step_3_login_simulation'] = [
                'should_login_succeed' => true,
                'jwt_payload' => $payload,
                'jwt_token_generated' => substr($token, 0, 50) . '...',
                'token_length' => strlen($token)
            ];
        } else {
            $debug_info['step_3_login_simulation'] = [
                'should_login_succeed' => false,
                'reason' => !$password_valid ? 'Invalid password' : 'User not active'
            ];
        }
    }
    
    // 4. Testar o endpoint de login real
    $debug_info['step_4_endpoint_test'] = 'Run this test: POST to /api/auth/login.php with {"email":"' . $email . '","password":"' . $password . '"}';
    
    Response::success($debug_info, 'Debug login completed');
    
} catch (Exception $e) {
    Response::error('Debug failed: ' . $e->getMessage(), 500);
}
?>