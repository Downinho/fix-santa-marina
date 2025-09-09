# Sitemap Dinâmico - Instruções

## Como funciona

O sitemap agora é gerado dinamicamente baseado nos dados do projeto:
- Rotas estáticas (páginas principais)
- Páginas de embarcações (baseadas no arquivo `vessels.ts`)
- Posts do blog (baseados no arquivo `blogPosts.ts`)  
- Páginas de marinheiros (baseadas no arquivo `sailors.ts`)

## Para produção

1. O componente `SitemapGenerator` gera automaticamente o sitemap quando a aplicação carrega
2. Durante desenvolvimento, o sitemap será logado no console
3. Para produção, você pode:
   - Usar o conteúdo logado para criar manualmente o arquivo `/public/sitemap.xml`
   - Ou implementar um endpoint que sirva o sitemap dinamicamente

## Google Analytics e Ads

No arquivo `index.html`, substitua:
- `GA_MEASUREMENT_ID` pelo seu ID do Google Analytics (ex: G-XXXXXXXXXX)
- `AW-CONVERSION_ID` pelo seu ID do Google Ads (ex: AW-123456789)

## Meta Tags Open Graph

As meta tags foram melhoradas para mostrar preview adequado quando o link for compartilhado:
- Título, descrição e imagem otimizados
- Suporte para Twitter Cards
- Tags SEO adicionais para melhor indexação