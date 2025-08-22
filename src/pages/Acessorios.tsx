import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, Filter, Star, Anchor } from "lucide-react";

const Acessorios = () => {
  const products = [
    {
      id: 1,
      name: "Sonar Garmin GPSMAP 8617",
      category: "Eletrônicos",
      price: "R$ 12.500",
      originalPrice: "R$ 15.000",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      badge: "Oferta"
    },
    {
      id: 2,
      name: "Âncora Bruce Inox 35kg",
      category: "Ancoragem",
      price: "R$ 2.850",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 18,
      inStock: true,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Colete Salva-Vidas Automático",
      category: "Segurança",
      price: "R$ 890",
      image: "https://images.unsplash.com/photo-1571845535817-fa5050a4b7ce?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 32,
      inStock: true
    },
    {
      id: 4,
      name: "Tender Zodiac Cadet 310",
      category: "Embarcações Auxiliares",
      price: "R$ 8.900",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 12,
      inStock: false
    },
    {
      id: 5,
      name: "Kit Iluminação LED Subaquática",
      category: "Iluminação",
      price: "R$ 1.650",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 28,
      inStock: true,
      badge: "Novo"
    },
    {
      id: 6,
      name: "Defensas Polyform A5",
      category: "Proteção",
      price: "R$ 320",
      originalPrice: "R$ 400",
      image: "https://images.unsplash.com/photo-1594736797933-d0ce2769226d?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 45,
      inStock: true,
      badge: "Oferta"
    }
  ];

  const categories = [
    "Todas as Categorias",
    "Eletrônicos",
    "Ancoragem",
    "Segurança",
    "Iluminação",
    "Proteção",
    "Embarcações Auxiliares",
    "Motor e Performance",
    "Conforto"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* Hero Section */}
        <section className="bg-gradient-ocean py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                Acessórios Náuticos Premium
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                Equipamentos e acessórios de alta qualidade para sua embarcação. 
                Desde eletrônicos avançados até itens de segurança essenciais.
              </p>
              <Badge className="bg-gradient-gold text-accent-gold-foreground font-body">
                Marketplace Especializado
              </Badge>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-2">
                <Input 
                  placeholder="Buscar acessórios, marcas ou códigos..."
                  className="h-12 font-body"
                  aria-label="Buscar acessórios"
                />
              </div>
              
              <Select>
                <SelectTrigger className="h-12 font-body" aria-label="Selecionar categoria">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category, index) => (
                    <SelectItem key={index} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body h-12"
                aria-label="Buscar acessórios"
              >
                <Search className="w-5 h-5 mr-2" aria-hidden="true" />
                Buscar
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm" className="font-body">
                <Filter className="w-4 h-4 mr-2" aria-hidden="true" />
                Filtros Avançados
              </Button>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground font-body">
                  {products.length} produtos encontrados
                </span>
                <Select>
                  <SelectTrigger className="w-48 font-body">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Mais Relevantes</SelectItem>
                    <SelectItem value="price-low">Menor Preço</SelectItem>
                    <SelectItem value="price-high">Maior Preço</SelectItem>
                    <SelectItem value="rating">Melhor Avaliação</SelectItem>
                    <SelectItem value="newest">Mais Recentes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  className="group cursor-pointer hover:shadow-premium transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {product.badge && (
                      <Badge 
                        className={`absolute top-4 left-4 font-body ${
                          product.badge === 'Oferta' 
                            ? 'bg-red-500 text-white' 
                            : product.badge === 'Premium'
                            ? 'bg-gradient-gold text-accent-gold-foreground'
                            : 'bg-green-500 text-white'
                        }`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    
                    <div className="absolute top-4 right-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-background/90 backdrop-blur-sm border-background/20"
                        aria-label="Adicionar aos favoritos"
                      >
                        <Heart className="w-4 h-4" aria-hidden="true" />
                      </Button>
                    </div>
                    
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <Badge variant="secondary" className="font-body">
                          Esgotado
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="font-body text-xs mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-display text-lg font-semibold text-primary mb-2">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2 font-body">
                        {product.rating} ({product.reviews} avaliações)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-display text-xl font-bold text-primary">
                          {product.price}
                        </div>
                        {product.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through font-body">
                            {product.originalPrice}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        {product.inStock ? (
                          <Badge className="bg-green-100 text-green-800 font-body">
                            Em estoque
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="font-body">
                            Indisponível
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="font-body"
                        disabled={!product.inStock}
                        onClick={() => window.location.href = `/produto/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Ver Detalhes
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                        disabled={!product.inStock}
                        onClick={() => window.location.href = `/produto/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {product.inStock ? 'Comprar' : 'Esgotado'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Load More */}
        <section className="py-8 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-body font-medium min-w-[200px]"
          >
            Carregar Mais Produtos
          </Button>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <Anchor className="w-16 h-16 text-accent-gold mx-auto mb-6" />
              <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
                Não encontrou o que procura?
              </h2>
              <p className="font-body text-xl text-primary-foreground/90 mb-8">
                Nossa equipe especializada pode ajudar você a encontrar exatamente 
                o que sua embarcação precisa. Atendimento personalizado garantido.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-body"
                  onClick={() => window.location.href = '/contato'}
                >
                  Falar com Especialista
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 font-body"
                  onClick={() => window.location.href = '/contato'}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Acessorios;