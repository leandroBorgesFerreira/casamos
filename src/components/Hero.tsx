
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f5eee8]"
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <p className="text-gray-600 tracking-[0.2em] uppercase mb-6">{t('getting_married','WE ARE GETTING MARRIED')}</p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-[#333333]">
          Gabriela <span className="font-serif">&</span> Leandro
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-10 font-serif italic">
          {t('date_celebration','October 5-7, 2025 • Celebration of Love')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a 
            href="#events" 
            className="inline-block bg-[#d8e2d7] hover:bg-[#c5d3c3] text-gray-700 px-8 py-3 rounded-md text-lg transition-colors duration-300 min-w-[200px]"
          >
            {t('view_events','View Events')}            
          </a>
          <a 
            href="#rsvp" 
            className="inline-block bg-white hover:bg-gray-100 text-gray-700 px-8 py-3 border border-gray-300 rounded-md text-lg transition-colors duration-300 min-w-[200px]"
          >
            RSVP Now
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#venue" className="text-gray-500 hover:text-gray-800 transition-colors">
          <ChevronDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
