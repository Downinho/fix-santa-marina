-- FASE 3: Criar triggers para regeneração automática do sitemap

-- Função para chamar a edge function de regeneração
CREATE OR REPLACE FUNCTION trigger_sitemap_regen()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  -- Chamar a edge function via HTTP (webhook)
  PERFORM net.http_post(
    url := 'https://qobdsqwzfnbxeyvahhxw.supabase.co/functions/v1/regenerate-sitemap',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('request.jwt.claims', true)::json->>'sub'
    ),
    body := '{}'::jsonb
  );
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log erro mas não falhe a operação principal
    RAISE WARNING 'Failed to trigger sitemap regeneration: %', SQLERRM;
    RETURN NEW;
END;
$$;

-- Trigger para vessels
DROP TRIGGER IF EXISTS after_vessel_change ON vessels;
CREATE TRIGGER after_vessel_change
AFTER INSERT OR UPDATE OR DELETE ON vessels
FOR EACH STATEMENT
EXECUTE FUNCTION trigger_sitemap_regen();

-- Trigger para products  
DROP TRIGGER IF EXISTS after_product_change ON products;
CREATE TRIGGER after_product_change
AFTER INSERT OR UPDATE OR DELETE ON products
FOR EACH STATEMENT
EXECUTE FUNCTION trigger_sitemap_regen();

-- Trigger para blog_posts
DROP TRIGGER IF EXISTS after_blog_post_change ON blog_posts;
CREATE TRIGGER after_blog_post_change
AFTER INSERT OR UPDATE OR DELETE ON blog_posts
FOR EACH STATEMENT
EXECUTE FUNCTION trigger_sitemap_regen();

-- Trigger para skipper_profiles
DROP TRIGGER IF EXISTS after_skipper_change ON skipper_profiles;
CREATE TRIGGER after_skipper_change
AFTER INSERT OR UPDATE OR DELETE ON skipper_profiles
FOR EACH STATEMENT
EXECUTE FUNCTION trigger_sitemap_regen();