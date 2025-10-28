import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSkipperById = (id: string) => {
  const [skipper, setSkipper] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkipper = async () => {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('skipper_profiles')
          .select(`
            *,
            profiles (
              display_name,
              avatar_url,
              phone
            )
          `)
          .eq('id', id)
          .eq('published', true)
          .eq('verified', true)
          .single();
        
        if (error) throw error;
        
        if (data) {
          setSkipper({
            id: data.id,
            name: data.profiles?.display_name || 'Marinheiro',
            avatar: data.profiles?.avatar_url || '/placeholder.svg',
            bio: data.bio || 'Marinheiro profissional certificado.',
            years_experience: data.years_experience || 0,
            hourly_rate: data.hourly_rate_cents ? data.hourly_rate_cents / 100 : 0,
            daily_rate: data.day_rate_cents ? data.day_rate_cents / 100 : 0,
            city: data.city || '',
            state: data.state || '',
            location: `${data.city || ''}, ${data.state || ''}`.trim(),
            contact_phone: data.contact_phone || data.profiles?.phone || '',
            contact_email: data.contact_email || '',
            contact_whatsapp: data.contact_whatsapp || data.contact_phone || '',
            specialties: data.specialties || 'Navegação Geral',
            license_number: data.license_number || '',
            service_area: data.service_area || '',
            rating: 4.8,
            reviews: [],
            availability: 'Disponível',
            certifications: [],
            languages: ['Português'],
            portfolio: [],
            services: []
          });
        }
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar marinheiro:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSkipper();
    }
  }, [id]);

  return { skipper, loading, error };
};
