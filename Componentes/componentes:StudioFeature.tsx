import React from 'react';
import { Mic, Settings, Wifi, Coffee } from 'lucide-react';

const features = [
  { icon: Mic, title: "Microfones Shure", desc: "Qualidade de rádio broadcast para até 4 pessoas." },
  { icon: Settings, title: "Mesa Roadcaster", desc: "Mixagem em tempo real e efeitos sonoros." },
  { icon: Wifi, title: "Internet Fibra", desc: "Alta velocidade para lives sem travamentos." },
  { icon: Coffee, title: "Lounge Exclusivo", desc: "Recepção confortável para seus convidados." },
];

const StudioFeature: React.FC = () => {
  return (
    <section id="podcast" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-loud-900/20 border border-dark-700">
              <img 
                src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipamento de Podcast" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-loud-900/50 text-loud-400 text-xs font-bold tracking-widest uppercase mb-4">
                O Carro Chefe
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                O Espaço Perfeito para <br/>
                <span className="text-loud-500">Seu Podcast</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Sabemos que a qualidade do áudio e a estética do vídeo são essenciais para reter a atenção. 
                Nosso estúdio foi desenhado para ser "plug & play". Você traz o conteúdo, nós cuidamos de toda a técnica.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/50 border border-dark-600 hover:border-loud-600/30 transition-colors">
                  <div className="p-2 bg-dark-800 rounded-lg text-loud-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudioFeature;