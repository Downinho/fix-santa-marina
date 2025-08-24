import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface StateSelectorProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

// Estados que possuem embarcações disponíveis
const availableStates = [
  { code: 'RJ', name: 'Rio de Janeiro' },
  { code: 'SP', name: 'São Paulo' },
  { code: 'SC', name: 'Santa Catarina' },
  { code: 'BA', name: 'Bahia' },
];

const StateSelector: React.FC<StateSelectorProps> = ({
  value,
  onValueChange,
  placeholder = "Selecione o estado",
  className = ""
}) => {
  return (
    <div className="relative">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={className}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent>
          {availableStates.map((state) => (
            <SelectItem key={state.code} value={state.code}>
              {state.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StateSelector;