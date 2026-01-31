
import React from 'react';
import { Sparkles } from 'lucide-react';
import AppStoreButtons from './AppStoreButtons';

const Hero: React.FC = () => {
  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-orange-50/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-widest fade-in-up">
          <Sparkles className="w-3 h-3" />
          Wellness for every life
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
          Your wellness journey, <br />
          <span className="text-orange-500">on your terms.</span>
        </h1>
        
        <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Nurture your health with guidance that resonates with your daily life. We make a balanced lifestyle accessible to everyone by honoring your unique context.
          </p>
        </div>

        <div className="pt-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <AppStoreButtons />
        </div>

        <div className="pt-12 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={scrollToJourney}
            className="group flex flex-col items-center gap-4 mx-auto"
          >
            <span className="text-sm font-semibold text-slate-400 group-hover:text-orange-500 transition-colors uppercase tracking-widest">Experience the Flow</span>
            <div className="w-10 h-16 border-2 border-slate-100 rounded-full flex items-start justify-center p-2 group-hover:border-orange-200 transition-colors">
              <div className="w-1 h-3 bg-slate-200 rounded-full animate-bounce mt-1 group-hover:bg-orange-500"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
