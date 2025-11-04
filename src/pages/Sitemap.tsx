import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Layout } from '@/components/Layout';

const Sitemap = () => {
  const [sitemap, setSitemap] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSitemap = async () => {
      try {
        // Tentar buscar o sitemap do storage
        const { data, error } = await supabase.storage
          .from('public')
          .download('sitemap.xml');
        
        if (error) {
          console.error('Error loading sitemap:', error);
          throw error;
        }

        if (data) {
          const text = await data.text();
          setSitemap(text);
          
          // Renderizar o XML na página
          const newWindow = window.open('', '_self');
          if (newWindow) {
            newWindow.document.open();
            newWindow.document.write(text);
            newWindow.document.close();
          }
        }
      } catch (error) {
        console.error('Error loading sitemap:', error);
        setSitemap(null);
      } finally {
        setLoading(false);
      }
    };

    loadSitemap();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando sitemap...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return null;
};

export default Sitemap;
