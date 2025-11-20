import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CompanyConfig {
  name: string;
  tagline: string;
  contact: {
    whatsapp: string;
    email: string;
    address: string;
    instagram: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}