
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stem - A single organic, slightly wavy vertical line */}
      <path 
        d="M12 8C13.5 15 11 25 12 34" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        strokeOpacity="0.2"
        className="text-orange-500"
      />

      {/* BODY - Grounded Wave (Bottom of the P loop) */}
      <path 
        d="M12 24C18 24 28 28 32 20C34 16 30 12 24 10" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        className="text-orange-500"
      />
      
      {/* MIND - Crossing Wave (Middle of the loop) */}
      <path 
        d="M12 18C20 12 32 14 34 22C36 30 26 34 18 30" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeOpacity="0.7"
        className="text-orange-500"
      />

      {/* SPIRIT - Ethereal Wave (Top of the loop, crossing through) */}
      <path 
        d="M12 12C20 6 34 8 32 18C30 28 18 24 14 20" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeOpacity="0.4"
        className="text-orange-500"
      />
    </svg>
  );
};

export default Logo;
