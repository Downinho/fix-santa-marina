import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useRecommendedProducts } from '@/hooks/useRecommendedProducts';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

interface RecommendedProductsProps {
  vesselType: string;
  vesselName: string;
}

export function RecommendedProducts({ vesselType, vesselName }: RecommendedProductsProps) {
  const { products, loading } = useRecommendedProducts(vesselType, 4);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            Acessórios Recomendados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (products.length === 0) {
    return null;
  }

  const formatPrice = (cents: number, currency: string = 'BRL') => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
    }).format(cents / 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🛒</span>
          Acessórios Recomendados para {vesselName}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Produtos compatíveis com {vesselType}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/produto/${product.slug}`}
              className="group"
            >
              <div className="border rounded-lg overflow-hidden hover:border-primary transition-colors">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={product.cover_image_url || '/placeholder.svg'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.category && (
                    <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  {product.brand && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {product.brand}
                    </p>
                  )}
                  
                  {product.description && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {product.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-primary">
                      {formatPrice(product.price_cents, product.currency)}
                    </span>
                    
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/acessorios">
            <Button variant="outline">
              Ver Todos os Acessórios
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}