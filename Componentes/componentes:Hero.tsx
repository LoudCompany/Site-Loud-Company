import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop"
          alt="Estúdio de Podcast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-loud-900/30 border border-loud-500/30 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-loud-500 animate-pulse"></span>
          <span className="text-loud-200 text-sm font-medium tracking-wide">DISPONÍVEL PARA LOCAÇÃO IMEDIATA</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
          DÊ VOZ AS SUAS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-loud-500 to-orange-500">
            GRANDES IDEIAS
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
          {COMPANY_INFO.tagline}. Estrutura completa de áudio e vídeo para elevar o nível do seu conteúdo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-loud-600 hover:bg-loud-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-loud-600/40"
          >
            Agendar Horário <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" /> Ver o Estúdio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;