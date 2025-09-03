import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, TrendingUp, Camera, Users, Award, Shield, Anchor, Settings, Camera as CameraIcon, MapPin, Star } from "lucide-react";
import { useState } from "react";

const Anuncie = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    {
      id: "embarcacoes",
      name: "Embarcações",
      icon: Anchor,
      description: "Venda ou alugue sua embarcação",
      types: ["Venda", "Aluguel por hora", "Aluguel por dia"]
    },
    {
      id: "acessorios",
      name: "Acessórios",
      icon: Settings,
      description: "Venda peças e equipamentos náuticos",
      types: ["Eletrônicos", "Segurança", "Manutenção", "Decoração"]
    },
    {
      id: "servicos",
      name: "Serviços",
      icon: Users,
      description: "Ofereça seus serviços profissionais",
      types: ["Marinheiro", "Manutenção", "Consultoria", "Transporte"]
    },
    {
      id: "fotografia",
      name: "Fotografia",
      icon: CameraIcon,
      description: "Serviços de fotografia e filmagem",
      types: ["Eventos", "Ensaios", "Drone", "Submarino"]
    },
    {
      id: "marinas",
      name: "Marinas",
      icon: MapPin,
      description: "Anuncie vagas em sua marina",
      types: ["Berços", "Garagem seca", "Serviços"]
    }
  ];
  const whatsappNumber = "+5511940159202";
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

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
    <Layout>
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-ocean py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                Anuncie no MARBANA
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                Divulgue embarcações, acessórios ou seus serviços náuticos conosco. 
                Entre em contato via WhatsApp para acertar os detalhes do seu anúncio.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Badge className="bg-gradient-gold text-accent-gold-foreground font-body">
                  Marketplace Náutico
                </Badge>
                <Badge variant="outline" className="font-body">
                  98% de Satisfação
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Category Selection */}
        {!selectedCategory && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-primary mb-6">
                  O que você quer anunciar?
                </h2>
                <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                  Escolha a categoria do seu anúncio para começar
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {categories.map((category) => (
                  <Card 
                    key={category.id} 
                    className="group hover:shadow-premium transition-all duration-300 cursor-pointer hover:scale-105"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-6">
                        <category.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-primary mb-4">
                        {category.name}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.types.slice(0, 3).map((type, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

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

        {/* Contact Section */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-6">
                Como Anunciar
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Todos os anúncios são gerenciados diretamente conosco para garantir máxima qualidade
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-primary mb-4">
                      Entre em Contato via WhatsApp
                    </h3>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      Nossa equipe especializada irá avaliar seu anúncio e criar uma estratégia 
                      personalizada para máxima visibilidade. Clique no botão abaixo para iniciar.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Button 
                      size="lg" 
                      onClick={() => openWhatsApp("Olá! Gostaria de anunciar no MARBANA. Podem me ajudar?")}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-body text-lg py-6"
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      {whatsappNumber} - Falar Agora
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="font-display text-xl font-bold text-primary">1</span>
                        </div>
                        <h4 className="font-display font-semibold text-primary mb-2">Contato Inicial</h4>
                        <p className="font-body text-sm text-muted-foreground">
                          Entre em contato e conte sobre o que deseja anunciar
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="font-display text-xl font-bold text-primary">2</span>
                        </div>
                        <h4 className="font-display font-semibold text-primary mb-2">Avaliação</h4>
                        <p className="font-body text-sm text-muted-foreground">
                          Nossa equipe avalia e define a melhor estratégia
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <span className="font-display text-xl font-bold text-primary">3</span>
                        </div>
                        <h4 className="font-display font-semibold text-primary mb-2">Publicação</h4>
                        <p className="font-body text-sm text-muted-foreground">
                          Criamos e publicamos seu anúncio premium
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              Faça parte da plataforma náutica mais exclusiva do Brasil. 
              Entre em contato e comece a divulgar hoje mesmo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp("Olá! Quero começar a anunciar no MARBANA hoje mesmo!")}
                className="bg-green-600 hover:bg-green-700 text-white font-body"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button 
                size="lg" 
                onClick={() => openWhatsApp("Olá! Gostaria de saber mais sobre os anúncios no MARBANA.")}
                variant="outline"
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 font-body"
              >
                Saber Mais
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Anuncie;