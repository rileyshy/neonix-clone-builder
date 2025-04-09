
import React from 'react';
import { Code, Compass, Cpu, Fingerprint, Layers, Zap } from 'lucide-react';

const features = [
  {
    icon: <Layers size={24} />,
    title: "Component-based Architecture",
    description: "Build interfaces with reusable and maintainable components that work across projects."
  },
  {
    icon: <Zap size={24} />,
    title: "Lightning Fast Performance",
    description: "Optimized for speed and efficiency, ensuring your applications load quickly."
  },
  {
    icon: <Code size={24} />,
    title: "Clean, Readable Code",
    description: "Well-documented codebase that's easy to understand and extend."
  },
  {
    icon: <Compass size={24} />,
    title: "Modern Design System",
    description: "Consistent and cohesive design language throughout all components and templates."
  },
  {
    icon: <Cpu size={24} />,
    title: "Advanced Animations",
    description: "Fluid transitions and animations that create engaging user experiences."
  },
  {
    icon: <Fingerprint size={24} />,
    title: "Secure & Reliable",
    description: "Built with security best practices and thoroughly tested for reliability."
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
            Powerful <span className="neon-text-cyan">Features</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to build modern digital products
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
              <div className="text-4xl font-bold neon-text-purple mb-2">10,000+</div>
              <p className="text-gray-400">Active Developers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-text-blue mb-2">250+</div>
              <p className="text-gray-400">Ready-to-use Components</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-text-cyan mb-2">99.9%</div>
              <p className="text-gray-400">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
