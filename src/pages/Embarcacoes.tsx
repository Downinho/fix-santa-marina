import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Anchor, Eye, Search, Filter, MessageCircle, Star } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

import { vessels } from "@/data/vessels";
import { getVideoSrc, getVesselTitle } from "@/utils/videoMapping";

const Embarcacoes = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Função para detectar tipo de embarcação baseado no termo de busca
  const detectVesselType = (term: string) => {
    const lowerTerm = term.toLowerCase();
    if (lowerTerm.includes('lancha')) return 'Lancha';
    if (lowerTerm.includes('iate') || lowerTerm.includes('yacht')) return 'Iate';
    if (lowerTerm.includes('jet') || lowerTerm.includes('ski')) return 'Jet Ski';
    if (lowerTerm.includes('veleiro') || lowerTerm.includes('sailboat')) return 'Veleiro';
    if (lowerTerm.includes('catama') || lowerTerm.includes('cataran')) return 'Catamarã';
    return '';
  };

  // Aplicar filtros da URL quando a página carrega
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    const locationFromUrl = searchParams.get('location');
    const searchFromUrl = searchParams.get('search');

    // Set type immediately from URL
    if (typeFromUrl) {
      setSelectedType(typeFromUrl);
    }
    
    if (locationFromUrl) setSelectedLocation(locationFromUrl);
    
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
      // Auto-detect vessel type from search term only if no type in URL
      if (!typeFromUrl) {
        const detectedType = detectVesselType(searchFromUrl);
        if (detectedType) {
          setSelectedType(detectedType);
        }
      }
    }
  }, [searchParams]);

  // Convertendo os dados do vessels.ts para formato compatível com a página
  const vesselsList = vessels.map(vessel => ({
    id: parseInt(vessel.id),
    name: vessel.name,
    type: vessel.type,
    price: `R$ ${(vessel.price / 100).toLocaleString('pt-BR')}`,
    location: vessel.location,
    year: vessel.year.toString(),
    length: vessel.length,
    image: vessel.images[0],
    featured: vessel.featured || false,
    description: vessel.description,
    slug: vessel.slug,
    comments: [] // Sem comentários por enquanto
  }));

  const filteredVessels = useMemo(() => {
    return vesselsList.filter(vessel => {
      const matchesSearch = vessel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vessel.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vessel.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "" || selectedType === "todos" || vessel.type === selectedType;
      const matchesLocation = selectedLocation === "" || selectedLocation === "todas" || vessel.location.includes(selectedLocation);
      
      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedType, selectedLocation]);

const handleSearch = () => {
    // A busca já funciona automaticamente através do useMemo
    console.log("Searching:", { searchTerm, selectedType, selectedLocation });
  };

  return (
    <Layout>
      <div id="main-content" className="pt-6">
        {/* Page Header with Video Background */}
        <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source 
                 src={getVideoSrc(selectedType)} 
                type="video/mp4" 
              />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
                {getVesselTitle(selectedType)}
              </h1>
              <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Descubra nossa seleção exclusiva de {getVesselTitle(selectedType).toLowerCase()}. 
                Curadoria de qualidade e atendimento personalizado.
              </p>
            </div>

            {/* Search Filters */}
            <div className="bg-background/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-premium max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="sm:col-span-2 md:col-span-2">
                  <Input 
                    placeholder="Buscar por nome, marca ou modelo..."
                    className="h-10 sm:h-12 font-body"
                    aria-label="Buscar embarcações"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="h-10 sm:h-12 font-body" aria-label="Selecionar tipo de embarcação">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="Iate">Iate</SelectItem>
                    <SelectItem value="Lancha">Lancha</SelectItem>
                    <SelectItem value="Veleiro">Veleiro</SelectItem>
                    <SelectItem value="Catamarã">Catamarã</SelectItem>
                    <SelectItem value="Jet Ski">Jet Ski</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-10 sm:h-12 font-body" aria-label="Selecionar localização">
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas</SelectItem>
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
        <section className="py-4 sm:py-6 lg:py-8">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="font-display text-xl sm:text-2xl font-semibold text-primary">
                {filteredVessels.length} embarcações encontradas
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-full overflow-hidden">
              {filteredVessels.map((vessel) => (
                <Card 
                  key={vessel.id} 
                  className="group cursor-pointer hover:shadow-premium transition-all duration-300 overflow-hidden max-w-full"
                >
                  <div className="relative h-48 overflow-hidden max-w-full">
                    <img 
                      src={vessel.image} 
                      alt={`${vessel.name} - ${vessel.type}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 max-w-full"
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
                        asChild
                      >
                        <Link to={`/embarcacao/${vessel.slug}`}>
                          <Eye className="w-4 h-4" aria-hidden="true" />
                        </Link>
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
                    
                    <Button 
                      className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                      asChild
                    >
                      <Link to={`/embarcacao/${vessel.slug}`}>
                        Ver Detalhes
                      </Link>
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
      </div>

      <Footer />
    </Layout>
  );
};

export default Embarcacoes;