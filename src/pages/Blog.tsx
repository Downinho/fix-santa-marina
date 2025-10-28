import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Blog = () => {
  const { posts, loading } = useBlogPosts();
  const featuredPost = posts.find(post => post.featured) || posts[0];
  const otherPosts = posts.filter(post => !post.featured);

  if (loading) {
    return (
      <Layout>
        <main className="pt-16">
          <section className="container mx-auto px-6 py-20 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando posts...</p>
          </section>
        </main>
      </Layout>
    );
  }

  if (posts.length === 0) {
    return (
      <Layout>
        <main className="pt-16">
          <section className="container mx-auto px-6 py-20 text-center">
            <h1 className="font-display text-4xl font-bold text-primary mb-4">Nenhum post encontrado</h1>
            <p className="text-muted-foreground">Em breve teremos conteúdo exclusivo para você.</p>
          </section>
        </main>
      </Layout>
    );
  }

  const categories = [
    "Todos", "Guias", "Mercado", "Destinos", "Manutenção", "Reviews", "Eventos", "Sustentabilidade"
  ];

  return (
    <Layout>
      <main id="main-content" className="pt-16">
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
                  onClick={() => window.location.href = `/blog/${featuredPost.slug}`}>
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
              {otherPosts.map((post, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-premium transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
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

        {/* Newsletter CTA with WhatsApp */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Conecte-se com a MARBANA
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Receba conteúdos exclusivos sobre o mundo náutico e fique por dentro das melhores oportunidades em embarcações de luxo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
              <WhatsAppButton 
                message="Olá! Gostaria de receber conteúdos exclusivos sobre embarcações de luxo."
                className="bg-green-600 hover:bg-green-700 flex-1"
              >
                Conectar via WhatsApp
              </WhatsAppButton>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body"
                onClick={() => window.location.href = '/embarcacoes'}
              >
                Ver Embarcações
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;