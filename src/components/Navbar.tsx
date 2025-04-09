
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neon-darker/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold neon-text-blue">CM Store</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#downloads" className="text-gray-300 hover:text-white transition-colors">Downloads</a>
              <a href="#payment" className="text-gray-300 hover:text-white transition-colors">Support</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://discord.gg/cmstore" target="_blank" rel="noopener noreferrer">
              <Button className="neon-button">Join Discord</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neon-darker/95 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#products" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#features" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#downloads" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Downloads
            </a>
            <a 
              href="#payment" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <div className="pt-2">
              <a href="https://discord.gg/cmstore" target="_blank" rel="noopener noreferrer">
                <Button className="neon-button w-full">Join Discord</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
