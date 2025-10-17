import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Ship, Anchor, ShoppingBag, FileText } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';

interface Stats {
  vessels: number;
  sailors: number;
  products: number;
  blogPosts: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    vessels: 0,
    sailors: 0,
    products: 0,
    blogPosts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [vesselsResult, sailorsResult, productsResult, blogResult] = await Promise.all([
        supabase.from('vessels').select('id', { count: 'exact', head: true }),
        supabase.from('skipper_profiles').select('id', { count: 'exact', head: true }),
        supabase.from('products').select('id', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        vessels: vesselsResult.count || 0,
        sailors: sailorsResult.count || 0,
        products: productsResult.count || 0,
        blogPosts: blogResult.count || 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Embarcações',
      value: stats.vessels,
      icon: Ship,
      description: 'Total de embarcações cadastradas',
      color: 'text-blue-500',
    },
    {
      title: 'Marinheiros',
      value: stats.sailors,
      icon: Anchor,
      description: 'Profissionais cadastrados',
      color: 'text-green-500',
    },
    {
      title: 'Acessórios',
      value: stats.products,
      icon: ShoppingBag,
      description: 'Produtos disponíveis',
      color: 'text-purple-500',
    },
    {
      title: 'Posts do Blog',
      value: stats.blogPosts,
      icon: FileText,
      description: 'Artigos publicados',
      color: 'text-orange-500',
    },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-[calc(100vh-12rem)]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Visão geral do portal MARBANA
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {card.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${card.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Bem-vindo ao Portal Administrativo</CardTitle>
              <CardDescription>
                Gerencie todo o conteúdo do site MARBANA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Use o menu lateral para acessar as diferentes seções do portal:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Cadastre e edite embarcações</li>
                <li>Gerencie perfis de marinheiros profissionais</li>
                <li>Adicione acessórios e produtos à loja</li>
                <li>Crie e publique posts no blog</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
              <CardDescription>
                Links para tarefas comuns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <a 
                  href="/admin/vessels/new" 
                  className="block text-sm text-primary hover:underline"
                >
                  → Nova embarcação
                </a>
                <a 
                  href="/admin/sailors/new" 
                  className="block text-sm text-primary hover:underline"
                >
                  → Novo marinheiro
                </a>
                <a 
                  href="/admin/products/new" 
                  className="block text-sm text-primary hover:underline"
                >
                  → Novo acessório
                </a>
                <a 
                  href="/admin/blog/new" 
                  className="block text-sm text-primary hover:underline"
                >
                  → Novo post no blog
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
