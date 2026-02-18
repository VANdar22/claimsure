import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import schoolImage from '../assets/school.png';
import Footer from '../components/Footer';
import WhatMakesUsDifferent from '../components/WhatMakesUsDifferent';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow pt-16">
        
        {/* Image Container */}
        <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden">
          <img 
            src={schoolImage} 
            alt="About Us" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20">
            
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Montserrat']"
          >
            <h1 className="font-['Montserrat'] font-light bg-[#7f1734] bg-clip-text text-transparent text-left w-full mb-8">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                About Us
              </div>
            </h1>
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                At ClaimSure Consult & Advisory Services, we make navigating insurance claims straightforward, transparent, and fair. Based in Kumasi, Ghana, we specialize exclusively in insurance claims consultancy, guiding individuals, businesses, and organizations through every step of the claims process.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Our experienced team helps clients accurately prepare, submit, and manage claims while ensuring compliance with policy terms and industry standards. From policy interpretation and claims documentation to professional representation during negotiations, we provide comprehensive support designed to protect your interests and secure timely, fair settlements.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Driven by integrity, professionalism, and client commitment, we pride ourselves on delivering precise documentation, ethical advisory, and dependable advocacy for every client. With ClaimSure Consult & Advisory Services, you gain more than guidance—you gain a trusted partner dedicated to maximizing the value of your insurance coverage.
              </p>
              
            </div>

            {/* Meet the Team Section */}
            <div className="mt-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#7f1734] mb-2">
                Meet the Team
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
                {/* Team Member 1 */}
                <div className="relative h-96 w-full max-w-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Team Member 1</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#7f1734]/80 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 text-white">
                    <h3 className="text-xl font-semibold text-white">John Doe</h3>
                    <p className="text-white">Founder & CEO</p>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="relative h-96 w-full max-w-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-white">Team Member 2</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#7f1734]/80 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 text-white">
                    <h3 className="text-xl font-semibold text-white">Jane Smith</h3>
                    <p className="text-white">Claims Director</p>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="relative h-96 w-full max-w-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Team Member 3</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#7f1734]/80 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 text-white">
                    <h3 className="text-xl font-semibold text-white">David Johnson</h3>
                    <p className="text-white">Client Relations</p>
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="relative h-96 w-full max-w-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Team Member 4</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#7f1734]/80 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 text-white">
                    <h3 className="text-xl font-semibold text-white">Sarah Williams</h3>
                    <p className="text-white">Claims Specialist</p>
                  </div>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="mt-20 text-center">
                <blockquote className="text-2xl sm:text-3xl font-light text-gray-800 max-w-4xl mx-auto">
                  "Our commitment to excellence in claims management is matched only by our dedication to our clients' success."
                </blockquote>
                <p className="mt-4 text-gray-600">
                   ClaimSure Leadership Team
                </p>
              </div>

              {/* Image Container */}
              <div className="mt-12 w-full">
                <div className="w-full h-40 md:h-72 overflow-hidden">
                  <img 
                    src={schoolImage} 
                    alt="Our Team at Work" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;