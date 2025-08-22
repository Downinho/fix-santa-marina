import { Button } from "@/components/ui/button";
import { Anchor, ArrowRight, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-primary-foreground/20">
          <Anchor size={60} />
        </div>
        <div className="absolute bottom-20 right-20 text-primary-foreground/20">
          <Anchor size={80} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary-foreground/10">
          <Anchor size={120} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1 bg-accent-gold/20 backdrop-blur-sm rounded-full px-4 py-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
              ))}
              <span className="ml-2 text-primary-foreground font-body">5.0 • 500+ avaliações</span>
            </div>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Pronto para navegar<br />
            rumo ao <span className="text-accent-gold">extraordinário</span>?
          </h2>
          
          <p className="font-body text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se a centenas de proprietários que já descobriram a diferença de trabalhar 
            com a MARBANA. Sua embarcação dos sonhos está esperando.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-accent-gold hover:bg-accent-gold-light text-accent-gold-foreground font-body font-semibold h-14 group"
            >
              <Anchor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Anunciar Meu Barco
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-body font-semibold h-14"
            >
              Explorar Catálogo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">R$ 2.5B+</div>
              <div className="text-primary-foreground/80 font-body text-sm">Em vendas realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">1200+</div>
              <div className="text-primary-foreground/80 font-body text-sm">Embarcações vendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">48h</div>
              <div className="text-primary-foreground/80 font-body text-sm">Tempo médio de resposta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">98%</div>
              <div className="text-primary-foreground/80 font-body text-sm">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;