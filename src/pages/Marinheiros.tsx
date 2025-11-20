import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Award, Phone, Mail, Calendar, Clock, Search, Filter, User, Shield, AlertCircle, MessageCircle } from "lucide-react";
import { useSkippers } from "@/hooks/useSkippers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Marinheiros = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [experience, setExperience] = useState('');

  // Buscar marinheiros do banco de dados
  const { skippers, loading, error } = useSkippers({ location: searchLocation });

  const formatPrice = (priceInCents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(priceInCents / 100);
  };

  return (
    <Layout>
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="mb-8">
                <User className="w-20 h-20 text-accent-gold mx-auto mb-6" />
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
                Marinheiros Profissionais
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Conecte-se com os melhores marinheiros profissionais certificados. 
                Capitães experientes, instrutores de vela e especialistas náuticos para suas aventuras.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-premium max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <Input 
                    placeholder="Buscar por localização..."
                    className="h-12 font-body"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
                
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="h-12 font-body">
                    <SelectValue placeholder="Faixa de Preço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="0-500">Até R$ 500/dia</SelectItem>
                    <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                    <SelectItem value="1000+">Acima de R$ 1.000</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body h-12"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skippers List */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Carregando marinheiros...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-destructive">Erro ao carregar marinheiros: {error}</p>
              </div>
            ) : skippers.length === 0 ? (
              <div className="text-center py-20">
                <div className="mb-8">
                  <User className="w-24 h-24 text-muted-foreground/50 mx-auto mb-6" />
                </div>
                <h2 className="font-display text-3xl font-bold text-primary mb-6">
                  Em Breve
                </h2>
                <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Estamos finalizando o cadastro dos marinheiros profissionais. 
                  Em breve você terá acesso a uma seleção exclusiva de capitães certificados.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                  onClick={() => {
                    const message = "Olá! Gostaria de ser notificado sobre o lançamento da plataforma de Marinheiros Profissionais MARBANA.";
                    window.open(`https://wa.me/5511947879662?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Notificar-me do Lançamento
                </Button>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-display text-2xl font-semibold text-primary">
                    {skippers.length} marinheiros encontrados
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skippers.map((skipper) => (
                    <Link 
                      key={skipper.id} 
                      to={`/marinheiros/${skipper.slug}`}
                      className="block h-full"
                    >
                      <Card className="group hover:shadow-premium transition-all duration-300 h-full">
                        <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="relative">
                            <img 
                              src={skipper.avatar_url} 
                              alt={skipper.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Badge className={`absolute -bottom-1 -right-1 h-6 w-6 p-0 flex items-center justify-center ${
                                    skipper.verified 
                                      ? 'bg-green-500 hover:bg-green-600' 
                                      : 'bg-yellow-500 hover:bg-yellow-600'
                                  }`}>
                                    {skipper.verified ? (
                                      <Shield className="w-3 h-3" />
                                    ) : (
                                      <AlertCircle className="w-3 h-3" />
                                    )}
                                  </Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{skipper.verified ? 'Marinheiro Verificado' : 'Em Verificação'}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-display text-xl font-semibold text-primary truncate">
                                {skipper.name}
                              </h3>
                              {!skipper.verified && (
                                <Badge variant="outline" className="text-xs">
                                  Em Verificação
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mb-2">
                              <MapPin className="w-4 h-4 mr-1 shrink-0" />
                              <span className="truncate">{skipper.city}, {skipper.state}</span>
                            </div>
                            {skipper.years_experience > 0 && (
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Award className="w-4 h-4 mr-1 shrink-0" />
                                <span>{skipper.years_experience} anos de experiência</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-3">
                          {skipper.bio}
                        </p>

                        {skipper.specialties && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {skipper.specialties.split(',').slice(0, 3).map((specialty: string, idx: number) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {specialty.trim()}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="border-t pt-4 mb-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">A partir de</p>
                              <p className="font-display text-lg font-bold text-primary">
                                {formatPrice(skipper.day_rate_cents)}/dia
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground mb-1">Por hora</p>
                              <p className="font-body text-sm font-semibold text-primary">
                                {formatPrice(skipper.hourly_rate_cents)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-gradient-hero hover:opacity-90"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          >
                            Ver Perfil Completo
                          </Button>
                          <Button 
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const message = `Olá! Gostaria de mais informações sobre o marinheiro ${skipper.name}.`;
                              const whatsapp = skipper.contact_whatsapp || '5511947879662';
                              window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                          >
                            <MessageCircle className="w-5 h-5" />
                          </Button>
                        </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Marinheiros;
