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
    title: "Guia Completo para Comprar seu Primeiro Iate",
    slug: "guia-completo-comprar-primeiro-iate",
    excerpt: "Tudo que você precisa saber antes de investir em uma embarcação de luxo: desde a escolha do modelo até os cuidados de manutenção.",
    content: `
      <h2>Por que Escolher a MARBANA para seu Primeiro Iate?</h2>
      <p>Na MARBANA, entendemos que comprar seu primeiro iate é mais que uma aquisição - é o início de uma nova experiência de vida. Com 15 anos de experiência no mercado náutico exclusivo, nossa curadoria especializada garante que você encontre a embarcação perfeita.</p>
      
      <h2>Definindo seu Orçamento</h2>
      <p>Antes de começar a procurar, estabeleça um orçamento realista que inclua:</p>
      <ul>
        <li><strong>Preço de compra:</strong> Valor principal da embarcação</li>
        <li><strong>Manutenção anual:</strong> 10-15% do valor (nossa equipe oferece planos especiais)</li>
        <li><strong>Seguro náutico:</strong> Proteja seu investimento com nossas parcerias</li>
        <li><strong>Taxa de marina:</strong> Acesso exclusivo às melhores marinas do Brasil</li>
        <li><strong>Combustível e operação:</strong> Custos operacionais estimados</li>
      </ul>

      <h2>Tipos de Embarcações Exclusivas MARBANA</h2>
      <p>Nossa seleção curada inclui apenas as melhores embarcações do mercado:</p>
      
      <h3>Iates de Luxo</h3>
      <p>Para quem busca o máximo em conforto e sofisticação. Nossos iates são inspecionados rigorosamente e vêm com certificado de qualidade MARBANA.</p>
      
      <h3>Lanchas Esportivas</h3>
      <p>Performance e elegância para passeios costeiros inesquecíveis. Ideais para descobrir as belezas de Búzios e região.</p>
      
      <h3>Catamarãs Premium</h3>
      <p>Estabilidade e espaço para grupos maiores, perfeitos para eventos corporativos ou reuniões familiares.</p>

      <h2>O Processo MARBANA de Aquisição</h2>
      <p>Nossa metodologia exclusiva garante uma compra segura e satisfatória:</p>
      <ol>
        <li><strong>Consulta VIP:</strong> Atendimento personalizado para entender suas necessidades</li>
        <li><strong>Seleção Curada:</strong> Apresentamos apenas embarcações que atendem aos nossos altos padrões</li>
        <li><strong>Inspeção Técnica:</strong> Todos os nossos iates passam por inspeção rigorosa</li>
        <li><strong>Documentação Completa:</strong> Cuidamos de toda a papelada legal</li>
        <li><strong>Suporte Pós-Venda:</strong> Acompanhamento contínuo após a compra</li>
      </ol>

      <h2>Por que Confiar na MARBANA?</h2>
      <p>✓ <strong>98% de clientes satisfeitos</strong> - Nossa reputação fala por si<br/>
      ✓ <strong>Maior ecossistema náutico do Brasil</strong> - Acesso às melhores oportunidades<br/>
      ✓ <strong>Localização privilegiada</strong> - Búzios, o destino náutico mais exclusivo<br/>
      ✓ <strong>Curadoria especializada</strong> - Apenas embarcações premium em nosso portfólio</p>

      <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Pronto para encontrar seu iate dos sonhos?</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Agende uma consulta VIP com nossos especialistas e descubra por que a MARBANA é a escolha certa para seu primeiro iate.</p>
        <p><strong>WhatsApp:</strong> (11) 94015-9202 | <strong>E-mail:</strong> contato@marbana.com.br</p>
      </div>
    `,
    author: "Marina Santos",
    date: "15 de Janeiro, 2024",
    category: "Guias",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "As Melhores Marinas de Búzios: Guia Exclusivo MARBANA",
    slug: "melhores-marinas-buzios-guia-exclusivo",
    excerpt: "Descubra os destinos mais exclusivos e bem estruturados da Rainha dos Mares e por que Búzios é o coração náutico do Brasil.",
    content: `
      <h2>Búzios: A Capital Náutica do Brasil</h2>
      <p>Como especialistas baseados em Búzios há mais de 15 anos, a MARBANA conhece cada marina, cada pier, cada cantinho especial desta península mágica. Nossa localização estratégica nos permite oferecer acesso privilegiado aos melhores pontos náuticos da região.</p>

      <h2>Marina Porto Búzios - Nossa Base Principal</h2>
      <p>A mais sofisticada marina da região, onde mantemos nossa sede e showroom. Com infraestrutura de classe mundial:</p>
      <ul>
        <li>Píeres flutuantes para embarcações até 80 pés</li>
        <li>Energia elétrica e água potável em todos os berços</li>
        <li>Segurança 24h com monitoramento</li>
        <li>Restaurantes e lojas náuticas exclusivas</li>
        <li>Serviço de concierge MARBANA para clientes VIP</li>
      </ul>

      <h2>Marina dos Pescadores - Charme Tradicional</h2>
      <p>Para quem aprecia a autenticidade da cultura náutica local. A MARBANA mantém parceria exclusiva para nossos clientes:</p>
      <ul>
        <li>Atmosfera autêntica de vila de pescadores</li>
        <li>Restaurantes tradicionais com frutos do mar frescos</li>
        <li>Acesso privilegiado através da MARBANA</li>
        <li>Berços protegidos para embarcações menores</li>
      </ul>

      <h2>Iate Clube de Búzios - Exclusividade Máxima</h2>
      <p>Acesso restrito aos membros, mas a MARBANA possui convênio especial:</p>
      <ul>
        <li>Ambiente familiar e exclusivo</li>
        <li>Infraestrutura completa para grandes iates</li>
        <li>Eventos sociais e regatas mensais</li>
        <li>Acesso através da associação MARBANA</li>
      </ul>

      <h2>Vantagens de Navegar com a MARBANA</h2>
      <p>Nossa experiência local oferece benefícios únicos:</p>
      <ul>
        <li><strong>Conhecimento Local:</strong> Roteiros secretos e pontos especiais</li>
        <li><strong>Parcerias Exclusivas:</strong> Descontos em marinas e serviços</li>
        <li><strong>Suporte 24/7:</strong> Assistência técnica em qualquer marina</li>
        <li><strong>Eventos VIP:</strong> Acesso a regatas e eventos exclusivos</li>
      </ul>

      <h2>Roteiros Recomendados pela MARBANA</h2>
      <h3>Rota das Praias Selvagens</h3>
      <p>Praia da Foca → Praia do Forno → João Fernandes → Azedinha</p>
      
      <h3>Rota do Pôr do Sol</h3>
      <p>Geribá → Tucuns → Manguinhos → Volta pela Rasa</p>

      <div style="background: linear-gradient(135deg, #2C4A5C, #1a2933); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: #D4AF37;">Experiencie Búzios com a MARBANA</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Conheça nossas embarcações exclusivas e descubra porque somos a referência náutica em Búzios há mais de 15 anos.</p>
        <p><strong>Visite nosso showroom na Marina Porto Búzios</strong></p>
        <p>Rua das Pedras, 100 - Centro, Búzios/RJ</p>
      </div>
    `,
    author: "Carlos Ribeiro",
    date: "12 de Janeiro, 2024",
    category: "Destinos",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    title: "Mercado Náutico Exclusivo 2024: Tendências e Oportunidades",
    slug: "mercado-nautico-exclusivo-2024-tendencias",
    excerpt: "Análise completa das principais tendências e inovações que estão moldando o mercado de embarcações exclusivas no Brasil.",
    content: `
      <h2>O Mercado Náutico de Luxo em 2024</h2>
      <p>Como líderes do maior ecossistema náutico do Brasil, a MARBANA acompanha de perto todas as tendências do mercado exclusivo. Nossa experiência de 15 anos nos permite identificar as melhores oportunidades para nossos clientes VIP.</p>

      <h2>Crescimento do Segmento Premium</h2>
      <p>O mercado de embarcações exclusivas no Brasil cresceu 35% em 2024, impulsionado por:</p>
      <ul>
        <li>Busca por experiências únicas e exclusivas</li>
        <li>Valorização do lifestyle náutico de luxo</li>
        <li>Investimento em ativos tangíveis e prazerosos</li>
        <li>Crescimento do turismo náutico em destinos como Búzios</li>
      </ul>

      <h2>Tendências Tecnológicas</h2>
      <h3>Iates Inteligentes</h3>
      <p>A MARBANA oferece embarcações com tecnologia de ponta:</p>
      <ul>
        <li>Sistemas de navegação por GPS integrado</li>
        <li>Controle automático de estabilidade</li>
        <li>Monitoramento remoto via aplicativo</li>
        <li>Sistemas de entretenimento de última geração</li>
      </ul>

      <h3>Sustentabilidade Premium</h3>
      <p>Nosso portfólio inclui opções eco-friendly:</p>
      <ul>
        <li>Motores híbridos de baixa emissão</li>
        <li>Sistemas de tratamento de água</li>
        <li>Materiais sustentáveis de alta qualidade</li>
        <li>Painéis solares integrados</li>
      </ul>

      <h2>Análise de Valorização</h2>
      <p>Embarcações exclusivas da MARBANA mantêm valor superior devido a:</p>
      <ul>
        <li><strong>Curadoria Rigorosa:</strong> Apenas 5% das embarcações passam por nossa seleção</li>
        <li><strong>Manutenção Preventiva:</strong> Programa de cuidados que preserva valor</li>
        <li><strong>Certificação MARBANA:</strong> Selo de qualidade reconhecido no mercado</li>
        <li><strong>Histórico Documentado:</strong> Procedência e manutenção completas</li>
      </ul>

      <h2>Oportunidades de Investimento 2024</h2>
      <h3>Segmentos em Alta</h3>
      <ul>
        <li><strong>Catamarãs Luxury:</strong> +45% de procura para eventos</li>
        <li><strong>Iates de 40-60 pés:</strong> Tamanho ideal para o mercado brasileiro</li>
        <li><strong>Lanchas Esportivas:</strong> Performance e sofisticação</li>
        <li><strong>Jet Skis Premium:</strong> Adrenalina com requinte</li>
      </ul>

      <h2>Por que Investir através da MARBANA?</h2>
      <p>Nossa posição única no mercado oferece vantagens exclusivas:</p>
      <ul>
        <li><strong>Acesso Antecipado:</strong> Primeira opção em embarcações raras</li>
        <li><strong>Negociação Especializada:</strong> Melhores condições do mercado</li>
        <li><strong>Assessoria Completa:</strong> Da compra à revenda</li>
        <li><strong>Rede de Contatos:</strong> Compradores qualificados em nossa base</li>
      </ul>

      <div style="background: linear-gradient(135deg, #D4AF37, #B8860B); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Invista no Mercado Náutico de Luxo</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Aproveite as oportunidades exclusivas do mercado náutico premium. Nossa equipe de especialistas está pronta para orientar seu investimento.</p>
        <p><strong>Consulta Gratuita com Nossos Especialistas</strong></p>
        <p>WhatsApp: (11) 94015-9202</p>
      </div>
    `,
    author: "Ana Paula Costa",
    date: "10 de Janeiro, 2024",
    category: "Mercado",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  }
  // ... Adicionar mais posts conforme necessário
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
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, limit);
};