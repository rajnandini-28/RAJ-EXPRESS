import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Scroll Reveal Animation Wrapper
 * @param {('left'|'right'|'up'|'down'|'none')} direction - Direction from which the element slides in
 * @param {number} delay - Delay in seconds before animation triggers
 * @param {number} duration - Animation duration (default: 0.8s)
 * @param {string} className - Additional CSS classes
 * @param {boolean} fullWidth - Whether to take full width
 */
export const Reveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  className = '',
  fullWidth = false,
  once = true
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const distance = isMobile ? 30 : 60;

  const getInitialOffset = () => {
    switch (direction) {
      case 'left':
        return { x: -distance, y: 0 };
      case 'right':
        return { x: distance, y: 0 };
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: initialOffset.x, 
        y: initialOffset.y 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: once, margin: "-40px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * Reusable Stagger Container for Grids & Lists
 */
export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.12, 
  className = '',
  once = true 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, margin: "-40px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Child item inside StaggerContainer
 */
export const StaggerItem = ({ 
  children, 
  direction = 'up', 
  className = '' 
}) => {
  const getVariants = () => {
    const distance = 35;
    let initialX = 0;
    let initialY = 0;

    if (direction === 'left') initialX = -distance;
    if (direction === 'right') initialX = distance;
    if (direction === 'up') initialY = distance;
    if (direction === 'down') initialY = -distance;

    return {
      hidden: { opacity: 0, x: initialX, y: initialY },
      visible: { 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1]
        }
      }
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
