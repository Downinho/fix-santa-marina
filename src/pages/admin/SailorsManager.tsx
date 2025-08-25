import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Search, Edit, Trash2, Eye, MapPin, Star, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import api from '@/lib/api';

interface Sailor {
  id: number;
  name: string;
  email: string;
  phone: string;
  bio: string;
  experience_years: number;
  hourly_rate: number;
  daily_rate: number;
  location: string;
  city: string;
  state: string;
  specialties: string[];
  certifications: string[];
  languages: string[];
  available: boolean;
  verified: boolean;
  rating: number;
  avatar_url?: string;
  cover_image_url?: string;
  created_at: string;
  updated_at: string;
}

export default function SailorsManager() {
  const [sailors, setSailors] = useState<Sailor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingSailor, setEditingSailor] = useState<Sailor | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    experience_years: 0,
    hourly_rate: 0,
    daily_rate: 0,
    location: '',
    city: '',
    state: '',
    specialties: '',
    certifications: '',
    languages: '',
    available: true,
    verified: false,
    avatar_url: '',
    cover_image_url: ''
  });

  useEffect(() => {
    loadSailors();
  }, []);

  const loadSailors = async () => {
    try {
      const response = await api.getSailors({
        status: statusFilter === 'all' ? undefined : statusFilter
      });
      if (response.success && response.data) {
        setSailors(response.data);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar marinheiros",
        description: "Não foi possível carregar os marinheiros."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        ...formData,
        specialties: formData.specialties.split(',').map(s => s.trim()).filter(Boolean),
        certifications: formData.certifications.split(',').map(c => c.trim()).filter(Boolean),
        languages: formData.languages.split(',').map(l => l.trim()).filter(Boolean)
      };

      let response;
      if (editingSailor) {
        response = await api.updateSailor(editingSailor.id, data);
      } else {
        response = await api.createSailor(data);
      }

      if (response.success) {
        toast({
          title: editingSailor ? "Marinheiro atualizado!" : "Marinheiro criado!",
          description: editingSailor ? "O marinheiro foi atualizado com sucesso." : "O novo marinheiro foi criado com sucesso."
        });
        resetForm();
        loadSailors();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao salvar",
        description: "Não foi possível salvar o marinheiro."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (sailor: Sailor) => {
    setEditingSailor(sailor);
    setFormData({
      name: sailor.name,
      email: sailor.email,
      phone: sailor.phone,
      bio: sailor.bio,
      experience_years: sailor.experience_years,
      hourly_rate: sailor.hourly_rate,
      daily_rate: sailor.daily_rate,
      location: sailor.location,
      city: sailor.city,
      state: sailor.state,
      specialties: sailor.specialties.join(', '),
      certifications: sailor.certifications.join(', '),
      languages: sailor.languages.join(', '),
      available: sailor.available,
      verified: sailor.verified,
      avatar_url: sailor.avatar_url || '',
      cover_image_url: sailor.cover_image_url || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este marinheiro?')) return;

    try {
      const response = await api.deleteSailor(id);
      if (response.success) {
        toast({
          title: "Marinheiro excluído!",
          description: "O marinheiro foi excluído com sucesso."
        });
        loadSailors();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: "Não foi possível excluir o marinheiro."
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      bio: '',
      experience_years: 0,
      hourly_rate: 0,
      daily_rate: 0,
      location: '',
      city: '',
      state: '',
      specialties: '',
      certifications: '',
      languages: '',
      available: true,
      verified: false,
      avatar_url: '',
      cover_image_url: ''
    });
    setEditingSailor(null);
    setShowForm(false);
  };

  const filteredSailors = sailors.filter(sailor => {
    const matchesSearch = sailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sailor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sailor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' ||
                         (statusFilter === 'available' && sailor.available) ||
                         (statusFilter === 'verified' && sailor.verified);
    const matchesLocation = locationFilter === 'all' || sailor.state === locationFilter;
    
    return matchesSearch && matchesStatus && matchesLocation;
  });

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(cents / 100);
  };

  if (loading && sailors.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {editingSailor ? 'Editar Marinheiro' : 'Novo Marinheiro'}
          </h1>
          <Button variant="outline" onClick={resetForm}>
            Cancelar
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informações do Marinheiro</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo*</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mail*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <Label htmlFor="experience_years">Anos de Experiência</Label>
                  <Input
                    id="experience_years"
                    type="number"
                    value={formData.experience_years}
                    onChange={(e) => setFormData({ ...formData, experience_years: parseInt(e.target.value) || 0 })}
                    min="0"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Biografia</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Conte sobre a experiência e qualificações do marinheiro..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="SP"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Localização Específica</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Marina, porto, etc."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hourly_rate">Taxa por Hora (R$)</Label>
                  <Input
                    id="hourly_rate"
                    type="number"
                    value={formData.hourly_rate}
                    onChange={(e) => setFormData({ ...formData, hourly_rate: parseFloat(e.target.value) || 0 })}
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <Label htmlFor="daily_rate">Taxa por Dia (R$)</Label>
                  <Input
                    id="daily_rate"
                    type="number"
                    value={formData.daily_rate}
                    onChange={(e) => setFormData({ ...formData, daily_rate: parseFloat(e.target.value) || 0 })}
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="specialties">Especialidades (separadas por vírgula)</Label>
                <Input
                  id="specialties"
                  value={formData.specialties}
                  onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
                  placeholder="Vela, Motor, Pesca Esportiva, Navegação Oceânica"
                />
              </div>

              <div>
                <Label htmlFor="certifications">Certificações (separadas por vírgula)</Label>
                <Input
                  id="certifications"
                  value={formData.certifications}
                  onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                  placeholder="CIR, STCW, RYA Coastal Skipper"
                />
              </div>

              <div>
                <Label htmlFor="languages">Idiomas (separados por vírgula)</Label>
                <Input
                  id="languages"
                  value={formData.languages}
                  onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                  placeholder="Português, Inglês, Espanhol"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="avatar_url">URL da Foto de Perfil</Label>
                  <Input
                    id="avatar_url"
                    value={formData.avatar_url}
                    onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                    placeholder="https://exemplo.com/foto.jpg"
                  />
                </div>
                <div>
                  <Label htmlFor="cover_image_url">URL da Imagem de Capa</Label>
                  <Input
                    id="cover_image_url"
                    value={formData.cover_image_url}
                    onChange={(e) => setFormData({ ...formData, cover_image_url: e.target.value })}
                    placeholder="https://exemplo.com/capa.jpg"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="available"
                    checked={formData.available}
                    onCheckedChange={(checked) => setFormData({ ...formData, available: checked as boolean })}
                  />
                  <Label htmlFor="available">Disponível para contratação</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="verified"
                    checked={formData.verified}
                    onCheckedChange={(checked) => setFormData({ ...formData, verified: checked as boolean })}
                  />
                  <Label htmlFor="verified">Perfil verificado</Label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={loading}>
                  {loading ? 'Salvando...' : (editingSailor ? 'Atualizar Marinheiro' : 'Criar Marinheiro')}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestão de Marinheiros</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Marinheiro
        </Button>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label>Buscar</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar marinheiros..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <div>
              <Label>Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="available">Disponíveis</SelectItem>
                  <SelectItem value="verified">Verificados</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Estado</Label>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="SC">Santa Catarina</SelectItem>
                  <SelectItem value="BA">Bahia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" onClick={loadSailors} className="w-full">
                Atualizar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Marinheiros */}
      <div className="grid gap-4">
        {filteredSailors.map((sailor) => (
          <Card key={sailor.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  {sailor.avatar_url && (
                    <img
                      src={sailor.avatar_url}
                      alt={sailor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{sailor.name}</h3>
                      {sailor.verified && (
                        <Badge variant="default">Verificado</Badge>
                      )}
                      {sailor.available && (
                        <Badge variant="outline">Disponível</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{sailor.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {sailor.city}, {sailor.state}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {sailor.experience_years} anos de experiência
                      </span>
                      {sailor.rating && (
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current" />
                          {sailor.rating.toFixed(1)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      {sailor.hourly_rate > 0 && (
                        <span>Hora: {formatCurrency(sailor.hourly_rate * 100)}</span>
                      )}
                      {sailor.daily_rate > 0 && (
                        <span>Diária: {formatCurrency(sailor.daily_rate * 100)}</span>
                      )}
                    </div>
                    {sailor.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {sailor.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  {sailor.phone && (
                    <Button variant="outline" size="sm" onClick={() => window.open(`tel:${sailor.phone}`)}>
                      <Phone className="h-4 w-4" />
                    </Button>
                  )}
                  {sailor.email && (
                    <Button variant="outline" size="sm" onClick={() => window.open(`mailto:${sailor.email}`)}>
                      <Mail className="h-4 w-4" />
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => window.open(`/marinheiro/${sailor.id}`, '_blank')}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleEdit(sailor)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(sailor.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSailors.length === 0 && !loading && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">Nenhum marinheiro encontrado.</p>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Primeiro Marinheiro
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}