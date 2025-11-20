import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-loud-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Planos e Pacotes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Escolha a melhor opção para o seu projeto. Flexibilidade total para produtores de conteúdo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative rounded-2xl p-8 border ${tier.recommended ? 'bg-dark-800 border-loud-500 scale-105 shadow-2xl shadow-loud-900/50' : 'bg-dark-800/50 border-dark-700'} flex flex-col h-full`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-loud-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.id !== 'enterprise' && <span className="text-gray-400">/mês ou sessão</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-loud-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/${"5511999999999"}?text=Olá, tenho interesse no plano ${tier.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${tier.recommended ? 'bg-loud-600 hover:bg-loud-700 text-white shadow-lg shadow-loud-600/30' : 'bg-dark-700 hover:bg-dark-600 text-white'}`}
              >
                Escolher este
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;