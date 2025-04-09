
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import PaymentSection from '../components/PaymentSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-neon-dark text-white">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Pricing />
      <PaymentSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
