
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { User, Settings, LogOut, Crown, Anchor, ShoppingBag, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const { user, profile, roles, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Crown className="w-3 h-3" />;
      case 'seller':
        return <Anchor className="w-3 h-3" />;
      case 'vendor':
        return <ShoppingBag className="w-3 h-3" />;
      case 'skipper':
        return <Compass className="w-3 h-3" />;
      default:
        return <User className="w-3 h-3" />;
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Admin';
      case 'seller':
        return 'Vendedor';
      case 'vendor':
        return 'Fornecedor';
      case 'skipper':
        return 'Marinheiro';
      case 'buyer':
        return 'Comprador';
      default:
        return role;
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={profile?.avatar_url || ''} alt={profile?.display_name || 'Usuário'} />
            <AvatarFallback className="bg-gradient-hero text-primary-foreground">
              {profile?.display_name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none font-display">
              {profile?.display_name || 'Usuário'}
            </p>
            <p className="text-xs leading-none text-muted-foreground font-body">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        
        {roles.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <div className="px-2 py-1">
              <p className="text-xs text-muted-foreground font-body mb-2">Papéis:</p>
              <div className="flex flex-wrap gap-1">
                {roles.map((role) => (
                  <Badge key={role.id} variant="secondary" className="text-xs font-body">
                    {getRoleIcon(role.role)}
                    <span className="ml-1">{getRoleLabel(role.role)}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => navigate('/perfil')} className="font-body cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Meu Perfil</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => navigate('/configuracoes')} className="font-body cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={handleSignOut} className="font-body cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
