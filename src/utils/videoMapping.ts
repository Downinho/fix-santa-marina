// Mapeamento unificado de vídeos e títulos para embarcações
export const vesselVideoMap: { [key: string]: string } = {
  'jet ski': '/videos/jetski.mp4',
  'jetski': '/videos/jetski.mp4',
  'iate': '/videos/iate.mp4',
  'yacht': '/videos/iate.mp4',
  'catamarã': '/videos/catamara.mp4',
  'catamara': '/videos/catamara.mp4',
  'lancha': '/videos/lancha.mp4',
  'veleiro': '/videos/veleiro.mp4',
  'sailboat': '/videos/veleiro.mp4',
  'default': '/videos/hero-default.mp4'
};

// Mapeamento de imagens como fallback (usando as imagens geradas)
export const vesselImageMap: { [key: string]: string } = {
  'jet ski': '/videos/jetski.mp4',
  'jetski': '/videos/jetski.mp4',
  'iate': '/videos/iate.mp4',
  'yacht': '/videos/iate.mp4',
  'catamarã': '/videos/catamara.mp4',
  'catamara': '/videos/catamara.mp4',
  'lancha': '/videos/lancha.mp4',
  'veleiro': '/videos/veleiro.mp4',
  'sailboat': '/videos/veleiro.mp4',
  'default': '/videos/hero-default.mp4'
};

export const vesselTitleMap: { [key: string]: string } = {
  'lancha': 'Lanchas Exclusivas',
  'iate': 'Iates Premium',
  'yacht': 'Iates Premium',
  'jet ski': 'Jet Skis Luxuosos',
  'jetski': 'Jet Skis Luxuosos',
  'catamarã': 'Catamarãs Sofisticados',
  'catamara': 'Catamarãs Sofisticados',
  'veleiro': 'Veleiros Extraordinários',
  'sailboat': 'Veleiros Extraordinários',
  'default': 'Embarcações Premium'
};

export const getVideoSrc = (type: string, isHomePage: boolean = false): string => {
  // Para a página inicial, usar imagem como vídeo por enquanto
  if (isHomePage) {
    return '/videos/hero-default.mp4';
  }
  
  const normalizedType = type.toLowerCase();
  return vesselVideoMap[normalizedType] || vesselVideoMap.default;
};

export const getImageSrc = (type: string, isHomePage: boolean = false): string => {
  if (isHomePage) {
    return '/videos/hero-default.mp4';
  }
  
  const normalizedType = type.toLowerCase();
  return vesselImageMap[normalizedType] || vesselImageMap.default;
};

export const getVesselTitle = (type: string): string => {
  const normalizedType = type.toLowerCase();
  return vesselTitleMap[normalizedType] || vesselTitleMap.default;
};