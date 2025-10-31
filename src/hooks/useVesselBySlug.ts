import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVesselBySlug = (slug: string) => {
  const [vessel, setVessel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVessel = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('vessels')
          .select(`
            *,
            vessel_media (
              id,
              url,
              type,
              position
            )
          `)
          .eq('slug', slug)
          .eq('status', 'published')
          .single();
        
        if (error) throw error;
        
        if (data) {
          // Parse highlights do JSON armazenado
          let parsedHighlights = [];
          try {
            parsedHighlights = data.highlights ? JSON.parse(data.highlights) : [];
          } catch (e) {
            console.error('Erro ao fazer parse de highlights:', e);
            parsedHighlights = [];
          }

          // Construir location a partir de city e state
          const location = data.city && data.state 
            ? `${data.city}, ${data.state}` 
            : data.city || data.state || 'Brasil';

          // Determinar preço (priorizar venda, depois aluguel)
          const price = data.for_sale 
            ? data.price_sale_cents 
            : (data.price_day_cents || data.price_hour_cents);

          setVessel({
            ...data,
            model: data.model || data.name, // Fallback para nome se model não existir
            location,
            price,
            highlights: parsedHighlights,
            images: data.vessel_media?.sort((a: any, b: any) => a.position - b.position).map((m: any) => m.url) || [],
            videos: data.vessel_media?.filter((m: any) => m.type === 'video').map((m: any) => ({ url: m.url, title: 'Vídeo', thumbnail: '' })) || [],
            owner: {
              name: 'MARBANA',
              rating: 4.9,
              responseTime: 'Responde em 2h',
              verified: true
            }
          });
        }
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar embarcação:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchVessel();
    }
  }, [slug]);

  return { vessel, loading, error };
};
