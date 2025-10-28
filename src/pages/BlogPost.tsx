import { useParams } from "react-router-dom";
import { useBlogPostBySlug } from "@/hooks/useBlogPostBySlug";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogPost = () => {
  const { slug } = useParams();
  
  const { post, loading, error } = useBlogPostBySlug(slug || '');
  
  if (loading) {
    return (
      <Layout>
        <main className="container mx-auto px-6 py-20 text-center pt-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando post...</p>
        </main>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <main className="container mx-auto px-6 py-20 text-center pt-16">
          <h1 className="font-display text-4xl font-bold text-primary mb-4">Post não encontrado</h1>
          <Button onClick={() => window.location.href = '/blog'}>
            Voltar ao Blog
          </Button>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main id="main-content" className="pt-16">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <Button variant="ghost" className="mb-6" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>

          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-gold text-accent-gold-foreground">
              {post.category}
            </Badge>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-muted-foreground font-body mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <span>{post.readTime} de leitura</span>
            </div>
          </div>

          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none font-body prose-headings:font-display prose-headings:text-primary prose-a:text-primary prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-gradient-hero rounded-lg text-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Gostou do conteúdo? Conheça mais sobre a MARBANA
            </h3>
            <p className="text-primary-foreground/90 mb-6 font-body">
              Descubra nossa seleção exclusiva de embarcações premium e viva o melhor do lifestyle náutico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                message="Olá! Li o artigo no blog e gostaria de conhecer mais sobre as embarcações MARBANA."
                className="bg-green-600 hover:bg-green-700"
              >
                Falar com Especialista
              </WhatsAppButton>
              <Button 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.location.href = '/embarcacoes'}
              >
                Ver Embarcações
              </Button>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default BlogPost;