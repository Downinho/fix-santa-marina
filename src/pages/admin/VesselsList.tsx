import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Edit, 
  Eye, 
  Trash2,
  Filter,
  Ship
} from 'lucide-react';
import api from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

interface Vessel {
  id: number;
  name: string;
  slug: string;
  type: string;
  model?: string;
  year?: number;
  city?: string;
  state?: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  for_sale: boolean;
  for_rent: boolean;
  price_sale_cents?: number;
  price_day_cents?: number;
  created_at: string;
}

const VesselsList = () => {
  const [vessels, setVessels] = useState<Vessel[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    loadVessels();
  }, []);

  const loadVessels = async () => {
    try {
      const response = await api.getVessels();
      if (response.success) {
        setVessels(response.data || []);
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao carregar embarcações",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir esta embarcação?')) return;

    try {
      const response = await api.deleteVessel(id);
      if (response.success) {
        setVessels(vessels.filter(v => v.id !== id));
        toast({
          title: "Sucesso",
          description: "Embarcação excluída com sucesso",
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao excluir embarcação",
        variant: "destructive",
      });
    }
  };

  const filteredVessels = vessels.filter(vessel => {
    const matchesSearch = vessel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vessel.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vessel.city?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || vessel.status === statusFilter;
    const matchesType = typeFilter === 'all' || vessel.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'default';
      case 'draft': return 'secondary';
      case 'archived': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published': return 'Publicado';
      case 'draft': return 'Rascunho';
      case 'archived': return 'Arquivado';
      default: return status;
    }
  };

  const formatPrice = (cents?: number) => {
    if (!cents) return 'N/A';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(cents / 100);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Embarcações</h1>
          <p className="text-muted-foreground">
            Gerencie todas as embarcações do sistema
          </p>
        </div>
        <Button asChild>
          <Link to="/admin/vessels/new">
            <Plus className="mr-2 h-4 w-4" />
            Nova Embarcação
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar embarcações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="published">Publicado</SelectItem>
                <SelectItem value="draft">Rascunho</SelectItem>
                <SelectItem value="archived">Arquivado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Tipos</SelectItem>
                <SelectItem value="Lancha">Lancha</SelectItem>
                <SelectItem value="Iate">Iate</SelectItem>
                <SelectItem value="Veleiro">Veleiro</SelectItem>
                <SelectItem value="Catamarã">Catamarã</SelectItem>
                <SelectItem value="Jet Ski">Jet Ski</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Vessels Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVessels.map((vessel) => (
          <Card key={vessel.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{vessel.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {vessel.type} {vessel.model && `• ${vessel.model}`}
                  </p>
                  {vessel.city && vessel.state && (
                    <p className="text-xs text-muted-foreground">
                      {vessel.city}, {vessel.state}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Badge variant={getStatusColor(vessel.status)}>
                    {getStatusLabel(vessel.status)}
                  </Badge>
                  {vessel.featured && (
                    <Badge variant="outline" className="text-xs">
                      Destaque
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ano:</span>
                  <span>{vessel.year || 'N/A'}</span>
                </div>
                
                {vessel.for_sale && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Venda:</span>
                    <span className="font-medium">{formatPrice(vessel.price_sale_cents)}</span>
                  </div>
                )}
                
                {vessel.for_rent && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Diária:</span>
                    <span className="font-medium">{formatPrice(vessel.price_day_cents)}</span>
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link to={`/embarcacoes/${vessel.slug}`} target="_blank">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link to={`/admin/vessels/${vessel.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleDelete(vessel.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVessels.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Ship className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Nenhuma embarcação encontrada</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter !== 'all' || typeFilter !== 'all'
                ? 'Tente ajustar os filtros de busca.'
                : 'Comece criando sua primeira embarcação.'}
            </p>
            {(!searchTerm && statusFilter === 'all' && typeFilter === 'all') && (
              <Button asChild>
                <Link to="/admin/vessels/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Nova Embarcação
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VesselsList;