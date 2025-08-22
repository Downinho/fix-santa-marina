// Google Maps TypeScript definitions
export interface GoogleMapsPlace {
  name?: string;
  formatted_address?: string;
  place_id?: string;
  geometry?: {
    location: {
      lat(): number;
      lng(): number;
    };
  };
}

declare global {
  namespace google {
    namespace maps {
      namespace places {
        interface PlaceResult {
          name?: string;
          formatted_address?: string;
          place_id?: string;
          geometry?: {
            location: {
              lat(): number;
              lng(): number;
            };
          };
        }

        class Autocomplete {
          constructor(input: HTMLInputElement, options?: any);
          addListener(event: string, callback: () => void): void;
          getPlace(): PlaceResult;
        }
      }

      namespace event {
        function clearInstanceListeners(instance: any): void;
      }
    }
  }
}

export {};