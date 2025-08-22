
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipToContent from "@/components/SkipToContent";
import Index from "./pages/Index";
import Embarcacoes from "./pages/Embarcacoes";
import VesselDetail from "./pages/VesselDetail";
import Acessorios from "./pages/Acessorios";
import Servicos from "./pages/Servicos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Anuncie from "./pages/Anuncie";
import Perfil from "./pages/Perfil";
import Produto from "./pages/Produto";
import Marinheiros from "./pages/Marinheiros";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient(); // Force rebuild

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <SkipToContent />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/embarcacoes" element={<Embarcacoes />} />
            <Route path="/embarcacao/:id" element={<VesselDetail />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
