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
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Sailor {
  id: string;
  profile_id: string;
  years_experience: number;
  published: boolean;
  verified: boolean;
  city: string;
  state: string;
  profiles: {
    display_name: string;
  } | null;
}

export default function SailorsList() {
  const [sailors, setSailors] = useState<Sailor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSailors();
  }, []);

  const loadSailors = async () => {
    try {
      const { data, error } = await supabase
        .from('skipper_profiles')
        .select(`
          id,
          profile_id,
          years_experience,
          published,
          verified,
          city,
          state,
          profiles!inner (display_name)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSailors((data || []) as any);
    } catch (error: any) {
      toast.error('Erro ao carregar marinheiros: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Tem certeza que deseja excluir "${name}"?`)) return;

    try {
      const { error } = await supabase.from('skipper_profiles').delete().eq('id', id);
      if (error) throw error;
      
      toast.success('Marinheiro excluído com sucesso!');
      loadSailors();
    } catch (error: any) {
      toast.error('Erro ao excluir marinheiro: ' + error.message);
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
            <h2 className="text-3xl font-bold tracking-tight">Marinheiros</h2>
            <p className="text-muted-foreground">
              Gerencie os perfis de marinheiros profissionais
            </p>
          </div>
          <Link to="/admin/sailors/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo Marinheiro
            </Button>
          </Link>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Experiência</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sailors.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    Nenhum marinheiro cadastrado ainda
                  </TableCell>
                </TableRow>
              ) : (
                sailors.map((sailor) => (
                  <TableRow key={sailor.id}>
                    <TableCell className="font-medium">
                      {sailor.profiles?.display_name || 'Sem nome'}
                    </TableCell>
                    <TableCell>{sailor.years_experience} anos</TableCell>
                    <TableCell>
                      {sailor.city && sailor.state 
                        ? `${sailor.city}, ${sailor.state}`
                        : sailor.city || sailor.state || '-'}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Badge variant={sailor.published ? 'default' : 'secondary'}>
                          {sailor.published ? 'Publicado' : 'Rascunho'}
                        </Badge>
                        {sailor.verified && (
                          <Badge variant="outline">Verificado</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Link to={`/admin/sailors/${sailor.id}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(sailor.id, sailor.profiles?.display_name || 'este marinheiro')}
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
