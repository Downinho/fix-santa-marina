import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Ship, ShoppingCart, Users, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export default function Busca() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [vessels, setVessels] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [skippers, setSkippers] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length >= 2) {
      performSearch();
    }
  }, [query]);

  const performSearch = async () => {
    setLoading(true);
    try {
      const searchTerm = `%${query}%`;

      // Buscar embarcações
      const { data: vesselsData } = await supabase
        .from('vessels')
        .select('*')
        .eq('status', 'published')
        .or(`name.ilike.${searchTerm},description.ilike.${searchTerm},type.ilike.${searchTerm}`)
        .limit(20);

      // Buscar produtos
      const { data: productsData } = await supabase
        .from('products')
        .select('*')
        .eq('published', true)
        .or(`name.ilike.${searchTerm},description.ilike.${searchTerm},category.ilike.${searchTerm}`)
        .limit(20);

      // Buscar marinheiros
      const { data: skippersData } = await supabase
        .from('skipper_profiles')
        .select('*, profiles!inner(display_name, avatar_url)')
        .eq('published', true)
        .or(`bio.ilike.${searchTerm},city.ilike.${searchTerm},state.ilike.${searchTerm}`)
        .limit(20);

      // Buscar posts do blog
      const { data: postsData } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .or(`title.ilike.${searchTerm},excerpt.ilike.${searchTerm},content_md.ilike.${searchTerm}`)
        .limit(20);

      setVessels(vesselsData || []);
      setProducts(productsData || []);
      setSkippers(skippersData || []);
      setPosts(postsData || []);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    setSearchParams(value ? { q: value } : {});
  };

  const formatPrice = (cents: number | null, currency: string = 'BRL') => {
    if (!cents) return 'Consultar';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
    }).format(cents / 100);
  };

  const totalResults = vessels.length + products.length + skippers.length + posts.length;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header de Busca */}
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Buscar no Portal</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar embarcações, produtos, marinheiros, artigos..."
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 h-12 text-lg"
              autoFocus
            />
          </div>
          {query && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {totalResults} resultado{totalResults !== 1 ? 's' : ''} encontrado{totalResults !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Tabs com Resultados */}
        {query.length >= 2 && (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
              <TabsTrigger value="all">
                Todos ({totalResults})
              </TabsTrigger>
              <TabsTrigger value="vessels">
                <Ship className="h-4 w-4 mr-1" />
                Embarcações ({vessels.length})
              </TabsTrigger>
              <TabsTrigger value="products">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Produtos ({products.length})
              </TabsTrigger>
              <TabsTrigger value="skippers">
                <Users className="h-4 w-4 mr-1" />
                Marinheiros ({skippers.length})
              </TabsTrigger>
              <TabsTrigger value="blog">
                <FileText className="h-4 w-4 mr-1" />
                Blog ({posts.length})
              </TabsTrigger>
            </TabsList>

            {/* Tab: Todos */}
            <TabsContent value="all" className="space-y-6 mt-6">
              {vessels.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Ship className="h-5 w-5" />
                    Embarcações
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vessels.slice(0, 6).map(vessel => (
                      <VesselCard key={vessel.id} vessel={vessel} formatPrice={formatPrice} />
                    ))}
                  </div>
                </div>
              )}

              {products.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Produtos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.slice(0, 4).map(product => (
                      <ProductCard key={product.id} product={product} formatPrice={formatPrice} />
                    ))}
                  </div>
                </div>
              )}

              {skippers.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Marinheiros
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skippers.slice(0, 4).map(skipper => (
                      <SkipperCard key={skipper.id} skipper={skipper} formatPrice={formatPrice} />
                    ))}
                  </div>
                </div>
              )}

              {posts.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Artigos do Blog
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {posts.slice(0, 4).map(post => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            {/* Tab: Embarcações */}
            <TabsContent value="vessels">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vessels.map(vessel => (
                  <VesselCard key={vessel.id} vessel={vessel} formatPrice={formatPrice} />
                ))}
              </div>
            </TabsContent>

            {/* Tab: Produtos */}
            <TabsContent value="products">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} formatPrice={formatPrice} />
                ))}
              </div>
            </TabsContent>

            {/* Tab: Marinheiros */}
            <TabsContent value="skippers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skippers.map(skipper => (
                  <SkipperCard key={skipper.id} skipper={skipper} formatPrice={formatPrice} />
                ))}
              </div>
            </TabsContent>

            {/* Tab: Blog */}
            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}

        {query.length < 2 && (
          <div className="text-center text-muted-foreground mt-12">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Digite pelo menos 2 caracteres para buscar</p>
          </div>
        )}

        {query.length >= 2 && totalResults === 0 && !loading && (
          <div className="text-center text-muted-foreground mt-12">
            <p>Nenhum resultado encontrado para "{query}"</p>
            <p className="text-sm mt-2">Tente usar outras palavras-chave</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

// Componentes auxiliares
function VesselCard({ vessel, formatPrice }: any) {
  const price = vessel.for_sale ? vessel.price_sale_cents : (vessel.price_day_cents || vessel.price_hour_cents);
  
  return (
    <Link to={`/embarcacao/${vessel.slug}`}>
      <Card className="hover:border-primary transition-colors h-full">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img src={vessel.cover_image_url || '/placeholder.svg'} alt={vessel.name} className="w-full h-full object-cover" />
          <Badge className="absolute top-2 right-2">{vessel.type}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1">{vessel.name}</h3>
          <p className="text-sm text-muted-foreground">{vessel.city}, {vessel.state}</p>
          <p className="text-lg font-bold text-primary mt-2">{formatPrice(price, vessel.currency)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function ProductCard({ product, formatPrice }: any) {
  return (
    <Link to={`/produto/${product.slug}`}>
      <Card className="hover:border-primary transition-colors h-full">
        <div className="aspect-square bg-muted relative overflow-hidden">
          <img src={product.cover_image_url || '/placeholder.svg'} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1 text-sm">{product.name}</h3>
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <p className="text-base font-bold text-primary mt-2">{formatPrice(product.price_cents, product.currency)}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function SkipperCard({ skipper, formatPrice }: any) {
  return (
    <Link to={`/marinheiro/${skipper.id}`}>
      <Card className="hover:border-primary transition-colors">
        <CardContent className="p-4 flex gap-4">
          <img 
            src={skipper.profiles?.avatar_url || '/placeholder.svg'} 
            alt={skipper.profiles?.display_name} 
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{skipper.profiles?.display_name}</h3>
            <p className="text-sm text-muted-foreground">{skipper.city}, {skipper.state}</p>
            <p className="text-sm text-muted-foreground">{skipper.years_experience} anos de experiência</p>
            <p className="text-sm font-semibold text-primary mt-1">{formatPrice(skipper.day_rate_cents)}/dia</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function BlogCard({ post }: any) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="hover:border-primary transition-colors">
        {post.cover_image_url && (
          <div className="aspect-video bg-muted overflow-hidden">
            <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-2">{post.title}</h3>
          {post.excerpt && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
          )}
          <p className="text-xs text-muted-foreground mt-2">
            {new Date(post.published_at || post.created_at).toLocaleDateString('pt-BR')}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}