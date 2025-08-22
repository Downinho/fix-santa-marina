import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Anchor, 
  Package, 
  Users, 
  Settings, 
  FileText, 
  Info, 
  Mail, 
  X,
  Megaphone
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface NavigationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: "Início", href: "/", icon: Home },
  { name: "Embarcações", href: "/embarcacoes", icon: Anchor },
  { name: "Acessórios", href: "/acessorios", icon: Package },
  { name: "Marinheiros", href: "/marinheiros", icon: Users },
  { name: "Serviços", href: "/servicos", icon: Settings },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Sobre", href: "/sobre", icon: Info },
  { name: "Contato", href: "/contato", icon: Mail },
];

export const NavigationSidebar = ({ isOpen, onClose }: NavigationSidebarProps) => {
  const location = useLocation();
  
  const isActive = (href: string) => location.pathname === href;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <SidebarProvider>
          <Sidebar className="border-r bg-background/95 backdrop-blur-sm">
            {/* Header */}
            <SidebarHeader className="border-b border-border p-6">
              <div className="flex items-center justify-between">
                <Link to="/" onClick={onClose}>
                  <h1 className="font-display text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    MARBANA
                  </h1>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </SidebarHeader>

            {/* Content */}
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton asChild>
                            <Link
                              to={item.href}
                              onClick={onClose}
                              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                isActive(item.href)
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-foreground hover:bg-muted/50"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                              <span className="font-medium">{item.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            {/* Footer */}
            <SidebarFooter className="border-t border-border p-6">
              <Button 
                asChild
                className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground"
              >
                <Link to="/anuncie" onClick={onClose}>
                  <Megaphone className="h-4 w-4 mr-2" />
                  Anuncie Aqui
                </Link>
              </Button>
            </SidebarFooter>
          </Sidebar>
        </SidebarProvider>
      </div>
    </>
  );
};