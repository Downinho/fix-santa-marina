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
  Megaphone,
  Ship,
  Waves,
  Sailboat,
  Menu
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
  SidebarGroupLabel,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import MarbanaLogo from "@/components/ui/MarbanaLogo";

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

const vesselTypes = [
  { name: "Lanchas", href: "/embarcacoes?type=Lancha", icon: Ship },
  { name: "Iates", href: "/embarcacoes?type=Iate", icon: Anchor },
  { name: "Jet Skis", href: "/embarcacoes?type=Jet Ski", icon: Waves },
  { name: "Veleiros", href: "/embarcacoes?type=Veleiro", icon: Sailboat },
  { name: "Catamarãs", href: "/embarcacoes?type=Catamarã", icon: Ship },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };
  
  const isVesselTypeActive = vesselTypes.some((vessel) => isActive(vessel.href));
  
  return (
    <Sidebar 
      className={!open ? "w-14" : "w-[85vw] sm:w-80 md:w-72"}
      collapsible="icon"
    >
      {/* Header */}
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className={!open ? "hidden" : "block"}>
            <div className="flex items-center gap-2">
              <MarbanaLogo className="h-8 w-8" />
              <h1 className="font-display text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                MARBANA
              </h1>
            </div>
          </Link>
          {!open && (
            <Link to="/">
              <MarbanaLogo className="h-8 w-8" />
            </Link>
          )}
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          {open && (
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Navegação Principal
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                            : "text-foreground hover:bg-muted/50 hover:text-primary"
                        }`}
                      >
                        <Icon className="h-5 w-5 shrink-0" />
                        {open && <span className="font-medium">{item.name}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Vessel Types */}
        <SidebarGroup>
          {open && (
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Tipos de Embarcação
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {vesselTypes.map((vessel) => {
                const Icon = vessel.icon;
                const active = location.search.includes(`type=${encodeURIComponent(vessel.name.slice(0, -1))}`);
                return (
                  <SidebarMenuItem key={vessel.name}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={vessel.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          active
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {open && <span className="text-sm">{vessel.name}</span>}
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
      <SidebarFooter className="border-t border-border p-4">
        <Button 
          asChild
          className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground"
          size={!open ? "icon" : "default"}
        >
          <Link to="/anuncie">
            <Megaphone className={!open ? "h-4 w-4" : "h-4 w-4 mr-2"} />
            {open && "Anuncie Aqui"}
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}