
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The logo they designed for my FiveM server was incredible. Professional quality at an affordable price.",
    author: "Alex M.",
    title: "FiveM Server Owner",
    company: "Los Santos RP",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 2,
    quote: "Got Discord Nitro at half the regular price, delivery was instant. Will definitely be using their services again!",
    author: "Sarah K.",
    title: "Discord Community Manager",
    company: "Gaming Guild",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    id: 3,
    quote: "Their FiveM development course helped me build my server from scratch. The support team was always available to answer questions.",
    author: "Michael R.",
    title: "Developer",
    company: "Horizon RP",
    avatar: "/placeholder.svg",
    rating: 4
  },
  {
    id: 4,
    quote: "The custom bot they developed for my server works flawlessly. Hosting is reliable and the price can't be beat.",
    author: "Emily T.",
    title: "Community Admin",
    company: "Tech Talks",
    avatar: "/placeholder.svg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-neon-dark relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="neon-text-blue">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300">
            Join hundreds of satisfied gamers and content creators
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="glass-card p-8 hover-card border border-white/5"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={18}
                    fill={i < testimonial.rating ? "#F5A623" : "none"}
                    className={i < testimonial.rating ? "text-neon-yellow" : "text-gray-600"}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg mb-6 text-gray-200 italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-white/10">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA banner */}
        <div className="mt-20 glass-card-highlight p-10 text-center rounded-2xl max-w-4xl mx-auto border-neon-blue/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 neon-text-blue animate-pulse-slow">
            Ready to upgrade your Discord and FiveM experience?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our Discord community today and get access to exclusive deals and premium services
          </p>
          <a href="https://discord.gg/cmstore" target="_blank" rel="noopener noreferrer">
            <button className="neon-button text-lg px-10 py-4">
              Join Our Discord
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
