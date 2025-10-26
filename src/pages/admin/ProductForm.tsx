import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ImageUpload from '@/components/admin/ImageUpload';
import MultiImageUpload from '@/components/admin/MultiImageUpload';

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const isEditing = !!id;
  const [coverImage, setCoverImage] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    category: '',
    specifications: '',
    price_cents: '',
    currency: 'BRL',
    stock: '',
    contact_email: '',
    contact_phone: '',
    contact_whatsapp: '',
    published: false,
  });

  useEffect(() => {
    if (id) {
      loadProduct();
    } else {
      setInitialLoad(false);
    }
  }, [id]);

  const loadProduct = async () => {
    try {
      const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (product) {
        setFormData({
          name: product.name || '',
          slug: product.slug || '',
          description: product.description || '',
          price_cents: product.price_cents?.toString() || '',
          stock: product.stock?.toString() || '',
          currency: product.currency || 'BRL',
          category: product.category || '',
          specifications: product.specifications || '',
          contact_email: product.contact_email || '',
          contact_phone: product.contact_phone || '',
          contact_whatsapp: product.contact_whatsapp || '',
          published: product.published || false,
        });
        setCoverImage(product.cover_image_url || '');
      }
    } catch (error: any) {
      console.error('Erro ao carregar produto:', error);
      toast.error('Erro ao carregar produto: ' + error.message);
    } finally {
      setInitialLoad(false);
    }
  };

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
        cover_image_url: coverImage || null,
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

      <h1 className="text-3xl font-bold mb-8">{isEditing ? 'Editar' : 'Novo'} Produto</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="border-2">
          <CardHeader className="bg-muted/50">
            <CardTitle>Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Categoria</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Ex: Segurança, Navegação, Conforto..."
                />
              </div>
              <div>
                <Label htmlFor="specifications">Especificações</Label>
                <Input
                  id="specifications"
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  placeholder="Detalhes técnicos"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descrição Detalhada</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
                placeholder="Descreva o produto, suas características, benefícios e especificações..."
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="bg-muted/50">
            <CardTitle>Imagens do Produto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <ImageUpload
              bucket="products"
              onUpload={setCoverImage}
              currentImage={coverImage}
              label="Imagem Principal do Produto"
            />
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="bg-muted/50">
            <CardTitle>Preço e Estoque</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
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

        <Card className="border-2">
          <CardHeader className="bg-muted/50">
            <CardTitle>Informações de Contato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact_email">E-mail para Vendas</Label>
                <Input
                  id="contact_email"
                  type="email"
                  value={formData.contact_email}
                  onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                  placeholder="vendas@exemplo.com"
                />
              </div>
              <div>
                <Label htmlFor="contact_phone">Telefone</Label>
                <Input
                  id="contact_phone"
                  value={formData.contact_phone}
                  onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="contact_whatsapp">WhatsApp</Label>
              <Input
                id="contact_whatsapp"
                value={formData.contact_whatsapp}
                onChange={(e) => setFormData({ ...formData, contact_whatsapp: e.target.value })}
                placeholder="(00) 00000-0000"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="bg-muted/50">
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
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
            {loading ? 'Salvando...' : (isEditing ? 'Atualizar Produto' : 'Criar Produto')}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/admin/products')}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
