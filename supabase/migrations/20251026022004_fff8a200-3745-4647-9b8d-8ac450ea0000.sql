-- Adicionar colunas em skipper_profiles para informações de contato e especialidades
ALTER TABLE public.skipper_profiles
ADD COLUMN IF NOT EXISTS contact_phone text,
ADD COLUMN IF NOT EXISTS contact_email text,
ADD COLUMN IF NOT EXISTS contact_whatsapp text,
ADD COLUMN IF NOT EXISTS specialties text;

-- Adicionar colunas em products para melhor gerenciamento
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS specifications text,
ADD COLUMN IF NOT EXISTS category text,
ADD COLUMN IF NOT EXISTS brand text;

-- Comentários para documentação
COMMENT ON COLUMN public.skipper_profiles.contact_phone IS 'Telefone de contato do marinheiro';
COMMENT ON COLUMN public.skipper_profiles.contact_email IS 'Email de contato do marinheiro';
COMMENT ON COLUMN public.skipper_profiles.contact_whatsapp IS 'WhatsApp do marinheiro';
COMMENT ON COLUMN public.skipper_profiles.specialties IS 'Especialidades, certificações e serviços oferecidos';

COMMENT ON COLUMN public.products.specifications IS 'Especificações técnicas do produto';
COMMENT ON COLUMN public.products.category IS 'Categoria do produto (ex: Segurança, Navegação, Ancoragem)';
COMMENT ON COLUMN public.products.brand IS 'Marca do produto';