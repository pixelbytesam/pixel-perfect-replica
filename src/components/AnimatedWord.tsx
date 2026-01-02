import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface AnimatedWordProps {
  speed?: number; // Duration in milliseconds per word
}

const AnimatedWord = ({ speed = 1800 }: AnimatedWordProps) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const words = [
    t.hospital,
    t.hotel,
    t.salon,
    t.carServicing,
    t.clothShops,
    t.agriEquipments,
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, speed);

    return () => clearInterval(interval);
  }, [words.length, speed, isPaused]);

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <span className="relative inline-block px-3 py-1 rounded-lg bg-forest/10">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="inline-block text-forest"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
        <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
          <path d="M2 8C50 3 150 3 198 8" stroke="hsl(143, 21%, 38%)" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </span>
    </span>
  );
};

export default AnimatedWord;
