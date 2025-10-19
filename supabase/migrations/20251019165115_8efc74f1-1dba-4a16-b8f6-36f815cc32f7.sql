-- Atualizar role do usuário guilherme@marbana.com.br para admin
UPDATE public.user_roles 
SET role = 'admin'
WHERE user_id = '965e67ab-8c7e-4bf5-8d46-95db4fa0161f';