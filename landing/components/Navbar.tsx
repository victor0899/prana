
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-orange-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-xl font-bold tracking-tight text-slate-800">Prana</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-orange-500 transition-colors">Features</a>
          <a href="#integrations" className="hover:text-orange-500 transition-colors">Integrations</a>
          <a href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors px-4 py-2">
            Login
          </button>
          <button className="bg-orange-500 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition-all shadow-sm">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
