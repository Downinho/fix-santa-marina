-- MARBANA Migration Script
-- This script migrates data from static files to MySQL database
-- Run this after creating the database schema

-- First, create a temporary admin user
INSERT INTO users (email, password_hash, display_name, role) VALUES
('admin@marbana.com.br', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrador', 'admin');

-- Get the admin user ID for foreign key references
SET @admin_id = LAST_INSERT_ID();

-- Migrate Vessels data
-- Note: You'll need to adjust the data based on your static vessels array
-- This is an example structure - replace with actual data from src/data/vessels.ts

INSERT INTO vessels (
    name, slug, type, model, year, length_m, beam_m, capacity, engines, horsepower, fuel,
    description, price_sale_cents, price_day_cents, for_sale, for_rent, 
    city, state, country, status, featured, created_by
) VALUES
-- Focker 272 GTC (from user request)
(
    'Focker 272 GTC 2019',
    'focker-272-gtc-2019',
    'Lancha',
    'Focker 272 GTC',
    2019,
    8.20,
    2.55,
    10,
    'Mercruiser 6.2 300 HP',
    300,
    'Gasolina',
    'Embarcação em excelente estado de conservação com 170h de uso aproximadamente. Ideal para passeios em família. Estuda possibilidade de troca por carro ou terreno em Búzios.',
    NULL, -- Price to be set
    NULL, -- Daily rate to be set
    true, -- For sale
    true, -- For rent
    'Rio de Janeiro',
    'RJ',
    'Brasil',
    'published',
    true,
    @admin_id
),
-- Add more vessels from your static data...
(
    'Azimut 60',
    'azimut-60',
    'Iate',
    'Azimut 60',
    2020,
    18.50,
    4.95,
    12,
    'MAN V8-1200',
    1200,
    'Diesel',
    'Iate de luxo com acabamento refinado e tecnologia de ponta.',
    2500000000, -- 25 million cents = R$ 250,000
    50000000,   -- 500k cents = R$ 5,000/day
    true,
    true,
    'Santos',
    'SP',
    'Brasil',
    'published',
    true,
    @admin_id
);

-- Insert vessel equipment for Focker 272 GTC
INSERT INTO vessel_equipment (vessel_id, equipment_name, category) 
SELECT v.id, equipment_name, 'equipamento'
FROM vessels v,
(SELECT 'Toalete' as equipment_name UNION ALL
 SELECT 'Som' UNION ALL
 SELECT 'Sonda Potente' UNION ALL
 SELECT 'VHF' UNION ALL
 SELECT 'Piso EVA' UNION ALL
 SELECT 'Acabamento do costado em PVC e inox' UNION ALL
 SELECT 'Luz de cortesia' UNION ALL
 SELECT 'Luz de navegação em LED' UNION ALL
 SELECT 'Guincho elétrico' UNION ALL
 SELECT 'Para-brisa frontal de alumínio com laterais em fibra' UNION ALL
 SELECT 'Plataforma de popa estendida' UNION ALL
 SELECT 'Vigias laterais' UNION ALL
 SELECT 'Salvatagem Completa' UNION ALL
 SELECT 'Flaps') as equipment
WHERE v.slug = 'focker-272-gtc-2019';

-- Migrate Sailors data
-- Note: Adjust based on your static sailors data from src/data/sailors.ts
INSERT INTO sailors (
    name, slug, bio, experience_years, specialties, languages,
    hourly_rate_cents, day_rate_cents, city, state, country,
    phone, email, verified, available, status, created_by
) VALUES
(
    'Capitão João Silva',
    'capitao-joao-silva',
    'Marinheiro experiente com mais de 15 anos navegando pela costa brasileira. Especialista em navegação de recreio e pesca esportiva.',
    15,
    '["Navegação de Recreio", "Pesca Esportiva", "Manutenção Naval"]',
    '["Português", "Inglês"]',
    8000, -- R$ 80/hour
    50000, -- R$ 500/day
    'Rio de Janeiro',
    'RJ',
    'Brasil',
    '+55 21 99999-9999',
    'joao.silva@email.com',
    true,
    true,
    'published',
    @admin_id
),
(
    'Comandante Maria Santos',
    'comandante-maria-santos',
    'Primeira mulher habilitada como comandante de iate no Rio de Janeiro. Especialista em turismo náutico e navegação de longo curso.',
    12,
    '["Turismo Náutico", "Navegação de Longo Curso", "Primeiros Socorros"]',
    '["Português", "Inglês", "Espanhol"]',
    10000, -- R$ 100/hour
    70000, -- R$ 700/day
    'Angra dos Reis',
    'RJ',
    'Brasil',
    '+55 24 98888-8888',
    'maria.santos@email.com',
    true,
    true,
    'published',
    @admin_id
);

-- Migrate Blog Posts data
-- Note: Adjust based on your static blog posts from src/data/blogPosts.ts
INSERT INTO blog_posts (
    title, slug, excerpt, content, cover_image_url, author_id, category_id,
    status, featured, seo_title, seo_description, published_at
) VALUES
(
    'Guia Completo de Navegação Segura',
    'guia-completo-navegacao-segura',
    'Aprenda tudo sobre navegação segura e responsável. Dicas essenciais para marinheiros iniciantes e experientes.',
    'Conteúdo completo do artigo sobre navegação segura...',
    '/images/blog/navegacao-segura.jpg',
    @admin_id,
    (SELECT id FROM blog_categories WHERE slug = 'seguranca'),
    'published',
    true,
    'Guia Completo de Navegação Segura - MARBANA',
    'Aprenda tudo sobre navegação segura e responsável. Dicas essenciais para marinheiros iniciantes e experientes.',
    NOW()
),
(
    'Manutenção Preventiva de Embarcações',
    'manutencao-preventiva-embarcacoes',
    'Mantenha sua embarcação sempre em perfeito estado com nossas dicas de manutenção preventiva.',
    'Conteúdo detalhado sobre manutenção preventiva...',
    '/images/blog/manutencao-embarcacoes.jpg',
    @admin_id,
    (SELECT id FROM blog_categories WHERE slug = 'manutencao'),
    'published',
    false,
    'Manutenção Preventiva de Embarcações - MARBANA',
    'Mantenha sua embarcação sempre em perfeito estado com nossas dicas de manutenção preventiva.',
    NOW()
);

-- Insert initial settings
INSERT INTO settings (setting_key, setting_value, description, updated_by) VALUES
('site_name', 'MARBANA', 'Nome do site', @admin_id),
('site_description', 'Plataforma completa para o mercado náutico brasileiro', 'Descrição do site', @admin_id),
('contact_email', 'contato@marbana.com.br', 'Email de contato', @admin_id),
('contact_phone', '+55 21 99999-9999', 'Telefone de contato', @admin_id),
('whatsapp_number', '+5521999999999', 'Número do WhatsApp', @admin_id),
('facebook_url', 'https://facebook.com/marbana', 'URL do Facebook', @admin_id),
('instagram_url', 'https://instagram.com/marbana', 'URL do Instagram', @admin_id),
('youtube_url', 'https://youtube.com/marbana', 'URL do YouTube', @admin_id);

-- Create indexes for better performance (if not already created in schema)
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_vessels_created_by ON vessels(created_by);
CREATE INDEX IF NOT EXISTS idx_sailors_created_by ON sailors(created_by);

COMMIT;