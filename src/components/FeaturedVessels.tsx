import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Anchor, Eye } from "lucide-react";

const FeaturedVessels = () => {
  const vessels = [
    {
      id: 1,
      name: "Azimut 68",
      type: "Iate",
      price: "R$ 2.800.000",
      location: "Angra dos Reis, RJ",
      year: "2021",
      length: "68 pés",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      name: "Ferretti 720",
      type: "Iate",
      price: "R$ 4.200.000",
      location: "Santos, SP",
      year: "2022",
      length: "72 pés",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 3,
      name: "Princess V50",
      type: "Lancha",
      price: "R$ 1.850.000",
      location: "Guarujá, SP",
      year: "2020",
      length: "50 pés",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 4,
      name: "Sunseeker 74",
      type: "Iate",
      price: "R$ 3.900.000",
      location: "Búzios, RJ",
      year: "2021",
      length: "74 pés",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-ocean">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Embarcações em Destaque
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Seleção exclusiva das melhores embarcações do mercado, 
            cuidadosamente curadas para atender aos mais exigentes padrões de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {vessels.map((vessel, index) => (
            <Card 
              key={vessel.id} 
              className={`group cursor-pointer hover:shadow-premium transition-all duration-300 overflow-hidden ${
                index < 2 ? 'md:h-96' : 'md:h-80'
              }`}
            >
              <div className="relative h-64 md:h-48 overflow-hidden">
                <img 
                  src={vessel.image} 
                  alt={vessel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {vessel.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-gold text-accent-gold-foreground font-body">
                    Destaque Premium
                  </Badge>
                )}
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="bg-background/90 backdrop-blur-sm border-background/20"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="bg-background/90 backdrop-blur-sm border-background/20"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm font-body">
                    {vessel.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                      {vessel.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground font-body mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {vessel.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-bold text-primary">
                      {vessel.price}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground font-body">
                  <span>Ano: {vessel.year}</span>
                  <span className="flex items-center">
                    <Anchor className="w-4 h-4 mr-1" />
                    {vessel.length}
                  </span>
                </div>
                
                <Button className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body" asChild>
                  <a href="/embarcacoes">Ver Detalhes</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-body font-medium min-w-[200px]"
            asChild
          >
            <a href="/embarcacoes">Ver Todas as Embarcações</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVessels;