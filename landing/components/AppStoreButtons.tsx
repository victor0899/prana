
import React from 'react';
import { AppStoreLogo, GooglePlayLogo } from './BrandLogos';

interface AppStoreButtonsProps {
  variant?: 'light' | 'dark';
}

const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ variant = 'dark' }) => {
  const baseClass = "flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95";
  const darkClass = "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200";
  const lightClass = "bg-white text-slate-900 border border-slate-100 hover:shadow-lg shadow-sm";

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <button className={`${baseClass} ${variant === 'dark' ? darkClass : lightClass}`}>
        <AppStoreLogo size={24} className="w-6 h-6" />
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold leading-none opacity-60">Download on the</p>
          <p className="text-lg font-bold leading-tight">App Store</p>
        </div>
      </button>

      <button className={`${baseClass} ${variant === 'dark' ? darkClass : lightClass}`}>
        <GooglePlayLogo size={24} className="w-6 h-6" />
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold leading-none opacity-60">Get it on</p>
          <p className="text-lg font-bold leading-tight">Google Play</p>
        </div>
      </button>
    </div>
  );
};

export default AppStoreButtons;
