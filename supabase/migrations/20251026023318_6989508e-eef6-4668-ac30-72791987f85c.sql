-- Popular o banco com as 5 embarcações existentes

-- 1. Infinity XIX - Focker 272 GTC
DO $$
DECLARE
  v_vessel_id uuid;
BEGIN
  INSERT INTO public.vessels (
    owner_profile_id, name, slug, type, description,
    year, length_m, beam_m, capacity, engines, horsepower, fuel,
    for_sale, for_rent, price_sale_cents, price_day_cents,
    currency, city, state, country, latitude, longitude,
    contact_name, contact_email, contact_phone, contact_whatsapp,
    highlights, status
  ) VALUES (
    '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
    'Infinity XIX',
    'infinity-xix-focker-272-1',
    'Lancha',
    'Embarcação premium em estado impecável, perfeita para passeios e lazer com toda a família.',
    2019, 8.2, 2.5, 11, 'Mercruiser 6.2', 350, 'Gasolina',
    true, true, 42500000, 150000,
    'BRL', 'Armação dos Búzios', 'RJ', 'Brasil', -22.7496736, -41.886076,
    'MARBANA Exclusive Yachts', 'contato@marbana.com.br', '(22) 99999-9999', '5522999999999',
    '[{"icon":"CheckCircle","title":"Estado Impecável","description":"Apenas 165h de uso"},{"icon":"Gauge","title":"Alta Performance","description":"Motor Mercruiser 6.2 350hp"},{"icon":"Users","title":"Espaçosa","description":"Capacidade para 11 pessoas"}]',
    'published'
  ) RETURNING id INTO v_vessel_id;

  -- Inserir imagens para Infinity XIX
  INSERT INTO public.vessel_media (vessel_id, type, url, position) VALUES
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY01.jpg', 0),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY02.jpg', 1),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY03.jpg', 2),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY04.jpg', 3),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY05.jpg', 4),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY06.jpg', 5),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY07.jpg', 6),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY08.jpg', 7),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY09.jpg', 8),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY10.jpg', 9),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY11.jpg', 10),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY12.jpg', 11),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/INFINITY13.jpg', 12),
    (v_vessel_id, 'video', '/videos/lancha.mp4', 13);
END $$;

-- 2. Coral 36HT 2019
DO $$
DECLARE
  v_vessel_id uuid;
BEGIN
  INSERT INTO public.vessels (
    owner_profile_id, name, slug, type, description,
    year, length_m, beam_m, capacity, engines, horsepower, fuel,
    for_sale, for_rent, price_sale_cents, price_day_cents,
    currency, city, state, country,
    contact_name, contact_email, contact_phone, contact_whatsapp,
    highlights, status
  ) VALUES (
    '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
    'Coral 36HT 2019',
    'coral-36ht-2019',
    'Lancha',
    'Lancha Coral 36 HT 2019 em excelente estado de conservação.',
    2019, 11.0, 3.5, 12, 'Volvo Penta D6', 435, 'Diesel',
    true, true, 85000000, 250000,
    'BRL', 'Rio de Janeiro', 'RJ', 'Brasil',
    'MARBANA Exclusive Yachts', 'contato@marbana.com.br', '(22) 99999-9999', '5522999999999',
    '[{"icon":"Anchor","title":"Equipamentos Completos","description":"Equipada com eletrônicos de navegação"},{"icon":"BedDouble","title":"Conforto","description":"2 cabines com ar condicionado"}]',
    'published'
  ) RETURNING id INTO v_vessel_id;

  INSERT INTO public.vessel_media (vessel_id, type, url, position) VALUES
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (1).jpg', 0),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (2).jpg', 1),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (3).jpg', 2),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (4).jpg', 3),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (5).jpg', 4),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (6).jpg', 5),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (7).jpg', 6),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (8).jpg', 7),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (9).jpg', 8),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/coral-36ht/coral-36ht (10).jpg', 9);
END $$;

-- 3. Real 24A 2008
DO $$
DECLARE
  v_vessel_id uuid;
