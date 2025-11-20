import React, { useState, useEffect } from 'react';
import { Menu, X, Mic2 } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-sm border-b border-dark-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-loud-600 rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                <Mic2 className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                LOUD<span className="text-loud-500">COMPANY</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-loud-500 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-loud-600 hover:bg-loud-700 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 text-sm shadow-lg shadow-loud-900/50"
              >
                Reservar Agora
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-dark-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-dark-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-loud-600 text-white block px-3 py-3 mt-4 text-center rounded-md font-bold"
            >
                Reservar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;