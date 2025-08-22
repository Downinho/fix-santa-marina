import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Search, FileText, Users, Phone, Award } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      icon: Camera,
      title: "Filmagens Aquáticas",
      description: "Produção profissional de vídeos e fotos subaquáticas e aéreas para destacar sua embarcação com qualidade cinematográfica.",
      features: ["Filmagem drone 4K", "Fotografia subaquática", "Tour virtual 360°", "Edição profissional"],
      highlight: true
    },
    {
      icon: Search,
      title: "Consultoria para Compra",
      description: "Orientação especializada para encontrar a embarcação ideal, incluindo análise técnica e negociação.",
      features: ["Análise de mercado", "Vistoria técnica", "Consultoria financeira", "Suporte na negociação"]
    },
    {
      icon: FileText,
      title: "Inspeção Pré-Compra",
      description: "Inspeção detalhada por especialistas certificados para garantir a qualidade e segurança da embarcação.",
      features: ["Inspeção de casco", "Análise de motores", "Sistemas eletrônicos", "Relatório completo"]
    },
    {
      icon: Users,
      title: "Gestão de Anúncios",
      description: "Criação e gestão completa de anúncios premium com fotos profissionais e copy otimizado.",
      features: ["Fotografia profissional", "Redação especializada", "SEO otimizado", "Divulgação multiplataforma"]
    },
    {
      icon: Award,
      title: "Certificação Premium",
      description: "Selo de qualidade MARBANA que valida a excelência e autenticidade de embarcações selecionadas.",
      features: ["Vistoria rigorosa", "Selo de qualidade", "Garantia estendida", "Suporte pós-venda"]
    },
    {
      icon: Phone,
      title: "Atendimento VIP",
      description: "Atendimento personalizado com consultor dedicado para compradores e vendedores premium.",
      features: ["Consultor dedicado", "Atendimento 24/7", "Agendamento personalizado", "Suporte exclusivo"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* Hero Section */}
        <section className="bg-gradient-ocean py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                Serviços Premium
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                Do primeiro contato até a entrega das chaves, oferecemos uma experiência completa 
                e personalizada no mercado náutico de luxo.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-premium transition-all duration-300 ${
                    service.highlight ? 'ring-2 ring-accent-gold/20 bg-gradient-to-br from-accent-gold/5 to-transparent' : ''
                  }`}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                      service.highlight 
                        ? 'bg-gradient-gold text-accent-gold-foreground' 
                        : 'bg-gradient-hero text-primary-foreground'
                    }`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-semibold text-primary mb-4">
                      {service.title}
                      {service.highlight && (
                        <span className="ml-2 inline-block px-2 py-1 text-xs bg-gradient-gold text-accent-gold-foreground rounded-full">
                          Destaque
                        </span>
                      )}
                    </h3>
                    
                    <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center font-body text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full font-body group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => window.location.href = '/contato'}
                    >
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Pronto para uma experiência premium?
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para atender suas necessidades 
              específicas no mercado náutico de luxo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 font-body"
              >
                Agendar Consulta
              </Button>
              <Button 
                size="lg" 
                className="bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-body"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;