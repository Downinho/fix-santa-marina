import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useBlogPostBySlug } from "@/hooks/useBlogPostBySlug";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogPost = () => {
  const { slug } = useParams();
  
  const { post, loading, error } = useBlogPostBySlug(slug || '');
  const { posts: allPosts } = useBlogPosts();
  
  // Artigos relacionados (3 aleatórios)
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
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

  const shareUrl = window.location.href;
  const shareText = `${post.title} - MARBANA`;

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Blog MARBANA</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "MARBANA",
              "logo": {
                "@type": "ImageObject",
                "url": "https://marbana.com.br/logo.png"
              }
            },
            "description": post.excerpt
          })}
        </script>
      </Helmet>
      <main id="main-content" className="pt-16">
        <article className="container mx-auto px-6 py-16 max-w-4xl">
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
            className="prose prose-lg max-w-none font-body prose-headings:font-display prose-headings:text-primary prose-a:text-primary prose-strong:text-primary prose-p:mb-6 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t">
            <span className="font-body text-muted-foreground">Compartilhar:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')}
            >
              <Twitter className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Artigos Relacionados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} to={`/blog/${related.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <CardContent className="p-4">
                        <h4 className="font-display font-semibold text-primary mb-2 line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="font-body text-sm text-muted-foreground line-clamp-2">
                          {related.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

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