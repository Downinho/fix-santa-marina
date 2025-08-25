<?php
// Debug endpoint to test API connectivity
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

try {
    $db = new Database();
    $pdo = $db->connect();
    
    // Test database connection
    $result = $pdo->query("SELECT 1 as test")->fetch();
    
    $info = [
        'status' => 'API Online',
        'timestamp' => date('Y-m-d H:i:s'),
        'database' => $result ? 'Connected' : 'Failed',
        'php_version' => phpversion(),
        'request_method' => $_SERVER['REQUEST_METHOD'],
        'request_uri' => $_SERVER['REQUEST_URI'],
    ];
    
    Response::success($info, 'Debug info retrieved successfully');
    
} catch (Exception $e) {
    Response::error('Debug failed: ' . $e->getMessage(), 500);
}
?>