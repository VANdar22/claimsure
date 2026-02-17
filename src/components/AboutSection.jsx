import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// Using a placeholder image from a free image service
const aboutImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Image on Left */}
          <motion.div 
            className="w-full md:w-5/12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1]
              }
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img 
              src={aboutImage} 
              alt="ClaimSure Consult & Advisory Services" 
              className="w-full h-auto object-cover blur-0 transition-all duration-300 hover:grayscale-0"
            />
          </motion.div>
          
          {/* Content on Right */}
          <motion.div 
            className="w-full md:w-7/12"
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-light text-[#0e38b1] mb-6"
              variants={itemVariants}
            >
              Take control of your insurance claims with confidence and expert support you can trust.
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6 text-lg leading-relaxed"
              variants={itemVariants}
            >
              At ClaimSure Consult & Advisory Services, we understand that navigating insurance claims can be stressful, complex, and time-consuming. That is why we are dedicated to helping individuals, businesses, and organizations secure the settlements they rightfully deserve. Through expert advisory, precise documentation, and strategic claims management, we simplify the entire process and eliminate costly mistakes that often lead to delays or rejected claims.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Our experienced consultants work closely with you at every stage of the claims journey, ensuring your claim is professionally prepared, fully compliant with policy requirements, and strategically presented for the best possible outcome. We combine industry knowledge, attention to detail, and client-focused service to deliver faster resolutions and fairer settlements.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6 text-lg leading-relaxed"
              variants={itemVariants}
            >
              With ClaimSure, you gain more than a consultancy—you gain a committed partner focused on protecting your interests and maximizing your claim success.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
