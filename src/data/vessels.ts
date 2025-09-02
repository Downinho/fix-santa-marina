export interface Vessel {
  id: string;
  name: string; // Nome de batismo
  model: string; // Modelo da embarcação
  slug: string;
  type: string;
  year: number;
  length: string;
  price: number; // em centavos
  location: string;
  coordinates: { lat: number; lng: number };
  description: string;
  images: string[];
  videos?: Array<{
    title: string;
    thumbnail: string;
    url: string;
  }>;
  owner: {
    name: string;
    rating: number;
    verified: boolean;
    responseTime: string;
  };
  specifications: Array<{
    label: string;
    value: string;
  }>;
  amenities: string[];
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  featured?: boolean;
}

export const vessels: Vessel[] = [
  // Infinity XIX - Embarcação original da Marbana
  {
    id: "1",
    name: "Infinity XIX",
    model: "Focker 272 GTC",
    slug: "infinity-xix-focker-272-1",
    type: "Lancha",
    year: 2019,
    length: "8.2m",
    price: 42500000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Embarcação premium em estado impecável com apenas 165h de uso. Motorização Mercruiser 6.2 350 HP do ano 2023. Capacidade para 10 + 1 pessoas. Design exclusivo e acabamentos de luxo. Uma verdadeira joia náutica nas águas cristalinas de Búzios.",
    images: [
      "/BARCOS-IMAGENS/INFINITY07.jpg",
      "/BARCOS-IMAGENS/INFINITY01.jpg",
      "/BARCOS-IMAGENS/INFINITY02.jpg"
    ],
    videos: [
      {
        title: "VÍDEO FRIBRAFORT - FOCKER 272 GTC",
        thumbnail: "/BARCOS-IMAGENS/thumbinfinity.png",
        url: "https://www.youtube.com/watch?v=Hbk7-sZGfmg"
      }
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Modelo", value: "Focker 272" },
      { label: "Ano Casco", value: "2019" },
      { label: "Motorização", value: "Mercruiser 6.2 350 HP" },
      { label: "Comprimento", value: "8,2 metros" }
    ],
    amenities: [
      "Toalete Premium com descarga elétrica",
      "Sistema de som JBL Audio com subwoofer",
      "Sonda GPS/Chartplotter Garmin 12 polegadas",
      "VHF Marítimo com DSC"
    ],
    highlights: [
      {
        icon: "CheckCircle",
        title: "Estado Impecável",
        description: "Apenas 165h de uso, manutenção rigorosa em dia"
      },
      {
        icon: "Award",
        title: "Acabamentos Premium",
        description: "Design exclusivo com materiais de primeira linha"
      }
    ],
    featured: true
  },
  
  // Embarcações da Nautical Lagos extraídas do HTML
  {
    id: "2",
    name: "Coral 36HT 2019",
    model: "Coral 36HT Full",
    slug: "coral-36ht-2019",
    type: "Iate",
    year: 2019,
    length: "11.0m",
    price: 85000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Magnífico iate Coral 36HT Full 2019 em excelente estado de conservação.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-08-05-at-09.01.18-3-r9t65mdsv8hrwcznh0dttwnol9fxkg8kyozx4wtk9c.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-08-04-at-15.37.43-r9rwah3zm475jjdf0akevkgewrqed3auma0ioszqa8.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-31-at-09.47.45-r9kidhp7sri7k0nyibh0v9zdd7r1eb7x4epd2my85s.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Coral 36HT Full" },
      { label: "Ano", value: "2019" },
      { label: "Comprimento", value: "11,0 metros" },
      { label: "Motorização", value: "Twin Volvo D4 300HP" }
    ],
    amenities: ["2 cabines com ar condicionado", "2 banheiros completos", "Cozinha gourmet", "Sistema de entretenimento"],
    highlights: [
      {
        icon: "Crown",
        title: "Iate Premium",
        description: "Modelo 36HT com acabamentos de luxo"
      }
    ],
    featured: true
  },
  {
    id: "3",
    name: "Real 24A 2008",
    model: "Real 240A",
    slug: "real-24a-2008",
    type: "Lancha",
    year: 2008,
    length: "7.3m",
    price: 16500000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Lancha Real 240A clássica e confiável. Modelo 2008 em ótimo estado.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-08-04-at-15.37.43-r9rwah3zm475jjdf0akevkgewrqed3auma0ioszqa8.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-30-at-14.30.44-1-r9j67e65eznmm1jff8tvddcofkwdwjyydf4cyg45ao.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-24-at-13.18.09-3-r98kwhhx06jyvmmzx7p9ut3fu92vjg3krja49v4yq8.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Real 240A" },
      { label: "Ano", value: "2008" },
      { label: "Comprimento", value: "7,3 metros" },
      { label: "Motorização", value: "Mercury 200HP" }
    ],
    amenities: ["Cabine com beliches", "Banheiro marinho", "Cozinha básica", "Sistema de som"],
    highlights: [
      {
        icon: "DollarSign",
        title: "Excelente Custo-Benefício",
        description: "Preço acessível com qualidade comprovada"
      }
    ]
  },
  {
    id: "4",
    name: "Boston Whaler 280 Outrage",
    model: "Boston Whaler 280 Outrage",
    slug: "boston-whaler-280-outrage-2020",
    type: "Lancha",
    year: 2020,
    length: "8.5m",
    price: 75000000,
    location: "Cabo Frio, RJ",
    coordinates: { lat: -22.8808, lng: -42.0278 },
    description: "Boston Whaler 280 Outrage 2020 - a lenda dos esportivos de pesca. Design icônico, confiabilidade máxima e performance excepcional.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-25-at-15.10.01-r7u8htvbrasu2z1pkhk682orhnjl0ge9ukjcw7079s.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.24-6-r7jibhlhsnjlgkz1h4h9ua5fkeev112egddopg580g.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.24-5-r7jibjh66bm63swb65aiz9ocr65lgf9v4mono02fo0.jpeg"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Modelo", value: "Boston Whaler 280 Outrage" },
      { label: "Ano", value: "2020" },
      { label: "Motorização", value: "Twin Mercury Verado 300HP" },
      { label: "Capacidade", value: "12 pessoas" }
    ],
    amenities: [
      "Console central com eletrônicos Garmin",
      "Sistema de som premium",
      "Tanque de peixe vivo",
      "Porta-varas embutidas"
    ],
    highlights: [
      {
        icon: "Fish",
        title: "Especializada em Pesca",
        description: "Equipamentos profissionais para pesca esportiva"
      },
      {
        icon: "Award",
        title: "Marca Premium",
        description: "Boston Whaler - tradição e qualidade reconhecidas"
      }
    ],
    featured: true
  },
  {
    id: "5", 
    name: "Phantom 500",
    model: "Phantom 500",
    slug: "phantom-500-2018",
    type: "Lancha",
    year: 2018,
    length: "15.2m",
    price: 120000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Phantom 500 2018 - O ápice da engenharia náutica brasileira. Elegância, sofisticação e performance em perfeita harmonia.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.23-5-r7jibb0mgtal7b8ljjmvutt7epbaj5ca3gtaciez80.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.23-2-r7jiberz85fqhr34xl9e4sv1s8srdxr7fzf89m9ej4.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.23-r7jibfptezh0td1rs3o0pamidmo4lmuxs42pqw80cw.jpeg"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true, 
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Modelo", value: "Phantom 500" },
      { label: "Ano", value: "2018" },
      { label: "Motorização", value: "Twin Volvo D6 400HP" },
      { label: "Comprimento", value: "15,2 metros" }
    ],
    amenities: [
      "3 cabines com ar condicionado",
      "2 banheiros completos",
      "Cozinha completa",
      "Sistema de entretenimento premium"
    ],
    highlights: [
      {
        icon: "Crown",
        title: "Iate de Luxo",
        description: "Acabamentos premium e design excepcional"
      },
      {
        icon: "Home",
        title: "Conforto Total",
        description: "Perfeito para viagens prolongadas"
      }
    ],
    featured: true
  },
  {
    id: "6",
    name: "Intermarine 600 Full",
    model: "Intermarine 600 Full", 
    slug: "intermarine-600-full-2017",
    type: "Iate",
    year: 2017,
    length: "18.3m",
    price: 285000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Intermarine 600 Full 2017 - Iate de luxo com tecnologia de ponta e acabamentos impecáveis. A definição de elegância nas águas.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.22-3-r7jib873wb6q8hcp00f05citmjp6w21332utwoj5qo.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.22-2-r7jib94y3580k3bbuitmpuaa7xkk3r4tf7ibdyhrkg.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-19-at-11.13.22-r7jiba2s9z9avp9yp189ac1qtbfxbg8jrc5sv8gde8.jpeg"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Modelo", value: "Intermarine 600 Full" },
      { label: "Ano", value: "2017" }, 
      { label: "Motorização", value: "Twin Caterpillar C18 1015HP" },
      { label: "Comprimento", value: "18,3 metros" }
    ],
    amenities: [
      "4 cabines de luxo com suítes",
      "3 banheiros completos", 
      "Cozinha gourmet completa",
      "Deck expansivo com área de lazer",
      "Sistema de ar condicionado central"
    ],
    highlights: [
      {
        icon: "Crown",
        title: "Super Iate",
        description: "O máximo em luxo e conforto náutico"
      },
      {
        icon: "Zap", 
        title: "Alta Performance",
        description: "Motorização Caterpillar de última geração"
      }
    ],
    featured: true
  },
  {
    id: "7",
    name: "Cranchi E26 Rider",
    model: "Cranchi E26 Rider",
    slug: "cranchi-e26-rider-2021",
    type: "Lancha",
    year: 2021,
    length: "7.99m",
    price: 89000000,
    location: "Cabo Frio, RJ", 
    coordinates: { lat: -22.8808, lng: -42.0278 },
    description: "Cranchi E26 Rider 2021 - Design italiano icônico combinado com tecnologia de ponta. Elegância e performance em perfeita sintonia.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-06-16-at-10.12.08-3-r7ef89rlzcnx5n31k18lhjwczponome1kvgomp0bm8.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-05-28-at-10.06.19-r6h4v3oymdnn8u1eoiyuikr0kt0ijfxv7wwp50ule8.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-05-26-at-10.46.39-5-r6dpc0jmh3xgg7ojjqyjca7boq54fkb84vhtnsl9lc.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Cranchi E26 Rider" },
      { label: "Ano", value: "2021" },
      { label: "Motorização", value: "Volvo Penta V8 350HP" },
      { label: "Comprimento", value: "7,99 metros" }
    ],
    amenities: [
      "Cabine com beliche duplo",
      "Banheiro marinho completo",
      "Cozinha compacta equipada",
      "Sistema de som premium"
    ],
    highlights: [
      {
        icon: "Palette",
        title: "Design Italiano",
        description: "Linhas elegantes e acabamento sofisticado"
      },
      {
        icon: "Zap",
        title: "Performance",
        description: "Motor Volvo de última geração"
      }
    ]
  },
  {
    id: "8",
    name: "Beneteau Flyer 8",
    model: "Beneteau Flyer 8 SpaceDeck",
    slug: "beneteau-flyer-8-spacedeck-2020", 
    type: "Lancha",
    year: 2020,
    length: "8.38m",
    price: 79500000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Beneteau Flyer 8 SpaceDeck 2020 - Inovação francesa em design náutico. Espaços inteligentes e versatilidade incomparável.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-05-23-at-15.27.38-r68td670q208sfe7kz7mkcx9yfrzj6f9ib9gszbq34.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-05-16-at-16.40.56-4-r5wq3aav6v443ks0pl0hglls4ynf5q29rktsql7zdc.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-05-16-at-15.15.59-4-r5wmaabp35klxlrzov50jo6787wi9v6nxht3nqco9c.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Beneteau Flyer 8 SpaceDeck" },
      { label: "Ano", value: "2020" },
      { label: "Motorização", value: "Mercury V8 300HP" },
      { label: "Comprimento", value: "8,38 metros" }
    ],
    amenities: [
      "Deck modular conversível", 
      "Cabine com cama de casal",
      "Cozinha externa equipada",
      "Solarium expansivo"
    ],
    highlights: [
      {
        icon: "Maximize",
        title: "SpaceDeck Innovation",
        description: "Deck modular que maximiza o espaço"
      },
      {
        icon: "Sun",
        title: "Área de Lazer",
        description: "Perfeita para entretenimento e relaxamento"
      }
    ]
  },
  {
    id: "9",
    name: "Azimut 40",
    model: "Azimut 40 Fly",
    slug: "azimut-40-fly-2016",
    type: "Iate",
    year: 2016,
    length: "12.19m",
    price: 145000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Azimut 40 Fly 2016 - Elegância italiana em sua forma mais pura. Flybridge espaçoso e acabamentos de luxo definem este magnífico iate.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-05-16-at-14.21.53-3-r5wko9qb9a5hc21sgsbznb7za1ux6ev3ac87awdgb4.jpeg",
      "/site para rerência/nauticalagos.com.br_files/Novo-Projeto-31.png",
      "/site para rerência/nauticalagos.com.br_files/Captura-de-Tela-2025-06-06-as-16.17.08-r6x8seeoif3pz6lkxcqborgxmpgzaud58xyjm7vets.png"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Modelo", value: "Azimut 40 Fly" },
      { label: "Ano", value: "2016" },
      { label: "Motorização", value: "Twin Volvo D6 370HP" },
      { label: "Comprimento", value: "12,19 metros" }
    ],
    amenities: [
      "2 cabines com ar condicionado",
      "2 banheiros completos",
      "Flybridge com comando superior",
      "Cozinha gourmet equipada"
    ],
    highlights: [
      {
        icon: "Crown",
        title: "Azimut Premium",
        description: "Tradição italiana em iates de luxo"
      },
      {
        icon: "Navigation",
        title: "Flybridge",
        description: "Comando duplo para máxima versatilidade"
      }
    ],
    featured: true
  },
  {
    id: "10",
    name: "Triton 350",
    model: "Triton 350 HT",
    slug: "triton-350-ht-2019",
    type: "Veleiro",
    year: 2019,
    length: "10.67m",
    price: 35000000,
    location: "Cabo Frio, RJ",
    coordinates: { lat: -22.8808, lng: -42.0278 },
    description: "Triton 350 HT 2019 - Veleiro brasileiro com tecnologia avançada. Ideal para navegação costeira e oceânica com conforto e segurança.",
    images: [
      "/BARCOS-IMAGENS/INFINITY05.jpg",
      "/BARCOS-IMAGENS/INFINITY06.jpg", 
      "/BARCOS-IMAGENS/INFINITY08.jpg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Triton 350 HT" },
      { label: "Ano", value: "2019" },
      { label: "Motor Auxiliar", value: "Yanmar 30HP" },
      { label: "Comprimento", value: "10,67 metros" }
    ],
    amenities: [
      "2 cabines duplas",
      "Banheiro marinho completo",
      "Cozinha náutica equipada",
      "Velas em perfeito estado"
    ],
    highlights: [
      {
        icon: "Wind",
        title: "Navegação à Vela",
        description: "Experiência autêntica de velejamento"
      },
      {
        icon: "Shield",
        title: "Segurança",
        description: "Equipado com todos os itens de segurança"
      }
    ]
  },
  {
    id: "11",
    name: "Catamaran Lagoon 380", 
    model: "Lagoon 380",
    slug: "catamaran-lagoon-380-2015",
    type: "Catamarã",
    year: 2015,
    length: "11.55m",
    price: 195000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Lagoon 380 2015 - Catamarã francês reconhecido mundialmente. Estabilidade excepcional e espaços generosos para navegação de luxo.",
    images: [
      "/BARCOS-IMAGENS/INFINITY09.jpg",
      "/BARCOS-IMAGENS/INFINITY10.jpg",
      "/BARCOS-IMAGENS/INFINITY11.jpg"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Modelo", value: "Lagoon 380" },
      { label: "Ano", value: "2015" },
      { label: "Motores", value: "Twin Yanmar 29HP" },
      { label: "Comprimento", value: "11,55 metros" }
    ],
    amenities: [
      "4 cabines duplas com banheiro",
      "Salão panorâmico amplo",
      "Cockpit e flybridge espaçosos",
      "Cozinha gourmet completa"
    ],
    highlights: [
      {
        icon: "Anchor",
        title: "Estabilidade Superior",
        description: "Casco duplo para máximo conforto"
      },
      {
        icon: "Users",
        title: "Capacidade Ampla",
        description: "Ideal para grupos e famílias grandes"
      }
    ],
    featured: true
  },
  // Jet Skis
  {
    id: "12",
    name: "Sea-Doo GTI SE 130",
    model: "Sea-Doo GTI SE 130",
    slug: "seadoo-gti-se-130-2021",
    type: "Jet Ski",
    year: 2021,
    length: "3.20m",
    price: 4850000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Sea-Doo GTI SE 130 2021 com baixas horas de uso.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-30-at-14.30.44-1-r9j67e65eznmm1jff8tvddcofkwdwjyydf4cyg45ao.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-24-at-13.18.09-3-r98kwhhx06jyvmmzx7p9ut3fu92vjg3krja49v4yq8.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-18-at-14.22.03-3-1-r8y8407kl0xg0umv3my96x3uuyx2i4q1abqbsntfps.jpeg"
    ],
    owner: {
      name: "Nautical Lagos", 
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Sea-Doo GTI SE 130" },
      { label: "Ano", value: "2021" },
      { label: "Potência", value: "130HP" },
      { label: "Capacidade", value: "3 pessoas" }
    ],
    amenities: ["Sistema iBR (freio e ré)", "Modo ECO para economia", "Compartimento de armazenamento", "Sistema de áudio"],
    highlights: [
      {
        icon: "Leaf",
        title: "Modo ECO",
        description: "Máxima economia de combustível"
      }
    ]
  },
  {
    id: "13",
    name: "Kawasaki STX 160",
    model: "Kawasaki STX 160",
    slug: "kawasaki-stx-160-2019", 
    type: "Jet Ski",
    year: 2019,
    length: "3.28m",
    price: 4500000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Kawasaki STX 160 2019 com excelente custo-benefício.",
    images: [
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-24-at-13.18.09-3-r98kwhhx06jyvmmzx7p9ut3fu92vjg3krja49v4yq8.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-18-at-14.22.03-3-1-r8y8407kl0xg0umv3my96x3uuyx2i4q1abqbsntfps.jpeg",
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-07-at-11.33.54-r8f1pf2kdqvf9nb5flspkdz1ey0jssqgfjh5txymkw.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8, 
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Kawasaki STX 160" },
      { label: "Ano", value: "2019" },
      { label: "Potência", value: "160HP" },
      { label: "Capacidade", value: "3 pessoas" }
    ],
    amenities: ["Deck antiderrapante", "Sistema de partida elétrica", "Compartimento de armazenamento", "Alça de reboque"],
    highlights: [
      {
        icon: "DollarSign",
        title: "Custo-Benefício",
        description: "Melhor relação preço x qualidade"
      }
    ]
  }
];

// Função para buscar embarcação por slug
export const getVesselBySlug = (slug: string): Vessel | undefined => {
  return vessels.find(vessel => vessel.slug === slug);
};

// Função para buscar embarcações por tipo
export const getVesselsByType = (type: string): Vessel[] => {
  if (type === 'Todos') return vessels;
  return vessels.filter(vessel => vessel.type === type);
};

// Função para buscar embarcações em destaque
export const getFeaturedVessels = (limit: number = 3): Vessel[] => {
  return vessels.filter(vessel => vessel.featured).slice(0, limit);
};