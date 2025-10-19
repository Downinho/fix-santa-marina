-- Popular banco de dados com embarcações existentes
-- Assumindo que o usuário admin é o proprietário (ajustar o UUID conforme necessário)

-- Infinity XIX - Embarcação original da Marbana
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents, price_day_cents,
  capacity, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Infinity XIX',
  'infinity-xix',
  'lancha',
  2019,
  8.2,
  'Embarcação premium em estado impecável com apenas 165h de uso. Motorização Mercruiser 6.2 350 HP do ano 2023. Capacidade para 10 + 1 pessoas. Design exclusivo e acabamentos de luxo.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  42500000,
  300000,
  11,
  'Mercruiser 6.2',
  350,
  'published',
  now(),
  now()
);

-- Coral 36HT 2019
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  cabins, engines, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Coral 36HT 2019',
  'coral-36ht-2019',
  'iate',
  2019,
  11.0,
  'Magnífico iate Coral 36HT Full 2019 em excelente estado de conservação.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  85000000,
  2,
  'Twin Volvo D4 300HP',
  'published',
  now(),
  now()
);

-- Real 24A 2008
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Real 24A 2008',
  'real-24a-2008',
  'lancha',
  2008,
  7.3,
  'Lancha Real 240A clássica e confiável. Modelo 2008 em ótimo estado.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  16500000,
  'Mercury 200HP',
  200,
  'published',
  now(),
  now()
);

-- Boston Whaler 280 Outrage
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  capacity, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Boston Whaler 280 Outrage',
  'boston-whaler-280-outrage',
  'lancha',
  2020,
  8.5,
  'Boston Whaler 280 Outrage 2020 - a lenda dos esportivos de pesca. Design icônico, confiabilidade máxima e performance excepcional.',
  'Cabo Frio',
  'RJ',
  'Brasil',
  true,
  true,
  75000000,
  12,
  'Twin Mercury Verado 300HP',
  600,
  'published',
  now(),
  now()
);

-- Phantom 500
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  cabins, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Phantom 500',
  'phantom-500',
  'lancha',
  2018,
  15.2,
  'Phantom 500 2018 - O ápice da engenharia náutica brasileira. Elegância, sofisticação e performance em perfeita harmonia.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  120000000,
  3,
  'Twin Volvo D6 400HP',
  800,
  'published',
  now(),
  now()
);

-- Intermarine 600 Full
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  cabins, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Intermarine 600 Full',
  'intermarine-600-full',
  'iate',
  2017,
  18.3,
  'Intermarine 600 Full 2017 - Iate de luxo com tecnologia de ponta e acabamentos impecáveis. A definição de elegância nas águas.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  285000000,
  4,
  'Twin Caterpillar C18 1015HP',
  2030,
  'published',
  now(),
  now()
);

-- Cranchi E26 Rider
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Cranchi E26 Rider',
  'cranchi-e26-rider',
  'lancha',
  2021,
  7.99,
  'Cranchi E26 Rider 2021 - Design italiano icônico combinado com tecnologia de ponta. Elegância e performance em perfeita sintonia.',
  'Cabo Frio',
  'RJ',
  'Brasil',
  true,
  true,
  89000000,
  'Volvo Penta V8 350HP',
  350,
  'published',
  now(),
  now()
);

-- Beneteau Flyer 8
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Beneteau Flyer 8',
  'beneteau-flyer-8',
  'lancha',
  2020,
  8.38,
  'Beneteau Flyer 8 SpaceDeck 2020 - Inovação francesa em design náutico. Espaços inteligentes e versatilidade incomparável.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  79500000,
  'Mercury V8 300HP',
  300,
  'published',
  now(),
  now()
);

-- Azimut 40
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  cabins, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Azimut 40',
  'azimut-40',
  'iate',
  2016,
  12.19,
  'Azimut 40 Fly 2016 - Elegância italiana em sua forma mais pura. Flybridge espaçoso e acabamentos de luxo definem este magnífico iate.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  145000000,
  2,
  'Twin Volvo D6 370HP',
  740,
  'published',
  now(),
  now()
);

-- Triton 350
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  cabins, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Triton 350',
  'triton-350',
  'veleiro',
  2019,
  10.67,
  'Triton 350 HT 2019 - Veleiro brasileiro com tecnologia avançada. Ideal para navegação costeira e oceânica com conforto e segurança.',
  'Cabo Frio',
  'RJ',
  'Brasil',
  true,
  true,
  35000000,
  2,
  'Yanmar 30HP',
  30,
  'published',
  now(),
  now()
);

-- Catamaran Lagoon 380
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_sale_cents,
  cabins, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Catamaran Lagoon 380',
  'catamaran-lagoon-380',
  'catamaran',
  2018,
  11.55,
  'Lagoon 380 2018 - Catamarã francês com design revolucionário. Estabilidade excepcional e espaços amplos para navegação em família.',
  'Armação dos Búzios',
  'RJ',
  'Brasil',
  true,
  true,
  195000000,
  4,
  'Twin Yanmar 29HP',
  58,
  'published',
  now(),
  now()
);

-- Sea-Doo GTI SE 130
INSERT INTO vessels (
  id, owner_profile_id, name, slug, type, year, length_m, description,
  city, state, country, for_sale, for_rent, price_hour_cents, price_day_cents,
  capacity, engines, horsepower, status, created_at, updated_at
) VALUES (
  gen_random_uuid(),
  '965e67ab-8c7e-4bf5-8d46-95db4fa0161f',
  'Sea-Doo GTI SE 130',
  'sea-doo-gti-se-130',
  'jetski',
  2022,
  3.3,
  'Sea-Doo GTI SE 130 2022 - Jet ski de última geração. Diversão garantida com tecnologia e segurança.',
  'Cabo Frio',
  'RJ',
  'Brasil',
  false,
  true,
  80000,
  150000,
  3,
  'Rotax 1630 ACE',
  130,
  'published',
  now(),
  now()
);