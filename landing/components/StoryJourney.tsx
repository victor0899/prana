
import React, { useEffect, useRef, useState } from 'react';
import { JOURNEY_STEPS } from '../constants';
import { Heart, MessageCircle, Share2, Sparkles } from 'lucide-react';

const JourneyStep: React.FC<{ step: typeof JOURNEY_STEPS[0], index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;
  const isLast = index === JOURNEY_STEPS.length - 1;

  return (
    <div 
      ref={ref}
      className={`min-h-[70vh] flex flex-col items-center justify-center py-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className={`max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
        <div className={`space-y-6 ${isEven ? 'md:pr-12' : 'md:pl-12 order-last md:order-none'}`}>
          <div className={`w-16 h-16 ${isLast ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-500'} rounded-2xl flex items-center justify-center shadow-lg transition-colors`}>
            {step.icon}
          </div>
          <h3 className={`text-3xl md:text-5xl font-bold leading-tight ${isLast ? 'text-orange-600' : 'text-slate-900'}`}>
            {step.title}
          </h3>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            {step.description}
          </p>
          <div className={`inline-block px-4 py-2 border rounded-full text-xs font-semibold uppercase tracking-widest ${isLast ? 'bg-orange-100 border-orange-200 text-orange-700' : 'bg-slate-50 border-slate-100 text-slate-600'}`}>
            {step.detail}
          </div>
        </div>
        
        <div className="relative group">
          <div className={`absolute inset-0 rounded-[3rem] blur-3xl transition-all duration-700 ${isLast ? 'bg-orange-400/20 group-hover:bg-orange-400/30' : 'bg-orange-100/30 group-hover:bg-orange-200/40'}`}></div>
          <div className="relative aspect-square bg-white border border-slate-100 rounded-[3rem] shadow-2xl p-8 flex flex-col items-center justify-center">
            
            {isLast ? (
              // Social Feed Mockup for the "Shared Vitality" climax
              <div className="w-full h-full flex flex-col gap-4">
                <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="avatar" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-800">Sarah Jones</p>
                    <p className="text-[10px] text-slate-400">Context: Low HRV + Recovering Knee</p>
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
                  <p className="text-xs font-medium text-slate-600">Sarah just completed her "Adaptive Recovery" session!</p>
                  <div className="flex gap-2">
                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                    <div className="w-16 h-1 bg-orange-200 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 pt-2">
                  <div className="flex items-center gap-4">
                    <Heart className="w-5 h-5 text-orange-500 fill-orange-500 animate-bounce" />
                    <MessageCircle className="w-5 h-5 text-slate-300" />
                    <Share2 className="w-5 h-5 text-slate-300" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">12 claps</span>
                </div>
                <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                  <p className="text-[10px] text-orange-800 italic text-left">"Amazing Sarah! Love how you listened to your body today. Keep it up! 🔥"</p>
                </div>
              </div>
            ) : (
              // Default Visual Representation
              <div className="w-full h-full border-2 border-dashed border-slate-100 rounded-2xl flex items-center justify-center overflow-hidden">
                 <div className="flex flex-col items-center gap-4 animate-pulse">
                    <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center">
                      {React.cloneElement(step.icon as React.ReactElement, { className: "w-16 h-16 text-orange-300" })}
                    </div>
                    <div className="space-y-2">
                      <div className="w-48 h-2 bg-slate-100 rounded"></div>
                      <div className="w-32 h-2 bg-slate-50 rounded mx-auto"></div>
                    </div>
                 </div>
              </div>
            )}

            {!isLast && (
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 transform rotate-3">
                 <p className="text-[10px] font-bold text-orange-600 uppercase">System Status</p>
                 <p className="text-xs text-slate-500">Syncing context...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StoryJourney: React.FC = () => {
  return (
    <section id="journey" className="px-6 bg-white relative">
      <div className="max-w-7xl mx-auto border-l border-slate-100">
        {JOURNEY_STEPS.map((step, index) => (
          <div key={step.id} className="relative pl-12 md:pl-20">
             {/* Timeline dot */}
             <div className="absolute top-1/2 left-0 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-sm z-10"></div>
             <JourneyStep step={step} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryJourney;
