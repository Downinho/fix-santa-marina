import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, TrendingUp, Camera, Users, Award, Shield } from "lucide-react";

const Anuncie = () => {
  const plans = [
    {
      name: "Premium",
      price: "R$ 199",
      period: "/mês",
      description: "Ideal para proprietários que querem máxima visibilidade",
      features: [
        "Anúncio em destaque na homepage",
        "Até 20 fotos profissionais",
        "Vídeo de apresentação",
        "Tour virtual 360°",
        "Selo Premium",
        "Suporte prioritário",
        "Estatísticas detalhadas",
        "Divulgação em redes sociais"
      ],
      highlight: true,
      badge: "Mais Popular"
    },
    {
      name: "Platinum",
      price: "R$ 399",
      period: "/mês",
      description: "Para embarcações de alto luxo que merecem tratamento VIP",
      features: [
        "Tudo do plano Premium",
        "Filmagem aérea profissional",
        "Fotografia subaquática",
        "Consultoria de precificação",
        "Atendimento personalizado",
        "Marketing premium",
        "Anúncio no topo da busca",
        "Relatório mensal detalhado"
      ],
      highlight: false,
      badge: "VIP"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Visibilidade Máxima",
      description: "Sua embarcação em destaque para milhares de compradores qualificados"
    },
    {
      icon: Camera,
      title: "Mídia Profissional",
      description: "Fotos, vídeos e tours virtuais de qualidade cinematográfica"
    },
    {
      icon: Users,
      title: "Público Qualificado",
      description: "Acesso direto a compradores sérios interessados em embarcações premium"
    },
    {
      icon: Award,
      title: "Selo de Qualidade",
      description: "Certificação MARBANA que agrega valor à sua embarcação"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Processo de venda seguro com suporte especializado em cada etapa"
    },
    {
      icon: Star,
      title: "Atendimento VIP",
      description: "Consultor dedicado para acompanhar todo o processo de venda"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Cadastro e Avaliação",
      description: "Cadastre sua embarcação e nossa equipe fará uma avaliação inicial gratuita"
    },
    {
      number: "02",
      title: "Escolha do Plano",
      description: "Selecione o plano que melhor se adequa ao perfil da sua embarcação"
    },
    {
      number: "03",
      title: "Produção de Mídia",
      description: "Nossa equipe criará todo material fotográfico e audiovisual profissional"
    },
    {
      number: "04",
      title: "Publicação Premium",
      description: "Seu anúncio entra no ar com máxima visibilidade em nossa plataforma"
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
                Anuncie sua Embarcação
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                Conecte-se aos compradores mais qualificados do mercado náutico brasileiro. 
                Planos premium com resultados garantidos.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Badge className="bg-gradient-gold text-accent-gold-foreground font-body">
                  Mercado Livre dos Mares
                </Badge>
                <Badge variant="outline" className="font-body">
                  98% de Satisfação
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Por que anunciar conosco?
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                A MARBANA oferece a melhor plataforma do mercado para 
                venda de embarcações premium no Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-4">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Planos de Anúncio
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Escolha o plano ideal para destacar sua embarcação no mercado premium
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative group hover:shadow-premium transition-all duration-300 ${
                    plan.highlight ? 'ring-2 ring-accent-gold/30 scale-105' : ''
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className={`${
                        plan.highlight 
                          ? 'bg-gradient-gold text-accent-gold-foreground' 
                          : 'bg-gradient-hero text-primary-foreground'
                      } font-body px-4 py-1`}>
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="font-display text-2xl font-bold text-primary mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="font-display text-4xl font-bold text-primary">
                          {plan.price}
                        </span>
                        <span className="font-body text-muted-foreground ml-1">
                          {plan.period}
                        </span>
                      </div>
                      <p className="font-body text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center font-body">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      size="lg" 
                      className={`w-full font-body font-medium ${
                        plan.highlight 
                          ? 'bg-gradient-gold hover:bg-accent-gold/90 text-accent-gold-foreground' 
                          : 'bg-gradient-hero hover:opacity-90 text-primary-foreground'
                      }`}
                    >
                      {plan.highlight ? (
                        <>
                          <Crown className="w-5 h-5 mr-2" />
                          Escolher Premium
                        </>
                      ) : (
                        'Escolher Platinum'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="font-body text-muted-foreground mb-4">
                Não encontrou o plano ideal? Entre em contato para um orçamento personalizado.
              </p>
              <Button variant="outline" size="lg" className="font-body">
                Falar com Consultor
              </Button>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Como Funciona
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Processo simples e descomplicado para colocar sua embarcação no mercado premium
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="group hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="font-display text-2xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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
              Pronto para vender sua embarcação?
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Junte-se aos proprietários que já venderam mais de R$ 2 bilhões 
              em embarcações através da nossa plataforma.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-body"
              >
                Começar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 font-body"
              >
                Solicitar Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Anuncie;