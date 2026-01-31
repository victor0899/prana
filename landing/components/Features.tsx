
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Listening to your body's wisdom. <br />
            <span className="text-orange-500">Guided by organic grace.</span>
          </h2>
          <p className="text-lg text-slate-500 font-light">
            Wellness is most effective when it is effortless. Prana harmonizes your intentions with your current physical state—considering your history, restrictions, and real-time energy to keep you moving forward in peace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all group"
            >
              <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
