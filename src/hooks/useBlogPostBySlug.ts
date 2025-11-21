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
          
          // Melhor formatação de conteúdo
          const formattedContent = rawContent
            .split('\n\n')
            .map(paragraph => {
              const trimmed = paragraph.trim();
              if (!trimmed) return '';
              
              // Detectar título especial azul (começam com $)
              if (trimmed.startsWith('$')) {
                const text = trimmed.replace(/^\$+\s*/, '');
                return `<h2 class="text-3xl font-serif font-bold text-blue-600 mt-10 mb-6 italic border-l-4 border-blue-400 pl-4">${text}</h2>`;
              }
              
              // Detectar títulos normais (começam com #)
              if (trimmed.startsWith('#')) {
                const level = trimmed.match(/^#+/)?.[0].length || 2;
                const text = trimmed.replace(/^#+\s*/, '');
                return `<h${level} class="text-2xl font-display font-bold text-primary mt-8 mb-4">${text}</h${level}>`;
              }
              
              // Parágrafos normais com espaçamento
              return `<p class="mb-6 leading-relaxed text-lg">${trimmed.replace(/\n/g, '<br />')}</p>`;
            })
            .filter(Boolean)
            .join('');

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
