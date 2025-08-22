import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

interface GoogleMapsConfigProps {
  onApiKeySet: (apiKey: string) => void;
}

const GoogleMapsConfig: React.FC<GoogleMapsConfigProps> = ({ onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySet(apiKey.trim());
      localStorage.setItem('google_maps_api_key', apiKey.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-ocean flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-accent-gold-foreground" />
          </div>
          <CardTitle className="text-2xl font-display">Configurar Google Maps</CardTitle>
          <CardDescription>
            Para usar a busca por localização, você precisa de uma chave da API do Google Maps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium mb-2">
                Chave da API do Google Maps
              </label>
              <Input
                id="apiKey"
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Cole sua chave da API aqui"
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-hero">
              Configurar Maps
            </Button>
          </form>

          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Como obter sua chave da API:</strong>
            </p>
            <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
              <li>Acesse o Google Cloud Console</li>
              <li>Crie um novo projeto ou selecione um existente</li>
              <li>Ative as APIs: Places, Geocoding e Maps JavaScript</li>
              <li>Crie uma chave da API e configure as restrições para <code>marbana.com.br</code></li>
            </ol>
            
            <Button 
              variant="outline" 
              className="w-full mt-4" 
              asChild
            >
              <a 
                href="https://console.cloud.google.com/apis/library" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Abrir Google Cloud Console
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleMapsConfig;