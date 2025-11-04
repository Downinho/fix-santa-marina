import { useState } from 'react';
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Anchor, Shield, Wifi, Utensils, Car, Waves } from "lucide-react";
import { useMarinas } from "@/hooks/useMarinas";
import { Link } from 'react-router-dom';

const Marinas = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const { marinas, loading, error } = useMarinas({ location: searchLocation });

  const formatPrice = (priceInCents: number) => {
    if (!priceInCents) return 'Consultar';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(priceInCents / 100);
  };

  const getAmenityIcon = (amenity: string) => {
    const icons: any = {
      'Wi-Fi': Wifi,
      'Restaurante': Utensils,
      'Estacionamento': Car,
      'default': Waves
    };
    return icons[amenity] || icons.default;
  };

  return (
    <Layout>
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="mb-8">
                <Anchor className="w-20 h-20 text-accent-gold mx-auto mb-6" />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                Marinas Premium
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Encontre as melhores marinas para guardar sua embarcação. 
                Infraestrutura completa, segurança e serviços de excelência.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-premium max-w-4xl mx-auto">
              <Input 
                placeholder="Buscar por cidade ou estado..."
                className="h-12 font-body"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Marinas List */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Carregando marinas...</p>
              </div>
            ) : marinas.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">Nenhuma marina encontrada.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marinas.map((marina) => (
                  <Link key={marina.id} to={`/marinas/${marina.slug}`} className="block h-full">
                    <Card className="group hover:shadow-premium transition-all duration-300 h-full">
                      <CardContent className="p-0">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={marina.cover_image_url || '/placeholder.svg'}
                            alt={marina.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          {marina.verified && (
                            <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                              <Shield className="w-3 h-3 mr-1" />
                              Verificada
                            </Badge>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <h3 className="font-display text-xl font-semibold text-primary mb-2">
                            {marina.name}
                          </h3>
                          
                          <div className="flex items-center text-sm text-muted-foreground mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            {marina.city}, {marina.state}
                          </div>

                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {marina.description || 'Marina de alto padrão com infraestrutura completa'}
                          </p>

                          {/* Comodidades */}
                          {marina.amenities && marina.amenities.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {marina.amenities.slice(0, 3).map((amenity: string, idx: number) => {
                                const Icon = getAmenityIcon(amenity);
                                return (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    <Icon className="w-3 h-3 mr-1" />
                                    {amenity}
                                  </Badge>
                                );
                              })}
                            </div>
                          )}

                          {/* Preços */}
                          <div className="border-t pt-4">
                            <div className="flex justify-between text-sm">
                              <div>
                                <p className="text-muted-foreground">Diária</p>
                                <p className="font-bold text-primary">
                                  {formatPrice(marina.price_day_cents)}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-muted-foreground">Mensal</p>
                                <p className="font-bold text-primary">
                                  {formatPrice(marina.price_month_cents)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Marinas;
