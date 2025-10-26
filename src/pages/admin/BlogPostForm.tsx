import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ImageUpload from '@/components/admin/ImageUpload';

export default function BlogPostForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const isEditing = !!id;
  const [coverImage, setCoverImage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content_md: '',
    status: 'draft' as 'draft' | 'published',
  });

  useEffect(() => {
    if (id) {
      loadPost();
    } else {
      setInitialLoad(false);
    }
  }, [id]);

  const loadPost = async () => {
    try {
      const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (post) {
        setFormData({
          title: post.title || '',
          slug: post.slug || '',
          excerpt: post.excerpt || '',
          content_md: post.content_md || '',
          status: post.status || 'draft',
        });
        setCoverImage(post.cover_image_url || '');
      }
    } catch (error: any) {
      console.error('Erro ao carregar post:', error);
      toast.error('Erro ao carregar post: ' + error.message);
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

      const postData = {
        author_profile_id: user.id,
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content_md: formData.content_md,
        status: formData.status,
        published_at: formData.status === 'published' ? new Date().toISOString() : null,
        cover_image_url: coverImage,
      };

      if (isEditing) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);

        if (error) throw error;
        toast.success('Post atualizado com sucesso!');
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
        toast.success('Post criado com sucesso!');
      }
      navigate('/admin/blog');
    } catch (error: any) {
      console.error('Erro ao criar post:', error);
      toast.error('Erro ao criar post: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (value: string) => {
    setFormData(prev => ({ ...prev, title: value }));
    
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
        onClick={() => navigate('/admin/blog')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      <h1 className="text-3xl font-bold mb-8">Novo Post do Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
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
              <Label htmlFor="excerpt">Resumo</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                placeholder="Breve resumo do post..."
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conteúdo</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="content_md">Conteúdo (Markdown)</Label>
            <Textarea
              id="content_md"
              value={formData.content_md}
              onChange={(e) => setFormData({ ...formData, content_md: e.target.value })}
              rows={15}
              placeholder="Escreva o conteúdo do post em Markdown..."
              className="font-mono"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Publicação</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="status">Status</Label>
            <Select 
              value={formData.status} 
              onValueChange={(value: 'draft' | 'published') => setFormData({ ...formData, status: value })}
            >
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
            {loading ? 'Salvando...' : (isEditing ? 'Atualizar Post' : 'Criar Post')}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate('/admin/blog')}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
