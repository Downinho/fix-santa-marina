import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Camera, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Curadoria Exclusiva",
      description: "Cada embarcação passa por rigorosa inspeção e validação antes de ser listada em nossa plataforma."
    },
    {
      icon: Camera,
      title: "Fotos Profissionais",
      description: "Sessões fotográficas profissionais e tours virtuais 360° para apresentar cada detalhe."
    },
    {
      icon: Users,
      title: "Atendimento VIP",
      description: "Consultores especializados dedicados para acompanhar todo o processo de compra e venda."
    },
    {
      icon: Award,
      title: "Experiência Premium",
      description: "15 anos de tradição no mercado náutico com centenas de negociações bem-sucedidas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Tradição e <span className="text-accent-gold">Excelência</span> Náutica
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              MARBANA nasceu da paixão pelo mar e pelo compromisso com a excelência. 
              Somos mais que um marketplace - somos curadores de experiências náuticas extraordinárias, 
              conectando pessoas aos seus sonhos aquáticos com o mais alto nível de sofisticação e confiança.
            </p>
            
            <div className="mb-8">
              <h3 className="font-display text-2xl font-semibold text-primary mb-4">
                Nossos Diferenciais
              </h3>
              <ul className="space-y-3 font-body text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  Inspeção técnica completa de todas as embarcações
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  Documentação verificada e regularizada
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  Consultoria especializada em financiamento náutico
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  Pós-venda com acompanhamento dedicado
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium"
                onClick={() => window.location.href = '/sobre'}
              >
                Conheça Nossa História
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-body font-medium"
                onClick={() => window.location.href = '/contato'}
              >
                Fale com um Consultor
              </Button>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-subtle transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-accent-gold-foreground" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h4>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;