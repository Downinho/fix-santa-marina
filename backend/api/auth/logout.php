<?php
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Método não permitido', 405);
}

// For JWT tokens, logout is handled client-side by removing the token
// We just return success here
Response::success(null, 'Logout realizado com sucesso');
?>