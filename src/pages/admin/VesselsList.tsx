import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { toast } from 'sonner';

interface Vessel {
  id: string;
  name: string;
  type: string;
  year: number;
  status: 'draft' | 'published';
  for_sale: boolean;
  for_rent: boolean;
  slug: string;
}

export default function VesselsList() {
  const [vessels, setVessels] = useState<Vessel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVessels();
  }, []);

  const loadVessels = async () => {
    try {
      const { data, error } = await supabase
        .from('vessels')
        .select('id, name, type, year, status, for_sale, for_rent, slug')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVessels(data || []);
    } catch (error: any) {
      toast.error('Erro ao carregar embarcações: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja excluir "${name}"?`)) return;

    try {
      const { error } = await supabase.from('vessels').delete().eq('id', id);
      if (error) throw error;
      
      toast.success('Embarcação excluída com sucesso!');
      loadVessels();
    } catch (error: any) {
      toast.error('Erro ao excluir embarcação: ' + error.message);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Embarcações</h2>
            <p className="text-muted-foreground">
              Gerencie todas as embarcações cadastradas
            </p>
          </div>
          <Link to="/admin/vessels/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Embarcação
            </Button>
          </Link>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Ano</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Disponível para</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vessels.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Nenhuma embarcação cadastrada ainda
                  </TableCell>
                </TableRow>
              ) : (
                vessels.map((vessel) => (
                  <TableRow key={vessel.id}>
                    <TableCell className="font-medium">{vessel.name}</TableCell>
                    <TableCell>{vessel.type}</TableCell>
                    <TableCell>{vessel.year}</TableCell>
                    <TableCell>
                      <Badge variant={vessel.status === 'published' ? 'default' : 'secondary'}>
                        {vessel.status === 'published' ? 'Publicado' : 'Rascunho'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {vessel.for_sale && vessel.for_rent && 'Venda e Aluguel'}
                      {vessel.for_sale && !vessel.for_rent && 'Venda'}
                      {!vessel.for_sale && vessel.for_rent && 'Aluguel'}
                      {!vessel.for_sale && !vessel.for_rent && '-'}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Link to={`/embarcacao/${vessel.slug}`} target="_blank">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to={`/admin/vessels/${vessel.id}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(vessel.id, vessel.name)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
