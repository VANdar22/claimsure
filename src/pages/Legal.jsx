import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Legal Information | ClaimSure';
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
            Legal Information
          </AnimatedText>
          
          <AnimatedText 
            className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#7f1734] mb-6"
            split={true}
          >
            Terms & Legal Information
          </AnimatedText>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Please read these terms and conditions carefully before using our services.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Terms of Service</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>
                By accessing and using our services, you accept and agree to be bound by these Terms of Service. 
                If you do not agree with any part of these terms, you must not use our services.
              </p>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the service after any 
                changes constitutes your acceptance of the new terms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website or use our services.
              </p>
              <p>
                We collect personal information that you voluntarily provide to us, such as your name, email address, 
                and other contact details when you submit a contact form or request information.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Disclaimers</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>
                The information provided on our website is for general informational purposes only. We make no 
                representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, 
                validity, reliability, availability, or completeness of any information on the site.
              </p>
              <p>
                Our website may contain links to external websites that are not provided or maintained by us. 
                We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on 
                these external websites.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>
                All content, including text, graphics, logos, and images on our website is the property of 
                ClaimSure Consulting and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or 
                otherwise exploit any content from our website without our express written permission.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#7f1734] mb-4">Governing Law</h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700">
              <p>
                These terms shall be governed by and construed in accordance with the laws of Ghana, without 
                regard to its conflict of law principles.
              </p>
              <p>
                Any legal action or proceeding arising out of or relating to these terms or your use of our 
                services shall be instituted in the courts of Ghana.
              </p>
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

export default Legal;
