import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Anchor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (searchTerm) searchParams.set('search', searchTerm);
    if (selectedType) searchParams.set('type', selectedType);
    if (selectedLocation) searchParams.set('location', selectedLocation);
    
    navigate(`/embarcacoes?${searchParams.toString()}`);
  };

  const handleAdvancedFilters = () => {
    // For now, just navigate to embarcacoes page
    navigate('/embarcacoes');
  };

  return (
    <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 shadow-premium">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2 font-body">
            O que você procura?
          </label>
          <Input 
            placeholder="Ex: Lancha, Iate, Veleiro..."
            className="h-12 font-body"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2 font-body">
            Tipo
          </label>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="h-12 font-body">
              <SelectValue placeholder="Tipo de embarcação" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Lancha">Lancha</SelectItem>
              <SelectItem value="Iate">Iate</SelectItem>
              <SelectItem value="Veleiro">Veleiro</SelectItem>
              <SelectItem value="Catamarã">Catamarã</SelectItem>
              <SelectItem value="Jet Ski">Jet Ski</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2 font-body">
            Localização
          </label>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="h-12 font-body">
              <SelectValue placeholder="Local" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="RJ">Rio de Janeiro</SelectItem>
              <SelectItem value="SP">São Paulo</SelectItem>
              <SelectItem value="SC">Santa Catarina</SelectItem>
              <SelectItem value="BA">Bahia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-body font-medium flex-1 h-12"
          onClick={handleSearch}
        >
          <Search className="w-5 h-5 mr-2" />
          Buscar Embarcações
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="font-body font-medium h-12 min-w-[200px]"
          onClick={handleAdvancedFilters}
        >
          <Anchor className="w-5 h-5 mr-2" />
          Filtros Avançados
        </Button>
      </div>
    </div>
  );
};

export default HeroSearchForm;