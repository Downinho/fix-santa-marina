import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SkipperFilters {
  location?: string;
  specialty?: string;
}

export const useSkippers = (filters?: SkipperFilters) => {
  const [skippers, setSkippers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkippers = async () => {
      try {
        setLoading(true);
        
        let query = supabase
          .from('skipper_profiles')
          .select(`
            *,
            slug,
            profiles (
              display_name,
              avatar_url
            )
          `)
          .eq('published', true)
          .order('created_at', { ascending: false });

        // Aplicar filtros
        if (filters?.location) {
          query = query.or(`city.ilike.%${filters.location}%,state.ilike.%${filters.location}%`);
        }

        const { data, error } = await query;
        
        if (error) throw error;
        
        const transformedSkippers = data?.map(skipper => ({
          id: skipper.id,
          name: skipper.profiles?.display_name || 'Marinheiro',
          bio: skipper.bio || 'Marinheiro profissional certificado',
          years_experience: skipper.years_experience || 0,
          hourly_rate_cents: skipper.hourly_rate_cents,
          day_rate_cents: skipper.day_rate_cents,
          city: skipper.city,
          state: skipper.state,
          contact_phone: skipper.contact_phone,
          contact_email: skipper.contact_email,
          contact_whatsapp: skipper.contact_whatsapp,
          specialties: skipper.specialties,
          avatar_url: skipper.profiles?.avatar_url || '/placeholder.svg',
          verified: skipper.verified
        })) || [];

        setSkippers(transformedSkippers);
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar marinheiros:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkippers();
  }, [filters?.location, filters?.specialty]);

  return { skippers, loading, error };
};
