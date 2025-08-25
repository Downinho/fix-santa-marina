import React from 'react';
import marbanaaLogo from "@/assets/marbana-logo.png";

interface MarbanaLogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

const MarbanaLogo: React.FC<MarbanaLogoProps> = ({ className = "", variant = 'header' }) => {
  const baseClasses = variant === 'footer' 
    ? "w-12 h-12 rounded-full bg-accent-gold p-1 shadow-md" 
    : "w-10 h-10";
  
  return (
    <div className={`relative ${className}`}>
      <img 
        src={marbanaaLogo} 
        alt="MARBANA Logo" 
        className={`${baseClasses} object-contain`}
      />
    </div>
  );
};

export default MarbanaLogo;