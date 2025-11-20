import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 py-8 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Desenvolvido com React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;