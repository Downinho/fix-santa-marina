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
  {
    id: "1",
    name: "Infinity XIX",
    model: "Focker 272 GTC",
    slug: "infinity-xix-focker-272-1",
    type: "Lancha",
    year: 2019,
    length: "8.2m",
    price: 42500000, // R$ 425.000,00
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Embarcação premium em estado impecável com apenas 165h de uso. Motorização Mercruiser 6.2 350 HP do ano 2023. Capacidade para 10 + 1 pessoas. Design exclusivo e acabamentos de luxo. Uma verdadeira joia náutica nas águas cristalinas de Búzios.",
    images: [
      "/BARCOS-IMAGENS/INFINITY07.jpg",
      "/BARCOS-IMAGENS/INFINITY01.jpg",
      "/BARCOS-IMAGENS/INFINITY02.jpg",
      "/BARCOS-IMAGENS/INFINITY03.jpg",
      "/BARCOS-IMAGENS/INFINITY04.jpg",
      "/BARCOS-IMAGENS/INFINITY05.jpg",
      "/BARCOS-IMAGENS/INFINITY06.jpg",
      "/BARCOS-IMAGENS/INFINITY08.jpg",
      "/BARCOS-IMAGENS/INFINITY09.jpg",
      "/BARCOS-IMAGENS/INFINITY10.jpg",
      "/BARCOS-IMAGENS/INFINITY11.jpg",
      "/BARCOS-IMAGENS/INFINITY12.jpg",
      "/BARCOS-IMAGENS/INFINITY13.jpg",
    
    ],
    videos: [
      {
        title: "VÍDEO FRIBRAFORT - FOCKER 272 GTC",
        thumbnail: "/BARCOS-IMAGENS/thumbinfinity.png",
        url: "https://www.youtube.com/watch?v=Hbk7-sZGfmg"
      },
      {
        title: "VÍDEO BOMBARCO Focker 272 GTC - Edição especial Black Edition no Raio-X Bombarco",
        thumbnail: "/BARCOS-IMAGENS/bombarco.png", 
        url: "https://www.youtube.com/watch?v=PhsxFX80ey0&pp=ygULRm9ja2VyIDI3MiA%3D"
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
      { label: "Ano Motor", value: "2023" },
      { label: "Horas de uso", value: "165h (baixíssimas)" },
      { label: "Capacidade", value: "10 + 1 pessoas" },
      { label: "Tanque água doce", value: "65L" },
      { label: "Tanque combustível", value: "280L" },
      { label: "Combustível", value: "Gasolina Premium" },
      { label: "Comprimento", value: "8,2 metros" },
      { label: "Boca", value: "2,65 metros" },
      { label: "Calado", value: "0,80 metros" }
    ],
    amenities: [
      "Toalete Premium com descarga elétrica",
      "Sistema de som JBL Audio com subwoofer",
      "Sonda GPS/Chartplotter Garmin 12 polegadas",
      "VHF Marítimo com DSC",
      "Piso em EVA antiderrapante premium",
      "Acabamento do costado em PVC naval e inox 316",
      "Iluminação LED completa com controle remoto",
      "Luz de navegação em LED de alta potência",
      "Guincho elétrico Quick 1000W",
      "Para-brisa frontal de alumínio naval",
      "Plataforma de popa estendida com escada",
      "Vigias laterais com vidro temperado",
      "Kit salvatagem homologado pela Marinha",
      "Flaps automáticos Bennett",
      "Mesa conversível em solarium",
      "Geladeira elétrica 12V/220V",
      "Inversor de energia 2000W",
      "Carregador de bateria inteligente",
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
      },
      {
        icon: "Zap",
        title: "Performance Superior",
        description: "Motor 350HP para máxima potência e economia"
      },
      {
        icon: "Shield",
        title: "Equipamentos Completos",
        description: "Todos os opcionais de fábrica inclusos"
      },
      {
        icon: "CheckCircle",
        title: "Aceita Troca",
        description: "Aceita Troca em Terrenos em Búzios ou Carros de Valores Menores"
      },
    ],
    featured: true
  },
  {
    id: "2",
    name: "Coral Supreme",
    model: "Coral 36HT",
    slug: "coral-supreme-36ht-2",
    type: "Iate",
    year: 2019,
    length: "11.0m",
    price: 95000000, // R$ 950.000,00
    location: "Lagos, Portugal",
    coordinates: { lat: 37.1021, lng: -8.6731 },
    description: "Magnífico iate Coral 36HT em excelente estado de conservação. Modelo 2019 com acabamentos premium e equipamentos completos. Ideal para navegação de luxo com amplo espaço e conforto excepcional.",
    images: [
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-36ht-2019-1.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-36ht-2019-2.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-36ht-2019-3.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-36ht-2019-4.jpg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Coral 36HT" },
      { label: "Ano", value: "2019" },
      { label: "Comprimento", value: "11,0 metros" },
      { label: "Boca", value: "3,50 metros" },
      { label: "Calado", value: "1,20 metros" },
      { label: "Capacidade", value: "12 pessoas" },
      { label: "Cabines", value: "2 cabines" },
      { label: "Motorização", value: "2x Volvo Penta D4-300" },
      { label: "Combustível", value: "Diesel" },
      { label: "Tanque combustível", value: "800L" },
      { label: "Tanque água doce", value: "300L" }
    ],
    amenities: [
      "2 cabines com ar condicionado",
      "2 banheiros completos",
      "Cozinha totalmente equipada",
      "Geladeira e freezer",
      "Sistema de som premium",
      "GPS/Chartplotter",
      "VHF Marítimo",
      "Plataforma de banho",
      "Chuveiro de popa",
      "Toldo bimini",
      "Mesa conversível",
      "Iluminação LED",
      "Tomadas 220V",
      "Inversor de energia"
    ],
    highlights: [
      {
        icon: "Crown",
        title: "Iate Premium",
        description: "Modelo 36HT com acabamentos de luxo"
      },
      {
        icon: "Bed",
        title: "2 Cabines",
        description: "Acomodações confortáveis para pernoite"
      },
      {
        icon: "Waves",
        title: "Performance Excepcional",
        description: "Motores Volvo Penta de alta performance"
      },
      {
        icon: "Shield",
        title: "Estado Impecável",
        description: "Manutenção rigorosa e documentação em dia"
      }
    ],
    featured: true
  },
  {
    id: "3",
    name: "Real Ocean",
    model: "Real 24A",
    slug: "real-ocean-24a-3",
    type: "Lancha",
    year: 2008,
    length: "7.3m",
    price: 18500000, // R$ 185.000,00
    location: "Lagos, Portugal",
    coordinates: { lat: 37.1021, lng: -8.6731 },
    description: "Lancha Real 24A clássica e confiável. Modelo 2008 em ótimo estado, ideal para passeios em família e pescarias. Design atemporal com excelente custo-benefício.",
    images: [
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/real-24a-2008-1.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/real-24a-2008-2.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/real-24a-2008-3.jpg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Real 24A" },
      { label: "Ano", value: "2008" },
      { label: "Comprimento", value: "7,3 metros" },
      { label: "Boca", value: "2,40 metros" },
      { label: "Capacidade", value: "8 pessoas" },
      { label: "Motorização", value: "Yamaha 200HP" },
      { label: "Combustível", value: "Gasolina" },
      { label: "Tanque combustível", value: "220L" },
      { label: "Tanque água doce", value: "50L" }
    ],
    amenities: [
      "Cabine com beliches",
      "Banheiro marinho",
      "Pia com água doce",
      "Geladeira portátil",
      "Sistema de som",
      "GPS básico",
      "VHF portátil",
      "Plataforma de popa",
      "Escada de banho",
      "Toldo removível",
      "Iluminação interna",
      "Kit salvatagem"
    ],
    highlights: [
      {
        icon: "DollarSign",
        title: "Excelente Custo-Benefício",
        description: "Preço acessível com qualidade comprovada"
      },
      {
        icon: "Fish",
        title: "Ideal para Pesca",
        description: "Layout otimizado para pescarias"
      },
      {
        icon: "Users",
        title: "Familiar",
        description: "Perfeita para passeios em família"
      },
      {
        icon: "Wrench",
        title: "Fácil Manutenção",
        description: "Sistema simples e confiável"
      }
    ]
  },
  {
    id: "4",
    name: "Coral Elite",
    model: "Coral 33A",
    slug: "coral-elite-33a-4",
    type: "Iate",
    year: 2020,
    length: "10.0m",
    price: 75000000, // R$ 750.000,00
    location: "Lagos, Portugal",
    coordinates: { lat: 37.1021, lng: -8.6731 },
    description: "Impressionante Coral 33A modelo 2020, praticamente novo. Design moderno com tecnologia de ponta e acabamentos refinados. Uma das embarcações mais desejadas do mercado.",
    images: [
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-33a-2020-1.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-33a-2020-2.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-33a-2020-3.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-33a-2020-4.jpg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Coral 33A" },
      { label: "Ano", value: "2020" },
      { label: "Comprimento", value: "10,0 metros" },
      { label: "Boca", value: "3,20 metros" },
      { label: "Capacidade", value: "10 pessoas" },
      { label: "Cabines", value: "2 cabines" },
      { label: "Motorização", value: "2x Mercury 200HP" },
      { label: "Combustível", value: "Gasolina" },
      { label: "Tanque combustível", value: "600L" }
    ],
    amenities: [
      "2 cabines climatizadas",
      "Banheiro com box",
      "Cozinha compacta",
      "Geladeira elétrica",
      "Sistema multimidia touchscreen",
      "GPS/Plotter 12 polegadas",
      "Radar opcional",
      "Piloto automático",
      "Plataforma hidráulica",
      "Chuveiro de popa quente/frio",
      "Ar condicionado",
      "Gerador"
    ],
    highlights: [
      {
        icon: "Sparkles",
        title: "Praticamente Novo",
        description: "Modelo 2020 com baixíssimas horas"
      },
      {
        icon: "Cpu",
        title: "Tecnologia Avançada",
        description: "Sistemas eletrônicos de última geração"
      },
      {
        icon: "Zap",
        title: "Alta Performance",
        description: "Motores Mercury de alto desempenho"
      },
      {
        icon: "Star",
        title: "Design Premiado",
        description: "Linhas modernas e elegantes"
      }
    ],
    featured: true
  },
  {
    id: "5",
    name: "Coral Classic",
    model: "Coral 26A Full",
    slug: "coral-classic-26a-full-5",
    type: "Lancha",
    year: 2008,
    length: "8.0m",
    price: 28000000, // R$ 280.000,00
    location: "Lagos, Portugal",
    coordinates: { lat: 37.1021, lng: -8.6731 },
    description: "Coral 26A Full 2008 com todos os opcionais de fábrica. Embarcação versátil e robusta, perfeita para diferentes tipos de navegação. Manutenção em dia e pronta para navegar.",
    images: [
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-26a-2008-1.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-26a-2008-2.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-26a-2008-3.jpg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Coral 26A Full" },
      { label: "Ano", value: "2008" },
      { label: "Comprimento", value: "8,0 metros" },
      { label: "Boca", value: "2,60 metros" },
      { label: "Capacidade", value: "8 pessoas" },
      { label: "Motorização", value: "Yamaha 250HP" },
      { label: "Combustível", value: "Gasolina" },
      { label: "Tanque combustível", value: "300L" }
    ],
    amenities: [
      "Cabine com cama de casal",
      "Banheiro completo",
      "Pia com água pressurizada",
      "Geladeira 12V",
      "Som com CD/USB",
      "GPS/Sonar",
      "VHF fixo",
      "Plataforma de popa",
      "Escada telescópica",
      "Toldo completo",
      "Mesa conversível",
      "Luzes de cortesia"
    ],
    highlights: [
      {
        icon: "Package",
        title: "Versão Full",
        description: "Todos os opcionais de fábrica inclusos"
      },
      {
        icon: "Anchor",
        title: "Muito Versátil",
        description: "Ideal para pesca, passeio e pernoite"
      },
      {
        icon: "ThumbsUp",
        title: "Bem Conservada",
        description: "Manutenção preventiva rigorosa"
      },
      {
        icon: "MapPin",
        title: "Pronta para Navegar",
        description: "Documentação e equipamentos em dia"
      }
    ]
  },
  {
    id: "6",
    name: "Coral Navigator",
    model: "Coral 31A",
    slug: "coral-navigator-31a-6",
    type: "Iate",
    year: 2013,
    length: "9.5m",
    price: 55000000, // R$ 550.000,00
    location: "Lagos, Portugal", 
    coordinates: { lat: 37.1021, lng: -8.6731 },
    description: "Coral 31A 2013 em excelente estado. Iate espaçoso com design clássico e equipamentos atualizados. Ideal para navegação de longo curso e estadias confortáveis.",
    images: [
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-31a-2013-1.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-31a-2013-2.jpg",
      "https://nauticalagos.com.br/wp-content/uploads/2024/01/coral-31a-2013-3.jpg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Coral 31A" },
      { label: "Ano", value: "2013" },
      { label: "Comprimento", value: "9,5 metros" },
      { label: "Boca", value: "3,0 metros" },
      { label: "Capacidade", value: "10 pessoas" },
      { label: "Cabines", value: "2 cabines" },
      { label: "Motorização", value: "2x Volvo Penta 225HP" },
      { label: "Combustível", value: "Diesel" },
      { label: "Tanque combustível", value: "500L" }
    ],
    amenities: [
      "2 cabines duplas",
      "Banheiro com ducha separada",
      "Cozinha com forno",
      "Geladeira e congelador",
      "Sistema de entretenimento",
      "GPS/Chartplotter",
      "Radar",
      "VHF com DSC",
      "Windlass elétrico",
      "Plataforma com escada",
      "Bimini e capota",
      "Mesa de cockpit"
    ],
    highlights: [
      {
        icon: "Compass",
        title: "Navegação Oceânica",
        description: "Equipado para travessias longas"
      },
      {
        icon: "Home",
        title: "Muito Espaçoso",
        description: "Layout otimizado para conforto"
      },
      {
        icon: "Settings",
        title: "Bem Equipado",
        description: "Eletrônicos e equipamentos atualizados"
      },
      {
        icon: "Award",
        title: "Design Atemporal",
        description: "Linhas clássicas e elegantes"
      }
    ]
  },
  // Jet Skis da Nautical Lagos
  {
    id: "7",
    name: "Sea Rider",
    model: "Yamaha VX Cruiser",
    slug: "sea-rider-yamaha-vx-cruiser-7",
    type: "Jet Ski",
    year: 2020,
    length: "3.35m",
    price: 5200000, // R$ 52.000,00
    location: "Cabo Frio, RJ",
    coordinates: { lat: -22.8794, lng: -42.0197 },
    description: "Yamaha VX Cruiser em perfeito estado. Jet ski de 3 lugares com excelente estabilidade e performance. Ideal para passeios em família com segurança e diversão.",
    images: [
      "/public/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-08-04-at-15.37.43-r9rwah3zm475jjdf0akevkgewrqed3auma0ioszqa8.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Yamaha VX Cruiser" },
      { label: "Ano", value: "2020" },
      { label: "Comprimento", value: "3,35 metros" },
      { label: "Boca", value: "1,22 metros" },
      { label: "Motor", value: "1050cc 4 tempos" },
      { label: "Capacidade combustível", value: "70L" },
      { label: "Velocidade máxima", value: "65 km/h" },
      { label: "Capacidade", value: "3 pessoas" }
    ],
    amenities: [
      "Sistema de som integrado",
      "Compartimento estanque",
      "Espelho de popa",
      "Sistema de ancoragem",
      "Assento ergonômico",
      "Partida elétrica",
      "Sistema de direção assistida",
      "Indicadores digitais"
    ],
    highlights: [
      {
        icon: "Zap",
        title: "Alta Performance",
        description: "Motor 1050cc de última geração"
      },
      {
        icon: "Users",
        title: "3 Lugares",
        description: "Capacidade para toda a família"
      },
      {
        icon: "Music",
        title: "Sistema de Som",
        description: "Audio premium integrado"
      },
      {
        icon: "Shield",
        title: "Estado Impecável",
        description: "Manutenção rigorosa em dia"
      }
    ]
  },
  {
    id: "8", 
    name: "Wave Master",
    model: "Sea-Doo GTI SE 130",
    slug: "wave-master-seadoo-gti-se-130-8",
    type: "Jet Ski",
    year: 2021,
    length: "3.20m",
    price: 4850000, // R$ 48.500,00
    location: "Lagos, RJ",
    coordinates: { lat: -22.9068, lng: -42.2713 },
    description: "Sea-Doo GTI SE 130 com baixas horas de uso. Ideal para iniciantes e famílias que buscam diversão e segurança nas águas.",
    images: [
      "/public/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-30-at-14.30.44-1-r9j67e65eznmm1jff8tvddcofkwdwjyydf4cyg45ao.jpeg"
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
      { label: "Comprimento", value: "3,20 metros" },
      { label: "Boca", value: "1,17 metros" },
      { label: "Motor", value: "Rotax 1630 ACE" },
      { label: "Capacidade combustível", value: "60L" },
      { label: "Velocidade máxima", value: "62 km/h" },
      { label: "Capacidade", value: "3 pessoas" }
    ],
    amenities: [
      "Sistema iBR (freio e ré)",
      "Modo ECO para economia",
      "Plataforma de embarque",
      "Luvas do mar",
      "Sistema de direção inteligente",
      "Painel digital completo",
      "Sistema anti-roubo",
      "Kit de reboque"
    ],
    highlights: [
      {
        icon: "Leaf",
        title: "Modo ECO",
        description: "Máxima economia de combustível"
      },
      {
        icon: "Brake",
        title: "Sistema iBR", 
        description: "Freio e ré inteligentes"
      },
      {
        icon: "UserCheck",
        title: "Para Iniciantes",
        description: "Fácil pilotagem e controle"
      },
      {
        icon: "Calendar",
        title: "Ano 2021",
        description: "Modelo mais recente disponível"
      }
    ]
  },
  {
    id: "9",
    name: "Thunder Wave",
    model: "Kawasaki STX 160",
    slug: "thunder-wave-kawasaki-stx-160-9", 
    type: "Jet Ski",
    year: 2019,
    length: "3.28m",
    price: 4500000, // R$ 45.000,00
    location: "Búzios, RJ",
    coordinates: { lat: -22.7496, lng: -41.8861 },
    description: "Kawasaki STX 160 com excelente custo-benefício. Jet ski robusto e confiável para toda família, com design esportivo e performance garantida.",
    images: [
      "/public/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-24-at-13.18.09-3-r98kwhhx06jyvmmzx7p9ut3fu92vjg3krja49v4yq8.jpeg"
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
      { label: "Comprimento", value: "3,28 metros" },
      { label: "Boca", value: "1,17 metros" },
      { label: "Motor", value: "1498cc 4 cilindros" },
      { label: "Capacidade combustível", value: "65L" },
      { label: "Velocidade máxima", value: "68 km/h" },
      { label: "Capacidade", value: "3 pessoas" }
    ],
    amenities: [
      "Deck antiderrapante",
      "Sistema de partida elétrica", 
      "Compartimento frontal estanque",
      "Alça de reboque",
      "Espelhos retrovisores",
      "Sistema de trim manual",
      "Indicador de combustível digital",
      "Sistema de segurança DESS"
    ],
    highlights: [
      {
        icon: "DollarSign",
        title: "Custo-Benefício",
        description: "Melhor relação preço x qualidade"
      },
      {
        icon: "Wrench", 
        title: "Robusto",
        description: "Construção sólida e confiável"
      },
      {
        icon: "Zap",
        title: "Motor 4 Cilindros",
        description: "Performance e economia"
      },
      {
        icon: "Users",
        title: "Familiar",
        description: "Perfeito para toda família"
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