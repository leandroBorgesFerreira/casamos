
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/feb9571b-a58f-43b1-b04b-f9ecb73e25d4.png")',
          filter: 'brightness(0.7)',
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg">
          Gabriela <span className="font-serif">&</span> Leandro
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">October 5-7, 2025</p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">
          Join us for our celebration of love at Château de Villette, France
        </p>
        <a 
          href="#rsvp" 
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg transition-colors duration-300"
        >
          RSVP Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
