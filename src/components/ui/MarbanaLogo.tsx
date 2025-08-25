import React from 'react';

interface MarbanaLogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

const MarbanaLogo: React.FC<MarbanaLogoProps> = ({ className = "", variant = 'header' }) => {
  const bgColor = variant === 'footer' ? '#D4AF37' : 'transparent';
  const iconColor = variant === 'footer' ? '#2C4A5C' : 'currentColor';
  
  return (
    <div className={`relative ${className}`}>
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Background circle with golden color for footer */}
        {variant === 'footer' && (
          <circle cx="100" cy="100" r="95" fill={bgColor} stroke="#B8860B" strokeWidth="2"/>
        )}
        
        {/* Anchor with M design */}
        <g transform="translate(40, 20)">
          {/* Anchor ring/top */}
          <circle cx="60" cy="40" r="25" fill="none" stroke={iconColor} strokeWidth="8"/>
          <circle cx="60" cy="40" r="12" fill="none" stroke={bgColor || '#fff'} strokeWidth="8"/>
          
          {/* Anchor shaft forming M */}
          <rect x="56" y="65" width="8" height="80" fill={iconColor}/>
          
          {/* Left arm of M/Anchor */}
          <path d="M30 130 L56 65 L56 145 L20 160 Z" fill={iconColor}/>
          
          {/* Right arm of M/Anchor */}
          <path d="M90 130 L64 65 L64 145 L100 160 Z" fill={iconColor}/>
          
          {/* Anchor flukes */}
          <ellipse cx="25" cy="155" rx="15" ry="8" fill={iconColor}/>
          <ellipse cx="95" cy="155" rx="15" ry="8" fill={iconColor}/>
          
          {/* Small anchor at bottom */}
          <path d="M56 150 L64 150 L60 160 Z" fill={iconColor}/>
        </g>
        
        {/* Nautical elements */}
        <g transform="translate(140, 40)" opacity="0.6">
          <circle cx="0" cy="0" r="3" fill={iconColor}/>
          <circle cx="15" cy="8" r="2" fill={iconColor}/>
          <circle cx="8" cy="20" r="2" fill={iconColor}/>
        </g>
      </svg>
    </div>
  );
};

export default MarbanaLogo;