import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Search, Edit, Trash2, Shield, User, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAdminAuth } from '@/hooks/useAdminAuth';

interface AdminUser {
  id: number;
  email: string;
  display_name: string;
  role: 'admin' | 'editor' | 'collaborator';
  avatar_url?: string;
  is_active: boolean;
  last_login?: string;
  created_at: string;
  updated_at: string;
}

export default function UserManager() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const { user: currentUser, hasRole } = useAdminAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: '',
    display_name: '',
    role: 'collaborator' as 'admin' | 'editor' | 'collaborator',
    avatar_url: '',
    password: '',
    confirmPassword: ''
  });

  // Mock data - In real app, this would come from API
  useEffect(() => {
    const mockUsers: AdminUser[] = [
      {
        id: 1,
        email: 'admin@marbana.com.br',
        display_name: 'Administrador Principal',
        role: 'admin',
        avatar_url: '',
        is_active: true,
        last_login: new Date().toISOString(),
        created_at: '2024-01-01T00:00:00Z',
        updated_at: new Date().toISOString()
      },
      {
        id: 2,
        email: 'editor@marbana.com.br',
        display_name: 'Editor de Conteúdo',
        role: 'editor',
        avatar_url: '',
        is_active: true,
        last_login: new Date(Date.now() - 86400000).toISOString(),
        created_at: '2024-01-15T00:00:00Z',
        updated_at: new Date().toISOString()
      }
    ];
    setUsers(mockUsers);
    setLoading(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingUser && formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Erro de validação",
        description: "As senhas não coincidem."
      });
      return;
    }

    setLoading(true);

    try {
      // In real app, this would be an API call
      const userData: AdminUser = {
        id: editingUser?.id || Date.now(),
        email: formData.email,
        display_name: formData.display_name,
        role: formData.role,
        avatar_url: formData.avatar_url,
        is_active: true,
        last_login: editingUser?.last_login,
        created_at: editingUser?.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      if (editingUser) {
        setUsers(prev => prev.map(u => u.id === editingUser.id ? userData : u));
        toast({
          title: "Usuário atualizado!",
          description: "O usuário foi atualizado com sucesso."
        });
      } else {
        setUsers(prev => [userData, ...prev]);
        toast({
          title: "Usuário criado!",
          description: "O novo usuário foi criado com sucesso."
        });
      }

      resetForm();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao salvar",
        description: "Não foi possível salvar o usuário."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user: AdminUser) => {
    if (!hasRole(['admin'])) {
      toast({
        variant: "destructive",
        title: "Acesso negado",
        description: "Você não tem permissão para editar usuários."
      });
      return;
    }

    setEditingUser(user);
    setFormData({
      email: user.email,
      display_name: user.display_name,
      role: user.role,
      avatar_url: user.avatar_url || '',
      password: '',
      confirmPassword: ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!hasRole(['admin'])) {
      toast({
        variant: "destructive",
        title: "Acesso negado",
        description: "Você não tem permissão para excluir usuários."
      });
      return;
    }

    if (id === currentUser?.id) {
      toast({
        variant: "destructive",
        title: "Operação não permitida",
        description: "Você não pode excluir sua própria conta."
      });
      return;
    }

    if (!confirm('Tem certeza que deseja excluir este usuário?')) return;

    try {
      setUsers(prev => prev.filter(u => u.id !== id));
      toast({
        title: "Usuário excluído!",
        description: "O usuário foi excluído com sucesso."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao excluir",
        description: "Não foi possível excluir o usuário."
      });
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      display_name: '',
      role: 'collaborator',
      avatar_url: '',
      password: '',
      confirmPassword: ''
    });
    setEditingUser(null);
    setShowForm(false);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'editor': return 'default';
      case 'collaborator': return 'secondary';
      default: return 'secondary';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrador';
      case 'editor': return 'Editor';
      case 'collaborator': return 'Colaborador';
      default: return role;
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return <Shield className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  if (loading && users.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {editingUser ? 'Editar Usuário' : 'Novo Usuário'}
          </h1>
          <Button variant="outline" onClick={resetForm}>
            Cancelar
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informações do Usuário</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-mail*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="display_name">Nome de Exibição*</Label>
                  <Input
                    id="display_name"
                    value={formData.display_name}
                    onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="role">Função*</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value as any })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collaborator">Colaborador</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      {hasRole(['admin']) && (
                        <SelectItem value="admin">Administrador</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formData.role === 'admin' && 'Acesso total ao sistema'}
                    {formData.role === 'editor' && 'Pode gerenciar conteúdo e visualizar relatórios'}
                    {formData.role === 'collaborator' && 'Pode gerenciar conteúdo básico'}
                  </p>
                </div>
                <div>
                  <Label htmlFor="avatar_url">URL do Avatar</Label>
                  <Input
                    id="avatar_url"
                    value={formData.avatar_url}
                    onChange={(e) => setFormData({ ...formData, avatar_url: e.target.value })}
                    placeholder="https://exemplo.com/avatar.jpg"
                  />
                </div>
              </div>

              {!editingUser && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Senha*</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required={!editingUser}
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirmar Senha*</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required={!editingUser}
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button type="submit" disabled={loading}>
                  {loading ? 'Salvando...' : (editingUser ? 'Atualizar Usuário' : 'Criar Usuário')}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Gestão de Usuários</h1>
        {hasRole(['admin']) && (
          <Button onClick={() => setShowForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Novo Usuário
          </Button>
        )}
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Buscar</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar usuários..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <div>
              <Label>Função</Label>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="admin">Administradores</SelectItem>
                  <SelectItem value="editor">Editores</SelectItem>
                  <SelectItem value="collaborator">Colaboradores</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                {filteredUsers.length} usuário(s)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Usuários */}
      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <Card key={user.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar_url} alt={user.display_name} />
                    <AvatarFallback>
                      {user.display_name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold">{user.display_name}</h3>
                      <Badge variant={getRoleColor(user.role)} className="flex items-center gap-1">
                        {getRoleIcon(user.role)}
                        {getRoleLabel(user.role)}
                      </Badge>
                      {user.id === currentUser?.id && (
                        <Badge variant="outline">Você</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{user.email}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {user.last_login ? 
                          `Último acesso: ${new Date(user.last_login).toLocaleDateString('pt-BR')}` : 
                          'Nunca acessou'
                        }
                      </span>
                      <span>
                        Criado em: {new Date(user.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>
                {hasRole(['admin']) && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(user)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    {user.id !== currentUser?.id && (
                      <Button variant="outline" size="sm" onClick={() => handleDelete(user.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && !loading && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">Nenhum usuário encontrado.</p>
            {hasRole(['admin']) && (
              <Button onClick={() => setShowForm(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Criar Primeiro Usuário
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}