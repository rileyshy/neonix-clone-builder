
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-grid">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-dark pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-neon-purple/20 blur-[80px]"></div>
      <div className="absolute bottom-20 right-[10%] w-32 h-32 rounded-full bg-neon-blue/20 blur-[80px]"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 text-sm">
            <Sparkles size={16} className="mr-2 text-neon-yellow" />
            <span>Introducing Neonix V2.0</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            The Ultimate UI Kit <br /> for <span className="neon-text-purple">Digital Products</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            Build stunning interfaces with our premium components and templates. 
            Perfect for SaaS, dashboards, and web applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="neon-button text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-lg px-8 py-6">
              View Components
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 hover-card">
              <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4">
                <Code className="text-neon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Framework</h3>
              <p className="text-gray-400">Built with the latest technologies for optimal performance.</p>
            </div>
            
            <div className="glass-card p-6 hover-card">
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mb-4">
                <Database className="text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-400">Tailor every component to match your brand perfectly.</p>
            </div>
            
            <div className="glass-card p-6 hover-card">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4">
                <Sparkles className="text-neon-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-400">Looks amazing on any device, from mobile to desktop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
