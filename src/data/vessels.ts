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
    name: "Maré Alta",
    model: "Focker 272 GTC",
    slug: "mare-alta-focker-272-gtc-1",
    type: "Lancha",
    year: 2019,
    length: "8.2m",
    price: 45000000, // R$ 450.000,00
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Embarcação em excelente estado de conservação com apenas 170h de uso. Motorização Mercruiser 6.2 300 HP do ano 2019. Capacidade para 9 + 1 pessoas. 100% de procedência comprovada.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618830-fcd0c89db42a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566024287286-457247b70310?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719366274-e8f044a10dff?w=800&h=600&fit=crop"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Focker 272 GTC" },
      { label: "Ano Casco", value: "2019" },
      { label: "Motorização", value: "Mercruiser 6.2 300 HP" },
      { label: "Ano Motor", value: "2019" },
      { label: "Horas de uso", value: "170h (aproximadas)" },
      { label: "Capacidade", value: "9 + 1 pessoas" },
      { label: "Tanque água doce", value: "55L" },
      { label: "Tanque combustível", value: "240L" },
      { label: "Combustível", value: "Gasolina" },
      { label: "Comprimento", value: "8,2 metros" }
    ],
    amenities: [
      "Toalete",
      "Som",
      "Sonda Potente",
      "VHF",
      "Piso EVA",
      "Acabamento do costado em PVC e inox",
      "Luz de cortesia",
      "Luz de navegação em LED",
      "Guincho elétrico",
      "Para-brisa frontal de alumínio com laterais em fibra",
      "Plataforma de popa estendida",
      "Vigias laterais",
      "Salvatagem Completa",
      "Flaps"
    ],
    highlights: [
      {
        icon: "CheckCircle",
        title: "100% Procedência",
        description: "Documentação completa e procedência totalmente verificada"
      },
      {
        icon: "Clock",
        title: "Baixas Horas",
        description: "Apenas 170h de uso, em excelente estado de conservação"
      },
      {
        icon: "Award",
        title: "Aceita Troca",
        description: "Estuda possibilidade de troca por carro ou terreno em Búzios"
      },
      {
        icon: "Shield",
        title: "Equipamentos Completos",
        description: "Todos os equipamentos de segurança e navegação inclusos"
      }
    ],
    featured: true
  },
  {
    id: "2",
    name: "Brisa do Mar",
    model: "Azimut 50 Fly",
    slug: "brisa-do-mar-azimut-50-fly-2",
    type: "Iate",
    year: 2021,
    length: "15.2m",
    price: 180000000, // R$ 1.800.000,00
    location: "Marina Porto Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Iate de luxo italiano com design elegante e performance excepcional. Perfeito para navegação costeira e eventos exclusivos. Equipado com o que há de mais moderno em tecnologia náutica.",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544737151-6e4b9d398b6a?w=800&h=600&fit=crop"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Comprimento", value: "15,2 metros" },
      { label: "Boca", value: "4,38 metros" },
      { label: "Calado", value: "1,20 metros" },
      { label: "Motorização", value: "2x Volvo Penta D6-400" },
      { label: "Potência", value: "2x 400 HP" },
      { label: "Velocidade Máx.", value: "32 nós" },
      { label: "Capacidade", value: "12 pessoas" },
      { label: "Cabines", value: "3 suítes" },
      { label: "Combustível", value: "1.300 litros" },
      { label: "Água", value: "400 litros" }
    ],
    amenities: [
      "Ar condicionado central",
      "Gerador 13kW",
      "Bow thruster",
      "Piloto automático",
      "GPS Chartplotter",
      "Radar",
      "Sistema de som Bose",
      "TV LED 55'' salão",
      "TV LED 32'' cabines",
      "Máquina de gelo",
      "Micro-ondas",
      "Frigobares",
      "Deck de madeira teca"
    ],
    highlights: [
      {
        icon: "Award",
        title: "Design Italiano",
        description: "Elegância e sofisticação assinada pelos mestres italianos"
      },
      {
        icon: "Zap",
        title: "Performance Superior",
        description: "Dupla motorização Volvo Penta de 400HP cada"
      },
      {
        icon: "Shield",
        title: "Tecnologia Avançada",
        description: "Equipamentos de navegação de última geração"
      },
      {
        icon: "CheckCircle",
        title: "Estado Impecável",
        description: "Manutenção rigorosa e revisões em dia"
      }
    ]
  },
  {
    id: "3",
    name: "Vento Azul",
    model: "Sea Ray 350 SLX",
    slug: "vento-azul-sea-ray-350-slx-3",
    type: "Lancha",
    year: 2020,
    length: "10.7m",
    price: 89000000, // R$ 890.000,00
    location: "Cabo Frio, RJ",
    coordinates: { lat: -22.8793, lng: -42.0278 },
    description: "Lancha esportiva americana com design arrojado e performance incomparável. Ideal para passeios diários e fins de semana prolongados. Conforto e elegância em cada detalhe.",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593642632421-1fdd5d3e4e73?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566024287286-457247b70310?w=800&h=600&fit=crop"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 4.9,
      verified: true,
      responseTime: "Responde em até 2 horas"
    },
    specifications: [
      { label: "Comprimento", value: "10,7 metros" },
      { label: "Boca", value: "3,20 metros" },
      { label: "Calado", value: "0,90 metros" },
      { label: "Motorização", value: "2x MerCruiser 6.2L" },
      { label: "Potência", value: "2x 300 HP" },
      { label: "Velocidade Máx.", value: "50 nós" },
      { label: "Capacidade", value: "10 pessoas" },
      { label: "Combustível", value: "500 litros" },
      { label: "Água", value: "75 litros" }
    ],
    amenities: [
      "Cockpit social amplo",
      "Solarium de proa",
      "Cabine com beliches",
      "Banheiro completo",
      "Geladeira elétrica",
      "Churrasqueira inox",
      "Sistema de som premium",
      "Luzes LED ambientação",
      "Plataforma hidráulica",
      "Chuveiro de popa",
      "Toldo elétrico",
      "Mesa conversível"
    ],
    highlights: [
      {
        icon: "Zap",
        title: "Performance Americana",
        description: "Dupla motorização MerCruiser para máxima potência"
      },
      {
        icon: "CheckCircle",
        title: "Versatilidade Total",
        description: "Perfeita para day use e pernoites"
      },
      {
        icon: "Award",
        title: "Design Premiado",
        description: "Reconhecida internacionalmente pelo design inovador"
      },
      {
        icon: "Shield",
        title: "Segurança Máxima",
        description: "Equipamentos de segurança certificados"
      }
    ]
  },
  {
    id: "4",
    name: "Maré de Sonhos",
    model: "Lagoon 42 Catamaran",
    slug: "mare-de-sonhos-lagoon-42-catamaran-4",
    type: "Catamarã",
    year: 2022,
    length: "12.8m",
    price: 210000000, // R$ 2.100.000,00
    location: "Marina dos Pescadores, Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Catamarã francês de última geração com espaços amplos e estabilidade incomparável. Perfeito para cruzeiros familiares e eventos corporativos. Design funcional e elegante.",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618830-fcd0c89db42a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Comprimento", value: "12,8 metros" },
      { label: "Boca", value: "7,7 metros" },
      { label: "Calado", value: "1,35 metros" },
      { label: "Motorização", value: "2x Yanmar 57HP" },
      { label: "Capacidade", value: "12 pessoas navegação" },
      { label: "Cabines", value: "4 cabines duplas" },
      { label: "Banheiros", value: "4 banheiros" },
      { label: "Combustível", value: "400 litros" },
      { label: "Água", value: "600 litros" },
      { label: "Velas", value: "Vela maior + genoa"  }
    ],
    amenities: [
      "Salão panorâmico",
      "Cozinha completa com forno",
      "Geladeira e freezer",
      "Ar condicionado",
      "Gerador",
      "Inversor 12V/220V",
      "Painel solar",
      "Dessalinizador",
      "Piloto automático",
      "GPS/Chartplotter",
      "Rádio VHF",
      "Trampolim de proa"
    ],
    highlights: [
      {
        icon: "Award",
        title: "Estabilidade Única",
        description: "Design de duplo casco elimina praticamente o balanço"
      },
      {
        icon: "CheckCircle",
        title: "Espaços Generosos",
        description: "Áreas amplas para até 12 pessoas confortavelmente"
      },
      {
        icon: "Zap",
        title: "Autonomia Total",
        description: "Equipado para navegação oceânica de longa distância"
      },
      {
        icon: "Shield",
        title: "Segurança Premium",
        description: "Redundância de sistemas e equipamentos de segurança"
      }
    ]
  },
  {
    id: "5",
    name: "Adrenalina",
    model: "Sea-Doo GTX Limited 300",
    slug: "adrenalina-sea-doo-gtx-limited-300-5",
    type: "Jet Ski",
    year: 2023,
    length: "3.3m",
    price: 8500000, // R$ 85.000,00
    location: "Marina Porto Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "O mais avançado jet ski da categoria premium. Sistema inteligente de controle de estabilidade, acabamento em fibra de carbono e performance de elite. Uma máquina de adrenalina pura.",
    images: [
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593642534026-fac762b1f8b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566024287286-457247b70310?w=800&h=600&fit=crop"
    ],
    owner: {
      name: "MARBANA Exclusive Yachts",
      rating: 5.0,
      verified: true,
      responseTime: "Responde em até 30 minutos"
    },
    specifications: [
      { label: "Comprimento", value: "3,3 metros" },
      { label: "Largura", value: "1,22 metros" },
      { label: "Peso seco", value: "385 kg" },
      { label: "Motor", value: "Rotax 1630 ACE" },
      { label: "Potência", value: "300 HP" },
      { label: "Velocidade Máx.", value: "100 km/h" },
      { label: "Capacidade", value: "3 pessoas" },
      { label: "Combustível", value: "70 litros" },
      { label: "Sistema", value: "iBR + iTC" }
    ],
    amenities: [
      "Sistema iBR (freio e ré)",
      "iTC (controle de tração)",
      "Display digital colorido",
      "GPS integrado",
      "Sistema de som BRP",
      "Bluetooth conectividade",
      "Acabamento fibra carbono",
      "Assentos premium",
      "Compartimento estanque",
      "Escada telescópica",
      "Kit de segurança",
      "Capa protetora"
    ],
    highlights: [
      {
        icon: "Zap",
        title: "Performance Extrema",
        description: "300HP de potência pura com aceleração explosiva"
      },
      {
        icon: "Award",
        title: "Tecnologia Avançada",
        description: "Sistema inteligente iBR e iTC para controle total"
      },
      {
        icon: "CheckCircle",
        title: "Zero Quilômetro",
        description: "Máquina nova, nunca utilizada, com garantia total"
      },
      {
        icon: "Shield",
        title: "Segurança Inteligente",
        description: "Sistemas eletrônicos de segurança de última geração"
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