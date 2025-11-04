import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useProductBySlug = (slug: string) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            profiles (
              display_name,
              avatar_url,
              phone
            )
          `)
          .eq('slug', slug)
          .eq('published', true)
          .single();
        
        if (error) throw error;
        
        if (data) {
          // Parse specifications - se for string JSON, parseia; se não, cria array padrão
          let specifications = [];
          if (data.specifications) {
            try {
              const parsed = typeof data.specifications === 'string' 
                ? JSON.parse(data.specifications) 
                : data.specifications;
              
              // Se for objeto, converte para array
              if (typeof parsed === 'object' && !Array.isArray(parsed)) {
                specifications = Object.entries(parsed).map(([key, value]) => ({
                  label: key,
                  value: String(value)
                }));
              } else if (Array.isArray(parsed)) {
                specifications = parsed;
              }
            } catch (e) {
              console.error('Error parsing specifications:', e);
            }
          }

          // Se ainda estiver vazio, adiciona specs básicas
          if (specifications.length === 0) {
            specifications = [
              { label: 'Categoria', value: data.category || 'Geral' },
              { label: 'Marca', value: data.brand || 'MARBANA' },
            ];
          }

          setProduct({
            id: data.id,
            name: data.name,
            slug: data.slug,
            description: data.description,
            price: data.price_cents / 100,
            originalPrice: data.price_cents / 100,
            stock: data.stock,
            category: data.category || 'Geral',
            brand: data.brand || 'MARBANA',
            image: data.cover_image_url || '/placeholder.svg',
            images: [data.cover_image_url || '/placeholder.svg'],
            specifications,
            features: [],
            rating: 4.5,
            reviews: [],
            vendor: {
              name: data.profiles?.display_name || 'MARBANA',
              avatar: data.profiles?.avatar_url || '/placeholder.svg',
              rating: 4.8,
              totalSales: 0,
              phone: data.profiles?.phone || ''
            }
          });
        }
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar produto:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  return { product, loading, error };
};
