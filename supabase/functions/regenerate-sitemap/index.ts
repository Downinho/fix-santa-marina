import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const baseUrl = 'https://marbana.com.br';
    const urls: SitemapUrl[] = [];
    const currentDate = new Date().toISOString().split('T')[0];

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
      { path: '/busca', priority: 0.8, changefreq: 'daily' },
      { path: '/politica-privacidade', priority: 0.3, changefreq: 'yearly' },
      { path: '/termos-uso', priority: 0.3, changefreq: 'yearly' },
      { path: '/cookies', priority: 0.3, changefreq: 'yearly' },
    ];

    staticRoutes.forEach(route => {
      urls.push({
        loc: `${baseUrl}${route.path}`,
        lastmod: currentDate,
        changefreq: route.changefreq,
        priority: route.priority
      });
    });

    // Buscar embarcações publicadas
    const { data: vessels } = await supabaseClient
      .from('vessels')
      .select('slug, updated_at')
      .eq('status', 'published');

    vessels?.forEach(vessel => {
      urls.push({
        loc: `${baseUrl}/embarcacao/${vessel.slug}`,
        lastmod: new Date(vessel.updated_at).toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.8
      });
    });

    // Buscar produtos publicados
    const { data: products } = await supabaseClient
      .from('products')
      .select('slug, updated_at')
      .eq('published', true);

    products?.forEach(product => {
      urls.push({
        loc: `${baseUrl}/produto/${product.slug}`,
        lastmod: new Date(product.updated_at).toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: 0.7
      });
    });

    // Buscar posts do blog publicados
    const { data: posts } = await supabaseClient
      .from('blog_posts')
      .select('slug, updated_at')
      .eq('status', 'published');

    posts?.forEach(post => {
      urls.push({
        loc: `${baseUrl}/blog/${post.slug}`,
        lastmod: new Date(post.updated_at).toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.7
      });
    });

    // Buscar marinheiros publicados
    const { data: skippers } = await supabaseClient
      .from('skipper_profiles')
      .select('id, updated_at')
      .eq('published', true);

    skippers?.forEach(skipper => {
      urls.push({
        loc: `${baseUrl}/marinheiro/${skipper.id}`,
        lastmod: new Date(skipper.updated_at).toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.6
      });
    });

    // Gerar XML
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const xmlFooter = '</urlset>';
    
    const xmlUrls = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

    const sitemap = `${xmlHeader}${xmlUrls}\n${xmlFooter}`;

    // Salvar no Storage
    const { error: uploadError } = await supabaseClient.storage
      .from('public')
      .upload('sitemap.xml', new Blob([sitemap], { type: 'application/xml' }), {
        upsert: true,
        contentType: 'application/xml'
      });

    if (uploadError) {
      console.error('Error uploading sitemap:', uploadError);
      throw uploadError;
    }

    console.log(`Sitemap regenerated with ${urls.length} URLs`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        urls_count: urls.length,
        message: 'Sitemap regenerated successfully'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in regenerate-sitemap:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});