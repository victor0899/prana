
import React from 'react';
import {
  AppleHealthLogo,
  GoogleHealthLogo,
  OuraLogo,
  GarminLogo,
  StravaLogo,
  WhoopLogo,
} from './BrandLogos';

const IntegrationSection: React.FC = () => {
  const partners = [
    { name: 'Apple Health', Icon: AppleHealthLogo },
    { name: 'Google Fit', Icon: GoogleHealthLogo },
    { name: 'Oura', Icon: OuraLogo },
    { name: 'Garmin', Icon: GarminLogo },
    { name: 'Strava', Icon: StravaLogo },
    { name: 'Whoop', Icon: WhoopLogo },
  ];

  return (
    <section id="integrations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Seamlessly Integrated</h2>
        <p className="text-slate-500 mb-12 font-light max-w-xl mx-auto">
          Prana aggregates data from your favorite devices to build a living context of your vitality.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          {partners.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-default"
            >
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700">
                <Icon size={40} />
              </div>
              <span className="text-sm font-medium text-slate-500">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
