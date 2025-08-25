export interface Sailor {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  experience: number; // anos
  location: string;
  coordinates: { lat: number; lng: number };
  bio: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  hourlyRate: number; // em centavos
  dayRate: number; // em centavos
  languages: string[];
  certifications: string[];
  services: string[];
  availability: string;
  images: string[];
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  featured?: boolean;
}

export const sailors: Sailor[] = [
  {
    id: "1",
    name: "Capitão Roberto Silva",
    slug: "capitao-roberto-silva-1",
    specialty: "Navegação Oceânica",
    experience: 25,
    location: "Armação dos Búzios, RJ",
    coordinates: { lat: -22.7496736, lng: -41.886076 },
    bio: "Marinheiro com mais de 25 anos de experiência em navegação oceânica e costeira. Especialista em grandes iates e navegação de longa distância. Formado pela Escola Naval e com passagem por diversas embarcações comerciais e de recreio.",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviewsCount: 127,
    hourlyRate: 15000, // R$ 150,00/hora
    dayRate: 80000, // R$ 800,00/dia
    languages: ["Português", "Inglês", "Espanhol"],
    certifications: [
      "Capitão de Mar e Guerra",
      "Certificado STCW",
      "Curso de Sobrevivência no Mar",
      "Primeiros Socorros Marítimos",
      "Certificação MCA"
    ],
    services: [
      "Navegação oceânica",
      "Comandante de iate",
      "Instrução náutica",
      "Consultoria marítima",
      "Inspeções técnicas",
      "Transporte de embarcações"
    ],
    availability: "Disponível para navegações de qualquer duração",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    ],
    highlights: [
      {
        icon: "Award",
        title: "25 Anos de Experiência",
        description: "Mais de duas décadas navegando pelos mares do mundo"
      },
      {
        icon: "Shield",
        title: "Certificações Internacionais",
        description: "Habilitado para navegação comercial e recreativa"
      },
      {
        icon: "CheckCircle",
        title: "100% Confiável",
        description: "Histórico impecável de segurança e profissionalismo"
      },
      {
        icon: "Zap",
        title: "Especialista em Grandes Iates",
        description: "Experiência com embarcações de até 100 pés"
      }
    ],
    featured: true
  },
  {
    id: "2",
    name: "Marina Costa",
    slug: "marina-costa-2",
    specialty: "Navegação Costeira",
    experience: 15,
    location: "Cabo Frio, RJ",
    coordinates: { lat: -22.8793, lng: -42.0278 },
    bio: "Marinheira experiente especializada em navegação costeira e turismo náutico. Conhece profundamente as águas da Região dos Lagos e oferece experiências únicas aos seus clientes. Formada em Turismo Náutico com especialização em ecoturismo marinho.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviewsCount: 89,
    hourlyRate: 12000, // R$ 120,00/hora
    dayRate: 65000, // R$ 650,00/dia
    languages: ["Português", "Inglês", "Francês"],
    certifications: [
      "Arrais Amador",
      "Motonauta",
      "Curso de Primeiros Socorros",
      "Guia de Turismo Náutico",
      "Certificação em Mergulho PADI"
    ],
    services: [
      "Turismo náutico",
      "Passeios costeiros",
      "Mergulho recreativo",
      "Pesca esportiva",
      "Eventos náuticos",
      "Fotografia marinha"
    ],
    availability: "Disponível diariamente das 7h às 18h",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566024287286-457247b70310?w=800&h=600&fit=crop"
    ],
    highlights: [
      {
        icon: "Award",
        title: "Especialista Local",
        description: "Conhece todos os pontos secretos da Região dos Lagos"
      },
      {
        icon: "CheckCircle",
        title: "Turismo Sustentável",
        description: "Comprometida com a preservação marinha e ecoturismo"
      },
      {
        icon: "Shield",
        title: "Mergulho Certificado",
        description: "Instrutora PADI para mergulhos recreativos"
      },
      {
        icon: "Zap",
        title: "Experiências Únicas",
        description: "Cria roteiros personalizados para cada cliente"
      }
    ]
  },
  {
    id: "3",
    name: "Carlos Eduardo Santos",
    slug: "carlos-eduardo-santos-3",
    specialty: "Pesca Esportiva",
    experience: 20,
    location: "Angra dos Reis, RJ",
    coordinates: { lat: -23.0067, lng: -44.3181 },
    bio: "Mestre em pesca esportiva com duas décadas de experiência nas águas de Angra dos Reis. Especialista em pesca oceânica e conhecedor profundo dos melhores pesqueiros da região. Guia certificado com histórico de capturas recordes.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    reviewsCount: 156,
    hourlyRate: 18000, // R$ 180,00/hora
    dayRate: 90000, // R$ 900,00/dia
    languages: ["Português", "Inglês"],
    certifications: [
      "Mestre de Pesca Esportiva",
      "Condutor Náutico",
      "Certificação IBAMA",
      "Primeiros Socorros",
      "Meteorologia Marinha"
    ],
    services: [
      "Pesca oceânica",
      "Pesca de corrico",
      "Pesca de arremesso",
      "Consultoria pesqueira",
      "Fornecimento de equipamentos",
      "Limpeza e preparo do pescado"
    ],
    availability: "Disponível para pescarias de meio período ou dia completo",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    ],
    highlights: [
      {
        icon: "Award",
        title: "Mestre Pesqueiro",
        description: "20 anos de experiência em pesca esportiva oceânica"
      },
      {
        icon: "Zap",
        title: "Capturas Recordes",
        description: "Histórico de capturas de grandes peixes na região"
      },
      {
        icon: "CheckCircle",
        title: "Conhecimento Local",
        description: "Domina todos os pesqueiros de Angra dos Reis"
      },
      {
        icon: "Shield",
        title: "Equipamentos Profissionais",
        description: "Fornece todos os equipamentos de pesca necessários"
      }
    ],
    featured: true
  },
  {
    id: "4",
    name: "Ana Paula Ferreira",
    slug: "ana-paula-ferreira-4",
    specialty: "Eventos Corporativos",
    experience: 12,
    location: "Rio de Janeiro, RJ",
    coordinates: { lat: -22.9068, lng: -43.1729 },
    bio: "Especialista em eventos corporativos e celebrações náuticas de luxo. Com formação em Hotelaria e 12 anos de experiência no mercado de eventos premium, transforma qualquer ocasião em uma experiência inesquecível no mar.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    reviewsCount: 73,
    hourlyRate: 20000, // R$ 200,00/hora
    dayRate: 120000, // R$ 1.200,00/dia
    languages: ["Português", "Inglês", "Italiano"],
    certifications: [
      "Arrais Amador",
      "Organização de Eventos",
      "Sommelier de Vinhos",
      "Protocolo e Etiqueta",
      "Primeiros Socorros"
    ],
    services: [
      "Eventos corporativos",
      "Casamentos no mar",
      "Aniversários VIP",
      "Confraternizações",
      "Lançamentos de produtos",
      "Consultoria em eventos"
    ],
    availability: "Agendamento com antecedência mínima de 15 dias",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
    ],
    highlights: [
      {
        icon: "Award",
        title: "Eventos de Luxo",
        description: "Especialista em celebrações náuticas premium"
      },
      {
        icon: "CheckCircle",
        title: "Atenção aos Detalhes",
        description: "Cuida de todos os aspectos para eventos perfeitos"
      },
      {
        icon: "Shield",
        title: "Sommelier Certificada",
        description: "Seleciona vinhos e bebidas para cada ocasião"
      },
      {
        icon: "Zap",
        title: "Experiências Memoráveis",
        description: "Transforma eventos em momentos inesquecíveis"
      }
    ]
  },
  {
    id: "5",
    name: "João Pedro Oliveira",
    slug: "joao-pedro-oliveira-5",
    specialty: "Instrutor Náutico",
    experience: 18,
    location: "Niterói, RJ",
    coordinates: { lat: -22.8834, lng: -43.1036 },
    bio: "Instrutor náutico experiente com 18 anos dedicados ao ensino da navegação. Formou centenas de novos navegadores e é reconhecido pela didática diferenciada e paciência no ensino. Especialista em habilitação náutica recreativa.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    reviewsCount: 234,
    hourlyRate: 14000, // R$ 140,00/hora
    dayRate: 75000, // R$ 750,00/dia
    languages: ["Português", "Inglês"],
    certifications: [
      "Capitão Amador",
      "Instrutor Náutico Credenciado",
      "Meteorologia Marinha",
      "Navegação Astronômica",
      "Primeiros Socorros Marítimos"
    ],
    services: [
      "Curso de Arrais Amador",
      "Curso de Motonauta",
      "Curso de Capitão Amador",
      "Aulas práticas de navegação",
      "Consultoria náutica",
      "Preparação para provas teóricas"
    ],
    availability: "Cursos regulares e aulas particulares",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566024287286-457247b70310?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618830-fcd0c89db42a?w=800&h=600&fit=crop"
    ],
    highlights: [
      {
        icon: "Award",
        title: "Instrutor Experiente",
        description: "18 anos formando novos navegadores com excelência"
      },
      {
        icon: "CheckCircle",
        title: "Alta Taxa de Aprovação",
        description: "95% dos alunos aprovados na primeira tentativa"
      },
      {
        icon: "Shield",
        title: "Didática Diferenciada",
        description: "Método de ensino reconhecido pela eficácia"
      },
      {
        icon: "Zap",
        title: "Cursos Completos",
        description: "Oferece todos os níveis de habilitação náutica"
      }
    ]
  }
];

// Função para buscar marinheiro por slug
export const getSailorBySlug = (slug: string): Sailor | undefined => {
  return sailors.find(sailor => sailor.slug === slug);
};

// Função para buscar marinheiros por especialidade
export const getSailorsBySpecialty = (specialty: string): Sailor[] => {
  if (specialty === 'Todos') return sailors;
  return sailors.filter(sailor => sailor.specialty === specialty);
};

// Função para buscar marinheiros em destaque
export const getFeaturedSailors = (limit: number = 3): Sailor[] => {
  const featured = sailors.filter(sailor => sailor.featured);
  return featured.slice(0, limit);
};