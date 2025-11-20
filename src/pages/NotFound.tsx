import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, MessageCircle, Instagram, BookOpen, ArrowLeft, Home } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleWhatsApp = () => {
    const message = `Olá! Tentei acessar a página ${location.pathname} mas ela não foi encontrada. Podem me ajudar?`;
    const whatsappUrl = `https://wa.me/5511947879662?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-ocean flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardContent className="p-12">
          <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-8">
            <Anchor className="w-12 h-12 text-accent-gold-foreground" />
          </div>
          
          <h1 className="font-display text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl font-semibold text-primary mb-4">
            Ops! Página não encontrada
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida. 
            Mas não se preocupe, temos várias opções para te ajudar!
          </p>

          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild variant="default" size="lg" className="bg-gradient-hero">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Página Inicial
                </Link>
              </Button>
              
              <Button 
                onClick={handleWhatsApp}
                variant="outline" 
                size="lg"
                className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button asChild variant="outline" size="lg">
                <a href="https://www.instagram.com/marbanabr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Seguir no Instagram
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/blog" className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Ler o Blog
                </Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              Ou navegue por nossas principais seções:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button asChild variant="ghost" size="sm">
                <Link to="/embarcacoes">Embarcações</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/marinheiros">Marinheiros</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/acessorios">Acessórios</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/servicos">Serviços</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/anuncie">Anunciar</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <WhatsAppButton message="Tentei acessar uma página que não existe. Podem me ajudar?" />
    </div>
  );
};

export default NotFound;
