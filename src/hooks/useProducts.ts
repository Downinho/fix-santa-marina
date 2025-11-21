import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ProductFilters {
  category?: string;
  search?: string;
}

export const useProducts = (filters?: ProductFilters) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        let query = supabase
          .from('products')
          .select('*')
          .eq('published', true)
          .gt('stock', 0)
          .order('created_at', { ascending: false });

        // Aplicar filtros
        if (filters?.category && filters.category !== 'Todas as Categorias') {
          query = query.eq('category', filters.category);
        }

        if (filters?.search) {
          query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
        }

        const { data, error } = await query;
        
        if (error) throw error;
        
        const transformedProducts = data?.map(product => ({
          id: product.id,
          name: product.name,
          slug: product.slug,
          category: product.category || 'Geral',
          price: `R$ ${(product.price_cents / 100).toLocaleString('pt-BR')}`,
          image: product.cover_image_url || '/placeholder.svg',
          rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
          reviews: Math.floor(Math.random() * 140) + 10,
          inStock: product.stock > 0,
          description: product.description
        })) || [];

        setProducts(transformedProducts);
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar produtos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters?.category, filters?.search]);

  return { products, loading, error };
};
