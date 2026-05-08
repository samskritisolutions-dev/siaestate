'use client';

import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  rotate: {
    hover: { rotate: 15, scale: 1.1 },
    tap: { scale: 0.95 }
  },
  bounce: {
    hover: { y: -5, scale: 1.1 },
    tap: { scale: 0.95 }
  },
  pulse: {
    hover: { scale: 1.15 },
    tap: { scale: 0.95 }
  },
  shake: {
    hover: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4 } },
    tap: { scale: 0.95 }
  }
};

export default function AnimateIcon({ 
  children, 
  animation = 'bounce', 
  className = '',
  size = 48,
  color = 'currentColor'
}) {
  const selectedAnimation = animations[animation] || animations.bounce;

  return (
    <motion.div
      whileHover={selectedAnimation.hover}
      whileTap={selectedAnimation.tap}
      className={`inline-flex items-center justify-center relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background glow like Animate UI */}
      <motion.div 
        className="absolute inset-0 bg-bronze/10 blur-xl rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.4 }}
      />
      
      {React.cloneElement(children, { 
        size, 
        color, 
        strokeWidth: 1.5,
        className: 'relative z-10'
      })}
    </motion.div>
  );
}
