
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { ECOSYSTEM_FEATURES } from '../constants';

const EcosystemCollapsible: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Complete Prana Ecosystem</h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            Our journey doesn't stop with daily habits. Explore the technical depth and professional integrations that make Prana a complete wellness infrastructure.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-full font-bold text-slate-700 hover:border-orange-200 transition-all shadow-sm"
          >
            {isOpen ? <Minus className="w-5 h-5 text-orange-500" /> : <Plus className="w-5 h-5 text-orange-500" />}
            {isOpen ? 'Close Detailed Features' : 'Discover More Features'}
          </button>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {ECOSYSTEM_FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-orange-100 transition-all group"
            >
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemCollapsible;
