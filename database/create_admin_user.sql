-- Script para criar usuário admin com suas credenciais
-- Executar este script no banco para criar o usuário com email guilhermewariesp@gmail.com

INSERT INTO users (email, password_hash, display_name, role, is_active, created_at) 
VALUES (
    'guilhermewariesp@gmail.com', 
    '$2y$10$6.ZKtPxgOX3Uo5.HJzqz5.YzO6..FLGvlH7qvLp8nUZJhYLgBKJw2', -- senha: judeu1234
    'Guilherme Admin', 
    'admin', 
    1, 
    NOW()
);

-- Para verificar se foi criado corretamente:
-- SELECT * FROM users WHERE email = 'guilhermewariesp@gmail.com';