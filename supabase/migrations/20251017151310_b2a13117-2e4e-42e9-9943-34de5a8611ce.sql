-- Criar usuário admin guilherme@marbana.com.br
-- NOTA: A senha será Warie@123$ (precisa ser configurada manualmente via Supabase Dashboard)

-- 1. Inserir perfil do admin (o trigger handle_new_user criará automaticamente quando o usuário for criado)
-- Mas vamos garantir que o perfil existe
INSERT INTO public.profiles (id, display_name, is_verified)
SELECT 
  id, 
  'Guilherme - Admin MARBANA',
  true
FROM auth.users 
WHERE email = 'guilherme@marbana.com.br'
ON CONFLICT (id) DO UPDATE 
SET display_name = EXCLUDED.display_name,
    is_verified = EXCLUDED.is_verified;

-- 2. Garantir que o usuário tem role admin
INSERT INTO public.user_roles (user_id, role)
SELECT 
  id,
  'admin'::app_role
FROM auth.users 
WHERE email = 'guilherme@marbana.com.br'
ON CONFLICT (user_id, role) DO NOTHING;