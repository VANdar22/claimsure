import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// Import images
import shieldEnergyIcon from "../assets/shield-energy-stroke-rounded.png";
import balanceScaleIcon from "../assets/balance-scale-stroke-rounded.png";
import crownIcon from "../assets/crown-03-stroke-rounded.png";
import userGroupIcon from "../assets/user-group-stroke-rounded.png";
import checkmarkBadgeIcon from "../assets/checkmark-badge-03-stroke-rounded.png";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";

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

const features = [
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={shieldEnergyIcon} 
          alt="Integrity" 
          className="w-8 h-8 filter-[#0e38b1]"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(50%) saturate(3000%) hue-rotate(220deg) brightness(90%) contrast(90%)' }}
        />
      </div>
    ),
    title: "Integrity",
    description: "Ethical and honest engagement with clients and insurers",
    image: image1
  },
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={balanceScaleIcon} 
          alt="Professionalism" 
          className="w-8 h-8"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(50%) saturate(3000%) hue-rotate(220deg) brightness(90%) contrast(90%)' }}
        />
      </div>
    ),
    title: "Professionalism",
    description: "High standards in claims advisory and service delivery",
    image: image2
  },
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={crownIcon} 
          alt="Accuracy" 
          className="w-8 h-8"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(50%) saturate(3000%) hue-rotate(220deg) brightness(90%) contrast(90%)' }}
        />
      </div>
    ),
    title: "Accuracy",
    description: "Detailed and precise claims documentation",
    image: image3
  },
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={userGroupIcon} 
          alt="Client Commitment" 
          className="w-8 h-8"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(50%) saturate(3000%) hue-rotate(220deg) brightness(90%) contrast(90%)' }}
        />
      </div>
    ),
    title: "Client Commitment",
    description: "Strong advocacy for policyholders' interests",
    image: image4
  },
  {
    icon: () => (
      <div className="p-1">
        <img 
          src={checkmarkBadgeIcon} 
          alt="Confidentiality" 
          className="w-8 h-8"
          style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(50%) saturate(3000%) hue-rotate(220deg) brightness(90%) contrast(90%)' }}
        />
      </div>
    ),
    title: "Confidentiality",
    description: "Strict protection of client and claim information",
    image: image5
  }
];

const Values = () => {
  return (
    <>
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative">
          {/* Background text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 className="text-[15vw] md:text-[200px] font-bold text-gray-50 text-center select-none">
              VALUES
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
            <motion.h1 
              variants={item}
              className="font-['Montserrat'] font-light bg-[#0E38B1] bg-clip-text text-transparent text-left w-full mb-4"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                Our Values
              </div>
            </motion.h1>

            <motion.h2 
              variants={item}
              className="font-['Montserrat'] text-xl sm:text-2xl md:text-3xl font-light text-gray-600 mt-2"
            >
              At Claimsure, our values guide our decisions, shape our culture, and inspire us to achieve our shared vision. The Claimsure Values are integral to the Claimsure Way
            </motion.h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto relative z-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative h-96 w-full overflow-hidden group flex flex-col">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0E38B1]/90 p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 text-white h-1/4">
                    <p className="font-['Montserrat'] text-white/90 text-lg leading-relaxed line-clamp-3 overflow-hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission Section */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-10 mb-16 max-w-4xl mx-auto mt-24"
          >
            <motion.h1 variants={item} className="font-['Montserrat'] font-light bg-[#0E38B1] bg-clip-text text-transparent text-left w-full mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                Our Mission
              </div>
            </motion.h1>
            <motion.h2 variants={item} className="font-['Montserrat'] text-xl sm:text-2xl md:text-3xl font-light text-gray-600 mt-2">
              To provide professional, transparent, and reliable insurance claims consultancy services that protect policyholders' interests and promote fair and timely claims settlement.
            </motion.h2>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-10 mb-16 max-w-4xl mx-auto"
          >
            <motion.h1 variants={item} className="font-['Montserrat'] font-light bg-[#0E38B1] bg-clip-text text-transparent text-left w-full mb-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                Our Vision
              </div>
            </motion.h1>
            <motion.h2 variants={item} className="font-['Montserrat'] text-xl sm:text-2xl md:text-3xl font-light text-gray-600 mt-2">
              To become a leading and trusted insurance claims consultancy firm in Ghana, recognized for integrity, expertise, and excellence in claims advisory and management.
            </motion.h2>
          </motion.div>

          {/* Boxed CTA - Horizontal Layout */}
          <div className="mt-16 md:mt-24 px-4 sm:px-6 overflow-x-hidden">
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

export default Values;
