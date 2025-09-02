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
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-08-05-at-09.01.18-3-r9t65mdsv8hrwcznh0dttwnol9fxkg8kyozx4wtk9c.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Coral 36HT Full" },
      { label: "Ano", value: "2019" }
    ],
    amenities: ["2 cabines com ar condicionado", "2 banheiros completos"],
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
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-08-04-at-15.37.43-r9rwah3zm475jjdf0akevkgewrqed3auma0ioszqa8.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Real 240A" },
      { label: "Ano", value: "2008" }
    ],
    amenities: ["Cabine com beliches", "Banheiro marinho"],
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
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-30-at-14.30.44-1-r9j67e65eznmm1jff8tvddcofkwdwjyydf4cyg45ao.jpeg"
    ],
    owner: {
      name: "Nautical Lagos", 
      rating: 4.8,
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Sea-Doo GTI SE 130" },
      { label: "Ano", value: "2021" }
    ],
    amenities: ["Sistema iBR (freio e ré)", "Modo ECO para economia"],
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
      "/site para rerência/nauticalagos.com.br_files/WhatsApp-Image-2025-07-24-at-13.18.09-3-r98kwhhx06jyvmmzx7p9ut3fu92vjg3krja49v4yq8.jpeg"
    ],
    owner: {
      name: "Nautical Lagos",
      rating: 4.8, 
      verified: true,
      responseTime: "Responde em até 1 hora"
    },
    specifications: [
      { label: "Modelo", value: "Kawasaki STX 160" },
      { label: "Ano", value: "2019" }
    ],
    amenities: ["Deck antiderrapante", "Sistema de partida elétrica"],
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