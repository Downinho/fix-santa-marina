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
require_once 'utils/jwt.php';
require_once 'utils/response.php';

// Parse the request URI
$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);
$path = str_replace('/api', '', $path);
$segments = explode('/', trim($path, '/'));

$method = $_SERVER['REQUEST_METHOD'];
$endpoint = $segments[0] ?? '';
$resource = $segments[1] ?? '';
$id = $segments[2] ?? null;

try {
    switch ($endpoint) {
        case 'auth':
            require_once 'auth/' . $resource . '.php';
            break;
            
        case 'vessels':
            require_once 'vessels/index.php';
            break;
            
        case 'sailors':
            require_once 'sailors/index.php';
            break;
            
        case 'blog':
            require_once 'blog/' . $resource . '.php';
            break;
            
        case 'dashboard':
            require_once 'dashboard/' . $resource . '.php';
            break;
            
        case 'upload':
            require_once 'upload/index.php';
            break;
            
        default:
            Response::error('Endpoint não encontrado', 404);
    }
} catch (Exception $e) {
    Response::error('Erro interno do servidor: ' . $e->getMessage(), 500);
}
?>