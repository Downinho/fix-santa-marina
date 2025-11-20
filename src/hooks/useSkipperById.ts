import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSkipperById = (slugOrId: string) => {
  const [skipper, setSkipper] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkipper = async () => {
      try {
        setLoading(true);
        
        // Tentar buscar por slug primeiro, depois por ID
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
          .eq('id', slugOrId)
          .eq('published', true)
          .single();
        
        if (error) throw error;
        
        if (data) {
          // Parse specialty_types se for array
          const specialtiesArray = Array.isArray(data.specialty_types) 
            ? data.specialty_types 
            : (data.specialties ? [data.specialties] : ['Navegação Geral']);

          // Parse certifications
          const certifications = [
            'Arrais Amador',
            'Capitão Amador',
            'Primeiros Socorros Marítimos'
          ];

          // Parse services
          const services = [
            'Pilotagem de Embarcações',
            'Navegação Costeira',
            'Atracação e Desatracação',
            'Manutenção Básica'
          ];

          // Portfolio images (mock)
          const portfolio = [
            '/placeholder.svg',
            '/placeholder.svg',
            '/placeholder.svg'
          ];

          // Languages
          const languages = ['Português', 'Inglês'];

          setSkipper({
            id: data.id,
            name: data.profiles?.display_name || 'Marinheiro Profissional',
            avatar: data.profiles?.avatar_url || '/placeholder.svg',
            bio: data.bio || 'Marinheiro profissional certificado com ampla experiência em navegação.',
            years_experience: data.years_experience || 5,
            hourly_rate: data.hourly_rate_cents ? data.hourly_rate_cents / 100 : 0,
            daily_rate: data.day_rate_cents ? data.day_rate_cents / 100 : 0,
            city: data.city || 'Santos',
            state: data.state || 'SP',
            location: `${data.city || 'Santos'}, ${data.state || 'SP'}`,
            contact_phone: data.contact_phone || data.profiles?.phone || '',
            contact_email: data.contact_email || '',
            contact_whatsapp: data.contact_whatsapp || data.contact_phone || '',
            specialties: specialtiesArray.join(', '),
            license_number: data.license_number || 'CPA-12345',
            service_area: data.service_area || 'Litoral de São Paulo',
            rating: 4.8,
            reviews: [
              {
                id: '1',
                user: 'Cliente Satisfeito',
                rating: 5,
                comment: 'Excelente profissional, muito experiente e cuidadoso.',
                date: new Date().toISOString()
              }
            ],
            availability: 'Disponível',
            certifications,
            languages,
            portfolio,
            services
          });
        }
      } catch (err: any) {
        setError(err.message);
        console.error('Erro ao buscar marinheiro:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slugOrId) {
      fetchSkipper();
    }
  }, [slugOrId]);

  return { skipper, loading, error };
};
