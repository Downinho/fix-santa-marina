
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipToContent from "@/components/SkipToContent";
import SitemapGenerator from "@/components/SitemapGenerator";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import VesselsList from "./pages/admin/VesselsList";
import SailorsList from "./pages/admin/SailorsList";
import ProductsList from "./pages/admin/ProductsList";
import BlogPostsList from "./pages/admin/BlogPostsList";
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
      <AuthProvider>
        <Toaster />
        <SitemapGenerator />
        <BrowserRouter>
          <SkipToContent />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/vessels" element={
              <ProtectedRoute>
                <VesselsList />
              </ProtectedRoute>
            } />
            <Route path="/admin/sailors" element={
              <ProtectedRoute>
                <SailorsList />
              </ProtectedRoute>
            } />
            <Route path="/admin/products" element={
              <ProtectedRoute>
                <ProductsList />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog" element={
              <ProtectedRoute>
                <BlogPostsList />
              </ProtectedRoute>
            } />
            
            {/* Public Routes */}
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
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  );
}

export default App;
