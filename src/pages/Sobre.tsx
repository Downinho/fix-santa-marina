import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, TrendingUp } from "lucide-react";

const Sobre = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Anos de Experiência" },
    { icon: Users, number: "500+", label: "Embarcações Premium" },
    { icon: MapPin, number: "98%", label: "Clientes Satisfeitos" },
    { icon: TrendingUp, number: "R$ 2B+", label: "Em Transações" }
  ];

  const values = [
    {
      title: "Excelência",
      description: "Comprometimento com os mais altos padrões de qualidade em cada embarcação e serviço oferecido."
    },
    {
      title: "Confiança",
      description: "Transparência total em cada transação, construindo relacionamentos duradouros com nossos clientes."
    },
    {
      title: "Inovação",
      description: "Utilizamos as mais avançadas tecnologias para oferecer a melhor experiência do mercado náutico."
    },
    {
      title: "Personalização",
      description: "Cada cliente recebe atendimento exclusivo, adaptado às suas necessidades específicas."
    }
  ];

  return (
    <Layout>
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-ocean py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                MARBANA
              </h1>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-accent-gold mb-6">
                A Rainha dos Mares
              </h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                Localizada em Búzios, Rio de Janeiro, somos o marketplace premium que conecta 
                pessoas apaixonadas pelo mar às embarcações mais exclusivas do Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-primary mb-6">
                  Nossa História
                </h3>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Fundada há mais de 15 anos no coração de Búzios, a MARBANA nasceu 
                    da paixão pelo mar e da visão de criar um mercado verdadeiramente premium 
                    para embarcações de luxo.
                  </p>
                  <p>
                    O que começou como uma pequena corretora especializada em iates, hoje é 
                    reconhecida como o "Maior Ecossistema Náutico do Brasil" - uma plataforma que combina 
                    tradição náutica com inovação tecnológica.
                  </p>
                  <p>
                    Nossa curadoria rigorosa e atendimento personalizado garantem que cada 
                    embarcação em nossa plataforma atenda aos mais altos padrões de qualidade 
                    e segurança.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
                  alt="Vista de Búzios - Nossa sede"
                  className="w-full h-96 object-cover rounded-2xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  <div className="font-display text-3xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="font-body text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="font-display text-4xl font-bold text-primary mb-6">
                Nossos Valores
              </h3>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Os princípios que guiam cada decisão e definem nossa essência como 
                líderes no mercado náutico de luxo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-8">
                    <h4 className="font-display text-2xl font-semibold text-primary mb-4">
                      {value.title}
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-ocean">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-display text-4xl font-bold text-primary mb-6">
                Nossa Missão
              </h3>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                Conectar pessoas ao mar através de embarcações excepcionais, oferecendo 
                uma experiência de compra e venda que supera expectativas e cria 
                memórias duradouras nas águas do Brasil.
              </p>
              <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Sobre;