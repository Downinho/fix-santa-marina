import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contato = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Sede - Búzios, RJ",
      details: ["Rua das Embarcações, 123", "Búzios, Rio de Janeiro", "CEP: 28950-000"]
    },
    {
      icon: Phone,
      title: "Telefone & WhatsApp",
      details: ["+55 11 940159202"]
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@marbana.com.br"]
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta: 8h às 18h", "Sábado: 9h às 17h", "Domingo: Emergências"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* Hero Section */}
        <section className="bg-gradient-ocean py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                Fale Conosco
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                Nossa equipe especializada está pronta para atender você com excelência. 
                Entre em contato e descubra como podemos tornar seus sonhos náuticos realidade.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="shadow-premium">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <MessageCircle className="w-8 h-8 text-primary mr-3" />
                      <h2 className="font-display text-2xl font-bold text-primary">
                        Envie sua Mensagem
                      </h2>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nome" className="font-body text-sm font-medium text-foreground">
                            Nome Completo *
                          </Label>
                          <Input 
                            id="nome"
                            placeholder="Seu nome completo"
                            className="mt-2 font-body"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="telefone" className="font-body text-sm font-medium text-foreground">
                            Telefone *
                          </Label>
                          <Input 
                            id="telefone"
                            placeholder="(00) 00000-0000"
                            className="mt-2 font-body"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                          E-mail *
                        </Label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="mt-2 font-body"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="assunto" className="font-body text-sm font-medium text-foreground">
                          Assunto *
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-2 font-body">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="compra">Interesse em Compra</SelectItem>
                            <SelectItem value="venda">Quero Vender Minha Embarcação</SelectItem>
                            <SelectItem value="servicos">Serviços Premium</SelectItem>
                            <SelectItem value="consultoria">Consultoria Especializada</SelectItem>
                            <SelectItem value="filmagem">Filmagens Aquáticas</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="mensagem" className="font-body text-sm font-medium text-foreground">
                          Mensagem *
                        </Label>
                        <Textarea 
                          id="mensagem"
                          placeholder="Descreva detalhadamente como podemos ajudá-lo..."
                          className="mt-2 font-body min-h-32"
                          required
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg" 
                        className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium"
                      >
                        Enviar Mensagem
                      </Button>

                      <p className="text-xs text-muted-foreground font-body text-center">
                        * Campos obrigatórios. Retornaremos seu contato em até 2 horas úteis.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-primary mb-6">
                    Informações de Contato
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Estamos localizados no coração de Búzios, uma das mais belas 
                    destinações náuticas do Brasil. Nossa equipe está sempre pronta 
                    para oferecer atendimento personalizado e exclusivo.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="group hover:shadow-premium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-primary mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="font-body text-sm text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold text-green-800 mb-2">
                      Atendimento Rápido
                    </h3>
                    <p className="font-body text-green-700 mb-4">
                      Para atendimento imediato, fale conosco pelo WhatsApp
                    </p>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white font-body"
                      asChild
                    >
                      <a 
                        href="https://wa.me/5511940159202?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20embarca%C3%A7%C3%B5es%20premium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chamar no WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-ocean">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-primary mb-4">
                Nossa Localização
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Venha nos visitar em Búzios, no coração da Região dos Lagos
              </p>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center text-primary/80">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-display text-lg font-semibold">
                    MARBANA - A Rainha dos Mares
                  </p>
                  <p className="font-body">
                    Búzios, Rio de Janeiro
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;