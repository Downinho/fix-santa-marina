import { vessels } from '@/data/vessels';
import { blogPosts } from '@/data/blogPosts';
import { sailors } from '@/data/sailors';
import { createSlug } from './slugify';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const baseUrl = 'https://marbana.com.br';

export const generateSitemap = (): string => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  // Static routes
  const staticRoutes = [
    { path: '/', priority: 1.0, changefreq: 'daily' as const },
    { path: '/embarcacoes', priority: 0.9, changefreq: 'daily' as const },
    { path: '/acessorios', priority: 0.7, changefreq: 'weekly' as const },
    { path: '/servicos', priority: 0.7, changefreq: 'monthly' as const },
    { path: '/blog', priority: 0.8, changefreq: 'daily' as const },
    { path: '/marinheiros', priority: 0.8, changefreq: 'weekly' as const },
    { path: '/sobre', priority: 0.6, changefreq: 'monthly' as const },
    { path: '/contato', priority: 0.6, changefreq: 'monthly' as const },
    { path: '/anuncie', priority: 0.5, changefreq: 'monthly' as const },
    { path: '/politica-privacidade', priority: 0.3, changefreq: 'yearly' as const },
    { path: '/termos-uso', priority: 0.3, changefreq: 'yearly' as const },
    { path: '/cookies', priority: 0.3, changefreq: 'yearly' as const },
  ];

  // Add static routes
  staticRoutes.forEach(route => {
    urls.push({
      loc: `${baseUrl}${route.path}`,
      lastmod: currentDate,
      changefreq: route.changefreq,
      priority: route.priority
    });
  });

  // Add vessel detail pages
  vessels.forEach(vessel => {
    urls.push({
      loc: `${baseUrl}/embarcacao/${createSlug(vessel.name)}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8
    });
  });

  // Add blog post pages
  blogPosts.forEach(post => {
    urls.push({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    });
  });

  // Add sailor detail pages
  sailors.forEach(sailor => {
    urls.push({
      loc: `${baseUrl}/marinheiro/${sailor.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    });
  });

  // Generate XML
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const xmlFooter = '</urlset>';
  
  const xmlUrls = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `${xmlHeader}${xmlUrls}\n${xmlFooter}`;
};