import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import ImageUpload from '@/components/admin/ImageUpload';
import MultiImageUpload from '@/components/admin/MultiImageUpload';

export default function MarinaForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    country: 'Brasil',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    contact_whatsapp: '',
    website: '',
    total_berths: 0,
    available_berths: 0,
    max_vessel_length_m: 0,
    max_draft_m: 0,
    services: '',
    amenities: '',
    price_day_cents: 0,
    price_month_cents: 0,
    published: false,
    verified: false,
    cover_image_url: '',
  });

  useEffect(() => {
    if (id) {
      loadMarina();
    }
  }, [id]);

  const loadMarina = async () => {
    try {
      const { data, error } = await supabase
        .from('marinas')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          ...data,
          services: data.services?.join(', ') || '',
          amenities: data.amenities?.join(', ') || '',
          price_day_cents: data.price_day_cents || 0,
          price_month_cents: data.price_month_cents || 0,
        });
      }
    } catch (error: any) {
      toast.error('Erro ao carregar marina: ' + error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Usuário não autenticado');
      return;
    }

    // Validação para publicar
    if (formData.published) {
      if (!formData.name || !formData.city || !formData.state) {
        toast.error('Preencha todos os campos obrigatórios antes de publicar');
        return;
      }
    }

    setLoading(true);

    try {
      const marinaData = {
        ...formData,
        services: formData.services.split(',').map(s => s.trim()).filter(Boolean),
        amenities: formData.amenities.split(',').map(s => s.trim()).filter(Boolean),
        owner_profile_id: user.id,
      };

      if (id) {
        // Atualizar
        const { error } = await supabase
          .from('marinas')
          .update(marinaData)
          .eq('id', id);

        if (error) throw error;
        toast.success('Marina atualizada com sucesso!');
      } else {
        // Criar
        const { error } = await supabase
          .from('marinas')
          .insert([marinaData]);

        if (error) throw error;
        toast.success('Marina criada com sucesso!');
      }

      navigate('/admin/marinas');
    } catch (error: any) {
      toast.error('Erro ao salvar marina: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {id ? 'Editar Marina' : 'Nova Marina'}
          </h2>
          <p className="text-muted-foreground">
            Preencha os dados da marina
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nome da Marina *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div>
                <Label>Imagem de Capa</Label>
                <Input
                  type="url"
                  placeholder="URL da imagem"
                  value={formData.cover_image_url}
                  onChange={(e) => setFormData({ ...formData, cover_image_url: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Localização */}
          <Card>
            <CardHeader>
              <CardTitle>Localização</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">Endereço Completo</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Cidade *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="state">Estado (UF) *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    maxLength={2}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capacidade */}
          <Card>
            <CardHeader>
              <CardTitle>Capacidade e Infraestrutura</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="total_berths">Total de Vagas</Label>
                  <Input
                    id="total_berths"
                    type="number"
                    value={formData.total_berths}
                    onChange={(e) => setFormData({ ...formData, total_berths: parseInt(e.target.value) || 0 })}
                  />
                </div>

                <div>
                  <Label htmlFor="available_berths">Vagas Disponíveis</Label>
                  <Input
                    id="available_berths"
                    type="number"
                    value={formData.available_berths}
                    onChange={(e) => setFormData({ ...formData, available_berths: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="max_vessel_length_m">Comprimento Máx. (m)</Label>
                  <Input
                    id="max_vessel_length_m"
                    type="number"
                    step="0.1"
                    value={formData.max_vessel_length_m}
                    onChange={(e) => setFormData({ ...formData, max_vessel_length_m: parseFloat(e.target.value) || 0 })}
                  />
                </div>

                <div>
                  <Label htmlFor="max_draft_m">Calado Máx. (m)</Label>
                  <Input
                    id="max_draft_m"
                    type="number"
                    step="0.1"
                    value={formData.max_draft_m}
                    onChange={(e) => setFormData({ ...formData, max_draft_m: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Serviços e Comodidades */}
          <Card>
            <CardHeader>
              <CardTitle>Serviços e Comodidades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="services">Serviços (separados por vírgula)</Label>
                <Input
                  id="services"
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                  placeholder="Vagas Fixas, Vagas Visitantes, Limpeza, Manutenção"
                />
              </div>

              <div>
                <Label htmlFor="amenities">Comodidades (separadas por vírgula)</Label>
                <Input
                  id="amenities"
                  value={formData.amenities}
                  onChange={(e) => setFormData({ ...formData, amenities: e.target.value })}
                  placeholder="Wi-Fi, Restaurante, Estacionamento, Chuveiros"
                />
              </div>
            </CardContent>
          </Card>

          {/* Preços */}
          <Card>
            <CardHeader>
              <CardTitle>Preços (em reais)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price_day">Diária (visitante)</Label>
                  <Input
                    id="price_day"
                    type="number"
                    step="0.01"
                    value={formData.price_day_cents / 100}
                    onChange={(e) => setFormData({ ...formData, price_day_cents: Math.round(parseFloat(e.target.value) * 100) || 0 })}
                  />
                </div>

                <div>
                  <Label htmlFor="price_month">Mensalidade (vaga fixa)</Label>
                  <Input
                    id="price_month"
                    type="number"
                    step="0.01"
                    value={formData.price_month_cents / 100}
                    onChange={(e) => setFormData({ ...formData, price_month_cents: Math.round(parseFloat(e.target.value) * 100) || 0 })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact_name">Nome do Responsável</Label>
                  <Input
                    id="contact_name"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="contact_email">Email</Label>
                  <Input
                    id="contact_email"
                    type="email"
                    value={formData.contact_email}
                    onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact_phone">Telefone</Label>
                  <Input
                    id="contact_phone"
                    value={formData.contact_phone}
                    onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="contact_whatsapp">WhatsApp</Label>
                  <Input
                    id="contact_whatsapp"
                    value={formData.contact_whatsapp}
                    onChange={(e) => setFormData({ ...formData, contact_whatsapp: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://"
                />
              </div>
            </CardContent>
          </Card>

          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="published">Publicado</Label>
                  <p className="text-sm text-muted-foreground">
                    Marina visível no site
                  </p>
                </div>
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="verified">Verificada</Label>
                  <p className="text-sm text-muted-foreground">
                    Marina com selo de verificação
                  </p>
                </div>
                <Switch
                  id="verified"
                  checked={formData.verified}
                  onCheckedChange={(checked) => setFormData({ ...formData, verified: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar Marina'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/marinas')}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
