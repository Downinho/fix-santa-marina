import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Award, Phone, Mail, Calendar, Clock, Search, Filter, User, Shield } from "lucide-react";

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
        {/* EM BREVE Section */}  
        <section className="py-32 bg-gradient-ocean">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <User className="w-24 h-24 text-accent-gold mx-auto mb-6" />
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-8">
                Em Breve
              </h1>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-accent-gold mb-8">
                Marinheiros Profissionais MARBANA
              </h2>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                Estamos desenvolvendo uma plataforma exclusiva para conectar você aos melhores marinheiros profissionais certificados. 
                Em breve você poderá contratar capitães experientes, instrutores de vela e especialistas náuticos para suas aventuras.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    Profissionais Certificados
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Marinheiros com licenças válidas e experiência comprovada
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    Disponibilidade Flexível
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Contratação por hora, diária ou para viagens longas
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">
                    Avaliações Verificadas
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Sistema de reviews transparente e confiável
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Notificar-me do Lançamento
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-body"
                >
                  <User className="w-5 h-5 mr-2" />
                  Quero ser Marinheiro MARBANA
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

export default Marinheiros;