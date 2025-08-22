import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();

  const mockPost = {
    title: "Guia Completo para Comprar seu Primeiro Iate",
    content: `
      <h2>Introdução</h2>
      <p>Comprar seu primeiro iate é um marco emocionante, mas também uma decisão importante que requer pesquisa e planejamento cuidadoso.</p>
      
      <h2>Definindo seu Orçamento</h2>
      <p>Antes de começar a procurar, estabeleça um orçamento realista que inclua não apenas o preço de compra, mas também:</p>
      <ul>
        <li>Manutenção anual (10-15% do valor)</li>
        <li>Seguro náutico</li>
        <li>Taxa de marina</li>
        <li>Combustível</li>
      </ul>

      <h2>Escolhendo o Tipo Certo</h2>
      <p>Considere como você pretende usar sua embarcação:</p>
      <ul>
        <li><strong>Passeios costeiros:</strong> Lanchas esportivas</li>
        <li><strong>Vida a bordo:</strong> Iates com cabines confortáveis</li>
        <li><strong>Pesca:</strong> Embarcações com equipamentos específicos</li>
      </ul>

      <h2>Inspeção e Documentação</h2>
      <p>Nunca compre sem uma inspeção completa por um profissional qualificado. Verifique toda a documentação necessária.</p>
    `,
    author: "Marina Santos",
    date: "15 de Janeiro, 2024",
    category: "Guias",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop"
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-20">
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          <Button variant="ghost" className="mb-6" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>

          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-gold text-accent-gold-foreground">
              {mockPost.category}
            </Badge>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              {mockPost.title}
            </h1>
            
            <div className="flex items-center space-x-4 text-muted-foreground font-body mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {mockPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {mockPost.date}
              </div>
              <span>{mockPost.readTime} de leitura</span>
            </div>
          </div>

          <img 
            src={mockPost.image}
            alt={mockPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none font-body"
            dangerouslySetInnerHTML={{ __html: mockPost.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;