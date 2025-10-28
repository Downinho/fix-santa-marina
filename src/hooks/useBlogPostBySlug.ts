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
          setPost({
            id: data.id,
            slug: data.slug,
            title: data.title,
            excerpt: data.excerpt,
            content: data.content_md || data.excerpt,
            image: data.cover_image_url || '/placeholder.svg',
            author: data.profiles?.display_name || 'MARBANA',
            date: new Date(data.published_at || data.created_at).toLocaleDateString('pt-BR'),
            readTime: '5 min',
            category: 'Artigo'
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
