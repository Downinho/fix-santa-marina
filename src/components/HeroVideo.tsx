import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import heroImage from "@/assets/hero-yacht-marina.jpg";
import HeroSearchForm from "./HeroSearchForm";
import { getVideoSrc, getVesselTitle, getImageSrc } from "@/utils/videoMapping";

interface HeroVideoProps {
  searchType?: string;
  isHomePage?: boolean;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ searchType, isHomePage = false }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const location = useLocation();
  
  // Get video and title based on search type or URL params
  const urlParams = new URLSearchParams(location.search);
  const currentType = searchType || urlParams.get('type') || 'default';
  
  const videoSrc = getVideoSrc(currentType, isHomePage);
  const vesselTitle = getVesselTitle(currentType);
  
  console.log('HeroVideo - isHomePage:', isHomePage, 'videoSrc:', videoSrc, 'currentType:', currentType);

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Usar imagem gerada como fundo por enquanto */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getImageSrc(currentType, isHomePage)})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <div className="mb-6 sm:mb-8">
{isHomePage ? (
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
                Maior Ecossistema<br />
                <span className="text-accent-gold">Náutico do Brasil</span><br />
                MARBANA
              </h1>
            ) : (
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
                <span className="text-accent-gold">{vesselTitle}</span><br />
                MARBANA
              </h1>
            )}
{isHomePage ? (
              <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                A Rainha dos Mares em Búzios/RJ. Curadoria exclusiva, atendimento personalizado e as melhores embarcações exclusivas do Brasil.
              </p>
            ) : (
              <p className="font-body text-lg sm:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                Descubra nossa seleção exclusiva de {vesselTitle.toLowerCase()}. Curadoria de qualidade e atendimento personalizado.
              </p>
            )}
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