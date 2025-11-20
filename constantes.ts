import { Mic, Video, Music, Camera, PenTool, Users } from 'lucide-react';
import { CompanyConfig, ServiceItem, PricingTier, NavItem } from './types';

// CONFIGURAÇÃO GERAL - EDITE AQUI PARA MUDAR TEXTOS DO SITE
export const COMPANY_INFO: CompanyConfig = {
  name: "Loud Company Studios",
  tagline: "Sua voz, nossa produção. O espaço definitivo para criadores.",
  contact: {
    whatsapp: "+55 11 99999-9999",
    email: "contato@loudcompany.com.br",
    address: "Av. Paulista, 1000 - São Paulo, SP",
    instagram: "@loudcompanystudios"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Preços', href: '#pricing' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'podcast',
    title: 'Estúdio de Podcast',
    description: 'Mesa de corte, microfones Shure, tratamento acústico e iluminação RGB personalizável. O foco principal da Loud.',
    icon: Mic,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'video',
    title: 'Gravação de Cursos',
    description: 'Croma-key, teleprompter e câmeras 4K para gravar seu infoproduto com qualidade de cinema.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'interview',
    title: 'Entrevistas & Talk Shows',
    description: 'Sets modulares com sofás ou poltronas para entrevistas presenciais dinâmicas.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop'
  },
  {
    id: 'music',
    title: 'Music Sessions',
    description: 'Captação de bandas e acústicos com mixagem e masterização profissional.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'photo',
    title: 'Fotografia Profissional',
    description: 'Ensaios corporativos, artísticos e cobertura de bastidores.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'post',
    title: 'Pós-Produção',
    description: 'Edição de vídeo, cortes para redes sociais (Reels/TikTok) e tratamento de áudio.',
    icon: PenTool,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2070&auto=format&fit=crop'
  }
];

export const PRICING: PricingTier[] = [
  {
    id: 'basic',
    name: 'Hora Avulsa',
    price: 'R$ 250',
    features: [
      '1 Hora de Estúdio',
      'Até 4 Microfones',
      'Iluminação Padrão',
      'Arquivo Bruto de Áudio/Vídeo',
      'Sem Edição'
    ]
  },
  {
    id: 'pro',
    name: 'Pacote Mensal',
    price: 'R$ 1.800',
    recommended: true,
    features: [
      '10 Horas de Estúdio',
      'Cortes para Reels (10un)',
      'Operador de Corte Incluso',
      'Edição Completa dos Eps',
      'Consultoria de Pauta',
      'Café e Água à vontade'
    ]
  },
  {
    id: 'enterprise',
    name: 'Full Production',
    price: 'Sob Consulta',
    features: [
      'Produção Executiva',
      'Gestão de Canal YouTube',
      'Tráfego Pago',
      'Cenário Exclusivo',
      'Transmissão Ao Vivo'
    ]
  }
];