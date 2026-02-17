import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import InsightCard from '../components/InsightCard';
import Footer from '../components/Footer';
import { insights } from '../data/insightsData';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const Insight = () => {
  return (
    <div className="min-h-screen font-montserrat bg-white text-[#1a1a1a]">
      <motion.section
        className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        variants={staggerContainer}
      >
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <AnimatedText>
              <p className="text-xs sm:text-sm font-light uppercase tracking-widest mb-4 sm:mb-6 text-[#0E38B1]">
                insights
              </p>
            </AnimatedText>
            <AnimatedText delay={0.2} split>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight text-[#0E38B1] mb-8">
                Discover our <br />latest insights, updates, and expert analysis
              </h1>
            </AnimatedText>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="max-w-md lg:ml-auto">
              <AnimatedText delay={0.2}>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed">
                    We provide clear and practical information to help you understand insurance claims, policies, and risk trends so you can make informed decisions.
                  </p>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Full-width image section */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="w-full h-48 sm:h-64 md:h-80 overflow-hidden
        ">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80" 
            alt="Business insights and data analysis"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Insights Grid Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 bg-white">
        <div className="w-full mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#0E38B1] mb-4 max-w-3xl">
            Thinking that travels from lab to boardroom.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed opacity-90 max-w-3xl">
            Explore our latest insights and thought leadership in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {insights.map((item, index) => (
            <InsightCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Insight;
