import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Cookie Policy | ClaimSure';
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4 bg-white font-montserrat text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <AnimatedText 
            className="text-xs sm:text-sm font-light uppercase tracking-widest mb-4 text-[#7f1734] block"
            split={false}
          >
            Cookie Policy
          </AnimatedText>
          
          <AnimatedText 
            className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#7f1734] mb-6"
            split={true}
          >
            Our Use of Cookies
          </AnimatedText>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
            This Cookie Policy explains how ClaimSure Consulting ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">What are Cookies?</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide reporting information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">How We Use Cookies</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>To remember your preferences and settings</li>
              <li>To analyze how our website is used</li>
              <li>To improve our website's functionality</li>
              <li>To provide social media features</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Your Choices</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              You can control and manage cookies in various ways. Please remember that removing or blocking cookies can 
              impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Changes to This Policy</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie 
              Policy on this page and updating the "Last Updated" date at the bottom of this policy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Contact Us</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:info@claimsureconsult.com" className="text-[#7f1734] hover:underline">
                info@claimsureconsult.com
              </a>
              .
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Last Updated: February 19, 2026
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
