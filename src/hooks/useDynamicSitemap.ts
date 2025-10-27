import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useDynamicSitemap = () => {
  const [sitemap, setSitemap] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateDynamicSitemap = async () => {
      try {
        const baseUrl = 'https://marbana.com.br';
        const currentDate = new Date().toISOString().split('T')[0];

        // Buscar embarcações publicadas
        const { data: vessels } = await supabase
          .from('vessels')
          .select('slug')
          .eq('status', 'published');

        // Buscar posts do blog publicados
        const { data: posts } = await supabase
          .from('blog_posts')
          .select('slug')
          .eq('status', 'published');

        // Buscar marinheiros publicados
        const { data: skippers } = await supabase
          .from('skipper_profiles')
          .select('id')
          .eq('published', true);

        // Buscar produtos publicados
        const { data: products } = await supabase
          .from('products')
          .select('slug')
          .eq('published', true);

        // Rotas estáticas
        const staticRoutes = [
          { path: '/', priority: 1.0, changefreq: 'daily' },
          { path: '/embarcacoes', priority: 0.9, changefreq: 'daily' },
          { path: '/acessorios', priority: 0.7, changefreq: 'weekly' },
          { path: '/servicos', priority: 0.7, changefreq: 'monthly' },
          { path: '/blog', priority: 0.8, changefreq: 'daily' },
          { path: '/marinheiros', priority: 0.8, changefreq: 'weekly' },
          { path: '/sobre', priority: 0.6, changefreq: 'monthly' },
          { path: '/contato', priority: 0.6, changefreq: 'monthly' },
          { path: '/anuncie', priority: 0.5, changefreq: 'monthly' },
        ];

        let urls = staticRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`);

        // Adicionar embarcações
        vessels?.forEach(vessel => {
          urls.push(`
  <url>
    <loc>${baseUrl}/embarcacao/${vessel.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
        });

        // Adicionar posts
        posts?.forEach(post => {
          urls.push(`
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
        });

        // Adicionar marinheiros
        skippers?.forEach(skipper => {
          urls.push(`
  <url>
    <loc>${baseUrl}/marinheiro/${skipper.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
        });

        // Adicionar produtos
        products?.forEach(product => {
          urls.push(`
  <url>
    <loc>${baseUrl}/produto/${product.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
        });

        const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        const xmlFooter = '</urlset>';
        
        const sitemapContent = `${xmlHeader}${urls.join('')}\n${xmlFooter}`;
        setSitemap(sitemapContent);
      } catch (error) {
        console.error('Erro ao gerar sitemap:', error);
      } finally {
        setLoading(false);
      }
    };

    generateDynamicSitemap();
  }, []);

  return { sitemap, loading };
};
