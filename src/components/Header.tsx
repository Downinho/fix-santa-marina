
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { UserMenu } from "@/components/auth/UserMenu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import LocationSearch from "./LocationSearch";
import "@/types/google-maps";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchCategory, setSearchCategory] = useState("vendas");
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    const savedApiKey = localStorage.getItem('google_maps_api_key');
    if (savedApiKey) {
      setGoogleMapsApiKey(savedApiKey);
    }
  }, []);

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

  const categories = {
    vendas: {
      name: "Vendas",
      types: ["Lancha", "Iate", "Jet Ski", "Catamarã", "Caiaque", "Veleiros", "Acessórios"]
    },
    alugueis: {
      name: "Aluguéis", 
      types: ["Jet Ski", "Lancha"]
    },
    servicos: {
      name: "Serviços",
      types: ["Marinheiros", "Consultoria", "Filmagem e Fotografia", "Marinas"]
    }
  };

  const isActive = (href: string) => location.pathname === href;

  const handleLocationSelect = (place: google.maps.places.PlaceResult) => {
    console.log("Location selected:", place);
    if (place.formatted_address) {
      setSearchLocation(place.formatted_address);
    }
  };

  const handleSearch = () => {
    // Redirecionar para página de embarcações com parâmetros de busca
    const searchParams = new URLSearchParams();
    if (searchType) searchParams.set('type', searchType);
    if (searchLocation) searchParams.set('location', searchLocation);
    
    navigate(`/embarcacoes?${searchParams.toString()}`);
    setShowSearch(false);
  };


  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        {/* Main Header */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">MARBANA</span>
                <h1 className="font-display text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  MARBANA
                </h1>
              </Link>
            </div>

            {/* Airbnb-style Search Bar (Desktop) */}
            <div className="hidden lg:flex items-center bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center divide-x divide-gray-300">
                {/* Category */}
                <div className="px-6 py-2">
                  <Select value={searchCategory} onValueChange={setSearchCategory}>
                    <SelectTrigger className="border-0 shadow-none h-auto p-0 font-semibold text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(categories).map(([key, category]) => (
                        <SelectItem key={key} value={key}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-0.5">O que você busca?</p>
                </div>

                {/* Type */}
                <div className="px-6 py-2">
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger className="border-0 shadow-none h-auto p-0 font-semibold text-sm">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories[searchCategory as keyof typeof categories].types.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500 mt-0.5">Categoria</p>
                </div>

                <div className="px-6 py-2 flex-1 min-w-[200px]">
                  {googleMapsApiKey ? (
                    <LocationSearch
                      apiKey={googleMapsApiKey}
                      onLocationSelect={handleLocationSelect}
                      placeholder="Armação dos Búzios, RJ"
                      className="border-0 shadow-none h-auto p-0 font-semibold text-sm placeholder:text-gray-400"
                    />
                  ) : (
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Armação dos Búzios, RJ"
                        className="pl-8 border-0 shadow-none h-auto p-0 font-semibold text-sm placeholder:text-gray-400"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                      />
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-0.5">Onde?</p>
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

              {/* Desktop Auth */}
              <div className="hidden lg:flex items-center gap-2">
                <Link 
                  to="/anuncie"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Anunciar
                </Link>
                
                {loading ? (
                  <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
                ) : user ? (
                  <UserMenu />
                ) : (
                  <AuthDialog>
                    <button className="flex items-center gap-2 p-2 rounded-full border border-gray-300 hover:shadow-md transition-shadow">
                      <Menu className="w-4 h-4" />
                      <div className="w-6 h-6 bg-gray-400 rounded-full" />
                    </button>
                  </AuthDialog>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="lg:hidden border-t border-gray-200 bg-white p-4">
            <div className="space-y-4">
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categories).map(([key, category]) => (
                    <SelectItem key={key} value={key}>{category.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  {categories[searchCategory as keyof typeof categories].types.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {googleMapsApiKey ? (
                <LocationSearch
                  apiKey={googleMapsApiKey}
                  onLocationSelect={handleLocationSelect}
                  placeholder="Armação dos Búzios, RJ"
                />
              ) : (
                <Input 
                  placeholder="Armação dos Búzios, RJ" 
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              )}

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
                  {user ? (
                    <>
                      <div className="flex items-center space-x-3 px-3">
                        <UserMenu />
                        <span className="font-body text-sm text-muted-foreground">
                          {user.email}
                        </span>
                      </div>
                    </>
                  ) : (
                    <AuthDialog onSuccess={() => setIsOpen(false)}>
                      <Button 
                        variant="outline" 
                        className="w-full font-body"
                      >
                        Entrar
                      </Button>
                    </AuthDialog>
                  )}
                  
                  <Button 
                    asChild
                    className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/anuncie">
                      Anuncie Aqui
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
