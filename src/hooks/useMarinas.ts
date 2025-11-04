import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Marina {
  id: string;
  name: string;
  slug: string;
  description: string;
  city: string;
  state: string;
  cover_image_url: string;
  services: string[];
  amenities: string[];
  total_berths: number;
  available_berths: number;
  price_day_cents: number;
  price_month_cents: number;
  verified: boolean;
  published: boolean;
  contact_whatsapp: string;
}

interface MarinaFilters {
  location?: string;
}

export function useMarinas(filters?: MarinaFilters) {
  const [marinas, setMarinas] = useState<Marina[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarinas = async () => {
      try {
        let query = supabase
          .from('marinas')
          .select('*')
          .eq('published', true)
          .order('verified', { ascending: false })
          .order('created_at', { ascending: false });

        if (filters?.location) {
          query = query.or(`city.ilike.%${filters.location}%,state.ilike.%${filters.location}%`);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setMarinas(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarinas();
  }, [filters?.location]);

  return { marinas, loading, error };
}
