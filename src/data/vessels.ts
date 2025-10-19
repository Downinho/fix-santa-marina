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
      "/BARCOS-IMAGENS/INFINITY02.jpg",
      "/BARCOS-IMAGENS/INFINITY03.jpg",
      "/BARCOS-IMAGENS/INFINITY04.jpg",
      "/BARCOS-IMAGENS/INFINITY05.jpg",
      "/BARCOS-IMAGENS/INFINITY06.jpg",
      "/BARCOS-IMAGENS/INFINITY07.jpg",
      "/BARCOS-IMAGENS/INFINITY08.jpg",
      "/BARCOS-IMAGENS/INFINITY09.jpg",
      "/BARCOS-IMAGENS/INFINITY10.jpg",
      "/BARCOS-IMAGENS/INFINITY11.jpg",
      "/BARCOS-IMAGENS/INFINITY12.jpg",
      "/BARCOS-IMAGENS/INFINITY13.jpg"
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
  
  // Embarcações da Nautica Lagos extraídas do HTML
  {
    id: "2",
    name: "Coral 36HT 2019",
    model: "Coral 36HT Full",
    slug: "coral-36ht-2019",
    type: "Lancha",
    year: 2019,
    length: "11.0m",
    price: 85000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Magnífico iate Coral 36HT Full 2019 em excelente estado de conservação.",
    images: [
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (1).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (2).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (3).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (4).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (5).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (6).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (7).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (8).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (9).jpg",
      "/BARCOS-IMAGENS/coral-36ht/coral-36ht (10).jpg",
    ],
    owner: {
      name: "Nautica Lagos",
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
    price: 12000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Lancha Real 240A clássica e confiável. Modelo 2008 em ótimo estado.",
    images: [
      "/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (1).jpeg",
      "/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (2).jpeg",
      "/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (3).jpeg",
      "/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (4).jpeg",
      "/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (5).jpeg",
      "/BARCOS-IMAGENS/real-24a-2008/real-24a-2008 (6).jpeg",  
    ],
    owner: {
      name: "Nautica Lagos",
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

  // Jet Skis
  {
    id: "12",
    name: "Sea-Doo RXTX 300hp",
    model: "Sea-Doo RXTX 300hp",
    slug: "seadoo-gti-se-130-2018",
    type: "Jet Ski",
    year: 2018,
    length: "3.20m",
    price: 9000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Sea-Doo RXTX 300hp 2021 com 222h de uso.",
    images: [
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (1).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (2).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (3).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (4).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (5).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (6).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (7).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (8).jpg",
      "/BARCOS-IMAGENS/jetski-seadoo-rxtx-300hp/jetski-seadoo-rxtx-300hp (9).jpg",


    ],
    owner: {
      name: "Nautica Lagos", 
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Sea-Doo RXTX 300hp" },
      { label: "Ano", value: "2018" },
      { label: "Potência", value: "300HP" },
      { label: "Capacidade", value: "3 pessoas" }
    ],
    amenities: ["Sistema iBR (freio e ré)", "Painel Digial ", "Compartimento de armazenamento", "Sistema de áudio"],
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
    name: "Seadoo 2024",
    model: "Seadoo 2024",
    slug: "Seadoo-2024", 
    type: "Jet Ski",
    year: 2024,
    length: "3.28m",
    price: 10000000,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Kawasaki STX 160 2019 com excelente custo-benefício. Apenas 89h de uso.",
    images: [
      "/BARCOS-IMAGENS/seadoo2024/seadoo2024 (1).png",
      "/BARCOS-IMAGENS/seadoo2024/seadoo2024 (2).png",
      "/BARCOS-IMAGENS/seadoo2024/seadoo2024 (3).png",
      "/BARCOS-IMAGENS/seadoo2024/seadoo2024 (4).png"      
    ],
    owner: {
      name: "Nautica Lagos",
      rating: 4.8, 
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Seadoo 2024" },
      { label: "Ano", value: "2024" },
      { label: "Potência", value: "130HP" },
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