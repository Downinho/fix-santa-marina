import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Anchor, Eye, Search, Filter } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import Map from "@/components/Map";

const Embarcacoes = () => {
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
      lat: -23.0067,
      lng: -44.3181
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
      lat: -23.9608,
      lng: -46.3331
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
      lat: -23.9939,
      lng: -46.2566
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
      lat: -22.7469,
      lng: -41.8819
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
      lat: -22.7500,
      lng: -41.8850
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
      lat: -23.0100,
      lng: -44.3200
    }
  ];

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
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="h-12 font-body" aria-label="Selecionar tipo de embarcação">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iate">Iate</SelectItem>
                    <SelectItem value="lancha">Lancha</SelectItem>
                    <SelectItem value="veleiro">Veleiro</SelectItem>
                    <SelectItem value="catamara">Catamarã</SelectItem>
                    <SelectItem value="jet-ski">Jet Ski</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="h-12 font-body" aria-label="Selecionar localização">
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="sc">Santa Catarina</SelectItem>
                    <SelectItem value="ba">Bahia</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body h-12"
                  aria-label="Buscar embarcações"
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
            <ResizablePanelGroup direction="horizontal" className="min-h-[800px]">
              {/* Vessels List */}
              <ResizablePanel defaultSize={60} minSize={40}>
                <div className="pr-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-display text-2xl font-semibold text-primary">
                      {vessels.length} embarcações encontradas
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {vessels.map((vessel) => (
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
                          
                          <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground font-body">
                            <span>Ano: {vessel.year}</span>
                            <span className="flex items-center">
                              <Anchor className="w-4 h-4 mr-1" aria-hidden="true" />
                              {vessel.length}
                            </span>
                          </div>
                          
                          <Button className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body" asChild>
                            <a href="/contato">Ver Detalhes</a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* Map Panel */}
              <ResizablePanel defaultSize={40} minSize={30}>
                <div className="pl-4">
                  <div className="sticky top-6">
                    <h3 className="font-display text-xl font-semibold text-primary mb-4">
                      Mapa das Embarcações
                    </h3>
                    <Map vessels={vessels} />
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Embarcacoes;