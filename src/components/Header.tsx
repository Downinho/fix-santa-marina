
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import StateSelector from "./StateSelector";
import { NavigationSidebar } from "./NavigationSidebar";
import { getSearchRoute } from "@/utils/searchRouter";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  


  const navigation = [
    { name: "Início", href: "/" },
    { name: "Embarcações", href: "/embarcacoes" },
    { name: "Acessórios", href: "/acessorios" },
    { name: "Marinheiros", href: "/marinheiros" },
    { name: "Serviços", href: "/servicos" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  const searchTypes = [
    "Lancha", "Iate", "Jet Ski", "Catamarã", "Veleiro", "Caiaque",
    "Marinheiro", "Capitão", "Skipper", "Fotógrafo", "Marina", 
    "Acessórios", "GPS", "Âncora", "Colete"
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleSearch = () => {
    const route = getSearchRoute(searchTerm, searchType, searchLocation);
    navigate(route);
    setShowSearch(false);
  };


  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        {/* Main Header */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Hamburger + Logo */}
            <div className="flex items-center gap-4">
              {/* Navigation Sidebar Button */}
              <button
                type="button"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setShowSidebar(true)}
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Logo */}
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MARBANA</span>
                <h1 className="font-display text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  MARBANA
                </h1>
              </Link>
            </div>

            {/* Smart Search Bar (Desktop) */}
            <div className="hidden lg:flex items-center bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center divide-x divide-gray-300">
                {/* Search Term */}
                <div className="px-6 py-2 flex-1 min-w-[250px]">
                  <Input
                    placeholder="Buscar embarcações, marinheiros, fotógrafos..."
                    className="border-0 shadow-none h-auto p-0 font-semibold text-sm placeholder:text-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-0.5">O que você procura?</p>
                </div>

                {/* Type */}
                <div className="px-6 py-2">
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger className="border-0 shadow-none h-auto p-0 font-semibold text-sm">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {searchTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-0.5">Categoria</p>
                </div>

                {/* Location */}
                <div className="px-6 py-2 min-w-[180px]">
                  <StateSelector
                    value={searchLocation}
                    onValueChange={setSearchLocation}
                    placeholder="Estado"
                    className="border-0 shadow-none h-auto p-0 font-semibold text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-0.5">Local</p>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-primary text-white p-2 rounded-full m-2 hover:bg-primary-light transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Mobile Search Button */}
              <button
                className="lg:hidden p-2 rounded-full border border-gray-300 hover:shadow-md transition-shadow"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-2">
                <Button 
                  asChild
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                >
                  <Link to="/anuncie">
                    Anunciar
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="font-body"
                >
                  <Link to="/contato">
                    Contato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="lg:hidden border-t border-gray-200 bg-white p-4">
            <div className="space-y-4">
              <Input 
                placeholder="Buscar embarcações, marinheiros, fotógrafos..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {searchTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <StateSelector
                value={searchLocation}
                onValueChange={setSearchLocation}
                placeholder="Selecione o estado"
              />

              <Button onClick={handleSearch} className="w-full bg-primary">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        <div className={`lg:hidden ${isOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
                <span className="sr-only">MARBANA Marina</span>
                <h1 className="font-display text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  MARBANA
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 font-body text-base font-medium transition-colors hover:bg-muted ${
                        isActive(item.href) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="py-6 space-y-4">
                  <Button 
                    asChild
                    className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/anuncie">
                      Anuncie Aqui
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/contato">
                      Contato
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Sidebar */}
      <NavigationSidebar 
        isOpen={showSidebar} 
        onClose={() => setShowSidebar(false)} 
      />

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
