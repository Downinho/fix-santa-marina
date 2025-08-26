export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Focker 272 Infinity XIX: A Joia Náutica de Búzios",
    slug: "focker-272-infinity-xix-joia-nautica-buzios",
    excerpt: "Conheça a embarcação mais exclusiva do nosso portfólio: a Focker 272 Infinity XIX, com apenas 85h de uso e localizada no paraíso de Búzios.",
    content: `
      <h2>A Estrela da Frota MARBANA</h2>
      <p>A Focker 272 Infinity XIX representa o que há de mais refinado na navegação de lazer. Localizada nas águas cristalinas de Búzios, esta embarcação de 2023 com apenas 85h de uso é uma verdadeira obra de arte náutica.</p>
      
      <h2>Especificações Técnicas de Elite</h2>
      <p>Com motorização Mercruiser 6.2 de 350HP, a Infinity XIX oferece performance excepcional:</p>
      <ul>
        <li><strong>Comprimento:</strong> 8,2 metros de pura elegância</li>
        <li><strong>Capacidade:</strong> 10 + 1 pessoas confortavelmente</li>
        <li><strong>Motorização:</strong> Mercruiser 6.2 350HP (2023)</li>
        <li><strong>Combustível:</strong> 280L de autonomia</li>
        <li><strong>Estado:</strong> Impecável com 85h de uso</li>
      </ul>

      <h2>Acabamentos Premium</h2>
      <p>Cada detalhe foi pensado para oferecer máximo conforto e sofisticação:</p>
      <ul>
        <li>Sistema de som JL Audio com subwoofer</li>
        <li>Sonda GPS Garmin de 12 polegadas</li>
        <li>Piso em EVA antiderrapante premium</li>
        <li>Iluminação LED com controle remoto</li>
        <li>Toldo elétrico retrátil</li>
        <li>Chuveiro de popa com água quente</li>
      </ul>

      <h2>Por que Escolher a Infinity XIX?</h2>
      <p>Esta embarcação representa mais que um meio de transporte - é seu passaporte para as mais belas águas do Brasil:</p>
      <ul>
        <li><strong>Localização Privilegiada:</strong> Búzios, o destino náutico mais desejado</li>
        <li><strong>Estado Impecável:</strong> Manutenção rigorosa e baixíssimas horas</li>
        <li><strong>Performance Superior:</strong> 350HP para máxima potência e economia</li>
        <li><strong>Equipamentos Completos:</strong> Todos os opcionais de fábrica</li>
      </ul>

      <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Conheça a Infinity XIX</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Agende uma visita exclusiva e navegue pelas águas paradisíacas de Búzios a bordo desta obra-prima náutica.</p>
        <p><strong>WhatsApp:</strong> (11) 94015-9202</p>
      </div>
    `,
    author: "Carlos Mendez",
    date: "20 de Janeiro, 2024",
    category: "Embarcações",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "Guia Completo para Escolher o Barco Ideal",
    slug: "guia-completo-para-escolher-o-barco-ideal",
    excerpt: "Descubra os fatores cruciais para selecionar a embarcação perfeita para suas necessidades e estilo de vida.",
    content: "<h2>Encontre o Barco dos Seus Sonhos</h2><p>Escolher o barco ideal pode parecer desafiador, mas com o guia certo, você encontrará a embarcação perfeita para suas aventuras náuticas.</p>",
    author: "Mariana Silva",
    date: "15 de Janeiro, 2024",
    category: "Dicas",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1490750967865-9c277e2a2874?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Os Melhores Destinos Náuticos no Brasil",
    slug: "os-melhores-destinos-nauticos-no-brasil",
    excerpt: "Explore os paraísos costeiros que oferecem experiências inesquecíveis para os amantes do mar.",
    content: "<h2>Navegue Pelos Tesouros Brasileiros</h2><p>O Brasil é um país abençoado com uma costa deslumbrante, repleta de destinos náuticos que encantam a todos.</p>",
    author: "Ricardo Almeida",
    date: "10 de Janeiro, 2024",
    category: "Turismo",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1561881370-a4828365c9a0?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Como Financiar a Compra da Sua Embarcação",
    slug: "como-financiar-a-compra-da-sua-embarcacao",
    excerpt: "Conheça as opções de financiamento disponíveis e realize o sonho de adquirir sua própria embarcação.",
    content: "<h2>Invista no Seu Estilo de Vida Náutico</h2><p>A compra de uma embarcação é um investimento significativo, e o financiamento pode ser uma ferramenta valiosa para realizar esse sonho.</p>",
    author: "Laura Castro",
    date: "05 de Janeiro, 2024",
    category: "Finanças",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af5f0091?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "Dicas Essenciais para a Manutenção do Seu Barco",
    slug: "dicas-essenciais-para-a-manutencao-do-seu-barco",
    excerpt: "Mantenha sua embarcação em perfeito estado com nossas dicas práticas de manutenção preventiva.",
    content: "<h2>Prolongue a Vida Útil do Seu Barco</h2><p>A manutenção regular é fundamental para garantir a segurança e o bom funcionamento da sua embarcação.</p>",
    author: "Pedro Santos",
    date: "01 de Janeiro, 2024",
    category: "Manutenção",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1541849430-093c1aa19426?w=800&h=400&fit=crop"
  },
  {
    id: "6",
    title: "As Tendências do Mercado Náutico para 2024",
    slug: "as-tendencias-do-mercado-nautico-para-2024",
    excerpt: "Fique por dentro das novidades e inovações que estão transformando o mundo da navegação.",
    content: "<h2>Prepare-se para o Futuro da Navegação</h2><p>O mercado náutico está em constante evolução, com novas tecnologias e tendências surgindo a cada ano.</p>",
    author: "Ana Paula Gomes",
    date: "28 de Dezembro, 2023",
    category: "Mercado",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1568294324588-539588e7c145?w=800&h=400&fit=crop"
  },
  {
    id: "7",
    title: "Segurança em Alto Mar: O Que Você Precisa Saber",
    slug: "seguranca-em-alto-mar-o-que-voce-precisa-saber",
    excerpt: "Navegue com segurança e tranquilidade, conhecendo as melhores práticas e equipamentos de segurança.",
    content: "<h2>Priorize a Segurança da Sua Tripulação</h2><p>A segurança em alto mar é um tema crucial para todos os navegadores, desde os iniciantes até os mais experientes.</p>",
    author: "João Ricardo",
    date: "22 de Dezembro, 2023",
    category: "Segurança",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1549057348-582a7a7a0964?w=800&h=400&fit=crop"
  },
  {
    id: "8",
    title: "Como Escolher o Seguro Ideal para Sua Embarcação",
    slug: "como-escolher-o-seguro-ideal-para-sua-embarcacao",
    excerpt: "Proteja seu patrimônio com um seguro adequado, que ofereça cobertura completa para sua embarcação.",
    content: "<h2>Navegue com Tranquilidade e Proteção</h2><p>O seguro de embarcação é um investimento essencial para proteger seu patrimônio e garantir a segurança da sua navegação.</p>",
    author: "Fernanda Oliveira",
    date: "18 de Dezembro, 2023",
    category: "Seguros",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1576503843333-9992564074e1?w=800&h=400&fit=crop"
  },
  {
    id: "9",
    title: "Os Impactos Ambientais da Navegação e Como Minimiza-los",
    slug: "os-impactos-ambientais-da-navegacao-e-como-minimiza-los",
    excerpt: "Adote práticas sustentáveis e contribua para a preservação dos oceanos e da vida marinha.",
    content: "<h2>Navegue com Responsabilidade Ambiental</h2><p>A navegação pode ter impactos significativos no meio ambiente marinho, mas é possível adotar práticas sustentáveis para minimizar esses efeitos.</p>",
    author: "Roberto Souza",
    date: "12 de Dezembro, 2023",
    category: "Sustentabilidade",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1516235434719-5c4dd1554d21?w=800&h=400&fit=crop"
  },
  {
    id: "10",
    title: "Roteiros Exclusivos para Navegar em Angra dos Reis",
    slug: "roteiros-exclusivos-para-navegar-em-angra-dos-reis",
    excerpt: "Descubra os segredos de Angra dos Reis e desfrute de paisagens paradisíacas a bordo da sua embarcação.",
    content: "<h2>Explore as Maravilhas de Angra dos Reis</h2><p>Angra dos Reis é um destino náutico icônico, com suas ilhas exuberantes e águas cristalinas que convidam à exploração.</p>",
    author: "Juliana Martins",
    date: "08 de Dezembro, 2023",
    category: "Turismo",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1505205299726-5a8fbe60ca83?w=800&h=400&fit=crop"
  }
];

// Função para buscar post por slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Função para buscar posts por categoria
export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'Todos') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

// Função para buscar posts relacionados
export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  return blogPosts.filter(post => post.id !== currentPostId).slice(0, limit);
};
