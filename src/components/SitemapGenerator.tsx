import { useEffect } from 'react';
import { generateSitemap } from '@/utils/generateSitemap';

const SitemapGenerator = () => {
  useEffect(() => {
    // Generate and update sitemap on build/mount
    const updateSitemap = async () => {
      try {
        const sitemapContent = generateSitemap();
        
        // In a real production environment, this would be handled by the build process
        // For now, we'll create a downloadable version for manual upload
        const blob = new Blob([sitemapContent], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        
        // Log the sitemap content for manual use
        console.log('Generated Sitemap:', sitemapContent);
        
        // Create a temporary download link for development
        if (process.env.NODE_ENV === 'development') {
          const link = document.createElement('a');
          link.href = url;
          link.download = 'sitemap.xml';
          link.style.display = 'none';
          document.body.appendChild(link);
          // Uncomment the next line if you want to auto-download during development
          // link.click();
          document.body.removeChild(link);
        }
        
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    };

    updateSitemap();
  }, []);

  return null; // This component doesn't render anything
};

export default SitemapGenerator;