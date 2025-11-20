import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-loud-900 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-loud-500 font-bold tracking-wider uppercase text-sm mb-2">O Que Fazemos</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Soluções Audiovisuais Completas</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-loud-600/50 transition-colors duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-6 right-6 w-12 h-12 bg-loud-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-all duration-300">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;