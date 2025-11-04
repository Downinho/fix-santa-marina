import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Star, Phone } from 'lucide-react';
import { useRecommendedSkippers } from '@/hooks/useRecommendedSkippers';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

interface RecommendedSkippersProps {
  vesselType: string;
  vesselState: string | null;
  vesselName: string;
}

export function RecommendedSkippers({ vesselType, vesselState, vesselName }: RecommendedSkippersProps) {
  const { skippers, loading } = useRecommendedSkippers(vesselType, vesselState, 3);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">👨‍✈️</span>
            Marinheiros Recomendados
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (skippers.length === 0) {
    return null;
  }

  const formatPrice = (cents: number | null) => {
    if (!cents) return 'Consultar';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(cents / 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">👨‍✈️</span>
          Marinheiros Recomendados para {vesselName}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Especialistas em {vesselType} {vesselState && `em ${vesselState}`}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {skippers.map((skipper) => (
          <div key={skipper.id} className="flex gap-4 p-4 rounded-lg border hover:border-primary transition-colors">
            <Avatar className="h-16 w-16">
              <AvatarImage src={skipper.profiles?.avatar_url || '/placeholder.svg'} />
              <AvatarFallback>{skipper.profiles?.display_name?.[0] || 'M'}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h3 className="font-semibold">
                {skipper.profiles?.display_name || 'Marinheiro Profissional'}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                {skipper.city && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {skipper.city}, {skipper.state}
                  </span>
                )}
                {skipper.years_experience && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {skipper.years_experience} anos
                  </span>
                )}
              </div>

              {skipper.bio && (
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {skipper.bio}
                </p>
              )}

              <div className="flex items-center gap-2 mt-3">
                <div className="text-sm">
                  <span className="font-semibold text-primary">
                    {formatPrice(skipper.day_rate_cents)}/dia
                  </span>
                </div>
                
                <Link to={`/marinheiro/${skipper.id}`} className="ml-auto">
                  <Button size="sm" variant="outline">
                    Ver Perfil
                  </Button>
                </Link>
                
                {skipper.contact_whatsapp && (
                  <a
                    href={`https://wa.me/${skipper.contact_whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Contratar
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}