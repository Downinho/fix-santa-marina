<?php
class Response {
    public static function success($data = null, $message = null) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'data' => $data,
            'message' => $message
        ]);
        exit();
    }
    
    public static function error($message, $code = 400, $errors = null) {
        http_response_code($code);
        echo json_encode([
            'success' => false,
            'message' => $message,
            'errors' => $errors
        ]);
        exit();
    }
    
    public static function unauthorized($message = 'Token inválido ou expirado') {
        self::error($message, 401);
    }
    
    public static function forbidden($message = 'Acesso negado') {
        self::error($message, 403);
    }
    
    public static function notFound($message = 'Recurso não encontrado') {
        self::error($message, 404);
    }
}
?>