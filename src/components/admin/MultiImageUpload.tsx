import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Upload, X } from 'lucide-react';

interface MultiImageUploadProps {
  bucket: string;
  images: string[];
  onImagesChange: (urls: string[]) => void;
  maxImages?: number;
}

export default function MultiImageUpload({ 
  bucket, 
  images, 
  onImagesChange,
  maxImages = 10 
}: MultiImageUploadProps) {
  const [uploading, setUploading] = useState(false);

  const uploadImages = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('Selecione pelo menos uma imagem');
      }

      const files = Array.from(event.target.files);
      const newUrls: string[] = [];

      for (const file of files) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from(bucket)
          .upload(filePath, file);

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
        newUrls.push(data.publicUrl);
      }

      onImagesChange([...images, ...newUrls]);
      toast.success(`${newUrls.length} imagem(ns) enviada(s) com sucesso!`);
    } catch (error: any) {
      toast.error('Erro ao enviar imagens: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Galeria de Imagens ({images.length}/{maxImages})</Label>
        <p className="text-xs text-muted-foreground mb-2">
          Adicione múltiplas imagens da embarcação
        </p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((url, index) => (
            <div key={index} className="relative border-2 border-border rounded-lg overflow-hidden">
              <img
                src={url}
                alt={`Imagem ${index + 1}`}
                className="w-full h-32 object-cover"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-1 right-1"
                onClick={() => removeImage(index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {images.length < maxImages && (
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
          <Label htmlFor={`upload-multi-${bucket}`} className="cursor-pointer">
            <div className="flex flex-col items-center">
              <Button type="button" variant="outline" disabled={uploading} asChild>
                <span>
                  <Upload className="h-4 w-4 mr-2" />
                  {uploading ? 'Enviando...' : 'Adicionar Imagens'}
                </span>
              </Button>
            </div>
          </Label>
          <Input
            id={`upload-multi-${bucket}`}
            type="file"
            accept="image/*"
            multiple
            onChange={uploadImages}
            disabled={uploading}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}
