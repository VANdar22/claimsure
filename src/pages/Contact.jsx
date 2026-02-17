import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaRef = useRef(null);
  
  const RECAPTCHA_SITE_KEY = '6Lcn024sAAAAAOB34MQ1E-6b161ndDB1rq6LUXGm'; // reCAPTCHA site key

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }
    
    try {
      // Here you would typically send the form data and recaptchaToken to your backend
      console.log('Form submitted:', { ...formData, recaptchaToken });
      
      // Reset form and reCAPTCHA
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setRecaptchaToken('');
      recaptchaRef.current.reset();
      
      alert('Thank you for your message. We will get back to you soon!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

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
      <div className="max-w-6xl mx-auto py-16 sm:py-24">
        <motion.div 
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <AnimatedText 
              className="text-xs sm:text-sm font-light uppercase tracking-widest mb-4 sm:mb-6 text-[#0E38B1] block"
              split={false}
            >
              Get in Touch
            </AnimatedText>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <AnimatedText 
              className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#0E38B1] mb-6 sm:mb-8"
              split={true}
            >
              We're here to help with any questions.
            </AnimatedText>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed opacity-90 w-full">
              We are always happy to assist with inquiries about admissions, academics, or general school information. 
              Reach out using the details below.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white ">
              <h2 className="text-xl font-normal text-[#0E38B1] mb-4">Contact Information</h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="text-[#0E38B] mr-4 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-900">School Address</h3>
                    <p className="text-gray-600">Obuasi Complex JHS</p>
                    <p className="text-gray-600">Obuasi, Ashanti Region</p>
                    <p className="text-gray-600">Ghana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#0E38B] mr-4 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">+233 00 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#0E38B] mr-4 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-900">Email Address</h3>
                    <a href="mailto:info@obuasi.com" className="text-[#0E38B1] hover:underline">
                      info@obuasi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#0E38B] mr-4 mt-1">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-normal text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday – Friday: 8:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="">
            <h2 className="text-xl font-normal text-[#0E38B1] mb-5">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0E38B1]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0E38B1]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0E38B1]"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#0E38B1]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0E38B1] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                disabled={!recaptchaToken}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
