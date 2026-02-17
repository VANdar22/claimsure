import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/home.png";

const MaskedImage = () => (
  <motion.div 
    className="relative w-full pt-8 md:pt-12 overflow-visible"
    initial={{ opacity: 0, x: 40 }}
    animate={{ 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.8,
        ease: [0.19, 1.0, 0.22, 1.0]
      }
    }}
  >
    <div className="w-[110%] -ml-[5%] md:max-w-[100%] md:ml-0 mx-auto aspect-[1030/520] max-h-[900px] md:max-h-[1000px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 1030 520"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible" }}
      >
        <defs>
          <clipPath id="merged-shape-clip">
            <path
              d="M 220 70 L 810 70 L 810 70 L 810 450 L 810 450 L 220 450 L 220 450 L 220 70 L 220 70 Z M 810 180 L 988 180 A 32 32 0 0 1 1020 212 L 1020 468 A 32 32 0 0 1 988 500 L 842 500 A 32 32 0 0 1 810 468 L 810 180 L 810 180 Z M 842 10 L 898 10 A 32 32 0 0 1 930 42 L 930 58 A 32 32 0 0 1 898 90 L 810 90 L 810 90 L 810 42 A 32 32 0 0 1 842 10 Z M 132 430 L 220 430 L 220 430 L 220 478 A 32 32 0 0 1 188 510 L 132 510 A 32 32 0 0 1 100 478 L 100 462 A 32 32 0 0 1 132 430 Z M 42 10 L 188 10 A 32 32 0 0 1 220 42 L 220 330 L 220 330 L 42 330 A 32 32 0 0 1 10 298 L 10 42 A 32 32 0 0 1 42 10 Z M 810 148 C 810 171.872 815.76 180 842 180 H 810 Z M 810 122 C 810 98.128 815.76 90 842 90 H 810 Z M 220 398 C 220 421.872 214.24 430 188 430 H 220 Z M 220 362 C 220 338.128 214.24 330 188 330 H 220 Z M 810 482 C 810 458.128 804.24 450 778 450 H 810 Z M 810 38 C 810 61.872 804.24 70 778 70 H 810 Z M 220 482 C 220 458.128 225.76 450 252 450 H 220 Z M 220 38 C 220 61.872 225.76 70 252 70 H 220 Z"
              fillRule="nonzero"
              vectorEffect="non-scaling-stroke"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#merged-shape-clip)">
          <motion.image
            href={heroImage}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full origin-center"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0]
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { 
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1.0]
              } 
            }}
          />
        </g>
      </svg>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-16 sm:pt-20 md:pt-24 lg:justify-center px-4 sm:px-6">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 py-6 sm:py-8 lg:py-12">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.19, 1.0, 0.22, 1.0],
              delay: 0.1
            }}
            className="w-full lg:w-2/5 text-left mt-24 lg:mt-0"
            style={{ color: "blue" }}
          >
            <motion.h1 className="font-['Montserrat'] font-light bg-[#0E38B1] bg-clip-text text-transparent">
              <div className="flex flex-col items-start gap-2 sm:gap-3">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                  {['Consulting', 'and advisory', 'services'].map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.3 + (index * 0.15),
                        ease: [0.19, 1.0, 0.22, 1.0],
                      }}
                      className="overflow-hidden"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 1.6,
                    ease: [0.19, 1.0, 0.22, 1.0],
                  }}
                >
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 sm:mt-3 max-w-2xl leading-relaxed">
                    ClaimSure Consult & Advisory Services is a Kumasi-based firm
                    dedicated to helping individuals and businesses successfully
                    navigate insurance claims.
                  </p>
                  <motion.p
                    className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-3 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.8,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    We provide expert advisory, accurate documentation, and
                    professional claims management to ensure compliance and timely
                    settlements.
                  </motion.p>
                </motion.div>
              </div>
            </motion.h1>
          </motion.div>

          {/* Masked Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="w-full lg:w-[65%] mt-4 lg:-mt-48 flex justify-center md:justify-start"
          >
            <MaskedImage />
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <motion.div 
          className="w-full flex justify-end -mt-4 sm:-mt-24 md:-mt-28 lg:-mt-32 pr-4 lg:pr-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.2,
            ease: [0.19, 1.0, 0.22, 1.0],
          }}
        >
          <button 
            className="px-6 py-4 sm:px-5 sm:py-3 bg-white text-[#0E38B1] border-2 border-[#0E38B1] rounded-xl font-medium hover:bg-[#0E38B1] hover:text-white transition-all duration-500 text-3xl sm:text-3xl transform hover:scale-105"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 20px rgba(14, 56, 177, 0.2)'
            }}
          >
            🡥
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
