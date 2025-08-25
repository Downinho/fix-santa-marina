<?php
require_once '../utils/jwt.php';
require_once '../utils/response.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Método não permitido', 405);
}

$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$payload = JWT::verify($authHeader);

if (!$payload) {
    Response::unauthorized();
}

if (!isset($_FILES['file'])) {
    Response::error('Nenhum arquivo enviado');
}

$file = $_FILES['file'];
$path = $_POST['path'] ?? 'uploads';

// Validate file
if ($file['error'] !== UPLOAD_ERR_OK) {
    Response::error('Erro no upload do arquivo');
}

// Check file size (max 10MB)
if ($file['size'] > 10 * 1024 * 1024) {
    Response::error('Arquivo muito grande (máximo 10MB)');
}

// Check file type
$allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
if (!in_array($file['type'], $allowedTypes)) {
    Response::error('Tipo de arquivo não permitido');
}

// Generate unique filename
$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid() . '.' . $extension;
$uploadPath = '../uploads/' . $path . '/';
$fullPath = $uploadPath . $filename;

// Create directory if it doesn't exist
if (!is_dir($uploadPath)) {
    mkdir($uploadPath, 0755, true);
}

// Move uploaded file
if (!move_uploaded_file($file['tmp_name'], $fullPath)) {
    Response::error('Erro ao salvar arquivo');
}

// Return URL
$url = '/uploads/' . $path . '/' . $filename;

Response::success(['url' => $url], 'Arquivo enviado com sucesso');
?>