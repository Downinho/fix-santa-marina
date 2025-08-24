import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { extractIdFromSlug } from "@/utils/slugify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, Share2, Star, Calendar, Users, Anchor, Gauge, 
  Phone, MessageCircle, MapPin, Camera, Play, Zap, 
  Shield, Award, Clock, CheckCircle, ArrowLeft, ChevronLeft, ChevronRight
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

declare global {
  interface Window {
    google: any;
  }
}

const VesselDetail = () => {
  const { slug } = useParams();
  const vesselId = slug ? extractIdFromSlug(slug) || 1 : 1;
  const { toast } = useToast();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const whatsappNumber = "+5511940159202";
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  // Mock vessel data - Focker 272 in Búzios
  const vessel = {
    id: '1',
    name: 'Focker 272 - Luxury Experience',
    slug: 'focker-272-buzios',
    type: 'Lancha Esportiva',
    year: 2023,
    length: '8.2m',
    price: 289000000, // R$ 2.890.000,00 in cents
    location: 'Armação dos Búzios, RJ',
    coordinates: { lat: -22.7461, lng: -41.8811 }, // Búzios coordinates
    description: 'Uma obra-prima da engenharia náutica brasileira. Esta Focker 272 representa o ápice do luxo e performance no mar. Localizada na paradisíaca Armação dos Búzios, oferece experiências náuticas inesquecíveis nas águas cristalinas da Costa do Sol.',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618830-fcd0c89db42a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566024287286-457247b70310?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719366274-e8f044a10dff?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544737151-6e4b9d398b6a?w=800&h=600&fit=crop'
    ],
    videos: [
      {
        title: 'Tour Completo da Focker 272',
        thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Performance no Mar',
        thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ],
    owner: {
      name: 'MARBANA Premium Yachts',
      rating: 5.0,
      verified: true,
      responseTime: 'Responde em até 1 hora'
    },
    specifications: [
      { label: 'Comprimento', value: '8,2 metros' },
      { label: 'Boca', value: '2,55 metros' },
      { label: 'Calado', value: '0,60 metros' },
      { label: 'Motorização', value: '2x 300HP Mercury' },
      { label: 'Velocidade Máx.', value: '65 nós' },
      { label: 'Capacidade', value: '12 pessoas' },
      { label: 'Combustível', value: '400 litros' },
      { label: 'Água', value: '100 litros' },
      { label: 'Ano', value: '2023' },
      { label: 'Procedência', value: 'Nacional' }
    ],
    amenities: [
      'Ar condicionado split',
      'Sistema de som premium JL Audio',
      'GPS Garmin touchscreen',
      'Piloto automático',
      'Geladeira elétrica 110L',
      'Microondas',
      'Chuveiro de água doce',
      'Toldo elétrico',
      'Luzes LED subaquáticas',
      'Plataforma hidráulica',
      'Mesa conversível',
      'Estofados em couro legítimo'
    ],
    highlights: [
      {
        icon: Zap,
        title: 'Performance Excepcional',
        description: 'Motor duplo Mercury 300HP para máxima performance'
      },
      {
        icon: Shield,
        title: 'Segurança Total',
        description: 'Equipada com todos os itens de segurança obrigatórios'
      },
      {
        icon: Award,
        title: 'Prêmios Internacionais',
        description: 'Reconhecida como Boat of the Year 2023'
      },
      {
        icon: Clock,
        title: 'Zero Horas',
        description: 'Embarcação nova, nunca utilizada'
      }
    ],
    testimonials: [
      {
        name: 'Carlos Eduardo',
        rating: 5,
        comment: 'Experiência incrível! A Focker 272 superou todas as expectativas. Qualidade excepcional.',
        date: '2024-01-15'
      },
      {
        name: 'Marina Santos',
        rating: 5,
        comment: 'O melhor investimento que já fiz. Performance e luxo em perfeita harmonia.',
        date: '2024-01-10'
      }
    ]
  };

  const formatPrice = (priceInCents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(priceInCents / 100);
  };

  // Initialize OpenStreetMap
  useEffect(() => {
    const initMap = () => {
      const mapContainer = document.getElementById('map');
      if (mapContainer) {
        // Usar iframe do OpenStreetMap para Armação dos Búzios
        mapContainer.innerHTML = `
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-41.8916,-22.7625,-41.8516,-22.7225&layer=mapnik&marker=-22.7425,-41.8716"
            style="border: 1px solid #ccc; border-radius: 8px;"
          ></iframe>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            <a href="https://www.openstreetmap.org/?mlat=-22.7425&mlon=-41.8716#map=15/-22.7425/-41.8716" target="_blank" style="color: #0066cc;">
              Ver mapa maior
            </a>
          </div>
        `;
      }
    };
    
    initMap();
  }, []);

  const handleContactWhatsApp = () => {
    const message = `Olá! Tenho interesse na ${vessel.name} localizada em ${vessel.location}. Gostaria de mais informações.`;
    openWhatsApp(message);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === vessel.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? vessel.images.length - 1 : prev - 1
    );
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: vessel.name,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* Breadcrumb */}
        <section className="py-4 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center space-x-2 text-sm font-body text-muted-foreground">
              <Link to="/" className="hover:text-primary">Início</Link>
              <span>/</span>
              <Link to="/embarcacoes" className="hover:text-primary">Embarcações</Link>
              <span>/</span>
              <span className="text-primary">Focker 272</span>
            </div>
          </div>
        </section>

        {/* Hero Section with Image Gallery */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <Button 
                variant="ghost" 
                asChild
                className="font-body"
              >
                <Link to="/embarcacoes">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para Embarcações
                </Link>
              </Button>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleFavorite}
                  className={`font-body ${isFavorite ? 'text-red-500' : ''}`}
                >
                  <Heart className={`w-4 h-4 mr-1 ${isFavorite ? 'fill-current' : ''}`} />
                  Favoritar
                </Button>
                <Button variant="ghost" size="sm" className="font-body">
                  <Share2 className="w-4 h-4 mr-1" />
                  Compartilhar
                </Button>
              </div>
            </div>

            {/* Main Image Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-96 lg:h-[500px] mb-8">
              {/* Main Image */}
              <div className="lg:col-span-3 relative group">
                <img 
                  src={vessel.images[selectedImageIndex]}
                  alt={vessel.name}
                  className="w-full h-full object-cover rounded-xl shadow-premium"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-body">
                  {selectedImageIndex + 1} / {vessel.images.length}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 lg:grid-cols-1 gap-2 h-full">
                {vessel.images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-full rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${vessel.name} - ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    {index === 3 && vessel.images.length > 4 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-display text-lg font-bold">
                        +{vessel.images.length - 4}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header Info */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-gradient-hero text-primary-foreground font-body">
                      {vessel.type}
                    </Badge>
                    <Badge variant="outline" className="font-body">
                      {vessel.year}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 font-body">
                      Verificado ✓
                    </Badge>
                  </div>
                  
                  <h1 className="font-display text-4xl font-bold text-primary mb-4">
                    {vessel.name}
                  </h1>
                  
                  <div className="flex items-center text-muted-foreground font-body mb-6">
                    <MapPin className="w-4 h-4 mr-1" />
                    {vessel.location}
                  </div>

                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-yellow-500 fill-current" 
                        />
                      ))}
                      <span className="text-sm text-muted-foreground font-body ml-2">
                        {vessel.owner.rating} • {vessel.owner.responseTime}
                      </span>
                    </div>
                  </div>
                  
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    {vessel.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Destaques Exclusivos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vessel.highlights.map((highlight, index) => (
                      <Card key={index} className="hover:shadow-premium transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                              <highlight.icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h4 className="font-display font-semibold text-primary mb-2">
                                {highlight.title}
                              </h4>
                              <p className="font-body text-sm text-muted-foreground">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Videos */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Vídeos da Embarcação
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vessel.videos.map((video, index) => (
                      <Card key={index} className="group cursor-pointer hover:shadow-premium transition-all duration-300">
                        <CardContent className="p-0 relative">
                          <img 
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                              <Play className="w-8 h-8 text-primary ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <h4 className="font-display font-semibold text-white">
                              {video.title}
                            </h4>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Especificações Técnicas
                  </h3>
                  <Card>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {vessel.specifications.map((spec, index) => (
                          <div key={index} className="flex justify-between py-3 border-b border-muted">
                            <span className="font-body text-muted-foreground">
                              {spec.label}
                            </span>
                            <span className="font-body font-semibold text-primary">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Equipamentos e Comodidades
                  </h3>
                  <Card>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {vessel.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center font-body">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Location Map */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Localização em Búzios
                  </h3>
                  <Card>
                    <CardContent className="p-0">
                      <div id="map" className="w-full h-80 rounded-lg" />
                    </CardContent>
                  </Card>
                  <p className="font-body text-sm text-muted-foreground mt-3">
                    📍 {vessel.location} - Localizada no coração da Riviera Brasileira
                  </p>
                </div>

                {/* Testimonials */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Avaliações de Clientes
                  </h3>
                  <div className="space-y-4">
                    {vessel.testimonials.map((testimonial, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                              <span className="font-display font-bold text-primary-foreground">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-display font-semibold text-primary">
                                  {testimonial.name}
                                </h4>
                                <div className="flex items-center">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className="w-4 h-4 text-yellow-500 fill-current" 
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="font-body text-muted-foreground mb-2">
                                "{testimonial.comment}"
                              </p>
                              <span className="font-body text-xs text-muted-foreground">
                                {new Date(testimonial.date).toLocaleDateString('pt-BR')}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sticky Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="shadow-premium">
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <div className="text-4xl font-display font-bold text-primary mb-2">
                          {formatPrice(vessel.price)}
                        </div>
                        <p className="font-body text-muted-foreground">
                          Preço à vista
                        </p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="p-3 bg-muted/30 rounded-lg">
                            <Anchor className="w-6 h-6 mx-auto mb-1 text-primary" />
                            <div className="font-body text-sm font-medium text-primary">{vessel.length}</div>
                            <div className="font-body text-xs text-muted-foreground">Comprimento</div>
                          </div>
                          <div className="p-3 bg-muted/30 rounded-lg">
                            <Users className="w-6 h-6 mx-auto mb-1 text-primary" />
                            <div className="font-body text-sm font-medium text-primary">12</div>
                            <div className="font-body text-xs text-muted-foreground">Pessoas</div>
                          </div>
                          <div className="p-3 bg-muted/30 rounded-lg">
                            <Calendar className="w-6 h-6 mx-auto mb-1 text-primary" />
                            <div className="font-body text-sm font-medium text-primary">{vessel.year}</div>
                            <div className="font-body text-xs text-muted-foreground">Ano</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        <Button 
                          size="lg" 
                          onClick={handleContactWhatsApp}
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-body font-medium"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Conversar no WhatsApp
                        </Button>
                        
                        <Button 
                          size="lg" 
                          variant="outline"
                          onClick={() => openWhatsApp(`Gostaria de agendar uma visita na ${vessel.name} em ${vessel.location}.`)}
                          className="w-full font-body"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Agendar Visita
                        </Button>
                      </div>

                      <div className="border-t pt-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                            <span className="font-display font-bold text-primary-foreground">M</span>
                          </div>
                          <div>
                            <h4 className="font-display font-semibold text-primary">
                              {vessel.owner.name}
                            </h4>
                            <p className="font-body text-sm text-muted-foreground">
                              Vendedor Premium ✓
                            </p>
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openWhatsApp(`Olá ${vessel.owner.name}! Tenho interesse na ${vessel.name}. Podem me enviar mais detalhes?`)}
                          className="w-full font-body"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Falar Diretamente
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Form */}
                  <Card className="mt-6 shadow-premium">
                    <CardContent className="p-6">
                      <h4 className="font-display text-lg font-bold text-primary mb-4">
                        Solicite Mais Informações
                      </h4>
                      <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const message = `Olá! Interesse na ${vessel.name}.
Nome: ${formData.get('name')}
Email: ${formData.get('email')}
Telefone: ${formData.get('phone')}
Mensagem: ${formData.get('message')}`;
                        openWhatsApp(message);
                      }}>
                        <Input name="name" placeholder="Seu nome" className="font-body" required />
                        <Input name="email" type="email" placeholder="Seu e-mail" className="font-body" required />
                        <Input name="phone" placeholder="Seu telefone" className="font-body" required />
                        <Textarea 
                          name="message"
                          placeholder="Sua mensagem (opcional)"
                          className="font-body min-h-20"
                        />
                        <Button 
                          type="submit"
                          className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                        >
                          Enviar via WhatsApp
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VesselDetail;