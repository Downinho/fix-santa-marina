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

export default function ProductForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    price_cents: '',
    currency: 'BRL',
    stock: '',
    published: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      const productData = {
        vendor_profile_id: user.id,
        name: formData.name,
        slug: formData.slug,
        description: formData.description || null,
        price_cents: parseInt(formData.price_cents),
        currency: formData.currency,
        stock: formData.stock ? parseInt(formData.stock) : 0,
        published: formData.published,
      };

      const { error } = await supabase
        .from('products')
        .insert([productData]);

      if (error) throw error;

      toast.success('Acessório criado com sucesso!');
      navigate('/admin/products');
    } catch (error: any) {
      console.error('Erro ao criar acessório:', error);
      toast.error('Erro ao criar acessório: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (value: string) => {
    setFormData(prev => ({ ...prev, name: value }));
    
    // Auto-gerar slug
    const slug = value.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setFormData(prev => ({ ...prev, slug }));
  };

  return (
    <div className="p-8">
      <Button
        variant="ghost"
        onClick={() => navigate('/admin/products')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      <h1 className="text-3xl font-bold mb-8">Novo Acessório</h1>

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
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                />
              </div>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preço e Estoque</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price_cents">Preço (centavos) *</Label>
                <Input
                  id="price_cents"
                  type="number"
                  value={formData.price_cents}
                  onChange={(e) => setFormData({ ...formData, price_cents: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="stock">Quantidade em Estoque</Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
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
            {loading ? 'Salvando...' : 'Criar Acessório'}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/admin/products')}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
