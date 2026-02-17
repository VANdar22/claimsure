import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AnimatedText = ({ children, delay = 0, split = false, className = '' }) => {
  if (split && typeof children === 'string') {
    const words = children.split(/(\s+)/u);
    return (
      <span className={`inline-block ${className}`}>
        {words.map((word, wordIndex) => {
          const wordKey = `word-${word.trim() || 'space'}-${wordIndex}`;
          if (word.trim() === '') {
            return <span key={wordKey}>&nbsp;</span>;
          }
          return (
            <motion.span
              key={wordKey}
              className="inline-block mr-1.5 last:mr-0"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                delay: delay + wordIndex * 0.04,
                ...fadeInUp.visible.transition,
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </span>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{
        delay,
        ...fadeInUp.visible.transition,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimatedText.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  split: PropTypes.bool,
  className: PropTypes.string,
};

export default AnimatedText;
