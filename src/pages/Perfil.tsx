import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Phone, MessageCircle, Crown, Anchor, ShoppingBag, Compass, Mail } from "lucide-react";
import { Link } from 'react-router-dom';

const Perfil = () => {
  const whatsappNumber = "+5511940159202";
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: Crown,
      title: "Administração da Plataforma",
      description: "Gerenciamento completo da MARBANA",
      contact: "Contato direto para questões administrativas"
    },
    {
      icon: Anchor,
      title: "Anúncios de Embarcações",
      description: "Divulgação profissional de embarcações",
      contact: "Solicite orçamento para anunciar sua embarcação"
    },
    {
      icon: ShoppingBag,
      title: "Produtos e Acessórios",
      description: "Marketplace náutico especializado",
      contact: "Entre em contato para vender seus produtos"
    },
    {
      icon: Compass,
      title: "Serviços de Marinheiros",
      description: "Conectamos clientes com marinheiros qualificados",
      contact: "Cadastre-se como marinheiro profissional"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="font-display text-4xl font-bold text-primary mb-4">
                Central de Contato MARBANA
              </h1>
              <p className="font-body text-xl text-muted-foreground">
                Gerencie seus negócios náuticos diretamente conosco
              </p>
            </div>

            {/* Contact Info */}
            <Card className="mb-8 shadow-premium">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-primary mb-4">
                  Atendimento Personalizado
                </h2>
                <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Na MARBANA, cada cliente recebe atendimento exclusivo. Entre em contato 
                  conosco via WhatsApp para agilizar seu atendimento.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Button 
                    size="lg"
                    onClick={() => openWhatsApp("Olá MARBANA! Preciso de ajuda com minha conta.")}
                    className="bg-green-600 hover:bg-green-700 text-white font-body"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {whatsappNumber}
                  </Button>
                  
                  <div className="flex items-center text-muted-foreground font-body">
                    <Mail className="w-4 h-4 mr-2" />
                    contato@marbana.com.br
                  </div>
                </div>

                <Badge className="bg-green-100 text-green-800 font-body">
                  ✓ Resposta em até 1 hora
                </Badge>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-semibold text-primary mb-2">
                          {service.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mb-3">
                          {service.description}
                        </p>
                        <p className="font-body text-xs text-muted-foreground mb-4">
                          {service.contact}
                        </p>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => openWhatsApp(`Olá! Gostaria de saber mais sobre: ${service.title}`)}
                          className="font-body"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          Contatar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="mt-8 shadow-premium">
              <CardHeader>
                <CardTitle className="font-display text-center">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => openWhatsApp("Olá! Quero anunciar uma embarcação na MARBANA.")}
                    className="h-auto py-4 font-body"
                  >
                    <div className="text-center">
                      <Anchor className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Anunciar Embarcação</div>
                      <div className="text-xs text-muted-foreground">Venda sua lancha, iate ou jet ski</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => openWhatsApp("Olá! Gostaria de me cadastrar como marinheiro.")}
                    className="h-auto py-4 font-body"
                  >
                    <div className="text-center">
                      <Compass className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Ser Marinheiro</div>
                      <div className="text-xs text-muted-foreground">Ofereça seus serviços</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => openWhatsApp("Olá! Quero vender produtos náuticos na MARBANA.")}
                    className="h-auto py-4 font-body"
                  >
                    <div className="text-center">
                      <ShoppingBag className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-semibold">Vender Produtos</div>
                      <div className="text-xs text-muted-foreground">Acessórios e equipamentos</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <div className="text-center mt-12">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Precisa de Ajuda?
              </h3>
              <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nossa equipe está sempre disponível para ajudar você a aproveitar ao máximo 
                a plataforma MARBANA. Entre em contato a qualquer momento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  variant="outline" 
                  className="font-body"
                >
                  <Link to="/contato">
                    <Mail className="w-4 h-4 mr-2" />
                    Página de Contato
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="font-body"
                >
                  <Link to="/sobre">
                    <User className="w-4 h-4 mr-2" />
                    Sobre Nós
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Perfil;
