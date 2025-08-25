import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Ship, 
  Users, 
  FileText, 
  Activity,
  Plus,
  Eye,
  Edit,
  TrendingUp 
} from 'lucide-react';
import api from '@/lib/api';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Link } from 'react-router-dom';

interface DashboardStats {
  vessels: { total: number; published: number };
  sailors: { total: number; verified: number };
  blog_posts: { total: number; published: number };
  recent_activity: Array<{
    id: number;
    action: string;
    entity_type: string;
    details: any;
    created_at: string;
    user: { display_name: string };
  }>;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAdminAuth();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await api.getDashboardStats();
      if (response.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
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
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo de volta, {user?.display_name}!
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link to="/portal-gui/vessels/new">
              <Plus className="mr-2 h-4 w-4" />
              Nova Embarcação
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/portal-gui/blog/new">
              <Plus className="mr-2 h-4 w-4" />
              Novo Artigo
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Embarcações</CardTitle>
            <Ship className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.vessels.total || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.vessels.published || 0} publicadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marinheiros</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.sailors.total || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.sailors.verified || 0} verificados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Artigos</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.blog_posts.total || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.blog_posts.published || 0} publicados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Atividade</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.recent_activity.length || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              ações recentes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.recent_activity.slice(0, 5).map((activity) => (
                <div key={activity.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      {activity.user.display_name} {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.entity_type} • {new Date(activity.created_at).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.entity_type}
                  </Badge>
                </div>
              ))}
              {(!stats?.recent_activity || stats.recent_activity.length === 0) && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Nenhuma atividade recente
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/portal-gui/vessels">
                <Ship className="mr-2 h-4 w-4" />
                Gerenciar Embarcações
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/portal-gui/sailors">
                <Users className="mr-2 h-4 w-4" />
                Gerenciar Marinheiros
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/portal-gui/blog">
                <FileText className="mr-2 h-4 w-4" />
                Gerenciar Blog
              </Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/" target="_blank">
                <Eye className="mr-2 h-4 w-4" />
                Ver Site
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;