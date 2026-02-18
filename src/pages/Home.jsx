import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesAccordion from '../components/ServicesAccordion';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <div className="bg-white py-16">
          
          <ServicesAccordion />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
