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
  // Em breve teremos marinheiros disponíveis
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