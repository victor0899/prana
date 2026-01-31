
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryJourney from './components/StoryJourney';
import IntegrationSection from './components/IntegrationSection';
import EcosystemCollapsible from './components/EcosystemCollapsible';
import Pricing from './components/Pricing';
import AppStoreButtons from './components/AppStoreButtons';
import Logo from './components/Logo';
import { RefreshCw, TrendingUp, Heart, Zap } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-white py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      <div className="col-span-2 md:col-span-1">
        <div className="flex items-center gap-3 mb-6">
          <Logo size={32} />
          <span className="text-xl font-bold tracking-tight">Prana</span>
        </div>
        <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
          Vitality through resonance. A native companion that grows with your life, respecting your unique path to wellness.
        </p>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Experience</h4>
        <ul className="space-y-4 text-slate-400 text-sm font-light">
          <li><a href="#journey" className="hover:text-orange-500 transition-colors">The Journey</a></li>
          <li><a href="#pricing" className="hover:text-orange-500 transition-colors">Pricing</a></li>
          <li><a href="#integrations" className="hover:text-orange-500 transition-colors">Synchronization</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Philosophy</h4>
        <ul className="space-y-4 text-slate-400 text-sm font-light">
          <li><a href="#" className="hover:text-orange-500 transition-colors">Our Essence</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Flow Blog</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Sanctuary Privacy</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Support</h4>
        <ul className="space-y-4 text-slate-400 text-sm font-light">
          <li><a href="#" className="hover:text-orange-500 transition-colors">Guide Center</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Connect</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 text-xs">© 2024 Prana Wellness Inc. Harmonizing Vitality for All.</p>
    </div>
  </footer>
);

const AdherenceLoop: React.FC = () => (
  <section className="py-24 bg-orange-50/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">The Adherence Loop</span>
        <h2 className="text-4xl font-bold text-slate-900 mt-4">Guidance that adapts to your life.</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mt-4 font-light">
          Our practice doesn't just track; it responds. By learning from your daily progress and life context, it creates a sustainable cycle of healthy adherence.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: <Zap />, title: "Context", text: "We gather your injuries, goals, and daily biometric data to understand your foundation." },
          { icon: <TrendingUp />, title: "Personal Advice", text: "Receive goal-aligned advice every day, tuned to your real-time vitality and progress." },
          { icon: <RefreshCw />, title: "Adaptive Practice", text: "Nourish and move with a practice that fits your day, every day." },
          { icon: <Heart />, title: "Evolve", text: "Your plan grows with you every week, improving your adherence and deepening your results." }
        ].map((item, i) => (
          <div key={i} className="text-center p-6 space-y-4 group">
            <div className="w-16 h-16 bg-white rounded-full border border-orange-100 flex items-center justify-center mx-auto text-orange-500 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            <h4 className="font-bold text-slate-800">{item.title}</h4>
            <p className="text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">The Essence of Growth</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8">
          A Journey of Daily Alignment
        </h2>
        <p className="text-slate-500 text-lg font-light leading-relaxed">
          Wellness is a continuous flow, not a destination. See how our companion acts as a gentle accompaniment, 
          harmonizing your choices with the reality of your day.
        </p>
      </div>

      <StoryJourney />

      <AdherenceLoop />

      {/* Final Section CTA */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] group-hover:bg-orange-500/30 transition-all duration-700"></div>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Step into your vitality.</h2>
                <p className="text-slate-300 text-lg font-light mb-12">Embrace an accessible path to health. Join our collective and let guidance harmonize your natural flow.</p>
                <div className="flex justify-center">
                  <AppStoreButtons variant="light" />
                </div>
            </div>
        </div>
      </section>
      
      <EcosystemCollapsible />
      
      <IntegrationSection />
      
      <Pricing />
      
      <Footer />
    </div>
  );
};

export default App;
