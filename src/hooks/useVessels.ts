import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface VesselFilters {
  type?: string;
  location?: string;
  search?: string;
}

export const useVessels = (filters?: VesselFilters) => {
  const [vessels, setVessels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVessels = async () => {
      try {
        setLoading(true);
        
        let query = supabase
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
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (filters?.type && filters.type !== 'todos') {
          query = query.ilike('type', `%${filters.type}%`);
        }
        
        if (filters?.location && filters.location !== 'todas') {
          const ufMap: Record<string, string> = {
            RJ: 'Rio de Janeiro',
            SP: 'São Paulo',
            SC: 'Santa Catarina',
            BA: 'Bahia',
          };

          const rawLocation = filters.location.trim();
          const mappedLocation = ufMap[rawLocation.toUpperCase()] || rawLocation;

          query = query.or(`state.ilike.%${mappedLocation}%,city.ilike.%${mappedLocation}%`);
        }
 
        if (filters?.search) {
          query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
        }

        const { data, error } = await query;
        
        if (error) throw error;
        
        // Transformar dados para formato compatível com o frontend
        const transformedVessels = data?.map(vessel => ({
          id: vessel.id,
          name: vessel.name,
          slug: vessel.slug,
          type: vessel.type,
          year: vessel.year,
          length: vessel.length_m ? `${vessel.length_m}m` : 'Consulte',
          price: `R$ ${((vessel.for_sale ? vessel.price_sale_cents : vessel.price_day_cents || 0) / 100).toLocaleString('pt-BR')}`,
          location: `${vessel.city}, ${vessel.state}`,
          description: vessel.description || '',
          image: vessel.vessel_media?.[0]?.url || '/placeholder.svg',
          images: vessel.vessel_media?.sort((a: any, b: any) => a.position - b.position).map((m: any) => m.url) || [],
          featured: true,
          comments: []
        })) || [];

        setVessels(transformedVessels);
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar embarcações:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVessels();
  }, [filters?.type, filters?.location, filters?.search]);

  return { vessels, loading, error };
};
