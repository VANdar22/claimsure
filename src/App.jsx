import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CardNav from './components/CardNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent';
import Logo from './assets/logoblue2.png';
import Values from './components/Values';
import Services from './pages/Services';
import Insight from './pages/Insight';
import InsightDetails from './pages/InsightDetails';

// This component will handle scrolling to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const items = [
    {
      label: "About",
      bgColor: "rgba(127, 23, 52, 0.9)",
      textColor: "#FFFFFF",
      links: [
        { label: "Company Overview", ariaLabel: "About Company", to: "/about" },
        { label: "Values", ariaLabel: "Our Values" , to: "/values"},
        { label: "Why Choose ClaimSure", ariaLabel: "Why Choose Us" , to: "/WhatMakesUsDifferent"}
      ]
    },
    {
      label: "Services", 
      bgColor: "rgba(127, 23, 52, 0.9)",
      textColor: "#FFFFFF",
      links: [
        { label: "Solutions", ariaLabel: "Our services", to: "/services" },
        { label: "Insights", ariaLabel: "Insights", to: "/insight" }
      ]
    },
    {
      label: "Contact",
      bgColor: "rgba(127, 23, 52, 0.9)", 
      textColor: "#FFFFFF",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

// This is a wrapper component to handle the animated routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/about" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <About />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact />
                </motion.div>
              } />
              <Route path="/gallery" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Gallery />
                </motion.div>
              } />
              <Route path="/WhatMakesUsDifferent" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <WhatMakesUsDifferent />
                </motion.div>
              } />
              <Route path="/values" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Values />
                </motion.div>
              } />
              <Route path="/services" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Services />
                </motion.div>
              } />
              <Route path="/insight" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Insight />
                </motion.div>
              } />
              <Route path="/insights/:id" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <InsightDetails />
                </motion.div>
              } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full flex flex-col overflow-hidden">
        {/* Fixed Navigation */}
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
          <CardNav 
            items={items}
            baseColor="rgba(255, 255, 255, 0.8)"
            menuColor="rgba(127, 23, 52, 0.8)"
            buttonBgColor="rgba(127, 23, 52, 0.8)"
            buttonTextColor="#fff"
            ease="power3.out"
            theme="color"
            className="bg-opacity-70"
            logo={Logo}
          />
        </div>

        <main className="flex-1">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
