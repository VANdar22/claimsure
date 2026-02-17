import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// Import images
import shieldEnergyIcon from "../assets/shield-energy-stroke-rounded.png";
import balanceScaleIcon from "../assets/balance-scale-stroke-rounded.png";
import crownIcon from "../assets/crown-03-stroke-rounded.png";
import userGroupIcon from "../assets/user-group-stroke-rounded.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const featureItem = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const features = [
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={shieldEnergyIcon} 
          alt="Specialized Focus" 
          className="w-8 h-8 text-gray-400"
        />
      </div>
    ),
    title: "Specialized Focus",
    description:
      "We focus exclusively on insurance claims, developing deep expertise in policies and procedures.",
    image: image1
  },
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={balanceScaleIcon} 
          alt="Expert Knowledge" 
          className="w-8 h-8 text-gray-400"
        />
      </div>
    ),
    title: "Expert Knowledge",
    description:
      "Clear interpretation of complex insurance policies with practical guidance throughout the process.",
    image: image2
  },
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={crownIcon} 
          alt="Professional & Ethical" 
          className="w-8 h-8 text-gray-400"
        />
      </div>
    ),
    title: "Professional & Ethical",
    description:
      "We uphold the highest standards of integrity and represent every client with diligence.",
    image: image3
  },
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={userGroupIcon} 
          alt="Client-First Approach" 
          className="w-8 h-8 text-gray-400"
        />
      </div>
    ),
    title: "Client-First Approach",
    description:
      "Transparent communication and strategic advocacy to achieve fair, timely settlements.",
    image: image4
  }
];

const WhatMakesUsDifferent = () => {
  return (
    <>
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative">
          {/* Background text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 className="text-[15vw] md:text-[200px] font-bold text-gray-50 text-center select-none">
              WHY US
            </h2>
          </motion.div>

          {/* Header */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 mb-16 max-w-4xl mx-auto"
          >
            <motion.h1 variants={item} className="font-['Montserrat'] font-light bg-[#0E38B1] bg-clip-text text-transparent text-left w-full mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                What Makes Us Different
              </div>
            </motion.h1>

            <motion.h2 variants={item} className="font-['Montserrat'] text-xl sm:text-2xl md:text-3xl font-light text-gray-600 mt-2">
              We guide clients through complex policy structures and negotiations with clarity, transparency, and strategic insight.
            </motion.h2>
          </motion.div>

          {/* Features Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto relative z-10"
          >
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="relative h-96 w-full overflow-hidden group flex flex-col"
                >
                  {/* Image - Full size */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* White bottom bar with icon and title - Disappears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-0">
                    <Icon size={18} className="text-[#0E38B1]" />
                    <h3 className="font-['Montserrat'] text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Description - Slides up on hover with fixed height */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0E38B1]/90 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 text-white h-1/2">
                    <p className="font-['Montserrat'] text-white/90 text-lg leading-relaxed line-clamp-3 overflow-hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Boxed CTA - Horizontal Layout */}
          <div 
            className="mt-16 md:mt-24 px-4 sm:px-6 overflow-x-hidden"
          >
            <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
              <div className="flex items-center justify-between flex-nowrap gap-3 sm:gap-6">
                <div className="min-w-0">
                  <h3 className="font-['Montserrat'] text-base sm:text-lg md:text-xl font-light text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
                    Ready to discuss your claim?
                  </h3>
                  <p className="font-['Montserrat'] text-xs sm:text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    Let's work together to get you the settlement you deserve.
                  </p>
                </div>
                <button className="flex-shrink-0 px-4 sm:px-5 py-2 sm:py-3 bg-white text-[#0E38B1] border-2 border-[#0E38B1] rounded-xl font-medium hover:bg-[#0E38B1] hover:text-white transition-colors duration-300 text-xl sm:text-2xl">
                  🡥
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WhatMakesUsDifferent;
