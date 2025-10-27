import { useEffect } from 'react';
import { useDynamicSitemap } from '@/hooks/useDynamicSitemap';

const Sitemap = () => {
  const { sitemap, loading } = useDynamicSitemap();

  useEffect(() => {
    if (!loading && sitemap) {
      // Criar elemento para download do XML
      const blob = new Blob([sitemap], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      
      // Retornar XML como resposta
      const newWindow = window.open('', '_self');
      if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(sitemap);
        newWindow.document.close();
      }
    }
  }, [sitemap, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Gerando sitemap...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default Sitemap;
