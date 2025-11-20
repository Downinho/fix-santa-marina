import { useParams } from "react-router-dom";
import { useMarinaBySlug } from "@/hooks/useMarinaBySlug";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, MessageCircle, Globe, Anchor, Shield, Clock, Wifi, Utensils, Car, Calendar } from "lucide-react";

const MarinaDetail = () => {
  const { slug } = useParams();
  const { marina, loading, error } = useMarinaBySlug(slug || '');

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
      'Estacionamento': Car
    };
    return icons[amenity] || Anchor;
  };

  if (loading) {
    return (
      <Layout>
        <main className="container mx-auto px-6 py-20 text-center pt-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando marina...</p>
        </main>
      </Layout>
    );
  }

  if (error || !marina) {
    return (
      <Layout>
        <main className="container mx-auto px-6 py-20 text-center pt-16">
          <h1 className="font-display text-4xl font-bold text-primary mb-4">Marina não encontrada</h1>
          <Button onClick={() => window.location.href = '/marinas'}>
            Voltar às Marinas
          </Button>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main id="main-content" className="pt-16 pb-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Início</a></li>
              <li>/</li>
              <li><a href="/marinas" className="hover:text-primary">Marinas</a></li>
              <li>/</li>
              <li className="text-primary">{marina.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="font-display text-3xl font-bold text-primary mb-2">
                        {marina.name}
                      </h1>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{marina.city}, {marina.state}</span>
                      </div>
                    </div>
                    {marina.verified && (
                      <Badge className="bg-green-500 text-white">
                        <Shield className="w-3 h-3 mr-1" />
                        Verificada
                      </Badge>
                    )}
                  </div>

                  {/* Gallery */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {marina.images && marina.images.length > 0 ? (
                      marina.images.slice(0, 4).map((image: any, idx: number) => (
                        <div key={idx} className="aspect-video rounded-lg overflow-hidden">
                          <img 
                            src={image.url} 
                            alt={`${marina.name} - ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={marina.cover_image_url || '/placeholder.svg'} 
                          alt={marina.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {marina.description || 'Marina de alto padrão com infraestrutura completa para atender sua embarcação com segurança e conforto.'}
                  </p>
                </CardContent>
              </Card>

              {/* Services */}
              {marina.services && marina.services.length > 0 && (
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                      Serviços Oferecidos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {marina.services.map((service: string, index: number) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <Anchor className="w-5 h-5 text-primary" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Amenities */}
              {marina.amenities && marina.amenities.length > 0 && (
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                      Comodidades
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {marina.amenities.map((amenity: string, index: number) => {
                        const Icon = getAmenityIcon(amenity);
                        return (
                          <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                            <Icon className="w-4 h-4 mr-2" />
                            {amenity}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Capacity Info */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    Capacidade e Infraestrutura
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {marina.total_berths && (
                      <div className="text-center">
                        <p className="text-3xl font-bold text-primary">{marina.total_berths}</p>
                        <p className="text-sm text-muted-foreground mt-1">Vagas Totais</p>
                      </div>
                    )}
                    {marina.available_berths !== null && (
                      <div className="text-center">
                        <p className="text-3xl font-bold text-green-600">{marina.available_berths}</p>
                        <p className="text-sm text-muted-foreground mt-1">Disponíveis</p>
                      </div>
                    )}
                    {marina.max_vessel_length_m && (
                      <div className="text-center">
                        <p className="text-3xl font-bold text-primary">{marina.max_vessel_length_m}m</p>
                        <p className="text-sm text-muted-foreground mt-1">Comprimento Máx.</p>
                      </div>
                    )}
                    {marina.max_draft_m && (
                      <div className="text-center">
                        <p className="text-3xl font-bold text-primary">{marina.max_draft_m}m</p>
                        <p className="text-sm text-muted-foreground mt-1">Calado Máx.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Preços</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Diária (visitante)</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatPrice(marina.price_day_cents)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mensalidade (vaga fixa)</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatPrice(marina.price_month_cents)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-hero"
                      onClick={() => {
                        const message = `Olá! Gostaria de informações sobre vagas na marina ${marina.name}.`;
                        const whatsapp = marina.contact_whatsapp || '5511947879662';
                        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Solicitar Vaga
                    </Button>
                    
                    {marina.contact_phone && (
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          window.location.href = `tel:${marina.contact_phone}`;
                        }}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Ligar
                      </Button>
                    )}
                    
                    {marina.website && (
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          window.open(marina.website, '_blank');
                        }}
                      >
                        <Globe className="w-5 h-5 mr-2" />
                        Site
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Informações de Contato</h3>
                  <div className="space-y-3 text-sm">
                    {marina.contact_email && (
                      <div>
                        <p className="text-muted-foreground">Email</p>
                        <p className="font-medium">{marina.contact_email}</p>
                      </div>
                    )}
                    {marina.contact_phone && (
                      <div>
                        <p className="text-muted-foreground">Telefone</p>
                        <p className="font-medium">{marina.contact_phone}</p>
                      </div>
                    )}
                    {marina.address && (
                      <div>
                        <p className="text-muted-foreground">Endereço</p>
                        <p className="font-medium">{marina.address}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Opening Hours */}
              {marina.opening_hours && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Horário de Funcionamento
                    </h3>
                    <div className="space-y-2 text-sm">
                      {Object.entries(marina.opening_hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize text-muted-foreground">{day}</span>
                          <span className="font-medium">{hours as string}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MarinaDetail;
