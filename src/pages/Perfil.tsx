import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, MapPin, Camera, Crown, Anchor, ShoppingBag, Compass, Plus } from "lucide-react";
import { AuthDialog } from '@/components/auth/AuthDialog';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const { user, profile, roles, loading, hasRole, refetchProfile, refetchRoles } = useAuth();
  const [updating, setUpdating] = useState(false);
  const [addingRole, setAddingRole] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    display_name: profile?.display_name || '',
    phone: profile?.phone || '',
    city: profile?.city || '',
    state: profile?.state || '',
    country: profile?.country || 'Brasil',
  });

  React.useEffect(() => {
    if (profile) {
      setFormData({
        display_name: profile.display_name || '',
        phone: profile.phone || '',
        city: profile.city || '',
        state: profile.state || '',
        country: profile.country || 'Brasil',
      });
    }
  }, [profile]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setUpdating(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update(formData)
        .eq('id', user.id);

      if (error) throw error;

      await refetchProfile();
      toast({
        title: "Perfil atualizado",
        description: "Suas informações foram salvas com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar perfil",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleAddRole = async (role: 'seller' | 'vendor' | 'skipper') => {
    if (!user || hasRole(role)) return;

    setAddingRole(true);
    try {
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: user.id, role });

      if (error) throw error;

      await refetchRoles();
      toast({
        title: "Papel adicionado",
        description: `Agora você tem o papel de ${getRoleLabel(role)}.`,
      });
    } catch (error: any) {
      toast({
        title: "Erro ao adicionar papel",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setAddingRole(false);
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown className="w-4 h-4" />;
      case 'seller':
        return <Anchor className="w-4 h-4" />;
      case 'vendor':
        return <ShoppingBag className="w-4 h-4" />;
      case 'skipper':
        return <Compass className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'seller':
        return 'Vendedor de Embarcações';
      case 'vendor':
        return 'Fornecedor de Produtos';
      case 'skipper':
        return 'Marinheiro';
      case 'buyer':
        return 'Comprador';
      default:
        return role;
    }
  };

  const getRoleDescription = (role: string) => {
    switch (role) {
      case 'seller':
        return 'Anuncie e venda suas embarcações';
      case 'vendor':
        return 'Venda produtos e acessórios náuticos';
      case 'skipper':
        return 'Ofereça serviços de pilotagem';
      default:
        return '';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground font-body">Carregando perfil...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center py-20">
              <Card className="max-w-md w-full">
                <CardContent className="p-8 text-center">
                  <User className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h2 className="font-display text-2xl font-semibold text-primary mb-2">
                    Acesso necessário
                  </h2>
                  <p className="text-muted-foreground font-body mb-6">
                    Faça login para acessar seu perfil.
                  </p>
                  <AuthDialog onSuccess={() => navigate('/perfil')}>
                    <Button className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body">
                      Fazer Login
                    </Button>
                  </AuthDialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="font-display text-4xl font-bold text-primary mb-2">
                Meu Perfil
              </h1>
              <p className="font-body text-muted-foreground">
                Gerencie suas informações e papéis na plataforma
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Avatar e Informações Básicas */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={profile?.avatar_url || ''} alt={profile?.display_name || 'Usuário'} />
                        <AvatarFallback className="bg-gradient-hero text-primary-foreground text-2xl">
                          {profile?.display_name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-primary mb-1">
                      {profile?.display_name || 'Usuário'}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mb-4">
                      {user.email}
                    </p>

                    {profile?.is_verified && (
                      <Badge variant="secondary" className="font-body">
                        ✓ Verificado
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Formulário de Edição */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="font-display">Informações Pessoais</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-body">Nome completo</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="name"
                            placeholder="Seu nome completo"
                            className="pl-10 font-body"
                            value={formData.display_name}
                            onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-body">Telefone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            placeholder="(00) 00000-0000"
                            className="pl-10 font-body"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city" className="font-body">Cidade</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="city"
                            placeholder="Sua cidade"
                            className="pl-10 font-body"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state" className="font-body">Estado</Label>
                        <Input
                          id="state"
                          placeholder="UF"
                          className="font-body"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={updating}
                      className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                    >
                      {updating ? "Salvando..." : "Salvar Alterações"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Papéis do Usuário */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="font-display">Meus Papéis na Plataforma</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {roles.map((role) => (
                      <div key={role.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                        {getRoleIcon(role.role)}
                        <div>
                          <p className="font-medium font-body">{getRoleLabel(role.role)}</p>
                          <p className="text-xs text-muted-foreground">
                            {getRoleDescription(role.role)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-display text-lg font-semibold mb-4">Solicitar Novos Papéis</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(['seller', 'vendor', 'skipper'] as const).map((role) => (
                        <div key={role} className="p-4 border rounded-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            {getRoleIcon(role)}
                            <div>
                              <p className="font-medium font-body">{getRoleLabel(role)}</p>
                              <p className="text-sm text-muted-foreground">
                                {getRoleDescription(role)}
                              </p>
                            </div>
                          </div>
                          
                          {hasRole(role) ? (
                            <Badge variant="secondary" className="font-body">
                              ✓ Ativo
                            </Badge>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleAddRole(role)}
                              disabled={addingRole}
                              className="w-full font-body"
                            >
                              <Plus className="w-4 h-4 mr-2" />
                              Solicitar
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Perfil;
