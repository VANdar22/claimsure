import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | ClaimSure';
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-white font-montserrat text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto py-12 sm:py-16">
        <motion.div 
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <AnimatedText 
              className="text-xs sm:text-sm font-light uppercase tracking-widest mb-4 text-[#7f1734] block"
              split={false}
            >
              Privacy Policy
            </AnimatedText>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AnimatedText 
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#7f1734] mb-6"
              split={true}
            >
              Your Privacy Matters to Us
            </AnimatedText>
          </motion.div>
          
          <motion.p 
            className="text-sm sm:text-base text-gray-700 leading-relaxed mb-8"
            variants={itemVariants}
          >
            At ClaimSure, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {/* Information We Collect */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>We may collect personal information that you provide directly to us, including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Demographic information</li>
                <li>Professional information</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <p>We also automatically collect certain information when you visit our website, such as your IP address, browser type, and usage data.</p>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, including for customer service and marketing purposes</li>
                <li>Send you emails and other communications</li>
                <li>Find and prevent fraud</li>
              </ul>
            </div>
          </motion.div>

          {/* Information Sharing and Disclosure */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>We may share your personal information in the following situations:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors and service providers who perform services on our behalf.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.</li>
              </ul>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">4. Data Security</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
            </div>
          </motion.div>

          {/* Your Data Protection Rights */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">5. Your Data Protection Rights</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification of your information</li>
                <li>The right to object to our processing of your personal data</li>
                <li>The right to request restriction of processing your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the information below.</p>
            </div>
          </motion.div>

          {/* Changes to This Privacy Policy */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">6. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date below.</p>
              <p>We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">7. Contact Us</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="space-y-2">
                <li>By email: <a href="mailto:info@claimsureconsult.com" className="text-[#7f1734] hover:underline">info@claimsureconsult.com</a></li>
                <li>By phone: <a href="tel:+233544929794" className="text-[#7f1734] hover:underline">+233 544 929 794</a></li>
                <li>By visiting our contact page: <a href="/contact" className="text-[#7f1734] hover:underline">Contact Us</a></li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Last Updated: February 19, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
