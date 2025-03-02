import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import models from '../cards/modelData';
import Sparkles from '../effects/Sparkles';

const SWIPE_THRESHOLD = 100; // minimum distance for a swipe
const ROTATION_RANGE = 25; // maximum rotation in degrees

const CardScene: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const [matchedModel, setMatchedModel] = useState<typeof models[0] | null>(null);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-ROTATION_RANGE, ROTATION_RANGE]);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);
  
  const handleSwipe = (direction: 'left' | 'right') => {
    setExitDirection(direction);
    if (direction === 'right') {
      setMatchedModel(models[currentIndex]);
      setShowMatch(true);
      setTimeout(() => setShowMatch(false), 1500);
    }
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % models.length);
      setExitDirection(null);
    }, 200);
  };

  const currentModel = models[currentIndex];
  const nextModel = models[(currentIndex + 1) % models.length];
  
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
      {/* Background cards */}
      <div className="absolute w-72 h-96 bg-gray-100/50 rounded-xl shadow-lg transform rotate-[-5deg] translate-x-[-20px] translate-y-[5px] backdrop-blur-sm" />
      <div className="absolute w-72 h-96 bg-gray-100/50 rounded-xl shadow-lg transform rotate-[5deg] translate-x-[20px] translate-y-[5px] backdrop-blur-sm" />
      
      {/* Next card (shown behind current) */}
      <motion.div
        className="absolute w-72 h-96 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
        style={{
          borderTop: `8px solid ${nextModel.color}`,
          boxShadow: `0 10px 25px -5px ${nextModel.color}40`,
          scale: 0.95,
          zIndex: 0,
        }}
      >
        <div className="p-4 text-center opacity-50">
          <h3 className="text-xl font-bold">{nextModel.name}</h3>
        </div>
      </motion.div>

      {/* Current card with swipe animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-72 h-96 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col cursor-grab active:cursor-grabbing"
          style={{
            borderTop: `8px solid ${currentModel.color}`,
            background: `linear-gradient(to bottom, white, ${currentModel.color}05)`,
            boxShadow: `0 10px 25px -5px ${currentModel.color}40, inset 0 0 50px ${currentModel.color}10`,
            x,
            rotate,
            opacity,
            scale,
            zIndex: 1,
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: `0 20px 35px -5px ${currentModel.color}60, inset 0 0 50px ${currentModel.color}20`,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.9}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > SWIPE_THRESHOLD) {
              handleSwipe(info.offset.x > 0 ? 'right' : 'left');
            }
          }}
          animate={exitDirection ? {
            x: exitDirection === 'left' ? -500 : 500,
            opacity: 0,
            rotate: exitDirection === 'left' ? -45 : 45,
          } : {
            x: 0,
            opacity: 1,
            rotate: 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Card header */}
          <motion.div 
            className="p-4 text-center relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at center, ${currentModel.color}40 0%, transparent 70%)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <h3 className="text-xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${currentModel.color}, black)` }}>{currentModel.name}</h3>
            <p className="text-sm text-gray-500">{currentModel.parameters} parameters</p>
          </motion.div>
          
          {/* Card image */}
          <motion.div 
            className="flex justify-center p-2 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${currentModel.color}20 0%, transparent 70%)`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={currentModel.avatar} 
                alt={currentModel.name} 
                className="w-24 h-24 object-contain rounded-full bg-gray-100 p-2"
                style={{
                  boxShadow: `0 0 20px ${currentModel.color}40`,
                  border: `2px solid ${currentModel.color}40`
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Card bio */}
          <motion.div 
            className="p-4 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-700 text-sm">{currentModel.bio}</p>
          </motion.div>
          
          {/* Interests */}
          <motion.div 
            className="p-4 flex flex-wrap justify-center gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {currentModel.interests.map((interest, i) => (
              <motion.span 
                key={i}
                className="px-2 py-1 text-xs rounded-full relative overflow-hidden"
                style={{ 
                  backgroundColor: `${currentModel.color}20`,
                  color: currentModel.color,
                  border: `1px solid ${currentModel.color}40`
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: `${currentModel.color}30`,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${currentModel.color}20, transparent)`
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
                {interest}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Swipe indicators */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: useTransform(x, [-100, 0, 100], [0.8, 0, 0.8]),
            }}
          >
            <motion.div
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-500/80 text-white p-3 rounded-full backdrop-blur-sm"
              style={{
                opacity: useTransform(x, [-100, 0], [1, 0]),
                scale: useTransform(x, [-100, 0], [1, 0.5]),
                x: useTransform(x, [-100, 0], [0, 50]),
              }}
            >
              PASS
            </motion.div>
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500/80 text-white p-3 rounded-full backdrop-blur-sm"
              style={{
                opacity: useTransform(x, [0, 100], [0, 1]),
                scale: useTransform(x, [0, 100], [0.5, 1]),
                x: useTransform(x, [0, 100], [-50, 0]),
              }}
            >
              MATCH
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Action buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-8">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('left')}
          className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg text-2xl"
        >
          ✕
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('right')}
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg text-2xl"
        >
          ♥
        </motion.button>
      </div>

      {/* Stack effect cards */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`stack-${i}`}
          className="absolute w-72 h-96 rounded-xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            transform: `translateY(${i * 2}px) scale(${1 - i * 0.05})`,
            zIndex: -i,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            borderTop: `8px solid ${currentModel.color}20`
          }}
          animate={{
            rotate: [-1, 1],
            y: [i * 2, i * 2 + 2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2
          }}
        />
      ))}

      {/* Match overlay */}
      <AnimatePresence>
        {showMatch && matchedModel && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center rounded-xl z-10 backdrop-blur-md"
            style={{ 
              background: `linear-gradient(135deg, ${matchedModel.color}80, ${matchedModel.color}40)`,
              boxShadow: `0 0 100px ${matchedModel.color}40`
            }}
          >
            <Sparkles color={matchedModel.color} />
            <motion.div 
              className="text-center text-white relative z-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              <motion.div
                className="text-6xl mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                💝
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, white, ${matchedModel.color})`
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                It's a Match! ✨
              </motion.h2>
              <motion.p 
                className="text-xl text-white/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                You and {matchedModel.name} like each other
              </motion.p>
              <motion.p
                className="mt-2 text-sm text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Time to train some neural networks together! 🤖
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardScene;
