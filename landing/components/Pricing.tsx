
import React from 'react';
import { Check } from 'lucide-react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Straightforward, resonance-driven plans.</h2>
          <p className="text-lg text-slate-500 font-light">
            Choose the level of guidance that fits your path. From essential tracking to fully adaptive AI-native accompaniment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${plan.highlighted ? 'border-orange-500 shadow-xl shadow-orange-100 scale-105 z-10' : 'border-slate-100 bg-slate-50/50'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 font-medium">{plan.period}</span>
                </div>
                <p className="text-slate-500 text-sm mt-4 leading-relaxed font-light">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? 'bg-orange-100 text-orange-600' : 'bg-slate-200 text-slate-500'}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-sm leading-tight font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlighted ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
