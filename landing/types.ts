
// Fix: Imported React to provide the React namespace for ReactNode
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'fitness' | 'nutrition' | 'mindset' | 'ai';
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}