import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Anchor, Eye, Users } from "lucide-react";
import { useVessels } from "@/hooks/useVessels";

const FeaturedVessels = () => {
  // Buscar embarcações do banco de dados
  const { vessels: displayVessels, loading } = useVessels({});

  if (loading) {
    return (
      <section className="py-20 bg-gradient-ocean">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando embarcações...</p>
          </div>
        </div>
      </section>
    );
  }

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
          {displayVessels.slice(0, 4).map((vessel, index) => {
            const viewingNow = Math.floor(Math.random() * 3) + 3; // 3-5 pessoas
            return (
            <Card 
              key={vessel.id} 
              className="group cursor-pointer hover:shadow-premium transition-all duration-300 overflow-hidden"
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
                
                <div className="absolute top-4 right-4 flex space-x-2 z-20">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="bg-background/90 backdrop-blur-sm border-background/20 hover:bg-background z-30"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="bg-background/90 backdrop-blur-sm border-background/20 hover:bg-background z-30"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600/90 text-white backdrop-blur-sm font-body">
                    <Users className="w-3 h-3 mr-1" />
                    {viewingNow} vendo agora
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm font-body">
                    {vessel.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl font-semibold text-primary mb-2 truncate">
                      {vessel.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground font-body mb-2">
                      <MapPin className="w-4 h-4 mr-1 shrink-0" />
                      <span className="truncate">{vessel.location}</span>
                    </div>
                  </div>
                  <div className="text-right ml-4 shrink-0">
                    <div className="font-display text-xl md:text-2xl font-bold text-primary">
                      {vessel.price}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground font-body gap-4">
                  <span className="whitespace-nowrap">Ano: {vessel.year}</span>
                  <span className="flex items-center shrink-0">
                    <Anchor className="w-4 h-4 mr-1" />
                    {vessel.length}
                  </span>
                </div>
                
                <Button className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body relative" asChild>
                  <Link to={`/embarcacao/${vessel.slug}`}>
                    Ver Detalhes
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
          )}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-body font-medium min-w-[200px]"
            asChild
          >
            <Link to="/embarcacoes">Ver Todas as Embarcações</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVessels;