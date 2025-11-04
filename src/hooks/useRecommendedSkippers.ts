import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Skipper {
  id: string;
  profile_id: string;
  bio: string | null;
  years_experience: number | null;
  hourly_rate_cents: number | null;
  day_rate_cents: number | null;
  city: string | null;
  state: string | null;
  specialty_types: string[] | null;
  contact_whatsapp: string | null;
  profiles: {
    display_name: string | null;
    avatar_url: string | null;
  } | null;
}

export function useRecommendedSkippers(vesselType: string, vesselState: string | null, limit: number = 3) {
  const [skippers, setSkippers] = useState<Skipper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkippers = async () => {
      try {
        setLoading(true);
        
        let query = supabase
          .from('skipper_profiles')
          .select(`
            *,
            profiles!inner(display_name, avatar_url)
          `)
          .eq('published', true)
          .order('years_experience', { ascending: false })
          .limit(limit);

        // Filtrar por estado se disponível
        if (vesselState) {
          query = query.eq('state', vesselState);
        }

        const { data, error } = await query;

        if (error) throw error;

        // Filtrar por specialty_types (tipos de embarcação)
        const filtered = data?.filter(skipper => 
          skipper.specialty_types?.includes(vesselType)
        ) || [];

        setSkippers(filtered.length > 0 ? filtered : (data || []));
      } catch (error) {
        console.error('Error fetching recommended skippers:', error);
        setSkippers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkippers();
  }, [vesselType, vesselState, limit]);

  return { skippers, loading };
}