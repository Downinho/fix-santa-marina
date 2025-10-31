-- Adicionar coluna model na tabela vessels
ALTER TABLE public.vessels
ADD COLUMN IF NOT EXISTS model text;

-- Atualizar embarcações existentes com modelo inferido do nome
UPDATE public.vessels
SET model = 
  CASE 
    WHEN name ILIKE '%Focker%' THEN 'Focker 272 GTC'
    WHEN name ILIKE '%Coral%' THEN 'Coral 36HT'
    WHEN name ILIKE '%Real%' THEN 'Real 24A'
    WHEN name ILIKE '%Sea-Doo RXTX%' THEN 'RXTX 300hp'
    WHEN name ILIKE '%Sea-Doo GTX%' THEN 'GTX 170'
    ELSE name
  END
WHERE model IS NULL;

-- Criar índice para melhorar performance de buscas
CREATE INDEX IF NOT EXISTS idx_vessels_model ON public.vessels(model);