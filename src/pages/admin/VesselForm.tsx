import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VesselForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    type: 'lancha',
    description: '',
    year: '',
    length_m: '',
    beam_m: '',
    draft_m: '',
    capacity: '',
    cabins: '',
    engines: '',
    horsepower: '',
    fuel: '',
    for_sale: false,
    for_rent: true,
    price_sale_cents: '',
    price_hour_cents: '',
    price_day_cents: '',
    currency: 'BRL',
    address: '',
    city: '',
    state: '',
    country: 'Brasil',
    status: 'draft' as 'draft' | 'published'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      const vesselData = {
        ...formData,
        owner_profile_id: user.id,
        year: formData.year ? parseInt(formData.year) : null,
        length_m: formData.length_m ? parseFloat(formData.length_m) : null,
        beam_m: formData.beam_m ? parseFloat(formData.beam_m) : null,
        draft_m: formData.draft_m ? parseFloat(formData.draft_m) : null,
        capacity: formData.capacity ? parseInt(formData.capacity) : null,
        cabins: formData.cabins ? parseInt(formData.cabins) : null,
        horsepower: formData.horsepower ? parseInt(formData.horsepower) : null,
        price_sale_cents: formData.price_sale_cents ? parseInt(formData.price_sale_cents) : null,
        price_hour_cents: formData.price_hour_cents ? parseInt(formData.price_hour_cents) : null,
        price_day_cents: formData.price_day_cents ? parseInt(formData.price_day_cents) : null,
      };

      const { error } = await supabase
        .from('vessels')
        .insert([vesselData]);

      if (error) throw error;

      toast.success('Embarcação criada com sucesso!');
      navigate('/admin/vessels');
    } catch (error: any) {
      console.error('Erro ao criar embarcação:', error);
      toast.error('Erro ao criar embarcação: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-gerar slug a partir do nome
    if (field === 'name') {
      const slug = value.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  return (
    <div className="p-8">
      <Button
        variant="ghost"
        onClick={() => navigate('/admin/vessels')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      <h1 className="text-3xl font-bold mb-8">Nova Embarcação</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleChange('slug', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="type">Tipo *</Label>
                <Select value={formData.type} onValueChange={(value) => handleChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lancha">Lancha</SelectItem>
                    <SelectItem value="iate">Iate</SelectItem>
                    <SelectItem value="veleiro">Veleiro</SelectItem>
                    <SelectItem value="jetski">Jet Ski</SelectItem>
                    <SelectItem value="catamaran">Catamarã</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="year">Ano</Label>
                <Input
                  id="year"
                  type="number"
                  value={formData.year}
                  onChange={(e) => handleChange('year', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Especificações Técnicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="length_m">Comprimento (m)</Label>
                <Input
                  id="length_m"
                  type="number"
                  step="0.01"
                  value={formData.length_m}
                  onChange={(e) => handleChange('length_m', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="beam_m">Boca (m)</Label>
                <Input
                  id="beam_m"
                  type="number"
                  step="0.01"
                  value={formData.beam_m}
                  onChange={(e) => handleChange('beam_m', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="draft_m">Calado (m)</Label>
                <Input
                  id="draft_m"
                  type="number"
                  step="0.01"
                  value={formData.draft_m}
                  onChange={(e) => handleChange('draft_m', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="capacity">Capacidade (pessoas)</Label>
                <Input
                  id="capacity"
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => handleChange('capacity', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="cabins">Cabines</Label>
                <Input
                  id="cabins"
                  type="number"
                  value={formData.cabins}
                  onChange={(e) => handleChange('cabins', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="engines">Motores</Label>
                <Input
                  id="engines"
                  value={formData.engines}
                  onChange={(e) => handleChange('engines', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="horsepower">Potência (HP)</Label>
                <Input
                  id="horsepower"
                  type="number"
                  value={formData.horsepower}
                  onChange={(e) => handleChange('horsepower', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="fuel">Combustível</Label>
                <Input
                  id="fuel"
                  value={formData.fuel}
                  onChange={(e) => handleChange('fuel', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preços e Disponibilidade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="for_sale"
                  checked={formData.for_sale}
                  onCheckedChange={(checked) => handleChange('for_sale', checked)}
                />
                <Label htmlFor="for_sale">À venda</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="for_rent"
                  checked={formData.for_rent}
                  onCheckedChange={(checked) => handleChange('for_rent', checked)}
                />
                <Label htmlFor="for_rent">Para aluguel</Label>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price_sale_cents">Preço de Venda (centavos)</Label>
                <Input
                  id="price_sale_cents"
                  type="number"
                  value={formData.price_sale_cents}
                  onChange={(e) => handleChange('price_sale_cents', e.target.value)}
                  disabled={!formData.for_sale}
                />
              </div>
              <div>
                <Label htmlFor="price_hour_cents">Preço/Hora (centavos)</Label>
                <Input
                  id="price_hour_cents"
                  type="number"
                  value={formData.price_hour_cents}
                  onChange={(e) => handleChange('price_hour_cents', e.target.value)}
                  disabled={!formData.for_rent}
                />
              </div>
              <div>
                <Label htmlFor="price_day_cents">Preço/Dia (centavos)</Label>
                <Input
                  id="price_day_cents"
                  type="number"
                  value={formData.price_day_cents}
                  onChange={(e) => handleChange('price_day_cents', e.target.value)}
                  disabled={!formData.for_rent}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Localização</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="state">Estado</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="status">Status da Publicação</Label>
            <Select value={formData.status} onValueChange={(value: 'draft' | 'published') => handleChange('status', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Rascunho</SelectItem>
                <SelectItem value="published">Publicado</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Salvando...' : 'Criar Embarcação'}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/admin/vessels')}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
