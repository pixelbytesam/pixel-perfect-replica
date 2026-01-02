import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedWord = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const words = [
    t.hospital,
    t.hotel,
    t.salon,
    t.carServicing,
    t.clothShops,
    t.agriEquipments,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block">
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
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
        <path d="M2 8C50 3 150 3 198 8" stroke="hsl(143, 21%, 38%)" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </span>
  );
};

export default AnimatedWord;
