
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
import VesselForm from "./pages/admin/VesselForm";
import SailorsList from "./pages/admin/SailorsList";
import SailorForm from "./pages/admin/SailorForm";
import ProductsList from "./pages/admin/ProductsList";
import ProductForm from "./pages/admin/ProductForm";
import BlogPostsList from "./pages/admin/BlogPostsList";
import BlogPostForm from "./pages/admin/BlogPostForm";
import Embarcacoes from "./pages/Embarcacoes";
import Acessorios from "./pages/Acessorios";
import Servicos from "./pages/Servicos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Anuncie from "./pages/Anuncie";
import Busca from "./pages/Busca";
import Perfil from "./pages/Perfil";
import Produto from "./pages/Produto";
import VesselDetail from "./pages/VesselDetail";
import Marinheiros from "./pages/Marinheiros";
import MarinheirosDetail from "./pages/MarinheirosDetail";
import Marinas from "./pages/Marinas";
import MarinaDetail from "./pages/MarinaDetail";
import MarinasList from "./pages/admin/MarinasList";
import MarinaForm from "./pages/admin/MarinaForm";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Cookies from "./pages/Cookies";
import Sitemap from "./pages/Sitemap";

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
            <Route path="/admin/vessels/new" element={
              <ProtectedRoute>
                <VesselForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/vessels/:id/edit" element={
              <ProtectedRoute>
                <VesselForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/sailors" element={
              <ProtectedRoute>
                <SailorsList />
              </ProtectedRoute>
            } />
            <Route path="/admin/sailors/new" element={
              <ProtectedRoute>
                <SailorForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/sailors/:id/edit" element={
              <ProtectedRoute>
                <SailorForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/products" element={
              <ProtectedRoute>
                <ProductsList />
              </ProtectedRoute>
            } />
            <Route path="/admin/products/new" element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/products/:id/edit" element={
              <ProtectedRoute>
                <ProductForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog" element={
              <ProtectedRoute>
                <BlogPostsList />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog/new" element={
              <ProtectedRoute>
                <BlogPostForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/blog/:id/edit" element={
              <ProtectedRoute>
                <BlogPostForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/marinas" element={
              <ProtectedRoute>
                <MarinasList />
              </ProtectedRoute>
            } />
            <Route path="/admin/marinas/new" element={
              <ProtectedRoute>
                <MarinaForm />
              </ProtectedRoute>
            } />
            <Route path="/admin/marinas/:id/edit" element={
              <ProtectedRoute>
                <MarinaForm />
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
          <Route path="/marinheiros/:slug" element={<MarinheirosDetail />} />
          <Route path="/marinas" element={<Marinas />} />
          <Route path="/marinas/:slug" element={<MarinaDetail />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  );
}

export default App;
