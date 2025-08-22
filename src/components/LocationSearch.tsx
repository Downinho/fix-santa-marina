import React, { useEffect, useRef, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import "@/types/google-maps";

interface LocationSearchProps {
  apiKey: string;
  onLocationSelect?: (location: google.maps.places.PlaceResult) => void;
  placeholder?: string;
  className?: string;
}

const LocationSearch: React.FC<LocationSearchProps> = ({
  apiKey,
  onLocationSelect,
  placeholder = "Buscar localização...",
  className = ""
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: "weekly",
      libraries: ["places"],
      region: "BR",
      language: "pt-BR"
    });

    loader.load().then(() => {
      setIsLoaded(true);
      if (inputRef.current) {
        autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "BR" },
          fields: ["name", "formatted_address", "geometry", "place_id"],
          types: ["(cities)"]
        });

        autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current?.getPlace();
          if (place && onLocationSelect) {
            onLocationSelect(place);
          }
        });
      }
    }).catch((error) => {
      console.error("Error loading Google Maps:", error);
    });

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [apiKey, onLocationSelect]);

  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
      <Input
        ref={inputRef}
        placeholder={isLoaded ? placeholder : "Carregando maps..."}
        className={`pl-10 ${className}`}
        disabled={!isLoaded}
      />
    </div>
  );
};

export default LocationSearch;