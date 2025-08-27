import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import heroImage from "@/assets/hero-yacht-marina.jpg";
import HeroSearchForm from "./HeroSearchForm";

interface HeroVideoProps {
  searchType?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ searchType }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [customVideoError, setCustomVideoError] = useState(false);
  const location = useLocation();
  
  // Custom hero video path - you can change this to your uploaded video
  const customHeroVideo = '/videos/marbana-hero.mp4';
  
  // Get video based on search type or URL params
  const getVideoSrc = () => {
    const urlParams = new URLSearchParams(location.search);
    const type = searchType || urlParams.get('type') || 'default';
    
    // If it's the default/home page, use custom hero video
    if (type === 'default' && !customVideoError) {
      return customHeroVideo;
    }
    
    const videoMap: { [key: string]: string } = {
      'jet ski': '/videos/jetski.mp4',
      'jetski': '/videos/jetski.mp4',
      'iate': '/videos/iate.mp4',
      'yacht': '/videos/iate.mp4',
      'catamarã': '/videos/catamara.mp4',
      'catamara': '/videos/catamara.mp4',
      'lancha': '/videos/lancha.mp4',
      'veleiro': '/videos/veleiro.mp4',
      'sailboat': '/videos/veleiro.mp4',
      'default': '/videos/hero-default.mp4'
    };
    
    return videoMap[type.toLowerCase()] || videoMap.default;
  };

  const videoSrc = getVideoSrc();

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImage}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => {
            setVideoLoaded(false);
            // If it's the custom hero video that failed, try fallback
            if (videoSrc === customHeroVideo) {
              setCustomVideoError(true);
            }
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback to image if video fails */}
        {!videoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Maior Ecossistema<br />
              <span className="text-accent-gold">Náutico do Brasil</span><br />
              MARBANA
            </h1>
            <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              A Rainha dos Mares em Búzios/RJ. Curadoria exclusiva, atendimento personalizado e as melhores embarcações exclusivas do Brasil.
            </p>
          </div>

          {/* Search Form */}
          <HeroSearchForm />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-accent-gold mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80 font-body">Embarcações Vendidas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-accent-gold mb-1 sm:mb-2">3M+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80 font-body">Milhões de Vendas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-accent-gold mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80 font-body">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;