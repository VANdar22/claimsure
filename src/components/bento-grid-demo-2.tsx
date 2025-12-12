import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BentoGrid } from "./ui/bento-grid";
import { BACKGROUND_LIGHT } from "@/constants/colors";

interface GridItem {
  id: number;
  src: string;
  title: string;
  description: string;
  details: string;
  className: string;
  span?: 1 | 2;
}

const images: GridItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "LI LINZI",
    description: "Hermès Beauty",
    details: "Photographed by Agnes Lloyd-Platt",
    className: "group",
    span: 1
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "SANDRA MURRAY",
    description: "Harper's Bazaar Italia",
    details: "Photographed by Estévez & Belloso",
    className: "group",
    span: 1
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "CLAIRE MARIE",
    description: "Self Service Magazine",
    details: "Photographed by Alasdair McLellan",
    className: "group",
    span: 1
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "MIA ARMSTRONG",
    description: "crosscurrent Magazine",
    details: "Photographed by Viviane Sassen",
    className: "group",
    span: 1
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "ABBY CHAMPION",
    description: "Double Magazine",
    details: "Photographed by Jack Day",
    className: "group",
    span: 1
  },
  {
    id : 6,
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "ABBY CHAMPION",
    description: "Double Magazine",
  details: "Photographed by Jack Day",
  className: "group",
  span: 1
}
];

export default function BentoGridSecondDemo() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <div 
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative" 
      style={{ backgroundColor: BACKGROUND_LIGHT }}
    >
      {/* Border around the entire section */}
      <div className="absolute inset-0 border border-[#F74A1F] m-4 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }
        }}
        viewport={{ once: true, margin: "-50px 0px" }}
        className="flex flex-col items-center mb-16"
      >
        <motion.h2 
          className="text-5xl md:text-5xl font-light text-center mb-4 font-['Montserrat_Alternates'] tracking-tight" 
          style={{ color: '#F74A1F' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          viewport={{ once: true, margin: "-20% 0px" }}
        >
          FEATURED EDITORIALS
        </motion.h2>
      </motion.div>
      
      <BentoGrid className="gap-20 max-w-5xl mx-auto relative" columns={2}>
        {/* Vertical separator - hidden on mobile, visible on md and up */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: '#F74A1F' }}></div>
        {/* Horizontal separators - hidden on mobile, visible on md and up */}
        <div className="hidden md:block absolute left-0 right-0 h-px top-1/3" style={{ backgroundColor: '#F74A1F' }}></div>
        <div className="hidden md:block absolute left-0 right-0 h-px top-2/3" style={{ backgroundColor: '#F74A1F' }}></div>
        {images.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1.1,
                delay: 0.15 * item.id,
                ease: [0.22, 1, 0.36, 1]
              }
            } : {}}
            className="flex flex-col items-center md:col-span-1 relative py-12 group"
          >
            {/* Image Container */}
            <motion.div 
              className="relative cursor-pointer overflow-hidden w-11/12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.2,
                  delay: 0.2 + (0.15 * item.id),
                  ease: [0.22, 1, 0.36, 1]
                }
              } : {}}
            >
              {/* Image Wrapper */}
              <motion.div 
                className="relative aspect-[3/3.5] overflow-hidden rounded-none group"
                whileHover={{
                  scale: 1.02,
                  transition: { 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1] 
                  }
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={isInView ? {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 1.4,
                      delay: 0.2 + (0.15 * item.id),
                      ease: [0.22, 1, 0.36, 1]
                    }
                  } : {}}
                  whileHover={{
                    scale: 1.05,
                    transition: { 
                      duration: 1.2,
                      ease: [0.4, 0, 0.2, 1] 
                    }
                  }}
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
                {/* Overlay for better text readability on hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/0"
                  whileHover={{
                    backgroundColor: 'rgba(0,0,0,0.03)',
                    transition: { duration: 0.4 }
                  }}
                />
              </motion.div>
              
              {/* Decorative Element */}
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F74A1F] to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? {
                  opacity: 1,
                  scaleX: 1,
                  transition: {
                    delay: 0.2 + (0.05 * item.id),
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  }
                } : {}}
                whileHover={{
                  opacity: 1,
                  scaleX: 1,
                  height: '2px',
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              className="w-5/6 mt-4 text-left space-y-1.5"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4 + (0.2 * item.id),
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }
              } : {}}
            >
              <motion.h3 
                className="text-base font-semibold text-gray-900 tracking-wide font-['Montserrat_Alternates'] group-hover:text-[#F74A1F] transition-colors duration-300"
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-xs text-gray-600 font-['Montserrat']"
              >
                {item.description}
              </motion.p>
              <motion.p 
                className="text-xs text-gray-500 font-['Montserrat']"
              >
                {item.details}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </BentoGrid>
    </div>
  );
}
