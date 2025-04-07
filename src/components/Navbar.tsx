
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import useMobile from '../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Venue", href: "#venue" },
    { name: "Schedule", href: "#events" },
    { name: "RSVP", href: "#rsvp" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-serif font-medium">
          Gabriela & Leandro
        </a>

        {isMobile ? (
          <>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            {isOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 p-4">
                <div className="flex flex-col gap-4 items-center">
                  {navLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-lg py-2 border-b border-gray-200 w-full text-center"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`hover:text-amber-700 transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
