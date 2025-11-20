import React from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Vamos Criar Algo Incrível?</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Entre em contato para agendar uma visita técnica ou reservar suas horas de estúdio. 
              Respondemos rápido.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-loud-900/30 rounded-lg text-loud-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">WhatsApp / Telefone</h4>
                  <p className="text-gray-400">{COMPANY_INFO.contact.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-loud-900/30 rounded-lg text-loud-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">{COMPANY_INFO.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-loud-900/30 rounded-lg text-loud-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Localização</h4>
                  <p className="text-gray-400">{COMPANY_INFO.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-loud-900/30 rounded-lg text-loud-500">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Instagram</h4>
                  <p className="text-gray-400">{COMPANY_INFO.contact.instagram}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-900 p-8 rounded-3xl border border-dark-700 shadow-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                  <input type="text" id="name" className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-loud-600 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefone</label>
                  <input type="tel" id="phone" className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-loud-600 focus:border-transparent outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-loud-600 focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                <textarea id="message" rows={4} className="w-full bg-dark-800 border border-dark-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-loud-600 focus:border-transparent outline-none transition-all" placeholder="Gostaria de saber mais sobre o estúdio..."></textarea>
              </div>

              <button type="submit" className="w-full bg-loud-600 hover:bg-loud-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                Enviar Mensagem <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;