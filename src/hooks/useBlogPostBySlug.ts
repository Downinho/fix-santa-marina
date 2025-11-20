import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useBlogPostBySlug = (slug: string) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('blog_posts')
          .select(`
            *,
            profiles (
              display_name,
              avatar_url
            )
          `)
          .eq('slug', slug)
          .eq('status', 'published')
          .single();
        
        if (error) throw error;
        
        if (data) {
          const rawContent = data.content_md || data.excerpt || '';
          const normalized = rawContent.replace(/\r\n/g, "\n");
          const paragraphs = normalized.split(/\n{2,}/).map(p =>
            p.trim().replace(/\n/g, '<br />')
          ).filter(p => p.length > 0);
          const formattedContent = paragraphs.length
            ? `<p>${paragraphs.join('</p><p>')}</p>`
            : '';

          // Calcular tempo de leitura baseado no conteúdo
          const wordCount = rawContent.split(/\s+/).length;
          const readTime = Math.max(1, Math.ceil(wordCount / 200)); // ~200 palavras por minuto

          setPost({
            id: data.id,
            slug: data.slug,
            title: data.title,
            excerpt: data.excerpt || 'Artigo sobre náutica e navegação.',
            content: formattedContent,
            image: data.cover_image_url || '/placeholder.svg',
            author: data.profiles?.display_name || 'MARBANA Editorial',
            authorAvatar: data.profiles?.avatar_url || '/placeholder.svg',
            date: new Date(data.published_at || data.created_at).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            }),
            readTime: `${readTime} min`,
            category: 'Náutica',
            tags: ['Navegação', 'Dicas', 'Embarcações']
          });
        }
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
};
