
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import SkipToContent from "@/components/SkipToContent";
import Index from "./pages/Index";
import Embarcacoes from "./pages/Embarcacoes";
import Acessorios from "./pages/Acessorios";
import Servicos from "./pages/Servicos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Anuncie from "./pages/Anuncie";
import Perfil from "./pages/Perfil";
import Produto from "./pages/Produto";
import VesselDetail from "./pages/VesselDetail";
import Marinheiros from "./pages/Marinheiros";
import MarinheirosDetail from "./pages/MarinheirosDetail";
import AcessoriosDetail from "./pages/AcessoriosDetail";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Cookies from "./pages/Cookies";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex flex-col">
            <SkipToContent />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/embarcacoes" element={<Embarcacoes />} />
              <Route path="/embarcacao/:slug" element={<VesselDetail />} />
              <Route path="/acessorios" element={<Acessorios />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/anuncie" element={<Anuncie />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/produto/:slug" element={<Produto />} />
              <Route path="/marinheiros" element={<Marinheiros />} />
              <Route path="/marinheiro/:id" element={<MarinheirosDetail />} />
              <Route path="/acessorio/:id" element={<AcessoriosDetail />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/termos-uso" element={<TermosUso />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
