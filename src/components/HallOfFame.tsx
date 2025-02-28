import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  image: string;
  name: string;
  achievement: string;
  result: string;
  review: string;
  before?: string;
  after?: string;
}

const HallOfFame: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Alex Morgan",
      achievement: "Transformation Champion",
      result: "+15kg Lean Muscle",
      review: "I transformed from skinny to muscular in just 8 months. The structured workout plans and nutrition advice were game-changers for my physique and confidence.",
      before: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Sophia Chen",
      achievement: "Weight Loss Warrior",
      result: "-25kg & New Life",
      review: "After struggling with my weight for years, this program helped me lose 25kg and completely transform my relationship with food and exercise. I've never felt more alive!",
      before: "https://images.unsplash.com/photo-1535955565956-4a631d6452da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      name: "Marcus Johnson",
      achievement: "Strength Master",
      result: "3x Strength Increase",
      review: "From struggling with basic lifts to setting gym records! My deadlift went from 100kg to 250kg, and I've never felt more powerful both physically and mentally.",
      before: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      after: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "Elena Rodriguez",
      achievement: "Comeback Queen",
      result: "Full Recovery & Beyond",
      review: "After a devastating car accident, doctors said I might never run again. Not only am I running, but I've completed my first marathon! This program taught me resilience I never knew I had.",
      before: "https://images.unsplash.com/photo-1612957693059-13b7545d3f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      after: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      name: "David Kim",
      achievement: "Endurance Champion",
      result: "Ironman Finisher",
      review: "From being winded climbing stairs to completing an Ironman triathlon in under 12 hours. The structured training plans and mental conditioning were absolutely crucial to my success.",
      before: "https://images.unsplash.com/photo-1600026453346-a44501602a02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      after: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Jasmine Taylor",
      achievement: "Body Recomposition Star",
      result: "Same Weight, New Body",
      review: "I weigh exactly the same as when I started, but my body is completely different! Lost fat, gained muscle, and found a sustainable lifestyle that keeps me looking and feeling amazing.",
      before: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      after: "https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  // Navigate to a specific slide
  const navigate = useCallback((newIndex: number) => {
    if (newIndex === activeIndex) return;
    
    // Handle wrapping around
    if (newIndex >= testimonials.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    }
    
    setDirection(newIndex > activeIndex ? "right" : "left");
    setActiveIndex(newIndex);
    setIsAutoPlaying(false);
    
    // Resume auto-playing after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [activeIndex, testimonials.length]);

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Require at least 50px movement for a swipe
    if (Math.abs(diff) > 50) {
      navigate(diff > 0 ? activeIndex + 1 : activeIndex - 1);
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      className="fixed inset-0 bg-gradient-to-br from-[#1A0A2E] to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Back Button (10% from top) */}
      <Link
        to="/main"
        className="absolute left-4 top-[10%] z-50 p-2 rounded-full bg-black/30 backdrop-blur-sm transition-transform hover:scale-110"
        aria-label="Back to main"
      >
        <ChevronLeft className="w-6 h-6 text-white/80" />
      </Link>

      {/* Testimonial Carousel */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: direction === "right" ? "100%" : "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? "-100%" : "100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20 md:pb-24">
              <div className="max-w-4xl mx-auto w-full">
                {/* Before/After Images (Conditional) */}
                {testimonials[activeIndex].before && testimonials[activeIndex].after && (
                  <motion.div 
                    className="mb-6 flex gap-2 justify-center"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={0}
                    variants={textVariants}
                  >
                    <div className="relative w-[45%] aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={testimonials[activeIndex].before} 
                        alt="Before transformation" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 text-center">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative w-[45%] aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={testimonials[activeIndex].after} 
                        alt="After transformation" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-red-900/70 text-white text-xs py-1 text-center">
                        AFTER
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Text Content with Staggered Animation */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={1}
                  variants={textVariants}
                  className="text-center"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-1">
                    {testimonials[activeIndex].name}
                  </h2>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={2}
                  variants={textVariants}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl font-semibold text-red-500 mb-2">
                    {testimonials[activeIndex].achievement}
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={3}
                  variants={textVariants}
                  className="text-center"
                >
                  <span className="inline-block bg-red-900/80 text-white px-4 py-1 rounded-full text-sm md:text-base mb-4">
                    {testimonials[activeIndex].result}
                  </span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={4}
                  variants={textVariants}
                  className="text-center"
                >
                  <blockquote className="text-gray-300 text-sm md:text-lg italic max-w-2xl mx-auto leading-relaxed">
                    "{testimonials[activeIndex].review}"
                  </blockquote>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Hidden on Mobile) */}
        {!isMobile && (
          <>
            <button
              onClick={() => navigate(activeIndex - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white/80 hover:bg-black/50 hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigate(activeIndex + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white/80 hover:bg-black/50 hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-red-500 scale-125" : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default HallOfFame;