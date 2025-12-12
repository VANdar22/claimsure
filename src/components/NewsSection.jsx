import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { ACCENT, BACKGROUND_LIGHT } from '../constants/colors';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Collection',
      image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      instagram: '@fashionhouse'
    },
    {
      id: 2,
      title: 'Fashion Week',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      instagram: '@runwayofficial'
    },
    {
      id: 3,
      title: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      instagram: '@ecofashion'
    },
    {
      id: 4,
      title: 'Backstage',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      instagram: '@behindthescenes'
    },
    {
      id: 5,
      title: 'Editorial',
      image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      instagram: '@fashionmag'
    },
    {
      id: 6,
      title: 'Street Style',
      image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      instagram: '@streetfashion'
    }
  ];

  // Animation variants for the news items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1] // Custom ease-in-out curve for smooth animation
      }
    })
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: BACKGROUND_LIGHT }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] // Smooth ease-out
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-light font-['Montserrat_Alternates'] tracking-wide mb-6 sm:mb-8 uppercase" 
            style={{ color: ACCENT }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.2,
                ease: [0.2, 0, 0.1, 1]
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center justify-center">
              <motion.a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                  }
                }}
                viewport={{ once: true, margin: "-20% 0px" }}
                className="inline-block align-middle hover:opacity-90 transition-opacity"
              >
                <span className="text-4xl sm:text-5xl font-light font-['Montserrat_Alternates'] tracking-wide">
                  <span className="sm:hidden">INSTAGRAM</span>
                  <span className="hidden sm:inline">OUR MODELS ON INSTAGRAM</span>
                </span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, y: 5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                    mass: 0.8,
                    delay: 0.4
                  }
                }}
                viewport={{ once: true, margin: "-20% 0px" }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 10,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 12
                  } 
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.2 }
                }}
                className="inline-block ml-4 -mb-1 hover:opacity-90"
              >
                <FaInstagram className="w-12 h-12 sm:w-14 sm:h-14" />
              </motion.a>
            </div>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 px-2 sm:px-4 max-w-7xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  duration: 0.8,
                  delay: 0.08 * index,
                  ease: [0.16, 0.77, 0.47, 0.99],
                  opacity: {
                    duration: 0.7,
                    ease: [0.4, 0, 0.2, 1]
                  },
                  scale: {
                    type: "spring",
                    stiffness: 160,
                    damping: 15,
                    mass: 0.7
                  }
                }
              }}
              viewport={{ once: true, margin: "-10% 0px" }}
              className="relative group cursor-pointer aspect-[3/4] overflow-hidden w-full h-full min-h-[250px] sm:min-h-[350px]"
              whileHover={{
                y: -5,
                transition: { 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-full">
                <motion.img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:grayscale transition-all duration-500 ease-in-out"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  }}
                  initial={{ opacity: 0.9 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: { duration: 0.6, delay: 0.2 + index * 0.1 }
                  }}
                />
                <div className="absolute bottom-2 left-0 right-0 pl-4 text-left overflow-hidden">
                  <a 
                    href={`https://instagram.com/${item.instagram.replace('@', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-block"
                  >
                    <span className="font-['Montserrat_Alternates'] text-lg font-medium text-white drop-shadow-md transition-transform duration-300 group-hover:-translate-y-6 block">
                      {item.instagram}
                    </span>
                    <span className="font-['Montserrat_Alternates'] text-lg font-medium text-white drop-shadow-md absolute left-0 top-6 transition-transform duration-300 group-hover:-translate-y-6" style={{ color: ACCENT }}>
                      View
                    </span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
