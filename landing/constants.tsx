
import React from 'react';
import { 
  Dumbbell, 
  Apple, 
  Brain, 
  Cpu, 
  Activity, 
  Heart, 
  Zap, 
  Camera, 
  Users, 
  Video, 
  Microscope,
  BarChart3,
  ClipboardList,
  MessageSquare,
  Globe,
  TrendingUp
} from 'lucide-react';
import { Feature, PricingPlan } from './types';

export const FEATURES: Feature[] = [
  {
    title: "Harmonious Fitness",
    description: "Workouts that honor your injuries, equipment, and energy levels, creating a flow that feels natural.",
    icon: <Dumbbell className="w-6 h-6" />,
    category: 'fitness'
  },
  {
    title: "Supportive Nutrition",
    description: "Goal-aligned nourishment that tracks your progress and offers clarity, making healthy choices effortless.",
    icon: <Apple className="w-6 h-6" />,
    category: 'nutrition'
  },
  {
    title: "Biometric Resonance",
    description: "Aligning with your wearables to synchronize your path with your body's inner rhythm and vital data.",
    icon: <Zap className="w-6 h-6" />,
    category: 'mindset'
  },
  {
    title: "Vision Support",
    description: "Native vision technology observes your form in real-time, offering gentle adjustments for your safe practice.",
    icon: <Camera className="w-6 h-6" />,
    category: 'ai'
  }
];

export const JOURNEY_STEPS = [
  {
    id: 'context',
    title: "Honoring Your Foundation",
    description: "We begin by understanding your unique history—your limitations, your strengths, and your needs. Prana listens to your body's wisdom to meet you exactly where you are.",
    icon: <ClipboardList className="w-10 h-10" />,
    detail: "Personalized context becomes your guide for vitality."
  },
  {
    id: 'sync',
    title: "Living in Rhythm",
    description: "Every morning, Prana synchronizes with your biometrics. If your energy is low or rest was brief, your path automatically adjusts to maintain your inner balance.",
    icon: <Cpu className="w-10 h-10" />,
    detail: "Effortless sync with your favorite health devices."
  },
  {
    id: 'action',
    title: "Adaptive Movement",
    description: "Your path is a living thing. It evolves each week as you grow. Use our Vision Guide to find the perfect alignment in every movement you make.",
    icon: <Video className="w-10 h-10" />,
    detail: "Support that grows with you every single day."
  },
  {
    id: 'fuel',
    title: "Nourishing Your Goals",
    description: "Nutrition advice aligned perfectly with your physical targets. Track your journey with ease, using our vision support to simplify macro estimations when you need it.",
    icon: <Apple className="w-10 h-10" />,
    detail: "Goal-aligned nourishment and intuitive tracking."
  },
  {
    id: 'restore',
    title: "Restorative Presence",
    description: "When life becomes intense, Prana senses the shift. Receive a gentle nudge toward breathwork or meditation right when your spirit needs to return to center.",
    icon: <Brain className="w-10 h-10" />,
    detail: "Mindfulness that responds to your real-time stress levels."
  },
  {
    id: 'community',
    title: "Shared Vitality",
    description: "Health is a shared light. Celebrate your milestones with a community that values progress, intention, and the collective journey toward well-being.",
    icon: <Users className="w-10 h-10" />,
    detail: "Celebrate the journey together with friends."
  }
];

export const ECOSYSTEM_FEATURES = [
  {
    title: "Biological Insights",
    description: "Integrate your lab results for a deeper understanding of your internal health, allowing your plan to resonate with your cellular needs.",
    icon: <Microscope className="w-6 h-6" />
  },
  {
    title: "Expert Companionship",
    description: "Connect with human coaches who see the same holistic context Prana does, ensuring their advice is always aligned with your reality.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Collaborative Wellness",
    description: "Wellness centers can foster their community here, guiding mentees with centralized data and personalized dashboards.",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Vitality Dashboard",
    description: "A serene overview of your wellness progress, merging movement, nourishment, and recovery into a singular flow.",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Presence Tracker",
    description: "Observe your mood throughout the day to understand the deep connection between your habits and your mental peace.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Wisdom Library",
    description: "Explore a curated collection of movement guides and techniques to support your practice and deepen your understanding.",
    icon: <Globe className="w-6 h-6" />
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: "Foundation",
    price: "$0",
    period: "/mo",
    description: "Begin your practice with essential tracking tools.",
    features: [
      "Adaptive Workout Tracking",
      "Macro & Calorie Awareness",
      "Community Vitality Feed",
      "Health Integration",
      "Basic Meditations"
    ],
    cta: "Start Your Practice"
  },
  {
    name: "Resonance",
    price: "$9.99",
    period: "/mo",
    description: "Deepen your journey with context-aware guidance.",
    features: [
      "Everything in Foundation",
      "Context-Aware Growth Plans",
      "Visual Macro Support",
      "Wearable Synchronization",
      "Vision-Native Coaching"
    ],
    cta: "Flow with Resonance",
    highlighted: true
  },
  {
    name: "Collective",
    price: "Custom",
    period: "",
    description: "Empowering organizations and centers.",
    features: [
      "B2B Wellness Portal",
      "Mentee Flow Tracking",
      "Organizational Insights",
      "Integrated Human Coaching"
    ],
    cta: "Inquire for Teams"
  }
];
