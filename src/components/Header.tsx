import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import MarbanaLogo from "@/components/ui/MarbanaLogo";
import { Link, useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import StateSelector from "./StateSelector";
import { getSearchRoute } from "@/utils/searchRouter";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();

  const searchTypes = [
    "Lancha", "Iate", "Jet Ski", "Catamarã", "Veleiro", "Caiaque"
  ];

  const handleSearch = () => {
    const route = getSearchRoute(searchTerm, searchType, searchLocation);
    navigate(route);
    setShowSearch(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 overflow-hidden">
        {/* Main Header */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 min-w-0">
            {/* Left Side - Hamburger + Logo */}
            <div className="flex items-center gap-4">
              {/* Navigation Sidebar Button */}
              <SidebarTrigger />

              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <MarbanaLogo variant="header" className="group-hover:scale-105 transition-transform" />
                <div className="hidden sm:block">
                  <h1 className="font-display font-bold text-2xl text-primary">MARBANA</h1>
                  <p className="text-xs text-muted-foreground font-body -mt-1">Exclusive Maritime</p>
                </div>
              </Link>
            </div>

            {/* Smart Search Bar (Desktop) */}
            <div className="hidden xl:flex items-center bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-xl transition-shadow duration-200 max-w-2xl mx-4 flex-shrink">
              <div className="flex items-center divide-x divide-gray-300 w-full">
                {/* Search Term */}
                <div className="px-4 py-2 flex-1 min-w-0">
                  <Input
                    placeholder="Buscar embarcações..."
                    className="border-0 shadow-none h-auto p-0 font-semibold text-sm placeholder:text-gray-400 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-0.5 truncate">Qual embarcação procura?</p>
                </div>

                {/* Type */}
                <div className="px-4 py-2 min-w-0 flex-shrink-0">
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger className="border-0 shadow-none h-auto p-0 font-semibold text-sm w-16">
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
                <div className="px-4 py-2 min-w-0 flex-shrink-0">
                  <StateSelector
                    value={searchLocation}
                    onValueChange={setSearchLocation}
                    placeholder="Estado"
                    className="border-0 shadow-none h-auto p-0 font-semibold text-sm w-20"
                  />
                  <p className="text-xs text-gray-500 mt-0.5">Local</p>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-primary text-white p-2 rounded-full m-2 hover:bg-primary-light transition-colors flex-shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* Mobile Search Button */}
              <button
                className="xl:hidden p-2 rounded-full border border-gray-300 hover:shadow-md transition-shadow flex-shrink-0"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                <Button 
                  asChild
                  size="sm"
                  className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body text-xs xl:text-sm px-3 xl:px-4"
                >
                  <Link to="/anuncie">
                    Anunciar
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="sm"
                  className="font-body text-xs xl:text-sm px-3 xl:px-4"
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
                placeholder="Buscar embarcações..." 
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
      </header>
    </>
  );
};

export default Header;