
import React from 'react';

const IntegrationSection: React.FC = () => {
  const partners = [
    { name: 'Apple Health', icon: '🍎' },
    { name: 'Google Health', icon: '🤖' },
    { name: 'Oura', icon: '💍' },
    { name: 'Garmin', icon: '⌚' },
    { name: 'Strava', icon: '🚴' },
    { name: 'Whoop', icon: '⚡' }
  ];

  return (
    <section id="integrations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Seamlessly Integrated</h2>
        <p className="text-slate-500 mb-12 font-light max-w-xl mx-auto">
          Prana aggregates data from your favorite devices to build a living context of your vitality.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-default">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl">
                {partner.icon}
              </div>
              <span className="text-sm font-medium text-slate-500">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
