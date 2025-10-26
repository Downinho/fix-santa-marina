-- Adicionar colunas faltantes na tabela vessels
ALTER TABLE public.vessels
ADD COLUMN IF NOT EXISTS contact_name text,
ADD COLUMN IF NOT EXISTS contact_email text,
ADD COLUMN IF NOT EXISTS contact_phone text,
ADD COLUMN IF NOT EXISTS contact_whatsapp text,
ADD COLUMN IF NOT EXISTS highlights text;

-- Comentários para documentação
COMMENT ON COLUMN public.vessels.contact_name IS 'Nome do contato para informações sobre a embarcação';
COMMENT ON COLUMN public.vessels.contact_email IS 'Email de contato';
COMMENT ON COLUMN public.vessels.contact_phone IS 'Telefone de contato';
COMMENT ON COLUMN public.vessels.contact_whatsapp IS 'WhatsApp de contato';
COMMENT ON COLUMN public.vessels.highlights IS 'Diferenciais da embarcação em formato JSON';