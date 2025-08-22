import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, Award, Phone, MessageCircle, Calendar, Users, Anchor, Shield } from "lucide-react";

const MarinheirosDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const marinheiro = {
    id: "1",
    name: "Capitão Roberto Silva",
    avatar: "/placeholder.svg",
    rating: 4.9,
    totalReviews: 127,
    location: "Rio de Janeiro, RJ",
    experience: "15 anos",
    specialties: ["Navegação Oceânica", "Pesca Esportiva", "Turismo Náutico"],
    certifications: ["Arrais Amador", "Capitão Amador", "Curso de Sobrevivência"],
    languages: ["Português", "Inglês", "Espanhol"],
    bio: "Capitão experiente com mais de 15 anos navegando pelas águas brasileiras. Especialista em navegação oceânica e turismo náutico de luxo. Já conduziu mais de 500 expedições seguras.",
    hourlyRate: 15000, // em centavos
    dailyRate: 80000, // em centavos
    availability: "Disponível",
    portfolio: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    reviews: [
      {
        id: 1,
        author: "Maria Santos",
        rating: 5,
        date: "Março 2024",
        comment: "Excelente profissional! Muito experiente e cuidadoso. Passeio incrível pela Baía de Guanabara."
      },
      {
        id: 2,
        author: "João Pereira",
        rating: 5,
        date: "Fevereiro 2024",
        comment: "Capitão Roberto é excepcional. Conhece muito bem a região e proporcionou um dia inesquecível."
      }
    ],
    services: [
      "Condução de embarcações",
      "Turismo náutico",
      "Pesca esportiva",
      "Eventos corporativos",
      "Aulas de navegação"
    ]
  };

  const formatPrice = (priceInCents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(priceInCents / 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Início</a></li>
              <li>/</li>
              <li><a href="/marinheiros" className="hover:text-primary">Marinheiros</a></li>
              <li>/</li>
              <li className="text-primary">{marinheiro.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Header */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <Avatar className="w-32 h-32 mx-auto md:mx-0">
                      <AvatarImage src={marinheiro.avatar} alt={marinheiro.name} />
                      <AvatarFallback className="text-2xl">{marinheiro.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h1 className="font-display text-3xl font-bold text-primary mb-2">
                        {marinheiro.name}
                      </h1>
                      
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{marinheiro.rating}</span>
                          <span className="text-muted-foreground">({marinheiro.totalReviews} avaliações)</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{marinheiro.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{marinheiro.experience}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                        {marinheiro.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <Badge className={`${
                        marinheiro.availability === 'Disponível' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {marinheiro.availability}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    Sobre o Profissional
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {marinheiro.bio}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Certificações
                      </h3>
                      <ul className="space-y-2">
                        {marinheiro.certifications.map((cert, index) => (
                          <li key={index} className="text-muted-foreground flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-primary mb-3">
                        Idiomas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {marinheiro.languages.map((language, index) => (
                          <Badge key={index} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    Serviços Oferecidos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {marinheiro.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Anchor className="w-5 h-5 text-primary" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    Portfólio
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {marinheiro.portfolio.map((image, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Portfólio ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-2xl font-semibold text-primary">
                      Avaliações ({marinheiro.totalReviews})
                    </h2>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">{marinheiro.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {marinheiro.reviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{review.author}</p>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {formatPrice(marinheiro.hourlyRate)}<span className="text-lg font-normal text-muted-foreground">/hora</span>
                    </div>
                    <div className="text-xl text-muted-foreground">
                      {formatPrice(marinheiro.dailyRate)}<span className="text-sm">/dia</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button size="lg" className="w-full bg-gradient-hero">
                      <Calendar className="w-5 h-5 mr-2" />
                      Contratar Agora
                    </Button>
                    
                    <Button size="lg" variant="outline" className="w-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                    
                    <Button size="lg" variant="outline" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>Taxa de resposta</span>
                      <span className="font-semibold text-green-600">98%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>Tempo de resposta</span>
                      <span className="font-semibold">2 horas</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Serviços realizados</span>
                      <span className="font-semibold">500+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Estatísticas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">500+</p>
                        <p className="text-sm text-muted-foreground">Clientes atendidos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">4.9/5</p>
                        <p className="text-sm text-muted-foreground">Avaliação média</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">15 anos</p>
                        <p className="text-sm text-muted-foreground">De experiência</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarinheirosDetail;