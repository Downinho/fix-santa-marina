import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, Filter, Star, Anchor, Shield, Award, Mail } from "lucide-react";

const Acessorios = () => {
  const products = [
    {
      id: 1,
      name: "Sonar Garmin GPSMAP 8617",
      category: "Eletrônicos",
      price: "R$ 12.500",
      originalPrice: "R$ 15.000",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 24,
      inStock: true,
      badge: "Oferta"
    },
    {
      id: 2,
      name: "Âncora Bruce Inox 35kg",
      category: "Ancoragem",
      price: "R$ 2.850",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 18,
      inStock: true,
      badge: "Premium"
    },
    {
      id: 3,
      name: "Colete Salva-Vidas Automático",
      category: "Segurança",
      price: "R$ 890",
      image: "https://images.unsplash.com/photo-1571845535817-fa5050a4b7ce?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 32,
      inStock: true
    },
    {
      id: 4,
      name: "Tender Zodiac Cadet 310",
      category: "Embarcações Auxiliares",
      price: "R$ 8.900",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 12,
      inStock: false
    },
    {
      id: 5,
      name: "Kit Iluminação LED Subaquática",
      category: "Iluminação",
      price: "R$ 1.650",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 28,
      inStock: true,
      badge: "Novo"
    },
    {
      id: 6,
      name: "Defensas Polyform A5",
      category: "Proteção",
      price: "R$ 320",
      originalPrice: "R$ 400",
      image: "https://images.unsplash.com/photo-1594736797933-d0ce2769226d?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 45,
      inStock: true,
      badge: "Oferta"
    }
  ];

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
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* EM BREVE Section */}
        <section className="py-32 bg-gradient-ocean">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <Anchor className="w-24 h-24 text-accent-gold mx-auto mb-6" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-8">
                Em Breve
              </h1>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-accent-gold mb-8">
                Marketplace de Acessórios Náuticos Premium
              </h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                Estamos criando o marketplace mais completo de acessórios náuticos do Brasil. 
                Em breve você encontrará eletrônicos de navegação, equipamentos de segurança, itens de conforto e muito mais, 
                tudo com a qualidade premium que você espera da MARBANA.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    Qualidade Garantida
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Apenas marcas premium e produtos com certificação internacional
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    Busca Inteligente
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Encontre exatamente o que precisa por modelo, marca ou aplicação
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    Suporte Especializado
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Consultoria técnica para escolher os produtos ideais
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium"
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Acessorios;