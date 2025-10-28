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
          setVessel({
            ...data,
            images: data.vessel_media?.sort((a: any, b: any) => a.position - b.position).map((m: any) => m.url) || [],
            videos: data.vessel_media?.filter((m: any) => m.type === 'video').map((m: any) => m.url) || []
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
