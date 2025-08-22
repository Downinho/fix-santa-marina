import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, Heart, Share2, MapPin, Calendar, Anchor, 
  Fuel, Users, Bed, Star, Phone, MessageCircle, Mail,
  Camera, Play, Info
} from "lucide-react";
import { useState } from "react";

const VesselDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - in real app, this would come from API
  const vessel = {
    id: 1,
    name: "Azimut 68",
    type: "Iate",
    price: "R$ 2.800.000",
    priceHour: "R$ 2.500/hora",
    priceDay: "R$ 15.000/dia",
    location: "Angra dos Reis, RJ",
    year: "2021",
    length: "68 pés",
    beam: "5.2m",
    draft: "1.8m",
    capacity: 12,
    cabins: 3,
    bathrooms: 2,
    fuel: "Diesel",
    horsepower: "2x 1000hp",
    featured: true,
    description: "Iate de luxo italiano com acabamento impecável e tecnologia de ponta. Esta magnífica embarcação combina performance excepcional com conforto incomparável, oferecendo uma experiência náutica verdadeiramente premium.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&h=800&fit=crop"
    ],
    specifications: {
      "Comprimento": "68 pés (20.7m)",
      "Boca": "5.2m",
      "Calado": "1.8m",
      "Ano": "2021",
      "Combustível": "Diesel",
      "Motores": "2x Caterpillar 1000hp",
      "Capacidade": "12 pessoas",
      "Camarotes": "3",
      "Banheiros": "2",
      "Tanque de Combustível": "2800L",
      "Tanque de Água": "800L"
    },
    amenities: [
      "Ar condicionado central",
      "Gerador",
      "Bow thruster",
      "Sistema de navegação GPS",
      "Radar",
      "Pilot automático",
      "Churrasqueira",
      "Frigobares",
      "Sistema de som premium",
      "TV LED nos camarotes",
      "WiFi",
      "Tender com motor"
    ],
    owner: {
      name: "Marina Premium Yachts",
      verified: true,
      rating: 4.9,
      totalReviews: 127,
      phone: "+55 (22) 98765-4321",
      email: "contato@marinapremium.com.br"
    },
    comments: [
      { 
        user: "Roberto Silva", 
        rating: 5, 
        date: "15 de Dezembro, 2023",
        comment: "Embarcação excepcional! Acabamento perfeito e muito confortável para viagens longas. A tripulação foi muito atenciosa e profissional." 
      },
      { 
        user: "Marina Costa", 
        rating: 5, 
        date: "3 de Novembro, 2023",
        comment: "Simplesmente magnífico. A qualidade italiana é inigualável. Recomendo para quem busca luxo e conforto." 
      },
      { 
        user: "Carlos Eduardo", 
        rating: 4, 
        date: "28 de Outubro, 2023",
        comment: "Muito bom, mas o preço é bem salgado. Vale o investimento para quem pode. A experiência foi inesquecível." 
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm font-body">
            <Link to="/" className="text-primary hover:underline">Início</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/embarcacoes" className="text-primary hover:underline">Embarcações</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{vessel.name}</span>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="container mx-auto px-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[500px]">
            {/* Main Image */}
            <div className="lg:col-span-3 relative rounded-xl overflow-hidden">
              <img 
                src={vessel.images[selectedImage]} 
                alt={vessel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {vessel.featured && (
                  <Badge className="bg-gradient-gold text-accent-gold-foreground">
                    Premium
                  </Badge>
                )}
                <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                  {vessel.type}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="bg-background/90 backdrop-blur-sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="bg-background/90 backdrop-blur-sm"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex lg:flex-col gap-2 overflow-auto">
              {vessel.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-20 h-20 lg:w-full lg:h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${vessel.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="font-display text-4xl font-bold text-primary">
                    {vessel.name}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{vessel.owner.rating}</span>
                    <span className="text-muted-foreground">({vessel.owner.totalReviews} avaliações)</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {vessel.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {vessel.year}
                  </div>
                  <div className="flex items-center">
                    <Anchor className="w-4 h-4 mr-1" />
                    {vessel.length}
                  </div>
                </div>

                <p className="font-body text-lg leading-relaxed text-muted-foreground">
                  {vessel.description}
                </p>
              </div>

              <Separator />

              {/* Specifications */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                  Especificações Técnicas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(vessel.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium text-foreground">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Amenities */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                  Comodidades e Equipamentos
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {vessel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-body text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Reviews */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                  Avaliações ({vessel.comments.length})
                </h2>
                <div className="space-y-6">
                  {vessel.comments.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="font-semibold text-primary">{review.user[0]}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.user}</h4>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="font-body text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-display font-bold text-primary mb-2">
                        {vessel.price}
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>{vessel.priceHour}</div>
                        <div>{vessel.priceDay}</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <Button className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Ligar Agora
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Solicitar Proposta
                      </Button>
                    </div>

                    <Separator className="my-4" />

                    {/* Owner Info */}
                    <div className="text-center">
                      <h3 className="font-semibold mb-2">{vessel.owner.name}</h3>
                      {vessel.owner.verified && (
                        <Badge variant="secondary" className="mb-2">
                          ✓ Verificado
                        </Badge>
                      )}
                      <div className="flex items-center justify-center space-x-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{vessel.owner.rating}</span>
                        <span className="text-muted-foreground">({vessel.owner.totalReviews})</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Informações Rápidas</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm">Capacidade</span>
                        </div>
                        <span className="text-sm font-medium">{vessel.capacity} pessoas</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Bed className="w-4 h-4 text-primary" />
                          <span className="text-sm">Camarotes</span>
                        </div>
                        <span className="text-sm font-medium">{vessel.cabins}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Fuel className="w-4 h-4 text-primary" />
                          <span className="text-sm">Combustível</span>
                        </div>
                        <span className="text-sm font-medium">{vessel.fuel}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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