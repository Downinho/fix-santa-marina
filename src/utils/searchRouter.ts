// Search routing logic to determine which page to navigate to based on search terms

export interface SearchCategories {
  embarcacoes: string[];
  marinheiros: string[];
  fotografos: string[];
  marinas: string[];
  acessorios: string[];
}

const searchKeywords: SearchCategories = {
  embarcacoes: [
    'lancha', 'iate', 'jet ski', 'veleiro', 'catamarã', 'barco', 'embarcação', 
    'yacht', 'boat', 'jetski', 'catamaran', 'sailboat', 'motorboat', 'fishing boat',
    'traineira', 'saveiro', 'escuna', 'rabelo', 'canoa', 'caiaque', 'kayak'
  ],
  marinheiros: [
    'marinheiro', 'capitão', 'condutor', 'skipper', 'piloto', 'comandante', 
    'sailor', 'captain', 'boat captain', 'náutico', 'navegação', 'tripulação',
    'crew', 'arrais', 'mestre', 'contramestre'
  ],
  fotografos: [
    'fotógrafo', 'fotografo', 'filmagem', 'drone', 'ensaio', 'foto', 'video',
    'photographer', 'photography', 'filming', 'aerial', 'wedding', 'casamento',
    'eventos', 'cinema', 'cinematografia', 'audiovisual'
  ],
  marinas: [
    'marina', 'porto', 'atracadouro', 'cais', 'pier', 'harbor', 'port',
    'doca', 'ancoradouro', 'berço', 'garagem náutica', 'estaleiro',
    'boatyard', 'yacht club', 'clube náutico'
  ],
  acessorios: [
    'âncora', 'ancora', 'gps', 'colete', 'fender', 'defensas', 'corda',
    'cabo', 'equipamento', 'peças', 'motor', 'hélice', 'rádio', 'sonar',
    'navigation', 'safety', 'electronics', 'engine', 'parts', 'accessories'
  ]
};

export function determineSearchCategory(searchTerm: string): keyof SearchCategories {
  const normalizedTerm = searchTerm.toLowerCase().trim();
  
  // Check each category for keyword matches
  for (const [category, keywords] of Object.entries(searchKeywords)) {
    if (keywords.some(keyword => 
      normalizedTerm.includes(keyword) || keyword.includes(normalizedTerm)
    )) {
      return category as keyof SearchCategories;
    }
  }
  
  // Default to embarcacoes if no specific category is found
  return 'embarcacoes';
}

export function getSearchRoute(searchTerm: string, selectedType?: string, selectedLocation?: string): string {
  const category = determineSearchCategory(searchTerm);
  const searchParams = new URLSearchParams();
  
  if (searchTerm) searchParams.set('search', searchTerm);
  if (selectedType) searchParams.set('type', selectedType);
  if (selectedLocation) searchParams.set('location', selectedLocation);
  
  const queryString = searchParams.toString();
  const baseRoute = `/${category}`;
  
  return queryString ? `${baseRoute}?${queryString}` : baseRoute;
}