import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Anchor } from "lucide-react";
import heroImage from "@/assets/hero-yacht-marina.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Mercado Livre<br />
              <span className="text-accent-gold">dos Mares</span><br />
              MARBANA
            </h1>
            <p className="font-body text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              A Rainha dos Mares em Búzios/RJ. Curadoria exclusiva, atendimento personalizado e as melhores embarcações premium do Brasil.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  O que você procura?
                </label>
                <Input 
                  placeholder="Ex: Lancha, Iate, Veleiro..."
                  className="h-12 font-body"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  Tipo
                </label>
                <Select>
                  <SelectTrigger className="h-12 font-body">
                    <SelectValue placeholder="Tipo de embarcação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lancha">Lancha</SelectItem>
                    <SelectItem value="iate">Iate</SelectItem>
                    <SelectItem value="veleiro">Veleiro</SelectItem>
                    <SelectItem value="catamara">Catamarã</SelectItem>
                    <SelectItem value="jet-ski">Jet Ski</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  Localização
                </label>
                <Select>
                  <SelectTrigger className="h-12 font-body">
                    <SelectValue placeholder="Cidade/Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="sc">Santa Catarina</SelectItem>
                    <SelectItem value="ba">Bahia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium flex-1 h-12"
              >
                <Search className="w-5 h-5 mr-2" />
                Buscar Embarcações
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="font-body font-medium h-12 min-w-[200px]"
              >
                <Anchor className="w-5 h-5 mr-2" />
                Filtros Avançados
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">500+</div>
              <div className="text-primary-foreground/80 font-body">Embarcações Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">98%</div>
              <div className="text-primary-foreground/80 font-body">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-gold mb-2">15+</div>
              <div className="text-primary-foreground/80 font-body">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;