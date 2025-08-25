import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Eye } from "lucide-react";

interface Vessel {
  id: number;
  name: string;
  type: string;
  price: string;
  location: string;
  lat: number;
  lng: number;
  image: string;
}

interface MapProps {
  vessels?: Vessel[];
}

const Map: React.FC<MapProps> = ({ vessels = [] }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [selectedVessel, setSelectedVessel] = useState<Vessel | null>(null);

  const loadMapbox = () => {
    if (!mapboxToken.trim()) {
      alert('Por favor, insira um token válido do Mapbox');
      return;
    }

    // Simulate mapbox loading
    setShowTokenInput(false);
    
    // In a real implementation, you would load Mapbox GL JS here
    console.log('Loading Mapbox with token:', mapboxToken);
  };

  if (showTokenInput) {
    return (
      <Card className="h-96">
        <CardContent className="p-6 flex flex-col justify-center h-full">
          <div className="text-center space-y-4">
            <MapPin className="w-12 h-12 mx-auto text-muted-foreground" />
            <h3 className="font-display text-lg font-semibold text-primary">
              Configurar Mapbox
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              Para exibir o mapa com as embarcações, insira seu token público do Mapbox:
            </p>
            <div className="space-y-3">
              <Input
                placeholder="pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="font-mono text-xs"
              />
              <Button 
                onClick={loadMapbox}
                className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-body"
              >
                Carregar Mapa
              </Button>
            </div>
            <p className="text-xs text-muted-foreground font-body">
              Obtenha seu token em{' '}
              <a 
                href="https://account.mapbox.com/access-tokens/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Mock Map Container */}
      <Card className="h-96 relative overflow-hidden">
        <div 
          ref={mapContainer} 
          className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative"
        >
          {/* Mock map background */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500"></div>
          </div>
          
          {/* Mock vessel pins */}
          {vessels.map((vessel, index) => (
            <button
              key={vessel.id}
              onClick={() => setSelectedVessel(vessel)}
              className="absolute w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg 
                         hover:scale-110 transition-transform cursor-pointer z-10
                         flex items-center justify-center"
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${30 + (index * 10)}%`,
              }}
              aria-label={`Ver ${vessel.name}`}
            >
              <MapPin className="w-3 h-3 text-white" />
            </button>
          ))}
          
          {/* Center point for Búzios */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-accent-gold rounded-full border-3 border-white shadow-xl flex items-center justify-center">
              <span className="text-white font-bold text-xs">MARBANA</span>
            </div>
          </div>
          
          <div className="text-center text-primary/80 font-body">
            <p className="text-sm">Localização MARBANA</p>
            <p className="text-xs">Búzios, RJ (-22.7496736, -41.886076)</p>
          </div>
        </div>
      </Card>

      {/* Selected Vessel Card */}
      {selectedVessel && (
        <Card className="border-primary/20">
          <CardContent className="p-4">
            <div className="flex space-x-4">
              <img 
                src={selectedVessel.image} 
                alt={selectedVessel.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-display font-semibold text-primary">
                  {selectedVessel.name}
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  {selectedVessel.location}
                </p>
                <p className="font-display font-bold text-primary">
                  {selectedVessel.price}
                </p>
              </div>
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Map;