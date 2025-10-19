import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SailorForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    bio: '',
    license_number: '',
    years_experience: '',
    hourly_rate_cents: '',
    day_rate_cents: '',
    city: '',
    state: '',
    service_area: '',
    published: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      const sailorData = {
        profile_id: user.id,
        bio: formData.bio || null,
        license_number: formData.license_number || null,
        years_experience: formData.years_experience ? parseInt(formData.years_experience) : null,
        hourly_rate_cents: formData.hourly_rate_cents ? parseInt(formData.hourly_rate_cents) : null,
        day_rate_cents: formData.day_rate_cents ? parseInt(formData.day_rate_cents) : null,
        city: formData.city || null,
        state: formData.state || null,
        service_area: formData.service_area || null,
        published: formData.published,
      };

      const { error } = await supabase
        .from('skipper_profiles')
        .insert([sailorData]);

      if (error) throw error;

      toast.success('Marinheiro criado com sucesso!');
      navigate('/admin/sailors');
    } catch (error: any) {
      console.error('Erro ao criar marinheiro:', error);
      toast.error('Erro ao criar marinheiro: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <Button
        variant="ghost"
        onClick={() => navigate('/admin/sailors')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      <h1 className="text-3xl font-bold mb-8">Novo Marinheiro</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Profissionais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="bio">Biografia</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="license_number">Número da Licença</Label>
                <Input
                  id="license_number"
                  value={formData.license_number}
                  onChange={(e) => setFormData({ ...formData, license_number: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="years_experience">Anos de Experiência</Label>
                <Input
                  id="years_experience"
                  type="number"
                  value={formData.years_experience}
                  onChange={(e) => setFormData({ ...formData, years_experience: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preços</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hourly_rate_cents">Taxa/Hora (centavos)</Label>
                <Input
                  id="hourly_rate_cents"
                  type="number"
                  value={formData.hourly_rate_cents}
                  onChange={(e) => setFormData({ ...formData, hourly_rate_cents: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="day_rate_cents">Taxa/Dia (centavos)</Label>
                <Input
                  id="day_rate_cents"
                  type="number"
                  value={formData.day_rate_cents}
                  onChange={(e) => setFormData({ ...formData, day_rate_cents: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Localização e Área de Atuação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
                />
              </div>
            </div>

            <div>
              <Label htmlFor="service_area">Área de Serviço</Label>
              <Textarea
                id="service_area"
                value={formData.service_area}
                onChange={(e) => setFormData({ ...formData, service_area: e.target.value })}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => setFormData({ ...formData, published: checked as boolean })}
              />
              <Label htmlFor="published">Publicado</Label>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Salvando...' : 'Criar Marinheiro'}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/admin/sailors')}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
