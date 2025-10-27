import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, Filter, Star, Anchor, Shield, Award, Mail } from "lucide-react";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Link } from "react-router-dom";

const Acessorios = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias');

  // Buscar produtos do banco de dados
  const { products, loading, error } = useProducts({
    category: selectedCategory,
    search: searchTerm
  });

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
                Acessórios Náuticos Premium
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Encontre eletrônicos de navegação, equipamentos de segurança, itens de conforto e muito mais, 
                tudo com a qualidade premium que você espera da MARBANA.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-premium max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="md:col-span-2">
                  <Input 
                    placeholder="Buscar por produto..."
                    className="h-12 font-body"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 font-body">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body h-12"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Buscar
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-accent-gold mr-2 shrink-0" />
                  <span className="text-muted-foreground">Qualidade Garantida</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-5 h-5 text-accent-gold mr-2 shrink-0" />
                  <span className="text-muted-foreground">Busca Inteligente</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-accent-gold mr-2 shrink-0" />
                  <span className="text-muted-foreground">Suporte Especializado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Carregando produtos...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive">Erro ao carregar produtos: {error}</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20">
                <div className="mb-8">
                  <Anchor className="w-24 h-24 text-muted-foreground/50 mx-auto mb-6" />
                </div>
                <h2 className="font-display text-3xl font-bold text-primary mb-6">
                  Em Breve
                </h2>
                <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Estamos preparando nosso marketplace premium de acessórios náuticos. 
                  Em breve você encontrará os melhores produtos do mercado.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
                  <Button 
                    size="lg" 
                    className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                    onClick={() => {
                      const message = "Olá! Gostaria de ser notificado sobre o lançamento do Marketplace de Acessórios Náuticos Premium MARBANA.";
                      window.open(`https://wa.me/5511940159202?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Notificar-me do Lançamento
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="font-body"
                    onClick={() => {
                      const message = "Olá! Gostaria de criar uma lista de desejos premium de acessórios náuticos MARBANA.";
                      window.open(`https://wa.me/5511940159202?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    <Anchor className="w-5 h-5 mr-2" />
                    Lista de Desejos Premium
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {products.length} produtos encontrados
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="group hover:shadow-premium transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {!product.inStock && (
                          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                            Esgotado
                          </Badge>
                        )}
                        
                        <div className="absolute top-3 right-3">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-background/90 backdrop-blur-sm"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <Badge variant="secondary" className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm">
                          {product.category}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4">
                        <h3 className="font-display text-lg font-semibold text-primary mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center mb-3">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
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
                          <span className="text-xs text-muted-foreground ml-2">
                            ({product.reviews})
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-display text-xl font-bold text-primary">
                            {product.price}
                          </span>
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                          disabled={!product.inStock}
                          asChild={product.inStock}
                        >
                          {product.inStock ? (
                            <Link to={`/produto/${product.slug}`}>
                              Ver Detalhes
                            </Link>
                          ) : (
                            <span>Indisponível</span>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Acessorios;
