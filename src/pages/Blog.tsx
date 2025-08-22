import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Guia Completo para Comprar seu Primeiro Iate",
    excerpt: "Tudo que você precisa saber antes de investir em uma embarcação de luxo: desde a escolha do modelo até os cuidados de manutenção.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
    author: "Marina Santos",
    date: "15 de Janeiro, 2024",
    category: "Guias",
    readTime: "12 min"
  };

  const posts = [
    {
      title: "As Melhores Marinas do Brasil para Iatistas",
      excerpt: "Descubra os destinos mais exclusivos e bem estruturados para sua próxima aventura náutica.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      author: "Carlos Ribeiro",
      date: "12 de Janeiro, 2024",
      category: "Destinos",
      readTime: "8 min"
    },
    {
      title: "Tendências do Mercado Náutico 2024",
      excerpt: "Análise completa das principais tendências e inovações que estão moldando o mercado de embarcações premium.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      author: "Ana Paula Costa",
      date: "10 de Janeiro, 2024",
      category: "Mercado",
      readTime: "15 min"
    },
    {
      title: "Manutenção Preventiva: Mantendo seu Iate Impecável",
      excerpt: "Dicas essenciais de manutenção para preservar o valor e prolongar a vida útil da sua embarcação.",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&h=300&fit=crop",
      author: "Roberto Silva",
      date: "8 de Janeiro, 2024",
      category: "Manutenção",
      readTime: "10 min"
    },
    {
      title: "Jet Skis Premium: Adrenalina com Sofisticação",
      excerpt: "Os melhores modelos de jet skis do mercado para quem busca performance e luxo nas águas.",
      image: "https://images.unsplash.com/photo-1594736797933-d0ce2769226d?w=400&h=300&fit=crop",
      author: "Fernanda Lima",
      date: "5 de Janeiro, 2024",
      category: "Reviews",
      readTime: "7 min"
    },
    {
      title: "Navegação Sustentável: O Futuro dos Iates",
      excerpt: "Como a tecnologia verde está revolucionando o mundo das embarcações de luxo.",
      image: "https://images.unsplash.com/photo-1571845535817-fa5050a4b7ce?w=400&h=300&fit=crop",
      author: "Eduardo Mendes",
      date: "3 de Janeiro, 2024",
      category: "Sustentabilidade",
      readTime: "12 min"
    },
    {
      title: "Regata de Búzios 2024: Evento Imperdível",
      excerpt: "Tudo sobre o maior evento náutico da Região dos Lagos e como participar desta celebração única.",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop",
      author: "Marina Santos",
      date: "1 de Janeiro, 2024",
      category: "Eventos",
      readTime: "6 min"
    }
  ];

  const categories = [
    "Todos", "Guias", "Mercado", "Destinos", "Manutenção", "Reviews", "Eventos", "Sustentabilidade"
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
                Blog Náutico
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                Conteúdo exclusivo sobre o mundo náutico premium: tendências, guias, 
                destinos e tudo sobre o lifestyle dos mares.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-body text-sm font-medium text-primary">Post em Destaque</span>
              </div>
            </div>

            <Card className="overflow-hidden hover:shadow-premium transition-all duration-300 cursor-pointer" 
                  onClick={() => window.location.href = `/blog/guia-completo-comprar-primeiro-iate`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-gold text-accent-gold-foreground font-body">
                    {featuredPost.category}
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h2 className="font-display text-3xl font-bold text-primary mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground font-body">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime} de leitura</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body w-fit">
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gradient-ocean/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={`font-body ${
                    index === 0 
                      ? 'bg-gradient-hero hover:opacity-90 text-primary-foreground' 
                      : 'hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-premium transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => window.location.href = `/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground font-body">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-body mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full font-body group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Ler Mais
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Fique por dentro das novidades
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Receba semanalmente os melhores conteúdos sobre o mundo náutico 
              diretamente em sua caixa de entrada.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg font-body text-foreground bg-background/90 backdrop-blur-sm border border-background/20 focus:outline-none focus:ring-2 focus:ring-accent-gold"
              />
              <Button 
                size="lg" 
                className="bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-body whitespace-nowrap"
              >
                Assinar Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;