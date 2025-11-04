import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useMarinaBySlug(slug: string) {
  const [marina, setMarina] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarina = async () => {
      try {
        const { data: marinaData, error: marinaError } = await supabase
          .from('marinas')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (marinaError) throw marinaError;

        // Buscar imagens
        const { data: images } = await supabase
          .from('marina_media')
          .select('*')
          .eq('marina_id', marinaData.id)
          .order('position');

        setMarina({
          ...marinaData,
          images: images || []
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchMarina();
  }, [slug]);

  return { marina, loading, error };
}
