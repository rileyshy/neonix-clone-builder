
import React from 'react';
import { Code, CreditCard, Palette, MessageSquare, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Palette size={24} />,
    title: "Professional Design",
    description: "Custom-made logos and banners created by experienced designers for your brand."
  },
  {
    icon: <Zap size={24} />,
    title: "Fast Delivery",
    description: "Quick turnaround times for all services, ensuring you get what you need when you need it."
  },
  {
    icon: <Code size={24} />,
    title: "Development Resources",
    description: "Comprehensive courses and source codes to help you build your FiveM server."
  },
  {
    icon: <CreditCard size={24} />,
    title: "Affordable Pricing",
    description: "Budget-friendly Discord Nitro and server boosts that won't break the bank."
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Community Support",
    description: "Join our friendly Discord community for assistance and networking opportunities."
  },
  {
    icon: <Sparkles size={24} />,
    title: "Quality Guaranteed",
    description: "All our products and services are tested and reviewed to ensure the highest quality."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-neon-dark relative">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="neon-text-cyan">CM Store</span>
          </h2>
          <p className="text-xl text-gray-300">
            Top-quality services with unbeatable prices and support
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-card border border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 
                flex items-center justify-center mb-4 text-neon-purple">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-24 glass-card p-8 border border-neon-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold neon-text-purple mb-2">500+</div>
              <p className="text-gray-400">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-text-blue mb-2">1000+</div>
              <p className="text-gray-400">Custom Designs Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-text-cyan mb-2">24/7</div>
              <p className="text-gray-400">Community Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
