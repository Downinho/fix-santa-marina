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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Heart, Share2, Star, Calendar, Users, Anchor, Gauge, 
  Phone, MessageCircle, MapPin, Camera, Play, Zap, 
  Shield, Award, Clock, CheckCircle, ArrowLeft, ChevronLeft, ChevronRight, X
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { getVesselBySlug } from "@/data/vessels";
import marbanaLogo from "@/assets/marbana-logo.png";

declare global {
  interface Window {
    google: any;
  }
}

const VesselDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const whatsappNumber = "+5511940159202";
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const vessel = getVesselBySlug(slug || '');

  if (!vessel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Embarcação não encontrada</h1>
          <Button asChild>
            <Link to="/embarcacoes">Voltar para Embarcações</Link>
          </Button>
        </div>
      </div>
    );
  }

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
        mapContainer.innerHTML = `
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=${vessel.coordinates.lng - 0.01}%2C${vessel.coordinates.lat - 0.01}%2C${vessel.coordinates.lng + 0.01}%2C${vessel.coordinates.lat + 0.01}&amp;layer=mapnik&amp;marker=${vessel.coordinates.lat}%2C${vessel.coordinates.lng}"
            style="border: 1px solid #ccc; border-radius: 8px;"
          ></iframe>
          <div style="margin-top: 8px; font-size: 12px; color: #666;">
            <a href="https://www.openstreetmap.org/?mlat=${vessel.coordinates.lat}&mlon=${vessel.coordinates.lng}#map=15/${vessel.coordinates.lat}/${vessel.coordinates.lng}" target="_blank" style="color: #0066cc;">
              Ver mapa maior
            </a>
          </div>
        `;
      }
    };
    
    initMap();
  }, [vessel]);

  const handleContactWhatsApp = () => {
    const message = `Olá! Tenho interesse na ${vessel.name} (${vessel.model}) localizada em ${vessel.location}. Gostaria de mais informações.`;
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

  const handleShare = async () => {
    const shareData = {
      title: vessel.name,
      text: `Confira esta embarcação incrível: ${vessel.name} - ${formatPrice(vessel.price)}`,
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copiado!",
          description: "O link desta embarcação foi copiado para sua área de transferência.",
        });
      }
    } catch (error) {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copiado!",
          description: "O link desta embarcação foi copiado para sua área de transferência.",
        });
      } catch (clipboardError) {
        toast({
          title: "Erro ao compartilhar",
          description: "Não foi possível compartilhar ou copiar o link.",
          variant: "destructive"
        });
      }
    }
  };

  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const openVideoPreview = (url: string) => {
    const youtubeId = extractYouTubeId(url);
    if (youtubeId) {
      setSelectedVideo(youtubeId);
    }
  };

  const closeVideoPreview = () => {
    setSelectedVideo(null);
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
              <span className="text-primary">{vessel.model}</span>
            </div>
          </div>
        </section>

        {/* Hero Section with Image Gallery */}
        <section className="py-1 sm:py-4">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-2 sm:mb-6">
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
                <Button variant="ghost" size="sm" className="font-body" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-1" />
                  Compartilhar
                </Button>
              </div>
            </div>

            {/* Main Image Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 sm:gap-4 mb-2 sm:mb-6 w-full">
              {/* Main Image */}
              <div className="lg:col-span-3 relative group h-48 sm:h-80 lg:h-[450px] max-w-full">
                <img 
                  src={vessel.images[selectedImageIndex]}
                  alt={vessel.name}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-premium"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-body">
                  {selectedImageIndex + 1} / {vessel.images.length}
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 lg:grid-cols-1 gap-1 sm:gap-2 h-16 sm:h-20 lg:h-[450px] max-w-full overflow-hidden">
                {vessel.images.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-16 sm:h-20 lg:h-[108px] rounded-md sm:rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                      selectedImageIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${vessel.name} - ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    {index === 3 && vessel.images.length > 4 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-display text-sm lg:text-lg font-bold">
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
        <section className="pb-4 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-2 sm:space-y-6 lg:space-y-8">
                {/* Header Info */}
                <div>
                  <div className="flex items-center gap-2 mb-2 sm:mb-4">
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
                  
                  <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">
                    {vessel.name}
                  </h1>
                  <h2 className="font-display text-xl sm:text-2xl font-medium text-accent-gold mb-2 sm:mb-4">
                    {vessel.model}
                  </h2>
                  
                  <div className="flex items-center text-muted-foreground font-body mb-3 sm:mb-6">
                    <MapPin className="w-4 h-4 mr-1" />
                    {vessel.location}
                  </div>

                  <div className="flex items-center space-x-6 mb-3 sm:mb-6">
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
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-6">
                    Destaques Exclusivos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                    {vessel.highlights.map((highlight, index) => {
                      const IconComponent = highlight.icon === 'Award' ? Award :
                                          highlight.icon === 'Shield' ? Shield :
                                          highlight.icon === 'CheckCircle' ? CheckCircle :
                                          highlight.icon === 'Zap' ? Zap :
                                          highlight.icon === 'Clock' ? Clock : Award;
                      
                      return (
                        <Card key={index} className="hover:shadow-premium transition-all duration-300">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-start space-x-3 sm:space-x-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                              </div>
                              <div>
                                <h4 className="font-display font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">
                                  {highlight.title}
                                </h4>
                                <p className="font-body text-xs sm:text-sm text-muted-foreground">
                                  {highlight.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Videos */}
                {vessel.videos && vessel.videos.length > 0 && (
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-6">
                      Vídeos da Embarcação
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {vessel.videos.map((video, index) => {
                        const youtubeId = extractYouTubeId(video.url);
                        const thumbnailUrl = youtubeId 
                          ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                          : video.thumbnail;
                        
                        return (
                          <Card 
                            key={index} 
                            className="group cursor-pointer hover:shadow-premium transition-all duration-300"
                            onClick={() => openVideoPreview(video.url)}
                          >
                            <CardContent className="p-0 relative">
                              <div className="w-full h-48 rounded-lg overflow-hidden">
                                <img 
                                  src={thumbnailUrl}
                                  alt={video.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (youtubeId && target.src.includes('hqdefault')) {
                                      target.src = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
                                    } else if (youtubeId && target.src.includes('mqdefault')) {
                                      target.src = `https://img.youtube.com/vi/${youtubeId}/default.jpg`;
                                    } else {
                                      target.src = video.thumbnail;
                                    }
                                  }}
                                />
                              </div>
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors rounded-lg">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                                  <Play className="w-8 h-8 text-white ml-1" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                                <h4 className="font-display font-semibold text-white text-sm">
                                  {video.title}
                                </h4>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

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
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-body text-muted-foreground">
                              {amenity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Location Map */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6">
                    Localização
                  </h3>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div id="map" className="w-full h-96"></div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Booking Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Pricing Card */}
                  <Card className="shadow-premium">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <span className="font-display text-3xl font-bold text-primary">
                          {formatPrice(vessel.price)}
                        </span>
                      </div>
                      
                      <Button 
                        onClick={handleContactWhatsApp}
                        className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body mb-4"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Tenho Interesse
                      </Button>
                      
                      <div className="text-center text-sm text-muted-foreground font-body">
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        Resposta em até 1 hora
                      </div>
                    </CardContent>
                  </Card>

                  {/* Owner Card */}
                  <Card className="shadow-premium">
                    <CardContent className="p-6">
                      <h4 className="font-display text-lg font-bold text-primary mb-4">
                        Vendedor
                      </h4>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center p-2">
                          <img 
                            src={marbanaLogo} 
                            alt="Marbana Exclusive Maritime" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-primary">
                            {vessel.owner.name}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            Vendedor Verificado ✓
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
                    </CardContent>
                  </Card>

                  {/* Contact Form */}
                  <Card className="shadow-premium">
                    <CardContent className="p-6">
                      <h4 className="font-display text-lg font-bold text-primary mb-4">
                        Solicite Mais Informações
                      </h4>
                      <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const message = `Olá! Interesse na ${vessel.name} (${vessel.model}).
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

      {/* Video Preview Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={closeVideoPreview}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-display text-xl text-primary">
              Vídeo da Embarcação
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-4">
            {selectedVideo && (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                  title="Vídeo do YouTube"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default VesselDetail;