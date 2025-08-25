import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, Ship, FileText, Eye, Calendar, Download } from 'lucide-react';
import api from '@/lib/api';

interface AnalyticsData {
  overview: {
    total_visits: number;
    total_visitors: number;
    total_vessels: number;
    total_sailors: number;
    total_posts: number;
    bounce_rate: number;
    avg_session_duration: number;
    conversion_rate: number;
  };
  trends: {
    visits: Array<{ date: string; visits: number; visitors: number }>;
    vessels: Array<{ date: string; views: number; inquiries: number }>;
    popular_pages: Array<{ page: string; views: number; percentage: number }>;
  };
  demographics: {
    devices: Array<{ name: string; value: number; color: string }>;
    locations: Array<{ city: string; state: string; visits: number }>;
    traffic_sources: Array<{ source: string; visits: number; percentage: number }>;
  };
}

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('30d');

  // Mock data - In real app, this would come from API
  useEffect(() => {
    const mockData: AnalyticsData = {
      overview: {
        total_visits: 15420,
        total_visitors: 8950,
        total_vessels: 127,
        total_sailors: 43,
        total_posts: 28,
        bounce_rate: 42.5,
        avg_session_duration: 185,
        conversion_rate: 3.2
      },
      trends: {
        visits: [
          { date: '2024-01-01', visits: 520, visitors: 380 },
          { date: '2024-01-02', visits: 680, visitors: 420 },
          { date: '2024-01-03', visits: 750, visitors: 480 },
          { date: '2024-01-04', visits: 590, visitors: 390 },
          { date: '2024-01-05', visits: 820, visitors: 520 },
          { date: '2024-01-06', visits: 920, visitors: 580 },
          { date: '2024-01-07', visits: 1100, visitors: 650 }
        ],
        vessels: [
          { date: '2024-01-01', views: 120, inquiries: 8 },
          { date: '2024-01-02', views: 150, inquiries: 12 },
          { date: '2024-01-03', views: 180, inquiries: 15 },
          { date: '2024-01-04', views: 140, inquiries: 9 },
          { date: '2024-01-05', views: 200, inquiries: 18 },
          { date: '2024-01-06', views: 220, inquiries: 22 },
          { date: '2024-01-07', views: 250, inquiries: 25 }
        ],
        popular_pages: [
          { page: '/embarcacoes', views: 4520, percentage: 29.3 },
          { page: '/', views: 3280, percentage: 21.3 },
          { page: '/marinheiros', views: 2150, percentage: 13.9 },
          { page: '/blog', views: 1950, percentage: 12.6 },
          { page: '/sobre', views: 1320, percentage: 8.6 },
          { page: '/contato', views: 980, percentage: 6.4 },
          { page: '/servicos', views: 820, percentage: 5.3 },
          { page: '/acessorios', views: 400, percentage: 2.6 }
        ]
      },
      demographics: {
        devices: [
          { name: 'Desktop', value: 45, color: '#0088FE' },
          { name: 'Mobile', value: 40, color: '#00C49F' },
          { name: 'Tablet', value: 15, color: '#FFBB28' }
        ],
        locations: [
          { city: 'São Paulo', state: 'SP', visits: 3420 },
          { city: 'Rio de Janeiro', state: 'RJ', visits: 2890 },
          { city: 'Florianópolis', state: 'SC', visits: 1850 },
          { city: 'Salvador', state: 'BA', visits: 1420 },
          { city: 'Vitória', state: 'ES', visits: 980 }
        ],
        traffic_sources: [
          { source: 'Orgânico (Google)', visits: 6850, percentage: 44.4 },
          { source: 'Direto', visits: 3420, percentage: 22.2 },
          { source: 'Redes Sociais', visits: 2580, percentage: 16.7 },
          { source: 'Referências', visits: 1650, percentage: 10.7 },
          { source: 'Anúncios Pagos', visits: 920, percentage: 6.0 }
        ]
      }
    };

    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000);
  }, [dateRange]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('pt-BR').format(num);
  };

  const getGrowthIndicator = (current: number, previous: number) => {
    const growth = ((current - previous) / previous) * 100;
    const isPositive = growth > 0;
    
    return (
      <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
        {Math.abs(growth).toFixed(1)}%
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center">
        <p className="text-muted-foreground">Não foi possível carregar os dados de analytics.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="flex gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="12m">Últimos 12 meses</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Visitantes</p>
                <p className="text-2xl font-bold">{formatNumber(data.overview.total_visitors)}</p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="mt-2">
              {getGrowthIndicator(data.overview.total_visitors, 7800)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Visualizações</p>
                <p className="text-2xl font-bold">{formatNumber(data.overview.total_visits)}</p>
              </div>
              <Eye className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="mt-2">
              {getGrowthIndicator(data.overview.total_visits, 13200)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Embarcações</p>
                <p className="text-2xl font-bold">{data.overview.total_vessels}</p>
              </div>
              <Ship className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="mt-2">
              {getGrowthIndicator(data.overview.total_vessels, 118)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Taxa de Conversão</p>
                <p className="text-2xl font-bold">{data.overview.conversion_rate}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="mt-2">
              {getGrowthIndicator(data.overview.conversion_rate, 2.8)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Visitas e Visitantes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.trends.visits}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#8884d8" name="Visitas" />
                <Line type="monotone" dataKey="visitors" stroke="#82ca9d" name="Visitantes" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visualizações de Embarcações</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.trends.vessels}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#8884d8" name="Visualizações" />
                <Bar dataKey="inquiries" fill="#82ca9d" name="Consultas" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Dispositivos e Páginas Populares */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dispositivos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data.demographics.devices}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.demographics.devices.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Páginas Populares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.trends.popular_pages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{page.page}</p>
                    <div className="w-full bg-secondary rounded-full h-2 mt-1">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${page.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-medium">{formatNumber(page.views)}</p>
                    <p className="text-sm text-muted-foreground">{page.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fontes de Tráfego e Localização */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fontes de Tráfego</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.demographics.traffic_sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{source.source}</p>
                    <div className="w-full bg-secondary rounded-full h-2 mt-1">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-medium">{formatNumber(source.visits)}</p>
                    <p className="text-sm text-muted-foreground">{source.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Localidades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.demographics.locations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{location.city}</p>
                    <p className="text-sm text-muted-foreground">{location.state}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatNumber(location.visits)}</p>
                    <p className="text-sm text-muted-foreground">visitas</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métricas Detalhadas */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas Detalhadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">{data.overview.bounce_rate}%</p>
              <p className="text-sm text-muted-foreground">Taxa de Rejeição</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">{formatDuration(data.overview.avg_session_duration)}</p>
              <p className="text-sm text-muted-foreground">Duração Média da Sessão</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">{data.overview.total_sailors}</p>
              <p className="text-sm text-muted-foreground">Marinheiros Cadastrados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-500">{data.overview.total_posts}</p>
              <p className="text-sm text-muted-foreground">Posts do Blog</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}