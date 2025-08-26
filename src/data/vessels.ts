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
    model: "Focker 272",
    slug: "infinity-xix-focker-272-1",
    type: "Lancha",
    year: 2023,
    length: "8.2m",
    price: 42500000, // R$ 425.000,00
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    description: "Embarcação premium em estado impecável com apenas 85h de uso. Motorização Mercruiser 6.2 350 HP do ano 2023. Capacidade para 10 + 1 pessoas. Design exclusivo e acabamentos de luxo. Uma verdadeira joia náutica nas águas cristalinas de Búzios.",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600", 
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    videos: [
      {
        title: "Tour Virtual Infinity XIX",
        thumbnail: "/api/placeholder/400/300",
        url: "/videos/infinity-xix-tour.mp4"
      },
      {
        title: "Performance em Ação",
        thumbnail: "/api/placeholder/400/300", 
        url: "/videos/infinity-xix-performance.mp4"
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
      { label: "Ano Casco", value: "2023" },
      { label: "Motorização", value: "Mercruiser 6.2 350 HP" },
      { label: "Ano Motor", value: "2023" },
      { label: "Horas de uso", value: "85h (baixíssimas)" },
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
      "Sistema de som JL Audio com subwoofer",
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
      "Chuveiro de popa com água quente",
      "Toldo elétrico retrátil"
    ],
    highlights: [
      {
        icon: "CheckCircle",
        title: "Estado Impecável",
        description: "Apenas 85h de uso, manutenção rigorosa em dia"
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
      }
    ],
    featured: true
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