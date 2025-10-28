import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface BlogFilters {
  category?: string;
  search?: string;
}

export const useBlogPosts = (filters?: BlogFilters) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        let query = supabase
          .from('blog_posts')
          .select(`
            *,
            profiles (
              display_name
            )
          `)
          .eq('status', 'published')
          .order('published_at', { ascending: false });

        if (filters?.search) {
          query = query.or(`title.ilike.%${filters.search}%,excerpt.ilike.%${filters.search}%`);
        }

        const { data, error } = await query;
        
        if (error) throw error;
        
        const transformedPosts = data?.map((post, index) => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt || '',
          content: post.content_md || post.excerpt || '',
          image: post.cover_image_url || '/placeholder.svg',
          author: post.profiles?.display_name || 'MARBANA',
          date: new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR'),
          readTime: '5 min',
          category: 'Artigo',
          featured: index === 0
        })) || [];

        setPosts(transformedPosts);
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [filters?.category, filters?.search]);

  return { posts, loading, error };
};
