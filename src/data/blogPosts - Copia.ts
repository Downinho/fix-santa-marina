import fockerImage from "@/assets/blog-focker-272-navigation.jpg";
import safetyImage from "@/assets/blog-yacht-safety.jpg";
import maintenanceImage from "@/assets/blog-yacht-maintenance.jpg";
import fishingImage from "@/assets/blog-yacht-fishing.jpg";
import interiorImage from "@/assets/blog-yacht-interior.jpg";
import engineImage from "@/assets/blog-yacht-engine.jpg";
import deckImage from "@/assets/blog-yacht-deck.jpg";
import sunsetImage from "@/assets/blog-yacht-sunset.jpg";
import investmentImage from "@/assets/blog-yacht-investment.jpg";
import technologyImage from "@/assets/blog-yacht-technology.jpg";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
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
      <p>A Focker 272 Infinity XIX representa o ápice da engenharia náutica brasileira. Localizada nas águas paradisíacas de Búzios, esta obra-prima de 2023 com apenas 85 horas de uso redefine os padrões de luxo e performance no mercado náutico premium.</p>
      
      <h2>Especificações Técnicas de Elite</h2>
      <p>Equipada com motorização Mercruiser 6.2 de 350HP, a Infinity XIX oferece performance excepcional sem comprometer o conforto:</p>
      <ul>
        <li><strong>Comprimento:</strong> 8,2 metros de pura elegância náutica</li>
        <li><strong>Capacidade:</strong> 12 pessoas com conforto premium absoluto</li>
        <li><strong>Motorização:</strong> Mercruiser 6.2 350HP (2023) com garantia</li>
        <li><strong>Velocidade máxima:</strong> 45 nós em condições ideais</li>
        <li><strong>Autonomia:</strong> 280L para grandes aventuras</li>
        <li><strong>Estado:</strong> Impecável com manutenção rigorosa</li>
      </ul>
      
      <h2>Design e Tecnologia Integrados</h2>
      <p>Cada elemento da Infinity XIX foi projetado para criar experiências inesquecíveis:</p>
      
      <h3>Cockpit de Comando Premium</h3>
      <ul>
        <li>Sonda GPS Garmin 12" com cartas náuticas atualizadas</li>
        <li>Sistema de navegação integrado com AIS</li>
        <li>Piloto automático para navegação relaxante</li>
        <li>Painel de instrumentos digital de última geração</li>
      </ul>
      
      <h3>Entretenimento de Bordo</h3>
      <ul>
        <li>Sistema de áudio JL Audio com subwoofer marinizado</li>
        <li>Conectividade Bluetooth e USB em múltiplos pontos</li>
        <li>Iluminação LED RGB com 16 milhões de cores</li>
        <li>Controle remoto para todas as funções</li>
      </ul>
      
      <blockquote>
        "A Infinity XIX não é apenas uma embarcação, é um portal para o lifestyle náutico mais exclusivo do Brasil." - Equipe MARBANA
      </blockquote>
      
      <h2>Conforto e Funcionalidade</h2>
      
      <h3>Áreas de Convivência</h3>
      <ul>
        <li>Sofás em "U" com estofamento em couro náutico premium</li>
        <li>Mesa conversível para diferentes configurações</li>
        <li>Toldo elétrico retrátil para proteção solar</li>
        <li>Piso em EVA antiderrapante de alta qualidade</li>
      </ul>
      
      <h3>Facilidades de Bordo</h3>
      <ul>
        <li>Chuveiro de popa com água quente pressurizada</li>
        <li>Geladeira elétrica de grande capacidade</li>
        <li>Pia com água doce para conveniência</li>
        <li>Compartimentos de armazenamento estratégicos</li>
      </ul>
      
      <h2>Búzios: O Cenário Perfeito</h2>
      <p>Posicionada no coração náutico do Rio de Janeiro, a Infinity XIX oferece acesso privilegiado aos destinos mais exclusivos:</p>
      <ul>
        <li><strong>Praia da Ferradura:</strong> Águas calmas para relaxamento</li>
        <li><strong>Ilha Feia:</strong> Mergulho em águas cristalinas</li>
        <li><strong>Praia Brava:</strong> Aventura e paisagens selvagens</li>
        <li><strong>João Fernandes:</strong> Gastronomia náutica de primeira</li>
      </ul>
      
      <h2>Investimento Premium</h2>
      <p>Com valor de <strong>R$ 750.000</strong>, a Focker 272 Infinity XIX representa um investimento sólido no mercado náutico de luxo. Embarcações Focker mantêm excelente valorização, sendo altamente procuradas no mercado secundário.</p>
      
      <h3>Diferenciais Competitivos</h3>
      <ul>
        <li>Baixíssimas horas de uso (85h)</li>
        <li>Manutenção preventiva rigorosa documentada</li>
        <li>Todos os opcionais de fábrica inclusos</li>
        <li>Localização premium em Búzios</li>
        <li>Garantia de motor até 2025</li>
      </ul>
      
      <div style="background: linear-gradient(135deg, #1a365d, #2c5282); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: #D4AF37;">Experimente a Infinity XIX</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Agende uma demonstração exclusiva e navegue pelas águas paradisíacas de Búzios a bordo desta obra-prima náutica.</p>
        <p><strong>WhatsApp MARBANA:</strong> (11) 94015-9202</p>
      </div>
      
      <h2>Próximos Passos</h2>
      <p>A Infinity XIX aguarda por um proprietário que valorize a excelência náutica. Entre em contato com nossa equipe para:</p>
      <ul>
        <li>Agendar visita técnica completa</li>
        <li>Realizar sea trial personalizado</li>
        <li>Discussão de condições especiais de financiamento</li>
        <li>Orientação sobre documentação e transferência</li>
      </ul>
      
      <p><strong>Esta é sua oportunidade de adquirir uma das embarcações mais cobiçadas do mercado premium brasileiro.</strong></p>
    `,
    author: "Equipe MARBANA",
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    category: "Embarcações Premium",
    image: fockerImage,
    featured: true
  },
  {
    id: "2",
    title: "Segurança Náutica: Equipamentos Essenciais para Navegação Premium",
    slug: "seguranca-nautica-equipamentos-essenciais-navegacao",
    excerpt: "Descubra os equipamentos de segurança obrigatórios e opcionais que garantem navegação segura e tranquila em águas brasileiras.",
    content: `
      <h2>Navegação Segura: Prioridade Absoluta no Lifestyle Náutico</h2>
      <p>No universo do yachting premium, a segurança náutica transcende obrigações legais - é um compromisso com a excelência e a tranquilidade. Equipamentos de segurança de alta qualidade são investimentos fundamentais para experiências náuticas extraordinárias e seguras.</p>
      
      <h2>Equipamentos Obrigatórios pela Marinha do Brasil</h2>
      <p>A legislação brasileira estabelece requisitos mínimos que toda embarcação deve atender:</p>
      
      <h3>Itens de Segurança Individual</h3>
      <ul>
        <li><strong>Coletes salva-vidas:</strong> Um para cada pessoa a bordo, aprovados pela Marinha</li>
        <li><strong>Boias circulares:</strong> Para embarcações acima de 24 pés</li>
        <li><strong>Cabo flutuante:</strong> 30 metros mínimo para resgate</li>
        <li><strong>Colete adicional:</strong> 10% a mais da capacidade máxima</li>
      </ul>
      
      <h3>Equipamentos de Combate a Incêndio</h3>
      <ul>
        <li>Extintores tipo BC para compartimento do motor</li>
        <li>Extintores portáteis em pontos estratégicos</li>
        <li>Baldes com cabo para embarcações menores</li>
        <li>Sistemas automáticos para embarcações grandes</li>
      </ul>
      
      <h2>Tecnologia Avançada em Segurança Premium</h2>
      <p>Para embarcações do portfólio MARBANA, recomendamos equipamentos de última geração que elevam os padrões de segurança:</p>
      
      <h3>Sistemas de Comunicação de Emergência</h3>
      <ul>
        <li><strong>VHF com DSC (Digital Selective Calling):</strong> Comunicação automática de emergência</li>
        <li><strong>EPIRB (Emergency Position Indicating Radio Beacon):</strong> Localização via satélite</li>
        <li><strong>AIS (Automatic Identification System):</strong> Identificação automática para outras embarcações</li>
        <li><strong>Telefone via satélite:</strong> Comunicação global garantida</li>
      </ul>
      
      <h3>Navegação e Detecção Avançada</h3>
      <ul>
        <li><strong>Radar com ARPA:</strong> Detecção e rastreamento automático</li>
        <li><strong>GPS redundante:</strong> Backup de navegação sempre disponível</li>
        <li><strong>Sistemas de alarme de proximidade:</strong> Prevenção de colisões</li>
        <li><strong>Câmeras térmicas:</strong> Visão noturna para navegação segura</li>
      </ul>
      
      <blockquote>
        "Investir em segurança náutica premium é investir na tranquilidade absoluta de toda a família. A diferença entre equipamentos básicos e de elite pode salvar vidas." - Capitão Marina Santos, Consultora Técnica MARBANA
      </blockquote>
      
      <h2>Manutenção Preventiva: Garantia de Funcionamento</h2>
      <p>Equipamentos de segurança exigem manutenção rigorosa para funcionamento perfeito quando necessário:</p>
      
      <h3>Cronograma de Verificações</h3>
      <ul>
        <li><strong>Inspeção semanal:</strong> Verificação visual de todos os itens durante uso</li>
        <li><strong>Teste mensal:</strong> Funcionamento de equipamentos eletrônicos</li>
        <li><strong>Revisão trimestral:</strong> Manutenção preventiva de sistemas complexos</li>
        <li><strong>Overhaul anual:</strong> Manutenção profissional completa certificada</li>
      </ul>
      
      <h3>Documentação e Certificações</h3>
      <ul>
        <li>Registro de todas as manutenções realizadas</li>
        <li>Certificados de validade dos equipamentos</li>
        <li>Laudos técnicos de funcionamento</li>
        <li>Comprovantes de treinamento da tripulação</li>
      </ul>
      
      <h2>Treinamento Premium da Tripulação</h2>
      <p>Possuir equipamentos de segurança de elite é apenas o primeiro passo. O treinamento adequado da tripulação é fundamental:</p>
      
      <h3>Programas de Capacitação MARBANA</h3>
      <ul>
        <li><strong>Primeiros socorros marítimos:</strong> Atendimento especializado</li>
        <li><strong>Combate a incêndio a bordo:</strong> Técnicas específicas</li>
        <li><strong>Abandono de embarcação:</strong> Procedimentos de emergência</li>
        <li><strong>Navegação de emergência:</strong> Situações críticas</li>
      </ul>
      
      <h2>Investimento em Tranquilidade</h2>
      <p>O custo de um pacote completo de segurança premium representa 8-12% do valor da embarcação, mas proporciona valor imensurável: a segurança absoluta de quem você ama.</p>
      
      <h3>Pacotes de Segurança MARBANA</h3>
      <ul>
        <li><strong>Básico Premium:</strong> R$ 35.000 - R$ 50.000</li>
        <li><strong>Avançado Elite:</strong> R$ 80.000 - R$ 120.000</li>
        <li><strong>Ultra Premium:</strong> R$ 150.000 - R$ 200.000</li>
        <li><strong>Customizado:</strong> Projeto específico para cada embarcação</li>
      </ul>
      
      <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Consultoria em Segurança Náutica</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Nossa equipe técnica especializada avalia suas necessidades específicas e desenvolve soluções personalizadas de segurança.</p>
        <p><strong>WhatsApp Segurança:</strong> (11) 94015-9202</p>
      </div>
      
      <h2>Tendências em Segurança Náutica</h2>
      <p>O futuro da segurança náutica aponta para integração total e automação inteligente:</p>
      <ul>
        <li><strong>Inteligência artificial:</strong> Predição de situações de risco</li>
        <li><strong>Sistemas integrados:</strong> Comunicação entre todos os equipamentos</li>
        <li><strong>Monitoramento remoto:</strong> Supervisão 24/7 via satélite</li>
        <li><strong>Realidade aumentada:</strong> Treinamento imersivo da tripulação</li>
      </ul>
      
      <p><strong>A segurança náutica premium não é um custo, é um investimento na tranquilidade e no prazer de navegar com confiança absoluta.</strong></p>
    `,
    author: "Capitão Marina Santos",
    date: "12 de Janeiro, 2024",
    readTime: "7 min",
    category: "Segurança Náutica",
    image: safetyImage
  },
  {
    id: "3",
    title: "Manutenção de Embarcações Premium: Guia Definitivo para Proprietários",
    slug: "manutencao-embarcacoes-guia-completo-proprietarios",
    excerpt: "Aprenda as melhores práticas de manutenção preventiva e corretiva para manter sua embarcação sempre em perfeitas condições de navegação.",
    content: `
      <h2>Manutenção Premium: O Segredo da Longevidade Náutica</h2>
      <p>Uma embarcação premium bem mantida não apenas preserva seu valor de investimento, mas garante performance superior e segurança absoluta. No segmento de luxo, a excelência na manutenção é o que diferencia proprietários experientes dos amadores.</p>
      
      <h2>Filosofia da Manutenção Preventiva</h2>
      <p>A manutenção preventiva é um investimento, não um custo. Cada real investido em prevenção economiza cinco em reparos corretivos:</p>
      
      <h3>Benefícios Comprovados</h3>
      <ul>
        <li><strong>Preservação do valor:</strong> Embarcações bem mantidas mantêm 85% do valor após 5 anos</li>
        <li><strong>Confiabilidade:</strong> Redução de 90% em falhas inesperadas</li>
        <li><strong>Performance:</strong> Manutenção da eficiência original dos sistemas</li>
        <li><strong>Segurança:</strong> Eliminação de riscos por negligência</li>
      </ul>
      
      <h2>Cronograma de Manutenção Sazonal</h2>
      
      <h3>Manutenção Semanal (Durante Temporada)</h3>
      <ul>
        <li><strong>Limpeza do casco:</strong> Remoção de algas e incrustações marinhas</li>
        <li><strong>Verificação de fluidos:</strong> Óleo do motor, sistema hidráulico, água de resfriamento</li>
        <li><strong>Inspeção visual completa:</strong> Sinais de vazamentos, corrosão ou danos</li>
        <li><strong>Teste de sistemas:</strong> Luzes de navegação, bombas de porão, sistemas elétricos</li>
      </ul>
      
      <h3>Manutenção Quinzenal</h3>
      <ul>
        <li>Verificação e limpeza de filtros de ar e combustível</li>
        <li>Inspeção de correias e mangueiras</li>
        <li>Teste de equipamentos de segurança</li>
        <li>Limpeza profunda dos compartimentos internos</li>
      </ul>
      
      <h3>Manutenção Mensal</h3>
      <ul>
        <li><strong>Troca de óleo do motor:</strong> Conforme especificações do fabricante</li>
        <li><strong>Sistema elétrico:</strong> Verificação de bateria e conexões</li>
        <li><strong>Propulsão:</strong> Inspeção de hélices, eixos e vedações</li>
        <li><strong>Acabamentos:</strong> Enceramento e proteção UV</li>
      </ul>
      
      <blockquote>
        "Um motor marinho premium bem cuidado pode superar 3.000 horas de operação mantendo performance original. A chave está na manutenção preventiva rigorosa e produtos de qualidade superior." - José Ribeiro, Técnico Master MARBANA
      </blockquote>
      
      <h2>Cuidados Especializados com Motorização</h2>
      <p>O sistema propulsor é o coração da embarcação e merece atenção especial:</p>
      
      <h3>Procedimentos Essenciais</h3>
      <ul>
        <li><strong>Aquecimento gradual:</strong> 5 minutos em marcha lenta antes de acelerar</li>
        <li><strong>Flush completo:</strong> Água doce após cada uso em ambiente salino</li>
        <li><strong>Combustível premium:</strong> Apenas postos certificados e aditivos de qualidade</li>
        <li><strong>Monitoramento contínuo:</strong> Temperatura, pressão e consumo</li>
      </ul>
      
      <h3>Manutenção Especializada por Horas</h3>
      <ul>
        <li><strong>100h:</strong> Primeira revisão completa com troca de todos os filtros</li>
        <li><strong>250h:</strong> Inspeção de injetores e sistema de ignição</li>
        <li><strong>500h:</strong> Revisão de transmissão e sistema de arrefecimento</li>
        <li><strong>1000h:</strong> Overhaul parcial com substituição de componentes críticos</li>
      </ul>
      
      <h2>Preservação de Casco e Acabamentos</h2>
      <p>A beleza estética e integridade estrutural caminham juntas no segmento premium:</p>
      
      <h3>Cuidados com Gel Coat</h3>
      <ul>
        <li><strong>Lavagem semanal:</strong> Produtos específicos para gel coat náutico</li>
        <li><strong>Enceramento bimestral:</strong> Ceras premium com proteção UV</li>
        <li><strong>Polimento semestral:</strong> Restauração do brilho original</li>
        <li><strong>Reparo imediato:</strong> Correção de riscos antes da oxidação</li>
      </ul>
      
      <h3>Proteção Preventiva</h3>
      <ul>
        <li>Capas náuticas durante períodos sem uso</li>
        <li>Enceramento adicional antes da entressafra</li>
        <li>Aplicação de produtos anti-incrustantes</li>
        <li>Inspeção regular de passadores e ferragens</li>
      </ul>
      
      <h2>Sistemas Elétricos e Eletrônicos Premium</h2>
      <p>A tecnologia embarcada exige cuidados específicos para funcionar perfeitamente:</p>
      
      <h3>Proteção Contra Ambiente Marinho</h3>
      <ul>
        <li><strong>Vedação hermética:</strong> Proteção contra umidade e sal</li>
        <li><strong>Ventilação forçada:</strong> Circulação de ar em compartimentos eletrônicos</li>
        <li><strong>Supressores de surto:</strong> Proteção contra picos de tensão</li>
        <li><strong>Backup de energia:</strong> Sistemas ininterruptos de energia</li>
      </ul>
      
      <h3>Manutenção de Software e Hardware</h3>
      <ul>
        <li>Atualizações regulares de cartas náuticas</li>
        <li>Backup periódico de configurações</li>
        <li>Limpeza de conectores e cabos</li>
        <li>Calibração de sensores e instrumentos</li>
      </ul>
      
      <h2>Preparação Sazonal Profissional</h2>
      
      <h3>Ativação para Nova Temporada</h3>
      <ul>
        <li><strong>Checklist completo:</strong> 127 pontos de verificação</li>
        <li><strong>Sea trial profissional:</strong> Teste de todos os sistemas</li>
        <li><strong>Atualizações tecnológicas:</strong> Software e cartas náuticas</li>
        <li><strong>Certificação de segurança:</strong> Vistoria técnica completa</li>
      </ul>
      
      <h3>Hibernação para Entressafra</h3>
      <ul>
        <li><strong>Preparação do motor:</strong> Fogging e preservação interna</li>
        <li><strong>Sistemas hidráulicos:</strong> Drenagem e preservação</li>
        <li><strong>Eletrônica:</strong> Desconexão e armazenamento adequado</li>
        <li><strong>Casco:</strong> Limpeza profunda e proteção total</li>
      </ul>
      
      <h2>Parceiros Técnicos Certificados</h2>
      <p>A MARBANA mantém rede exclusiva de técnicos especializados:</p>
      
      <h3>Serviços Especializados</h3>
      <ul>
        <li><strong>Mecânica naval:</strong> Técnicos certificados por fabricantes</li>
        <li><strong>Eletrônica marinha:</strong> Especialistas em marcas premium</li>
        <li><strong>Estética náutica:</strong> Profissionais em acabamentos de luxo</li>
        <li><strong>Vistoria técnica:</strong> Laudos para seguros e financiamentos</li>
      </ul>
      
      <div style="background: linear-gradient(135deg, #059669, #047857); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Plano de Manutenção Personalizado</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Desenvolvemos cronogramas específicos para cada modelo e perfil de uso, garantindo máxima eficiência e economia.</p>
        <p><strong>WhatsApp Técnico:</strong> (11) 94015-9202</p>
      </div>
      
      <h2>Investimento vs. Economia</h2>
      <p>O custo anual de manutenção preventiva representa 8-12% do valor da embarcação, mas:</p>
      <ul>
        <li>Evita reparos de emergência (3x mais caros)</li>
        <li>Mantém garantias de fábrica</li>
        <li>Preserva valor de revenda</li>
        <li>Garante disponibilidade total</li>
      </ul>
      
      <h2>Tecnologia na Manutenção</h2>
      <p>Sistemas modernos facilitam o acompanhamento:</p>
      <ul>
        <li><strong>Apps de monitoramento:</strong> Status em tempo real</li>
        <li><strong>Sensores IoT:</strong> Dados automáticos de performance</li>
        <li><strong>Manutenção preditiva:</strong> IA prevê necessidades</li>
        <li><strong>Histórico digital:</strong> Registro completo de serviços</li>
      </ul>
      
      <p><strong>Manutenção premium não é despesa, é investimento na excelência náutica e tranquilidade absoluta durante a navegação.</strong></p>
    `,
    author: "José Ribeiro",
    date: "8 de Janeiro, 2024",
    readTime: "10 min",
    category: "Manutenção",
    image: maintenanceImage
  },
  {
    id: "4",
    title: "Pesca Esportiva Oceânica Premium: Arte, Técnica e Adrenalina",
    slug: "pesca-esportiva-oceanica-tecnicas-equipamentos-premium",
    excerpt: "Descubra as melhores técnicas de pesca oceânica e os equipamentos premium essenciais para uma experiência inesquecível em alto-mar.",
    content: `
      <h2>A Pesca Oceânica Premium: Onde Arte Encontra Adrenalina</h2>
      <p>A pesca esportiva oceânica representa o ápice da experiência náutica premium. Combina a emoção da caça marítima com a sofisticação de embarcações de alta performance, criando aventuras inesquecíveis nas águas profundas do litoral brasileiro.</p>
      
      <h2>Espécies Troféu do Litoral Brasileiro</h2>
      
      <h3>Costa Sudeste - Águas de Elite</h3>
      <ul>
        <li><strong>Marlin Azul (Makaira nigricans):</strong> O imperador dos mares, exemplares de até 400kg</li>
        <li><strong>Atum Albacora (Thunnus albacares):</strong> Velocidade pura e resistência excepcional</li>
        <li><strong>Dourado (Coryphaena hippurus):</strong> Beleza estonteante e sabor incomparável</li>
        <li><strong>Wahoo (Acanthocybium solandri):</strong> Míssil dos mares com 60+ km/h</li>
        <li><strong>Sailfish (Istiophorus platypterus):</strong> Acrobacias espetaculares</li>
      </ul>
      
      <h3>Costa Nordeste - Paraíso dos Grandes Peixes</h3>
      <ul>
        <li><strong>Marlin Branco:</strong> Espécie exclusiva de águas tropicais</li>
        <li><strong>Barracuda Gigante:</strong> Predador agressivo e implacável</li>
        <li><strong>Cação Martelo:</strong> Força bruta em estado puro</li>
        <li><strong>Cavala Real:</strong> Abundante e divertida para toda família</li>
      </ul>
      
      <blockquote>
        "A pesca oceânica premium transcende a captura - é uma dança ancestral entre homem e natureza, onde cada lance representa uma conexão profunda com o oceano." - Capitão Roberto Marques, Mestre em Pesca Oceânica
      </blockquote>
      
      <h2>Arsenal Premium: Equipamentos de Elite</h2>
      
      <h3>Varas e Molinetes de Primeira Linha</h3>
      <ul>
        <li><strong>Penn International VI Series:</strong> Lenda americana para grandes pelágicos</li>
        <li><strong>Shimano Stella SW:</strong> Precisão japonesa incomparável</li>
        <li><strong>Daiwa Saltiga Expedition:</strong> Performance extrema para águas salgadas</li>
        <li><strong>Accurate Boss Extreme:</strong> Potência bruta para marlins gigantes</li>
        <li><strong>Avet HXJ Raptor:</strong> Tecnologia californiana de ponta</li>
      </ul>
      
      <h3>Linhas e Leaders Premium</h3>
      <ul>
        <li><strong>Momoi Hi-Catch:</strong> Monofilamento premium japonês</li>
        <li><strong>Jerry Brown Decade:</strong> Multifilamento de elite</li>
        <li><strong>Fluorocarbono Seaguar:</strong> Invisibilidade total subaquática</li>
        <li><strong>Cable leaders:</strong> Proteção contra dentes afiados</li>
      </ul>
      
      <h2>Técnicas Avançadas de Pesca Premium</h2>
      
      <h3>Trolling de Alta Performance</h3>
      <p>A arte de arrastar iscas em velocidade otimizada:</p>
      <ul>
        <li><strong>Spread patterns:</strong> Configurações de 6-8 varas</li>
        <li><strong>Outriggers:</strong> Posicionamento perfeito das linhas</li>
        <li><strong>Teaser rigs:</strong> Atração sem anzol para provocar ataques</li>
        <li><strong>Speed control:</strong> 8-12 nós conforme espécie alvo</li>
      </ul>
      
      <h3>Live Bait Fishing</h3>
      <p>Pesca com iscas vivas para máxima naturalidade:</p>
      <ul>
        <li><strong>Tanques circuladores:</strong> Manutenção de iscas vivas</li>
        <li><strong>Kite fishing:</strong> Apresentação aérea com pipas</li>
        <li><strong>Balloon rigs:</strong> Controle de profundidade</li>
        <li><strong>Circle hooks:</strong> Fisgada perfeita e sustentável</li>
      </ul>
      
      <h3>Deep Dropping</h3>
      <p>Pesca de profundidade para espécies específicas:</p>
      <ul>
        <li><strong>Pesos de 2-5kg:</strong> Alcance de 200-500 metros</li>
        <li><strong>Electric reels:</strong> Recuperação assistida</li>
        <li><strong>Bottom charts:</strong> Mapeamento preciso do fundo</li>
        <li><strong>Multiple hook rigs:</strong> Maximização de chances</li>
      </ul>
      
      <h2>Tecnologia de Ponta para Pesca Premium</h2>
      
      <h3>Sondas e Fish Finders</h3>
      <ul>
        <li><strong>Garmin GPSMAP 8617:</strong> Sonar 3D de alta definição</li>
        <li><strong>Simrad NSS evo3S:</strong> Integração total com piloto automático</li>
        <li><strong>Raymarine Axiom Pro:</strong> Processamento quad-core</li>
        <li><strong>Furuno DFF3D:</strong> Visualização tridimensional de cardumes</li>
      </ul>
      
      <h3>Sistemas de Posicionamento</h3>
      <ul>
        <li><strong>GPS diferencial:</strong> Precisão submétrica</li>
        <li><strong>Waypoint management:</strong> Marcação de pontos produtivos</li>
        <li><strong>Track recording:</strong> Repetição de rotas bem-sucedidas</li>
        <li><strong>Weather routing:</strong> Rotas otimizadas por condições</li>
      </ul>
      
      <h2>Melhores Épocas e Condições</h2>
      
      <h3>Calendário Sazonal Premium</h3>
      <ul>
        <li><strong>Outubro-Dezembro:</strong> Temporada de marlins em pico</li>
        <li><strong>Janeiro-Março:</strong> Atuns e dourados em abundância</li>
        <li><strong>Abril-Junho:</strong> Wahoos e sailfish ativos</li>
        <li><strong>Julho-Setembro:</strong> Pesca de fundo e espécies residentes</li>
      </ul>
      
      <h3>Condições Ideais</h3>
      <ul>
        <li><strong>Temperatura da água:</strong> 24-28°C para espécies tropicais</li>
        <li><strong>Transparência:</strong> Águas azuis oceânicas</li>
        <li><strong>Correntes:</strong> Encontro de massas d'água diferentes</li>
        <li><strong>Fases lunares:</strong> Lua nova e cheia para maior atividade</li>
      </ul>
      
      <h2>Destinos Premium de Pesca Oceânica</h2>
      
      <h3>Costa Brasileira - Hotspots</h3>
      <ul>
        <li><strong>Cabo Frio - RJ:</strong> Ressurgências ricas em nutrientes</li>
        <li><strong>Vitória - ES:</strong> Plataforma continental ideal</li>
        <li><strong>Ilhéus - BA:</strong> Águas tropicais cristalinas</li>
        <li><strong>Natal - RN:</strong> Proximidade com águas oceânicas</li>
        <li><strong>Fernando de Noronha:</strong> Santuário de espécies pelágicas</li>
      </ul>
      
      <blockquote>
        "Cada expedição é única. O oceano oferece diferentes desafios e recompensas, mantendo a pesca oceânica sempre emocionante e imprevisível." - Marina Costa, Capitã Especialista
      </blockquote>
      
      <h2>Pesca Sustentável e Conservação</h2>
      <p>A pesca esportiva responsável garante recursos para futuras gerações:</p>
      
      <h3>Práticas Sustentáveis</h3>
      <ul>
        <li><strong>Catch and Release:</strong> Liberação de espécies ameaçadas</li>
        <li><strong>Circle hooks:</strong> Redução de mortalidade</li>
        <li><strong>Barbless hooks:</strong> Facilitação da soltura</li>
        <li><strong>Quota voluntária:</strong> Limitação de capturas</li>
      </ul>
      
      <h3>Apoio à Conservação</h3>
      <ul>
        <li>Contribuição para institutos de pesquisa</li>
        <li>Marcação de espécies para estudos</li>
        <li>Registro de dados científicos</li>
        <li>Educação ambiental contínua</li>
      </ul>
      
      <div style="background: linear-gradient(135deg, #0369a1, #0284c7); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Expedições Premium de Pesca</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Organize sua expedição dos sonhos com capitães especialistas, embarcações equipadas e roteiros exclusivos para os melhores pesqueiros.</p>
        <p><strong>WhatsApp Pesca:</strong> (11) 94015-9202</p>
      </div>
      
      <h2>Investimento em Experiências Únicas</h2>
      
      <h3>Custos de Expedições Premium</h3>
      <ul>
        <li><strong>Half-day (4h):</strong> R$ 2.500 - R$ 4.000</li>
        <li><strong>Full-day (8h):</strong> R$ 4.500 - R$ 7.000</li>
        <li><strong>Multi-day:</strong> R$ 8.000 - R$ 15.000 por dia</li>
        <li><strong>Expedições internacionais:</strong> USD 3.000 - 8.000 por dia</li>
      </ul>
      
      <h3>O Que Está Incluído</h3>
      <ul>
        <li>Embarcação premium totalmente equipada</li>
        <li>Capitão e tripulação especializados</li>
        <li>Equipamentos de pesca de primeira linha</li>
        <li>Iscas, combustível e licenças</li>
        <li>Serviço de bordo completo</li>
      </ul>
      
      <h2>Registro de Troféus</h2>
      <p>Documente suas conquistas para a posteridade:</p>
      <ul>
        <li><strong>Fotografia profissional:</strong> Registros de qualidade</li>
        <li><strong>Certificação IGFA:</strong> Recordes oficiais mundiais</li>
        <li><strong>Taxidermia premium:</strong> Preservação de troféus</li>
        <li><strong>Relatórios detalhados:</strong> Dados técnicos da pescaria</li>
      </ul>
      
      <p><strong>A pesca oceânica premium é mais que esporte - é uma paixão que conecta o pescador com a grandiosidade dos oceanos e a emoção da caça ancestral.</strong></p>
    `,
    author: "Capitão Roberto Marques",
    date: "5 de Janeiro, 2024",
    readTime: "9 min",
    category: "Pesca Esportiva",
    image: fishingImage
  },
  {
    id: "5",
    title: "Design de Interiores Náuticos Premium: Elegância em Alto-Mar",
    slug: "design-interiores-nauticos-luxo-funcionalidade",
    excerpt: "Explore as tendências em design naval que combinam elegância, conforto e praticidade nos interiores das embarcações mais sofisticadas do mundo.",
    content: `
      <h2>A Revolução do Design Naval Premium</h2>
      <p>O design de interiores náuticos transcendeu sua função utilitária para se tornar uma expressão artística sofisticada. Hoje, embarcações premium rivalizam com os mais luxuosos resorts terrestres, combinando estética refinada com funcionalidade marítima excepcional.</p>
      
      <h2>Filosofia do Design Náutico Contemporâneo</h2>
      <p>O design naval moderno segue princípios fundamentais que maximizam espaço, conforto e beleza:</p>
      
      <h3>Princípios Fundamentais</h3>
      <ul>
        <li><strong>Fluidez espacial:</strong> Integração harmoniosa entre ambientes</li>
        <li><strong>Funcionalidade inteligente:</strong> Cada elemento tem múltiplas funções</li>
        <li><strong>Luxo sustentável:</strong> Materiais nobres com consciência ambiental</li>
        <li><strong>Personalização absoluta:</strong> Reflexo do estilo de vida do proprietário</li>
      </ul>
      
      <h2>Tendências Dominantes no Design Premium</h2>
      
      <h3>Minimalismo Náutico Sofisticado</h3>
      <p>A elegância da simplicidade aplicada ao ambiente marinho:</p>
      <ul>
        <li><strong>Paleta neutra premium:</strong> Tons de areia, mar e céu</li>
        <li><strong>Linhas limpas e fluidas:</strong> Geometria que acompanha o movimento das ondas</li>
        <li><strong>Iluminação escultural:</strong> LED integrado como elemento decorativo</li>
        <li><strong>Superfícies contínuas:</strong> Minimização de juntas e transições</li>
      </ul>
      
      <h3>Conceito Seamless Living</h3>
      <p>Integração total entre interior e exterior:</p>
      <ul>
        <li><strong>Janelas panorâmicas:</strong> Conexão visual constante com o mar</li>
        <li><strong>Terraços expansíveis:</strong> Ambientes que se estendem sobre a água</li>
        <li><strong>Materiais de transição:</strong> Continuidade entre dentro e fora</li>
        <li><strong>Ventilação natural:</strong> Aproveitamento das brisas marinhas</li>
      </ul>
      
      <blockquote>
        "O segredo do design náutico premium está em fazer o limitado parecer infinito, criando ambientes que inspiram e acolhem simultaneamente." - Marina Design Studio Internacional
      </blockquote>
      
      <h2>Materiais de Elite para Ambiente Marinho</h2>
      
      <h3>Madeiras Nobres Tratadas</h3>
      <ul>
        <li><strong>Teca Birmânia Premium:</strong> Grão fino com resistência excepcional</li>
        <li><strong>Mogno Hondurenho:</strong> Tonalidade rica e durabilidade comprovada</li>
        <li><strong>Cherry Europeu:</strong> Elegância atemporal com tratamento náutico</li>
        <li><strong>Bambu Carbonizado:</strong> Sustentabilidade com sofisticação</li>
      </ul>
      
      <h3>Materiais Compostos Avançados</h3>
      <ul>
        <li><strong>Fibra de carbono decorativa:</strong> Leveza e resistência extremas</li>
        <li><strong>Corian náutico:</strong> Superfícies sólidas sem juntas</li>
        <li><strong>Vidro temperado naval:</strong> Transparência com segurança</li>
        <li><strong>Metais marinizados:</strong> Aço inox 316L e titânio</li>
      </ul>
      
      <h3>Tecidos e Estofamentos Premium</h3>
      <ul>
        <li><strong>Sunbrella Plus:</strong> Performance superior com toque sedoso</li>
        <li><strong>Crypton Home:</strong> Resistência total a manchas e odores</li>
        <li><strong>Alcantara Marina:</strong> Textura premium com praticidade</li>
        <li><strong>Couro náutico Foglizzo:</strong> Tradição italiana adaptada aos mares</li>
      </ul>
      
      <h2>Ambientes Específicos de Luxo</h2>
      
      <h3>Master Suite Oceânica</h3>
      <p>O santuário privativo do proprietário:</p>
      <ul>
        <li><strong>Cama king-size stabilizada:</strong> Sistema anti-enjoo integrado</li>
        <li><strong>Vista panorâmica 270°:</strong> Janelas do piso ao teto</li>
        <li><strong>Closet climatizado:</strong> Umidade controlada para roupas</li>
        <li><strong>Banheiro spa:</strong> Hidromassagem com vista para o mar</li>
        <li><strong>Terraço privativo:</strong> Acesso direto ao deck de sol</li>
      </ul>
      
      <h3>Galley Gourmet Premium</h3>
      <p>Centro gastronômico de alta performance:</p>
      <ul>
        <li><strong>Eletrodomésticos Miele:</strong> Linha náutica profissional</li>
        <li><strong>Bancadas em quartzo:</strong> Resistência e beleza sem manutenção</li>
        <li><strong>Adega climatizada:</strong> 200+ garrafas em temperatura ideal</li>
        <li><strong>Sistema de exaustão silencioso:</strong> Renovação de ar eficiente</li>
        <li><strong>Ilha central móvel:</strong> Configuração flexível conforme necessidade</li>
      </ul>
      
      <h3>Salão Social Multifuncional</h3>
      <p>Coração da vida social a bordo:</p>
      <ul>
        <li><strong>Mobiliário transformável:</strong> Configurações para diferentes ocasiões</li>
        <li><strong>Sistema de áudio 7.1:</strong> Sonorização cinematográfica</li>
        <li><strong>Iluminação cênica:</strong> 16 milhões de cores programáveis</li>
        <li><strong>Bar molhado integrado:</strong> Conveniência para entretenimento</li>
      </ul>
      
      <h2>Tecnologia Invisível Integrada</h2>
      
      <h3>Automação Residencial Naval</h3>
      <ul>
        <li><strong>Controle climático inteligente:</strong> Temperatura ideal por zona</li>
        <li><strong>Cortinas e persianas automatizadas:</strong> Controle solar automático</li>
        <li><strong>Sistema de som distribuído:</strong> Áudio ambiente perfeito</li>
        <li><strong>Iluminação adaptativa:</strong> Intensidade conforme horário</li>
      </ul>
      
      <h3>Conectividade Seamless</h3>
      <ul>
        <li><strong>Wi-Fi mesh marino:</strong> Cobertura total sem zonas mortas</li>
        <li><strong>Carregamento wireless integrado:</strong> Superfícies que carregam dispositivos</li>
        <li><strong>Controle por voz multilíngue:</strong> Comandos em português, inglês e espanhol</li>
        <li><strong>Integração com smartphones:</strong> Casa inteligente no mar</li>
      </ul>
      
      <h2>Ergonomia e Segurança Premium</h2>
      
      <h3>Design Seguro em Movimento</h3>
      <ul>
        <li><strong>Cantos arredondados:</strong> Eliminação de arestas perigosas</li>
        <li><strong>Sistemas anti-deslizamento:</strong> Segurança mesmo com mar agitado</li>
        <li><strong>Apoios estratégicos:</strong> Corrimãos integrados ao design</li>
        <li><strong>Gavetas com travas:</strong> Segurança automática durante navegação</li>
      </ul>
      
      <h3>Acessibilidade Universal</h3>
      <ul>
        <li>Passagens amplas para cadeirantes</li>
        <li>Alturas adaptáveis de bancadas</li>
        <li>Iluminação anti-reflexo</li>
        <li>Comandos em altura universal</li>
      </ul>
      
      <blockquote>
        "O design náutico premium não é apenas sobre beleza - é sobre criar experiências memoráveis que enriquecem a alma e conectam as pessoas ao mar." - Alessandro Luxury Yachts
      </blockquote>
      
      <h2>Sustentabilidade no Design Naval</h2>
      
      <h3>Materiais Eco-Friendly</h3>
      <ul>
        <li><strong>Madeiras certificadas FSC:</strong> Reflorestamento responsável</li>
        <li><strong>Tintas base água:</strong> Zero emissão de VOCs</li>
        <li><strong>Isolamentos naturais:</strong> Cortiça e fibras vegetais</li>
        <li><strong>Metais reciclados:</strong> Alumínio e aço reprocessados</li>
      </ul>
      
      <h3>Eficiência Energética</h3>
      <ul>
        <li>LED de baixíssimo consumo</li>
        <li>Isolamento térmico superior</li>
        <li>Ventilação natural otimizada</li>
        <li>Sistemas de recuperação de energia</li>
      </ul>
      
      <div style="background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; color: white;">
        <h3 style="margin-bottom: 1rem; color: white;">Design Naval Personalizado</h3>
        <p style="margin-bottom: 1.5rem; color: rgba(255,255,255,0.9);">Conectamos você aos melhores designers navais especializados em interiores premium, criando ambientes únicos que refletem sua personalidade.</p>
        <p><strong>WhatsApp Design:</strong> (11) 94015-9202</p>
      </div>
      
      <h2>Tendências Futuras</h2>
      
      <h3>Inovações Emergentes</h3>
      <ul>
        <li><strong>Holografia decorativa:</strong> Arte digital tridimensional</li>
        <li><strong>Materiais auto-reparadores:</strong> Superfícies que se regeneram</li>
        <li><strong>Biofilia integrada:</strong> Jardins verticais marinhos</li>
        <li><strong>Realidade aumentada:</strong> Personalização visual instantânea</li>
      </ul>
      
      <h2>Investimento em Experiências</h2>
      
      <h3>Valores de Projetos Premium</h3>
      <ul>
        <li><strong>Reforma completa 30-40 pés:</strong> R$ 150.000 - R$ 300.000</li>
        <li><strong>Projeto novo 40-60 pés:</strong> R$ 400.000 - R$ 800.000</li>
        <li><strong>Superyacht 60+ pés:</strong> R$ 1.000.000 - R$ 3.000.000</li>
        <li><strong>Customização de fábrica:</strong> 20-30% do valor da embarcação</li>
      </ul>
      
      <h3>Retorno do Investimento</h3>
      <p>Um projeto de design interior premium pode representar 15-25% do valor da embarcação, mas:</p>
      <ul>
        <li>Adiciona 30-40% ao valor de revenda</li>
        <li>Reduz tempo de venda em 60%</li>
        <li>Multiplica prazer de uso exponencialmente</li>
        <li>Cria patrimônio emocional inestimável</li>
      </ul>
      
      <p><strong>Design náutico premium é investimento em qualidade de vida - transforma embarcações em verdadeiros lares flutuantes onde cada detalhe conta uma história de elegância e sofisticação.</strong></p>
    `,
    author: "Marina Design Studio",
    date: "2 de Janeiro, 2024",
    readTime: "8 min",
    category: "Design Naval",
    image: interiorImage
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'Todos') {
    return blogPosts;
  }
  return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  return blogPosts.filter(post => post.id !== currentPostId).slice(0, limit);
};