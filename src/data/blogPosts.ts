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
  },
  {
    id: "4",
    title: "Jet Skis Exclusivos: Adrenalina e Sofisticação nas Águas de Búzios",
    slug: "jet-skis-exclusivos-adrenalina-buzios",
    excerpt: "Descubra como os jet skis de luxo estão revolucionando os esportes aquáticos em Búzios, combinando performance extrema com design refinado.",
    content: `
      <h2>A Nova Era dos Jet Skis de Luxo</h2>
      <p>A MARBANA pioneira no segmento de jet skis exclusivos, oferece uma seleção curada das mais sofisticadas máquinas aquáticas do mercado. Nossa experiência em Búzios nos permite identificar exatamente o que nossos clientes VIP procuram: performance, conforto e exclusividade.</p>
      
      <h2>Por que Jet Skis Estão em Alta no Mercado Náutico?</h2>
      <p>O mercado de jet skis premium cresceu 60% nos últimos dois anos, impulsionado por:</p>
      <ul>
        <li><strong>Versatilidade:</strong> Ideais para explorar águas rasas e enseadas secretas</li>
        <li><strong>Facilidade de uso:</strong> Não requer experiência náutica prévia</li>
        <li><strong>Transporte simples:</strong> Podem ser rebocados facilmente</li>
        <li><strong>Custo-benefício:</strong> Menor investimento comparado a embarcações maiores</li>
        <li><strong>Experiência única:</strong> Adrenalina pura nas águas cristalinas de Búzios</li>
      </ul>

      <h2>Jet Skis Exclusivos no Portfólio MARBANA</h2>
      
      <h3>Sea-Doo GTX Limited 300</h3>
      <p>O ápice da tecnologia em jet skis. Com sistema inteligente de controle de estabilidade e acabamento premium em fibra de carbono, oferece uma experiência incomparável nas águas de Búzios.</p>
      
      <h3>Yamaha GP1800R SVHO</h3>
      <p>Performance racing para os mais exigentes. Motor supercharged de 250HP que proporciona aceleration explosiva e velocidade máxima de 100 km/h.</p>
      
      <h3>Kawasaki Ultra 310LX</h3>
      <p>Luxo e conforto para passeios prolongados. Assento de três lugares em couro premium e sistema de som Bluetooth integrado.</p>

      <h2>Vantagens de Adquirir através da MARBANA</h2>
      <ul>
        <li><strong>Inspeção Rigorosa:</strong> Todos os jet skis passam por vistoria técnica completa</li>
        <li><strong>Garantia Estendida:</strong> Cobertura adicional de 2 anos em peças e mão de obra</li>
        <li><strong>Suporte Local:</strong> Assistência técnica especializada em Búzios</li>
        <li><strong>Roteiros Exclusivos:</strong> Mapas das melhores rotas náuticas da região</li>
        <li><strong>Curso de Pilotagem:</strong> Treinamento gratuito com instrutor certificado</li>
      </ul>

      <h2>Experiências Únicas em Búzios</h2>
      <p>Com seu jet ski MARBANA, explore:</p>
      <ul>
        <li><strong>Praia da Tartaruga:</strong> Águas cristalinas e tartarugas marinhas</li>
        <li><strong>Ilha Feia:</strong> Mergulho em águas profundas e snorkeling</li>
        <li><strong>Praia Brava:</strong> Para os aventureiros que buscam ondas maiores</li>
        <li><strong>João Fernandinho:</strong> Praia paradisíaca acessível apenas por mar</li>
      </ul>

      <h2>Cuidados e Manutenção Premium</h2>
      <p>A MARBANA oferece programa completo de manutenção preventiva:</p>
      <ul>
        <li>Revisões programadas a cada 50 horas de uso</li>
        <li>Limpeza e enceramento profissional mensal</li>
        <li>Monitoramento remoto do sistema eletrônico</li>
        <li>Seguro náutico com cobertura total</li>
      </ul>

      <div style="background: linear-gradient(135deg, #FF6B6B, #FF8E8E); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Sinta a Adrenalina das Águas de Búzios!</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Descubra nossa seleção exclusiva de jet skis e viva experiências aquáticas inesquecíveis com todo o suporte e qualidade MARBANA.</p>
        <p><strong>Conheça nossos Jet Skis Exclusivos</strong></p>
        <p>WhatsApp: (11) 94015-9202</p>
      </div>
    `,
    author: "Rafael Monteiro",
    date: "8 de Janeiro, 2024",
    category: "Esportes Aquáticos",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "Catamarãs de Luxo: O Futuro dos Eventos Náuticos Exclusivos",
    slug: "catamara-luxo-eventos-nauticos-buzios",
    excerpt: "Como os catamarãs estão redefinindo o conceito de eventos corporativos e celebrações privadas no mar, oferecendo estabilidade, espaço e sofisticação únicos.",
    content: `
      <h2>Catamarãs: A Escolha dos Conhecedores</h2>
      <p>Na MARBANA, observamos uma tendência crescente entre nossos clientes mais sofisticados: a preferência por catamarãs para eventos exclusivos. Essas embarcações oferecem uma combinação única de estabilidade, espaço e elegância que as tornam ideais para celebrações memoráveis nas águas paradisíacas de Búzios.</p>
      
      <h2>Por que Catamarãs São Perfeitos para Eventos?</h2>
      <ul>
        <li><strong>Estabilidade Superior:</strong> Design de duplo casco elimina praticamente o balanço</li>
        <li><strong>Espaços Amplos:</strong> Áreas de convivência generosas para até 50 convidados</li>
        <li><strong>Múltiplos Ambientes:</strong> Salões internos e externos para diferentes momentos</li>
        <li><strong>Conforto Premium:</strong> Banheiros espaçosos e áreas de descanso</li>
        <li><strong>Segurança Máxima:</strong> Redundância de sistemas e estabilidade natural</li>
      </ul>

      <h2>Eventos Exclusivos MARBANA</h2>
      
      <h3>Casamentos no Mar</h3>
      <p>Celebre o amor eterno com vista para o pôr do sol de Búzios. Nossos catamarãs oferecem o cenário perfeito para cerimônias íntimas ou recepções grandiosas, com serviço de buffet gourmet e decoração personalizada.</p>
      
      <h3>Eventos Corporativos</h3>
      <p>Impressione clientes e parceiros com convenções, lançamentos de produtos ou confraternizações em alto mar. Ambiente inspirador que estimula networking e fortalece relacionamentos comerciais.</p>
      
      <h3>Aniversários VIP</h3>
      <p>Celebrações exclusivas para até 50 convidados, com chef particular, sommelier dedicado e entretenimento personalizado. Uma experiência inesquecível para ocasiões especiais.</p>

      <h2>Catamarãs Premium da Frota MARBANA</h2>
      
      <h3>Lagoon 620 "Maré de Sonhos"</h3>
      <p>O flagship da nossa frota. 19 metros de puro luxo com 4 suítes master, salão panorâmico de 60m² e deck superior com jacuzzi. Perfeito para eventos de até 35 pessoas com pernoite.</p>
      
      <h3>Fountaine Pajot Astrea 42 "Vento Azul"</h3>
      <p>Elegância francesa em cada detalhe. Design contemporâneo com amplos espaços externos e camarotes sofisticados. Ideal para grupos íntimos de até 20 pessoas.</p>
      
      <h3>Bali 5.4 "Brisa Tropical"</h3>
      <p>Inovação e funcionalidade. Conceito revolucionário com salão integrado ao cockpit, criando um espaço único de 80m² no nível principal. Perfeito para eventos diurnos.</p>

      <h2>Serviços Complementares MARBANA</h2>
      <ul>
        <li><strong>Chef Exclusivo:</strong> Gastronomia internacional com ingredientes locais frescos</li>
        <li><strong>Sommelier Certificado:</strong> Seleção de vinhos e coquetéis artesanais</li>
        <li><strong>Decoração Temática:</strong> Ambientação personalizada para cada ocasião</li>
        <li><strong>Fotógrafo Profissional:</strong> Registro dos momentos especiais</li>
        <li><strong>Sistema de Som Premium:</strong> Áudio profissional e DJ se necessário</li>
        <li><strong>Atividades Aquáticas:</strong> Stand up paddle, snorkeling e pesca esportiva</li>
      </ul>

      <h2>Roteiros Exclusivos para Eventos</h2>
      
      <h3>Rota Pôr do Sol Premium</h3>
      <p>Saída às 15h → Praia da Tartaruga → João Fernandes → Pôr do sol na Praia Brava → Retorno iluminado → Duração: 6 horas</p>
      
      <h3>Rota Ilha Exclusiva</h3>
      <p>Dia completo → Ilha Feia para mergulho → Almoço na Praia da Foca → Tarde na Praia Azedinha → Duração: 8 horas</p>

      <h2>Sustentabilidade e Responsabilidade</h2>
      <p>Nossos catamarãs seguem rigorosos padrões ambientais:</p>
      <ul>
        <li>Sistemas de tratamento de água residual</li>
        <li>Coleta seletiva de resíduos durante os eventos</li>
        <li>Uso de produtos biodegradáveis</li>
        <li>Respeito aos ecossistemas marinhos locais</li>
      </ul>

      <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Realize Seu Evento dos Sonhos</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Descubra como transformar sua celebração em uma experiência náutica exclusiva e inesquecível com nossos catamarãs de luxo.</p>
        <p><strong>Consultoria Gratuita para Eventos</strong></p>
        <p>WhatsApp: (11) 94015-9202</p>
      </div>
    `,
    author: "Isabella Ferreira",
    date: "5 de Janeiro, 2024",
    category: "Eventos",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=400&fit=crop"
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
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, limit);
};