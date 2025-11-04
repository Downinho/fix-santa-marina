-- FASE 1: Adicionar colunas para integrações

-- 1.1. Adicionar specialty_types em skipper_profiles
ALTER TABLE skipper_profiles 
ADD COLUMN IF NOT EXISTS specialty_types text[] DEFAULT ARRAY['Iate', 'Lancha', 'Veleiro'];

-- 1.2. Adicionar compatible_vessel_types em products
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS compatible_vessel_types text[] DEFAULT ARRAY['Iate', 'Lancha', 'Veleiro', 'Jet Ski'];

-- 1.3. Criar tabela de conteúdo relacionado ao blog
CREATE TABLE IF NOT EXISTS blog_post_related_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE NOT NULL,
  content_type text NOT NULL CHECK (content_type IN ('vessel', 'product', 'skipper')),
  content_id uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- RLS para blog_post_related_content
ALTER TABLE blog_post_related_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "related_content_select_all" 
ON blog_post_related_content 
FOR SELECT 
USING (true);

CREATE POLICY "related_content_manage_by_author_or_admin" 
ON blog_post_related_content 
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM blog_posts p
    WHERE p.id = blog_post_related_content.post_id
    AND (p.author_profile_id = auth.uid() OR has_role(auth.uid(), 'admin'::app_role))
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM blog_posts p
    WHERE p.id = blog_post_related_content.post_id
    AND (p.author_profile_id = auth.uid() OR has_role(auth.uid(), 'admin'::app_role))
  )
);

-- FASE 5: Criar tabela de interações do usuário para analytics
CREATE TABLE IF NOT EXISTS user_interactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id text,
  interaction_type text NOT NULL CHECK (interaction_type IN ('view', 'favorite', 'contact', 'share', 'click')),
  content_type text NOT NULL CHECK (content_type IN ('vessel', 'product', 'skipper', 'blog_post')),
  content_id uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_user_interactions_user_id ON user_interactions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_interactions_content ON user_interactions(content_type, content_id);
CREATE INDEX IF NOT EXISTS idx_user_interactions_session ON user_interactions(session_id);

-- RLS para user_interactions
ALTER TABLE user_interactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "interactions_insert_public" 
ON user_interactions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "interactions_select_own_or_admin" 
ON user_interactions 
FOR SELECT 
USING (user_id = auth.uid() OR has_role(auth.uid(), 'admin'::app_role));

-- FASE 3: Criar bucket para sitemap (se não existir)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('public', 'public', true)
ON CONFLICT (id) DO NOTHING;