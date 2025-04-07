
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-wedding-blush/40 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-[600px] h-[600px] -top-40 -left-40 rounded-full bg-wedding-sage/30 blur-3xl"></div>
      <div className="absolute w-[500px] h-[500px] -bottom-40 -right-40 rounded-full bg-wedding-blush/40 blur-3xl"></div>
      
      <div className={`text-center p-6 max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-4 font-sans tracking-[0.3em] text-wedding-charcoal/70 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          WE ARE GETTING MARRIED
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif mb-6 text-wedding-charcoal animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Gabriela <span className="inline-block mx-2 text-5xl md:text-7xl">&</span> Leandro
        </h1>
        
        <div className="mb-10 text-xl md:text-2xl font-serif text-wedding-charcoal/80 italic animate-fade-in" style={{ animationDelay: '0.9s' }}>
          October 5-7, 2025 • Celebration of Love
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a 
            href="#events" 
            className="px-8 py-3 bg-wedding-sage text-wedding-charcoal/90 rounded-md 
                    hover:bg-wedding-sage/80 transition-all duration-300 font-sans"
          >
            View Events
          </a>
          <a 
            href="#rsvp" 
            className="px-8 py-3 bg-white border border-wedding-sage text-wedding-charcoal/90 
                    rounded-md hover:bg-wedding-sage/10 transition-all duration-300 font-sans"
          >
            RSVP Now
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-wedding-charcoal/60"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
