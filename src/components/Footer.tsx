import { Anchor, Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Anchor className="w-6 h-6 text-accent-gold-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl">MARBANA</h3>
                <p className="text-sm text-primary-foreground/70 font-body">Premium Maritime</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-6">
              O marketplace premium para barcos e iates. 
              Conectando pessoas aos seus sonhos náuticos com excelência e sofisticação.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://www.instagram.com/marbanabr" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary-foreground/10" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3 font-body">
              <li><a href="/embarcacoes" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Catálogo</a></li>
              <li><a href="/embarcacoes" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Busca Avançada</a></li>
              <li><a href="/anuncie" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Anunciar Barco</a></li>
              <li><a href="/sobre" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Sobre Nós</a></li>
              <li><a href="/blog" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Blog Náutico</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 font-body">
              <li><a href="/servicos" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Consultoria VIP</a></li>
              <li><a href="/servicos" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Inspeção Técnica</a></li>
              <li><a href="/servicos" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Financiamento</a></li>
              <li><a href="/servicos" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Documentação</a></li>
              <li><a href="/marinheiros" className="text-primary-foreground/80 hover:text-accent-gold transition-colors">Marinheiros</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4 font-body">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-gold" />
                <span className="text-primary-foreground/80">+55 11 940159202</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-gold" />
                <span className="text-primary-foreground/80">contato@marbana.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-gold mt-1" />
                <span className="text-primary-foreground/80">
                  Armação dos Búzios<br />
                  Rio de Janeiro, RJ
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-body font-semibold mb-3">Newsletter Exclusiva</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button className="bg-gradient-gold hover:bg-accent-gold/90 text-accent-gold-foreground">
                  Assinar
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/70 font-body text-sm">
              © 2024 MARBANA. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm font-body">
              <a href="/politica-privacidade" className="text-primary-foreground/70 hover:text-accent-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="text-primary-foreground/70 hover:text-accent-gold transition-colors">
                Termos de Uso
              </a>
              <a href="/cookies" className="text-primary-foreground/70 hover:text-accent-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;