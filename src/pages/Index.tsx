
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import DownloadSection from '../components/DownloadSection';
import PaymentSection from '../components/PaymentSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import '../utils/preventSave.js';

const Index = () => {
  useEffect(() => {
    // Load the anti-save protection
    console.log('Protection script loaded on index page');
  }, []);

  return (
    <div className="min-h-screen bg-neon-dark text-white">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Pricing />
      <DownloadSection />
      <PaymentSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
