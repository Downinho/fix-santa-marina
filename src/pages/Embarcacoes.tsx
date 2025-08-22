import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Anchor, Eye, Search, Filter, MessageCircle, Star } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Embarcacoes = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Aplicar filtros da URL quando a página carrega
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    const locationFromUrl = searchParams.get('location');
    
    if (typeFromUrl) setSelectedType(typeFromUrl);
    if (locationFromUrl) setSelectedLocation(locationFromUrl);
  }, [searchParams]);

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
      featured: true,
      description: "Iate de luxo italiano com acabamento impecável e tecnologia de ponta.",
      comments: [
        { user: "Roberto Silva", rating: 5, comment: "Embarcação excepcional! Acabamento perfeito e muito confortável para viagens longas." },
        { user: "Marina Costa", rating: 5, comment: "Simplesmente magnífico. A qualidade italiana é inigualável." },
        { user: "Carlos Eduardo", rating: 4, comment: "Muito bom, mas o preço é bem salgado. Vale o investimento para quem pode." }
      ]
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
      featured: true,
      description: "O top de linha da Ferretti, com design revolucionário e performance excepcional.",
      comments: [
        { user: "Ana Paula", rating: 5, comment: "O que mais me impressiona é a estabilidade e o conforto em alto mar." },
        { user: "Marcos Vieira", rating: 5, comment: "Comprei ano passado e não me arrependo. Qualidade superior em todos os aspectos." },
        { user: "Fernanda Lima", rating: 5, comment: "Design incrível! Recebo elogios onde quer que eu vá." }
      ]
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
      featured: false,
      description: "Lancha esportiva britânica com velocidade e elegância incomparáveis.",
      comments: [
        { user: "João Santos", rating: 4, comment: "Muito rápida e bem construída. Perfeita para passeios no fim de semana." },
        { user: "Patricia Oliveira", rating: 5, comment: "Adoro a sensação de liberdade que ela proporciona. Recomendo!" },
        { user: "Ricardo Moura", rating: 4, comment: "Boa opção custo-benefício no segmento premium." }
      ]
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
      featured: false,
      description: "Iate britânico sinônimo de luxo e sofisticação nos mares.",
      comments: [
        { user: "Eduardo Mendes", rating: 5, comment: "Sunseeker é sinônimo de qualidade. Esta é uma das melhores do mercado." },
        { user: "Carla Rodrigues", rating: 4, comment: "Muito elegante e confortável. Os espaços internos são bem aproveitados." },
        { user: "Thiago Alves", rating: 5, comment: "Perfeita para receber amigos e família. Todos ficam impressionados." }
      ]
    },
    {
      id: 5,
      name: "Sea Ray 350",
      type: "Jet Ski",
      price: "R$ 450.000",
      location: "Búzios, RJ",
      year: "2023",
      length: "12 pés",
      image: "https://images.unsplash.com/photo-1594736797933-d0ce2769226d?w=800&h=600&fit=crop",
      featured: false,
      description: "Jet ski de alta performance para os amantes de adrenalina e velocidade.",
      comments: [
        { user: "André Silva", rating: 5, comment: "Potência incrível! Perfeito para quem gosta de emoção forte." },
        { user: "Juliana Santos", rating: 4, comment: "Muito divertido, mas exige experiência para manusear com segurança." },
        { user: "Felipe Costa", rating: 5, comment: "Comprei para a família toda se divertir. Vale cada centavo!" }
      ]
    },
    {
      id: 6,
      name: "Lagoon 42",
      type: "Catamarã",
      price: "R$ 2.100.000",
      location: "Angra dos Reis, RJ",
      year: "2021",
      length: "42 pés",
      image: "https://images.unsplash.com/photo-1571845535817-fa5050a4b7ce?w=800&h=600&fit=crop",
      featured: false,
      description: "Catamarã francês ideal para navegação oceânica e vida a bordo.",
      comments: [
        { user: "Lucas Martins", rating: 5, comment: "Estabilidade excepcional. Ideal para viagens longas com a família." },
        { user: "Renata Souza", rating: 4, comment: "Muito espaçoso e confortável. Os camarotes são bem ventilados." },
        { user: "Diego Ferreira", rating: 5, comment: "Sonho realizado! Agora posso velejar pelos mares brasileiros." }
      ]
    },
    {
      id: 7,
      name: "Boston Whaler 285",
      type: "Lancha",
      price: "R$ 890.000",
      location: "Rio de Janeiro, RJ",
      year: "2022",
      length: "28 pés",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      featured: false,
      description: "Lancha americana conhecida pela sua robustez e segurança incomparáveis.",
      comments: [
        { user: "Gabriel Lima", rating: 4, comment: "Muito segura e confiável. Perfeita para pescarias e passeios familiares." },
        { user: "Melissa Rocha", rating: 5, comment: "A qualidade de construção é impressionante. Recomendo para iniciantes." },
        { user: "Paulo Henrique", rating: 4, comment: "Boa relação custo-benefício. Manutenção simples e peças fáceis de encontrar." }
      ]
    },
    {
      id: 8,
      name: "Pershing 82",
      type: "Iate",
      price: "R$ 8.500.000",
      location: "Santos, SP",
      year: "2023",
      length: "82 pés",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop",
      featured: true,
      description: "O ápice do luxo e performance em um iate italiano de design arrojado.",
      comments: [
        { user: "Rodrigo Barbosa", rating: 5, comment: "Simplesmente perfeito! Design futurista e performance de supercar." },
        { user: "Vanessa Montenegro", rating: 5, comment: "O mais incrível que já naveguei. Cada detalhe é uma obra de arte." },
        { user: "Márcio Antunes", rating: 5, comment: "Vale cada centavo. É ter um pedaço da Ferrari nos mares." }
      ]
    },
    {
      id: 9,
      name: "Axopar 37",
      type: "Lancha",
      price: "R$ 1.200.000",
      location: "Florianópolis, SC",
      year: "2022",
      length: "37 pés",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      featured: false,
      description: "Lancha finlandesa com design único e versatilidade excepcional.",
      comments: [
        { user: "Leonardo Dias", rating: 4, comment: "Design muito diferenciado. Chama atenção por onde passa." },
        { user: "Camila Torres", rating: 5, comment: "Muito prática e funcional. Adoro os espaços modulares." },
        { user: "Gustavo Reis", rating: 4, comment: "Inovadora em muitos aspectos. Qualidade nórdica é referência." }
      ]
    },
    {
      id: 10,
      name: "Kawasaki Ultra 310X",
      type: "Jet Ski",
      price: "R$ 85.000",
      location: "Cabo Frio, RJ",
      year: "2023",
      length: "11 pés",
      image: "https://images.unsplash.com/photo-1594736797933-d0ce2769226d?w=800&h=600&fit=crop",
      featured: false,
      description: "Jet ski de alta performance com tecnologia supercharged para máxima diversão.",
      comments: [
        { user: "Bruno Machado", rating: 5, comment: "Acelera que é uma beleza! Diversão garantida nos fins de semana." },
        { user: "Larissa Campos", rating: 4, comment: "Muito potente, mas também muito econômico. Ótima escolha." },
        { user: "Daniel Moreira", rating: 5, comment: "A Kawasaki não decepciona. Qualidade japonesa comprovada." }
      ]
    },
    {
      id: 11,
      name: "Jeanneau 54",
      type: "Veleiro",
      price: "R$ 1.800.000",
      location: "Salvador, BA",
      year: "2021",
      length: "54 pés",
      image: "https://images.unsplash.com/photo-1571845535817-fa5050a4b7ce?w=800&h=600&fit=crop",
      featured: false,
      description: "Veleiro francês elegante, perfeito para cruzeiros oceânicos com conforto.",
      comments: [
        { user: "Marina Bezerra", rating: 5, comment: "Velejo há 20 anos e este é o melhor que já tive. Comportamento no mar excepcional." },
        { user: "Henrique Nunes", rating: 4, comment: "Muito bem construído. Os franceses sabem fazer veleiros." },
        { user: "Isabel Santos", rating: 5, comment: "Realizando o sonho de dar a volta ao mundo. Confiança total nesta embarcação." }
      ]
    },
    {
      id: 12,
      name: "Cigarette 59 Tirranna",
      type: "Lancha",
      price: "R$ 3.200.000",
      location: "Angra dos Reis, RJ",
      year: "2022",
      length: "59 pés",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop",
      featured: true,
      description: "Lancha americana de altíssima performance, símbolo de velocidade e adrenalina.",
      comments: [
        { user: "Alexandre Cruz", rating: 5, comment: "Para quem gosta de velocidade, não existe melhor opção. Pura adrenalina!" },
        { user: "Tatiana Lopes", rating: 4, comment: "Impressionante a estabilidade mesmo em alta velocidade. Engenharia de primeira." },
        { user: "Rafael Oliveira", rating: 5, comment: "Cigarette é lenda! Esta é uma das mais belas que já vi." }
      ]
    }
  ];

  const filteredVessels = useMemo(() => {
    return vessels.filter(vessel => {
      const matchesSearch = vessel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vessel.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vessel.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "" || vessel.type === selectedType;
      const matchesLocation = selectedLocation === "" || vessel.location.includes(selectedLocation);
      
      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedType, selectedLocation]);

const handleSearch = () => {
    // A busca já funciona automaticamente através do useMemo
    console.log("Searching:", { searchTerm, selectedType, selectedLocation });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* Page Header */}
        <section className="bg-gradient-ocean py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                Embarcações Premium
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubra a nossa seleção exclusiva de iates, lanchas, veleiros, catamarãs e jet skis. 
                Mercado Livre dos Mares.
              </p>
            </div>

            {/* Search Filters */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-premium max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                <div className="md:col-span-2">
                  <Input 
                    placeholder="Buscar por nome, marca ou modelo..."
                    className="h-12 font-body"
                    aria-label="Buscar embarcações"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="h-12 font-body" aria-label="Selecionar tipo de embarcação">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos</SelectItem>
                    <SelectItem value="Iate">Iate</SelectItem>
                    <SelectItem value="Lancha">Lancha</SelectItem>
                    <SelectItem value="Veleiro">Veleiro</SelectItem>
                    <SelectItem value="Catamarã">Catamarã</SelectItem>
                    <SelectItem value="Jet Ski">Jet Ski</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12 font-body" aria-label="Selecionar localização">
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todas</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="SC">Santa Catarina</SelectItem>
                    <SelectItem value="BA">Bahia</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body h-12"
                  aria-label="Buscar embarcações"
                  onClick={handleSearch}
                >
                  <Search className="w-5 h-5 mr-2" aria-hidden="true" />
                  Buscar
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="font-body">
                <Filter className="w-4 h-4 mr-2" aria-hidden="true" />
                Filtros Avançados
              </Button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-semibold text-primary">
                {filteredVessels.length} embarcações encontradas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVessels.map((vessel) => (
                <Card 
                  key={vessel.id} 
                  className="group cursor-pointer hover:shadow-premium transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={vessel.image} 
                      alt={`${vessel.name} - ${vessel.type}`}
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
                        aria-label="Adicionar aos favoritos"
                      >
                        <Heart className="w-4 h-4" aria-hidden="true" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-background/90 backdrop-blur-sm border-background/20"
                        aria-label="Ver detalhes"
                      >
                        <Eye className="w-4 h-4" aria-hidden="true" />
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
                        <h3 className="font-display text-xl font-semibold text-primary mb-2">
                          {vessel.name}
                        </h3>
                        <div className="flex items-center text-muted-foreground font-body mb-2">
                          <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                          {vessel.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-xl font-bold text-primary">
                          {vessel.price}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
                      {vessel.description}
                    </p>
                    
                    <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground font-body">
                      <span>Ano: {vessel.year}</span>
                      <span className="flex items-center">
                        <Anchor className="w-4 h-4 mr-1" aria-hidden="true" />
                        {vessel.length}
                      </span>
                    </div>

                    {/* Comments Preview */}
                    <div className="border-t pt-4 mb-4">
                      <div className="flex items-center mb-2">
                        <MessageCircle className="w-4 h-4 mr-1 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {vessel.comments.length} avaliações
                        </span>
                        <div className="flex ml-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.round(vessel.comments.reduce((sum, c) => sum + c.rating, 0) / vessel.comments.length)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      {vessel.comments.length > 0 && (
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-xs text-muted-foreground italic">
                            "{vessel.comments[0].comment}"
                          </p>
                          <p className="text-xs text-muted-foreground mt-1 font-medium">
                            - {vessel.comments[0].user}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <Button className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body" asChild>
                      <a href="/contato">Ver Detalhes</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVessels.length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  Nenhuma embarcação encontrada
                </h3>
                <p className="text-muted-foreground font-body">
                  Tente ajustar os filtros de busca para encontrar mais resultados.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Embarcacoes;