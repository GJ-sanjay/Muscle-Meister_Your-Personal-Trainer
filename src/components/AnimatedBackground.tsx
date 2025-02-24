import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface FloatingItem {
  content: string;
}

const floatingItems: FloatingItem[] = [
  { content: '💪 Muscle' },
  { content: '🔥 Burn' },
  { content: '🏃‍♂️ Run' },
  { content: 'Strength' },
  { content: 'Lift' },
  { content: 'Fitness' },
  { content: '💦 Sweat' },
  { content: 'Grind' },
  { content: 'Pump' },
  { content: 'Gains' },
  { content: 'Endure' },
  { content: 'Stretch' },
  { content: 'Cardio' },
  { content: '🏋️‍♀️' },
  { content: '🏋️‍♂️' },
  { content: 'Power' },
  { content: 'Focus' },
  { content: 'Energy' },
];

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const AnimatedBackground: React.FC = () => {
  const location = useLocation();
  
  // Do not render the animated background on the homepage
  if (location.pathname === '/') return null;

  const numItems = 20;

  const renderItems = () => {
    return Array.from({ length: numItems }).map((_, i) => {
      const item = floatingItems[Math.floor(Math.random() * floatingItems.length)];
      const left = random(0, 100);
      const duration = random(8, 15);
      const delay = random(0, 5);
      const fontSize = random(16, 40);
      const opacity = random(0.1, 0.3);
      
      return (
        <motion.div
          key={i}
          className="absolute text-white/20 select-none pointer-events-none"
          style={{ 
            left: `${left}%`, 
            fontSize: `${fontSize}px`,
            opacity
          }}
          initial={{ bottom: -50, opacity: 0 }}
          animate={{ 
            bottom: '110%', 
            opacity: [0, opacity, 0]
          }}
          transition={{ 
            duration, 
            delay, 
            repeat: Infinity, 
            ease: 'linear'
          }}
        >
          {item.content}
        </motion.div>
      );
    });
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {renderItems()}
    </div>
  );
};

export default AnimatedBackground;