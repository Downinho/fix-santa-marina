import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_cents: number;
  currency: string;
  cover_image_url: string | null;
  category: string | null;
  brand: string | null;
  compatible_vessel_types: string[] | null;
}

export function useRecommendedProducts(vesselType: string, limit: number = 4) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(limit * 2); // Buscar mais para filtrar

        if (error) throw error;

        // Filtrar por compatible_vessel_types
        const filtered = data?.filter(product => 
          product.compatible_vessel_types?.includes(vesselType)
        ) || [];

        setProducts(filtered.slice(0, limit));
      } catch (error) {
        console.error('Error fetching recommended products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [vesselType, limit]);

  return { products, loading };
}