BEGIN
  INSERT INTO public.vessels (
    owner_profile_id, name, slug, type, description,
    year, length_m, beam_m, capacity, engines, horsepower, fuel,
    for_sale, for_rent, price_sale_cents, price_day_cents,
    currency, city, state, country,
    contact_name, contact_email, contact_phone, contact_whatsapp,
    highlights, status
  ) VALUES (
    '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
    'Real 24A 2008',
    'real-24a-2008',
    'Lancha',
    'Lancha Real 24A 2008, ótima para passeios e pesca.',
    2008, 7.3, 2.4, 8, 'Mercury 150hp', 150, 'Gasolina',
    true, true, 12000000, 80000,
    'BRL', 'Rio de Janeiro', 'RJ', 'Brasil',
    'MARBANA Exclusive Yachts', 'contato@marbana.com.br', '(22) 99999-9999', '5522999999999',
    '[{"icon":"Fish","title":"Ideal para Pesca","description":"Equipada para pescaria"},{"icon":"Waves","title":"Econômica","description":"Baixo consumo de combustível"}]',
    'published'
  ) RETURNING id INTO v_vessel_id;

  INSERT INTO public.vessel_media (vessel_id, type, url, position) VALUES
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (1).jpeg', 0),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (2).jpeg', 1),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (3).jpeg', 2),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (4).jpeg', 3),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (5).jpeg', 4),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (6).jpeg', 5);
END $$;

-- 4. Sea-Doo RXTX 300hp
DO $$
DECLARE
  v_vessel_id uuid;
BEGIN
  INSERT INTO public.vessels (
    owner_profile_id, name, slug, type, description,
    year, length_m, capacity, engines, horsepower, fuel,
    for_sale, for_rent, price_sale_cents, price_day_cents,
    currency, city, state, country,
    contact_name, contact_email, contact_phone, contact_whatsapp,
    highlights, status
  ) VALUES (
    '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
    'Sea-Doo RXTX 300hp',
    'sea-doo-rxtx-300hp',
    'Jet Ski',
    'Jet Ski Sea-Doo RXTX 300hp, top de linha com alta performance.',
    2018, 3.20, 3, 'Rotax 1630 ACE', 300, 'Gasolina',
    true, true, 9000000, 50000,
    'BRL', 'Armação dos Búzios', 'RJ', 'Brasil',
    'MARBANA Exclusive Yachts', 'contato@marbana.com.br', '(22) 99999-9999', '5522999999999',
    '[{"icon":"Zap","title":"Alta Performance","description":"300hp de potência"},{"icon":"Trophy","title":"Top de Linha","description":"Modelo premium Sea-Doo"}]',
    'published'
  ) RETURNING id INTO v_vessel_id;

  INSERT INTO public.vessel_media (vessel_id, type, url, position) VALUES
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (1).jpg', 0),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (2).jpg', 1),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (3).jpg', 2),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (4).jpg', 3),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (5).jpg', 4),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (6).jpg', 5),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (7).jpg', 6),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (8).jpg', 7),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (9).jpg', 8);
END $$;

-- 5. Sea-Doo GTX 170 2024
DO $$
DECLARE
  v_vessel_id uuid;
BEGIN
  INSERT INTO public.vessels (
    owner_profile_id, name, slug, type, description,
    year, length_m, capacity, engines, horsepower, fuel,
    for_sale, for_rent, price_sale_cents, price_day_cents,
    currency, city, state, country,
    contact_name, contact_email, contact_phone, contact_whatsapp,
    highlights, status
  ) VALUES (
    '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
    'Sea-Doo GTX 170 2024',
    'sea-doo-gtx-170-2024',
    'Jet Ski',
    'Jet Ski Sea-Doo GTX 170 2024, zero km com toda garantia de fábrica.',
    2024, 3.28, 3, 'Rotax 1630 ACE', 170, 'Gasolina',
    true, true, 10000000, 60000,
    'BRL', 'Armação dos Búzios', 'RJ', 'Brasil',
    'MARBANA Exclusive Yachts', 'contato@marbana.com.br', '(22) 99999-9999', '5522999999999',
    '[{"icon":"Sparkles","title":"Zero KM","description":"Modelo 2024 com garantia de fábrica"},{"icon":"Shield","title":"Garantia","description":"Garantia total de fábrica"}]',
    'published'
  ) RETURNING id INTO v_vessel_id;

  INSERT INTO public.vessel_media (vessel_id, type, url, position) VALUES
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/seadoo2024/seadoo2024 (1).png', 0),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/seadoo2024/seadoo2024 (2).png', 1),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/seadoo2024/seadoo2024 (3).png', 2),
    (v_vessel_id, 'image', '/BARCOS-IMAGENS/seadoo2024/seadoo2024 (4).png', 3);
END $$;