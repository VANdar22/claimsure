import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InsightCard = ({ item, index }) => {
  const navigate = useNavigate();
  
  // Function to create URL-friendly slug from title
  const createSlug = (title) => {
    return title.toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, '-')
      .replaceAll(/(?:^[-]+)|(?:[-]+$)/g, '');
  };
  
  const handleReadMore = () => {
    navigate(`/insights/${createSlug(item.title)}`);
  };
  return (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative h-96 w-full overflow-hidden group flex flex-col"
    >
      {/* Image - Full size */}
      <div className="absolute inset-0">
        <img 
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Bottom bar with title and date - Disappears on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 transition-all duration-300 group-hover:opacity-0">
        <div className="flex flex-col h-full">
          <h3 className="font-['Montserrat'] text-lg font-medium text-gray-900 line-clamp-2 mb-2 flex-grow">
            {item.title}
          </h3>
          <div className="mt-auto pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-500">{item.date}</span>
          </div>
        </div>
      </div>
      
      {/* Description - Slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#7f1734]/90 p-4 sm:p-5 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 h-1/2 flex flex-col">
        <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
        <p className="text-white/90 text-sm mb-4 flex-grow">{item.excerpt}</p>
        <div className="mt-4">
          <motion.button 
            className="flex items-center text-sm font-medium text-[#7f1734]"
            whileHover={{ 
              x: 2,
              transition: { duration: 0.2 }
            }}
            onClick={handleReadMore}
          >
            Read more
            <div className="ml-2">
              <span className="text-[#7f1734]">•</span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

InsightCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default InsightCard;
