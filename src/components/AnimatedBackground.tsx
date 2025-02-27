import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface FloatingItem {
  id: number;
  content: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: Direction;
  delay: number;
  hidden: boolean;
}

type Direction = 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right';

const motivationalItems = ['💪', '🔥', '🏋️‍♂️', '🏆', 'Stay Strong', 'Focus'];

const AnimatedBackground: React.FC = () => {
  const location = useLocation();
  const [items, setItems] = useState<FloatingItem[]>([]);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (location.pathname === '/') return null;

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const generateItems = () => {
      const newItems: FloatingItem[] = [];
      const numItems = Math.min(50, Math.floor(windowSize.width * windowSize.height / 20000));

      for (let i = 0; i < numItems; i++) {
        newItems.push(createRandomItem(i));
      }

      setItems(newItems);
    };

    generateItems();

    const interval = setInterval(() => {
      setItems(prevItems => prevItems.map(item => createRandomItem(item.id)));
    }, 5000);

    return () => clearInterval(interval);
  }, [windowSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        setItems(prevItems =>
          prevItems.map((item, index) => ({
            ...item,
            hidden: entries[index]?.isIntersecting || false
          }))
        );
      },
      { root: null, threshold: 0.1 }
    );

    floatingRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items]);

  const createRandomItem = (id: number): FloatingItem => {
    const content = motivationalItems[Math.floor(Math.random() * motivationalItems.length)];
    const directions: Direction[] = ['up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left', 'down-right'];

    return {
      id,
      content,
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      size: Math.random() * 16 + 14,
      opacity: Math.random() * 0.15 + 0.05,
      speed: Math.random() * 2 + 1,
      direction: directions[Math.floor(Math.random() * directions.length)],
      delay: Math.random() * 5,
      hidden: false
    };
  };

  const getAnimationProps = (item: FloatingItem) => {
    const duration = 15 / item.speed;
    let x1 = item.x;
    let y1 = item.y;
    let x2 = x1;
    let y2 = y1;
    const distance = Math.min(windowSize.width, windowSize.height) * 0.7;

    switch (item.direction) {
      case 'up': y2 -= distance; break;
      case 'down': y2 += distance; break;
      case 'left': x2 -= distance; break;
      case 'right': x2 += distance; break;
      case 'up-left': x2 -= distance * 0.7; y2 -= distance * 0.7; break;
      case 'up-right': x2 += distance * 0.7; y2 -= distance * 0.7; break;
      case 'down-left': x2 -= distance * 0.7; y2 += distance * 0.7; break;
      case 'down-right': x2 += distance * 0.7; y2 += distance * 0.7; break;
    }

    return {
      initial: { x: x1, y: y1, opacity: 0 },
      animate: { x: x2, y: y2, opacity: item.hidden ? 0 : item.opacity },
      transition: { duration, delay: item.delay, repeat: Infinity, repeatDelay: 2, ease: 'linear' }
    };
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {items.map((item, index) => {
        const animationProps = getAnimationProps(item);

        return (
          <motion.div
            key={item.id}
            ref={el => (floatingRefs.current[index] = el)}
            className="absolute text-white select-none pointer-events-none font-bold whitespace-nowrap"
            style={{
              fontSize: `${item.size}px`,
              textShadow: '0 0 5px rgba(255,0,0,0.3)',
              opacity: item.hidden ? 0 : item.opacity
            }}
            initial={animationProps.initial}
            animate={animationProps.animate}
            transition={animationProps.transition}
          >
            {item.content}
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
