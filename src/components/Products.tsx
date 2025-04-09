
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Neonix Dashboard",
    description: "Complete admin dashboard with analytics, charts, and data visualization tools.",
    features: ["50+ UI Components", "10 Dashboard layouts", "Light/Dark mode", "Data visualization"],
    image: "/placeholder.svg",
    color: "purple",
  },
  {
    id: 2,
    title: "Neonix Landing",
    description: "Beautiful landing page templates to showcase your products and services.",
    features: ["20+ Page templates", "Animation library", "SEO optimized", "Conversion focused"],
    image: "/placeholder.svg",
    color: "blue",
  },
  {
    id: 3,
    title: "Neonix Commerce",
    description: "Complete e-commerce solution with product listings, cart and checkout.",
    features: ["Product catalog", "Shopping cart", "Payment integration", "Order management"],
    image: "/placeholder.svg",
    color: "cyan",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-neon-darker relative">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-blue/10 blur-[100px] rounded-full"></div>
      
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Digital <span className="neon-text-blue">Products</span>
          </h2>
          <p className="text-xl text-gray-300">
            Premium UI kits and templates for your next digital project
          </p>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const neonBorderClass = 
              product.color === "purple" ? "neon-border" : 
              product.color === "blue" ? "neon-border-blue" : 
              "neon-border-cyan";
              
            const neonTextClass = 
              product.color === "purple" ? "neon-text-purple" : 
              product.color === "blue" ? "neon-text-blue" : 
              "neon-text-cyan";
              
            return (
              <div key={product.id} className="glass-card hover-card overflow-hidden">
                {/* Product image */}
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className={`w-full h-full object-cover ${neonBorderClass} animate-pulse-slow`} 
                  />
                </div>
                
                {/* Product content */}
                <div className="p-6">
                  <h3 className={`text-2xl font-semibold mb-3 ${neonTextClass}`}>
                    {product.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {product.description}
                  </p>
                  
                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check size={18} className={product.color === "purple" ? "text-neon-purple mr-2" : 
                                                  product.color === "blue" ? "text-neon-blue mr-2" : 
                                                  "text-neon-cyan mr-2"} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Button className="neon-button w-full">
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
