
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Basic",
    description: "For individuals and small projects",
    price: "49",
    features: [
      "50+ UI Components",
      "5 Page Templates",
      "Basic Documentation",
      "Community Support",
      "3 Months Updates"
    ],
    color: "default",
    popular: false
  },
  {
    name: "Pro",
    description: "For professional developers",
    price: "99",
    features: [
      "150+ UI Components",
      "20 Page Templates",
      "Extensive Documentation",
      "Priority Support",
      "1 Year Updates",
      "Source Files Included"
    ],
    color: "purple",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large teams and organizations",
    price: "249",
    features: [
      "250+ UI Components",
      "Unlimited Page Templates",
      "Expert Documentation",
      "24/7 Support",
      "Lifetime Updates",
      "Source Files Included",
      "Custom Implementation"
    ],
    color: "blue",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neon-darker relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[500px] bg-neon-purple/5 blur-[120px] rounded-full"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="neon-text-purple">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your project
          </p>
        </div>
        
        {/* Pricing table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => {
            // Determine styling based on plan
            const isPurple = plan.color === 'purple';
            const isBlue = plan.color === 'blue';
            
            const cardClass = plan.popular 
              ? 'glass-card-highlight border-neon-purple/30' 
              : 'glass-card border-white/10';
            
            const buttonClass = isPurple
              ? 'neon-button'
              : isBlue
                ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-white hover:shadow-neon-blue'
                : 'bg-white/10 hover:bg-white/20 text-white';
                
            const priceClass = isPurple
              ? 'neon-text-purple'
              : isBlue
                ? 'neon-text-blue'
                : 'text-white';
                
            return (
              <div 
                key={plan.name} 
                className={`${cardClass} p-8 relative hover-card`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-neon-purple px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className={`text-5xl font-bold mb-2 ${priceClass}`}>
                    ${plan.price}
                  </div>
                  <p className="text-gray-400">per license</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className={isPurple ? "text-neon-purple mr-3 mt-1" : 
                                                isBlue ? "text-neon-blue mr-3 mt-1" : 
                                                "text-gray-400 mr-3 mt-1"} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full py-6 ${buttonClass}`}>
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include a 14-day money-back guarantee and lifetime access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
