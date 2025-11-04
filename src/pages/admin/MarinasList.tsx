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
import { Plus, Pencil, Trash2, Anchor } from 'lucide-react';
import { toast } from 'sonner';

interface Marina {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  published: boolean;
  verified: boolean;
  total_berths: number;
  available_berths: number;
}

export default function MarinasList() {
  const [marinas, setMarinas] = useState<Marina[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMarinas();
  }, []);

  const loadMarinas = async () => {
    try {
      const { data, error } = await supabase
        .from('marinas')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMarinas(data || []);
    } catch (error: any) {
      toast.error('Erro ao carregar marinas: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja excluir "${name}"?`)) return;

    try {
      const { error } = await supabase.from('marinas').delete().eq('id', id);
      if (error) throw error;
      
      toast.success('Marina excluída com sucesso!');
      loadMarinas();
    } catch (error: any) {
      toast.error('Erro ao excluir marina: ' + error.message);
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
            <h2 className="text-3xl font-bold tracking-tight">Marinas</h2>
            <p className="text-muted-foreground">
              Gerencie as marinas cadastradas
            </p>
          </div>
          <Link to="/admin/marinas/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Marina
            </Button>
          </Link>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Vagas</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marinas.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    <Anchor className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Nenhuma marina cadastrada ainda</p>
                  </TableCell>
                </TableRow>
              ) : (
                marinas.map((marina) => (
                  <TableRow key={marina.id}>
                    <TableCell className="font-medium">
                      {marina.name}
                    </TableCell>
                    <TableCell>
                      {marina.city}, {marina.state}
                    </TableCell>
                    <TableCell>
                      {marina.available_berths || 0} / {marina.total_berths || 0}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Badge variant={marina.published ? 'default' : 'secondary'}>
                          {marina.published ? 'Publicado' : 'Rascunho'}
                        </Badge>
                        {marina.verified && (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Verificada
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Link to={`/admin/marinas/${marina.id}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(marina.id, marina.name)}
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
