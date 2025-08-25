import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Award, Phone, Mail, Calendar, Clock, Search, Filter, User } from "lucide-react";

const Marinheiros = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [experience, setExperience] = useState('');

  // Mock skippers data - in real app, this would come from database
  const skippers = [
    {
      id: '1',
      name: 'Capitão João Silva',
      bio: 'Marinheiro experiente com mais de 20 anos navegando pelas costas brasileiras. Especialista em embarcações de luxo e turismo náutico.',
      years_experience: 20,
      hourly_rate_cents: 15000, // R$ 150/hora
      day_rate_cents: 80000, // R$ 800/dia
      city: 'Búzios',
      state: 'Rio de Janeiro',
      rating: 4.9,
      reviews_count: 156,
      verified: true,
      license_number: 'CHA-BR-12345',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      specialties: ['Iates de Luxo', 'Navegação Oceânica', 'Turismo Náutico'],
      languages: ['Português', 'Inglês', 'Espanhol'],
      certifications: ['CHA - Capitão de Alto Mar', 'STCW Basic Safety', 'Primeiros Socorros']
    },
    {
      id: '2',
      name: 'Marina Costa',
      bio: 'Primeira marinheira certificada da região com especialização em veleiros e regatas. Experiência internacional em competições.',
      years_experience: 15,
      hourly_rate_cents: 12000,
      day_rate_cents: 65000,
      city: 'Angra dos Reis',
      state: 'Rio de Janeiro',
      rating: 4.8,
      reviews_count: 89,
      verified: true,
      license_number: 'CHM-BR-67890',
      avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      specialties: ['Veleiros', 'Regatas', 'Ensino de Vela'],
      languages: ['Português', 'Inglês'],
      certifications: ['CHM - Capitão de Altura', 'Instrutor de Vela', 'Radio Operador']
    },
    {
      id: '3',
      name: 'Roberto Marinho',
      bio: 'Especialista em pescarias oceânicas e turismo esportivo. Conhece todos os pontos de pesca da região sudeste.',
      years_experience: 25,
      hourly_rate_cents: 18000,
      day_rate_cents: 95000,
      city: 'Cabo Frio',
      state: 'Rio de Janeiro',
      rating: 4.7,
      reviews_count: 203,
      verified: true,
      license_number: 'CHA-BR-11122',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      specialties: ['Pesca Oceânica', 'Turismo Esportivo', 'Embarcações Esportivas'],
      languages: ['Português'],
      certifications: ['CHA - Capitão de Alto Mar', 'Guia de Pesca', 'Mergulho Autônomo']
    }
  ];

  const formatPrice = (priceInCents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(priceInCents / 100);
  };

  const filteredSkippers = skippers.filter(skipper => {
    if (searchLocation && !skipper.city.toLowerCase().includes(searchLocation.toLowerCase()) &&
        !skipper.state.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" className="pt-6">
        {/* Hero Section */}
        <section className="bg-gradient-ocean py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                Marinheiros Profissionais
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                Encontre marinheiros experientes e certificados para sua próxima aventura náutica. 
                Profissionais verificados com anos de experiência em águas brasileiras.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium"
                >
                  <User className="w-5 h-5 mr-2" />
                  Cadastrar-se como Marinheiro
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-body"
                >
                  Como Funciona
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Cidade ou região..."
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="font-body pl-10"
                      />
                    </div>
                  </div>
                  
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Faixa de preço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-100">Até R$ 100/hora</SelectItem>
                      <SelectItem value="100-200">R$ 100 - R$ 200/hora</SelectItem>
                      <SelectItem value="200+">Acima de R$ 200/hora</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={experience} onValueChange={setExperience}>
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Experiência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5+">5+ anos</SelectItem>
                      <SelectItem value="10+">10+ anos</SelectItem>
                      <SelectItem value="15+">15+ anos</SelectItem>
                      <SelectItem value="20+">20+ anos</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skippers Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-primary">
                  Marinheiros Disponíveis
                </h2>
                <p className="font-body text-muted-foreground">
                  {filteredSkippers.length} profissionais encontrados
                </p>
              </div>
              <Button variant="outline" size="sm" className="font-body">
                <Filter className="w-4 h-4 mr-2" />
                Filtros Avançados
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredSkippers.map((skipper) => (
                <Card key={skipper.id} className="group hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Profile Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={skipper.avatar_url}
                        alt={skipper.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-display text-lg font-semibold text-primary">
                            {skipper.name}
                          </h3>
                          {skipper.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs font-body">
                              Verificado
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(skipper.rating) 
                                  ? 'text-yellow-500 fill-current' 
                                  : 'text-muted-foreground'
                              }`} 
                            />
                          ))}
                          <span className="text-sm text-muted-foreground font-body ml-2">
                            {skipper.rating} ({skipper.reviews_count} avaliações)
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground font-body">
                          <MapPin className="w-4 h-4 mr-1" />
                          {skipper.city}, {skipper.state}
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                      {skipper.bio}
                    </p>

                    {/* Experience & License */}
                    <div className="flex items-center justify-between mb-4 p-3 bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <div className="font-display text-lg font-bold text-primary">
                          {skipper.years_experience}
                        </div>
                        <div className="text-xs text-muted-foreground font-body">
                          Anos de experiência
                        </div>
                      </div>
                      <div className="text-center">
                        <Award className="w-6 h-6 text-accent-gold mx-auto mb-1" />
                        <div className="text-xs text-muted-foreground font-body">
                          Licença: {skipper.license_number}
                        </div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-primary mb-2 font-body">
                        Especialidades:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {skipper.specialties.slice(0, 3).map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs font-body">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 p-3 bg-gradient-ocean rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="font-display text-lg font-bold text-primary">
                            {formatPrice(skipper.hourly_rate_cents)}
                          </div>
                          <div className="text-xs text-muted-foreground font-body">
                            por hora
                          </div>
                        </div>
                        <div>
                          <div className="font-display text-lg font-bold text-primary">
                            {formatPrice(skipper.day_rate_cents)}
                          </div>
                          <div className="text-xs text-muted-foreground font-body">
                            diária
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        size="sm" 
                        className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Contratar
                      </Button>
                      <Button size="sm" variant="outline" className="font-body">
                        Ver Perfil
                      </Button>
                    </div>

                    {/* Contact Options */}
                    <div className="flex justify-center space-x-4 mt-4 pt-4 border-t">
                      <Button variant="ghost" size="sm" className="font-body">
                        <Phone className="w-4 h-4 mr-1" />
                        Ligar
                      </Button>
                      <Button variant="ghost" size="sm" className="font-body">
                        <Mail className="w-4 h-4 mr-1" />
                        E-mail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Skipper CTA */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Seja um Marinheiro MARBANA
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Cadastre-se em nossa plataforma e conecte-se com proprietários de embarcações 
              em busca de profissionais qualificados como você.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  Cadastro Simples
                </h3>
                <p className="font-body text-primary-foreground/80 text-sm">
                  Processo rápido com verificação de licenças
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  Agenda Flexível
                </h3>
                <p className="font-body text-primary-foreground/80 text-sm">
                  Trabalhe quando quiser, onde quiser
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  Ganhos Atrativos
                </h3>
                <p className="font-body text-primary-foreground/80 text-sm">
                  Preços justos e pagamentos garantidos
                </p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-body"
            >
              Cadastrar como Marinheiro
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Marinheiros;