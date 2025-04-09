
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, RefreshCw } from 'lucide-react';

const PaymentSection = () => {
  return (
    <section id="payment" className="py-20 bg-neon-dark relative">
      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[400px] h-[400px] bg-neon-blue/5 blur-[100px] rounded-full"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support <span className="neon-text-blue">CM Store</span>
          </h2>
          <p className="text-xl text-gray-300">
            Get premium services with convenient payment options
          </p>
        </div>
        
        {/* Payment options */}
        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 hover-card">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={32} className="text-neon-purple" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Recurring Support</h3>
              <p className="text-gray-300">Get access to our premium services with convenient recurring payments</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Monthly access</span>
                <span className="font-semibold">Starting at $10</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Premium support</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Exclusive content</span>
                <span className="font-semibold">Included</span>
              </div>
            </div>
            
            <a 
              href="https://paypal.me/ukendzsupport" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-[#0070ba] hover:bg-[#005ea6] flex items-center justify-center py-6">
                <DollarSign className="mr-2" size={20} />
                <span>Pay with PayPal</span>
              </Button>
            </a>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              Secure payments processed by PayPal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
