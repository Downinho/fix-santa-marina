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
$new_password = 'judeu1234';

try {
    $db = new Database();
    
    // Gerar o hash correto da senha
    $new_hash = password_hash($new_password, PASSWORD_DEFAULT);
    
    // Atualizar a senha no banco
    $updated = $db->execute(
        'UPDATE users SET password_hash = ? WHERE email = ?',
        [$new_hash, $email]
    );
    
    if ($updated > 0) {
        // Testar se a nova senha funciona
        $user = $db->fetch(
            'SELECT password_hash FROM users WHERE email = ?',
            [$email]
        );
        
        $password_valid = password_verify($new_password, $user['password_hash']);
        
        Response::success([
            'password_updated' => true,
            'rows_affected' => $updated,
            'new_hash_generated' => $new_hash,
            'password_test_after_update' => $password_valid,
            'message' => $password_valid ? 'Senha atualizada com sucesso!' : 'Erro: senha ainda não funciona'
        ], 'Password updated successfully');
    } else {
        Response::error('Nenhuma linha foi atualizada. Usuário não encontrado?', 400);
    }
    
} catch (Exception $e) {
    Response::error('Erro ao atualizar senha: ' . $e->getMessage(), 500);
}
?>