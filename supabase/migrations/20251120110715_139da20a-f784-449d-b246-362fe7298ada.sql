-- Grant admin role to user guilherme@marbana.com.br
INSERT INTO public.user_roles (user_id, role)
VALUES ('2fdddad4-4e09-4cc0-ac4b-811a35dab63f', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;