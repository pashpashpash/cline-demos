import React from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  color: string;
}

const generateSparkles = (count: number, color: string) => {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const radius = Math.random() * 100 + 50;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const scale = Math.random() * 0.5 + 0.5;
    const delay = Math.random() * 0.2;

    return (
      <motion.div
        key={i}
        className="absolute w-3 h-3"
        style={{
          left: '50%',
          top: '50%',
          background: `${color}`,
          borderRadius: '50%',
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}80, 0 0 30px ${color}40`,
        }}
        initial={{ 
          x: 0, 
          y: 0, 
          scale: 0,
          opacity: 0 
        }}
        animate={{ 
          x, 
          y,
          scale: [0, scale, 0],
          opacity: [0, 1, 0] 
        }}
        transition={{
          duration: 1.5,
          delay,
          repeat: Infinity,
          repeatDelay: Math.random() * 0.5,
          ease: "easeOut"
        }}
      />
    );
  });
};

const Sparkles: React.FC<SparkleProps> = ({ color }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {generateSparkles(12, color)}
    </div>
  );
};

export default Sparkles;
