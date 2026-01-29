import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

// Check for reduced motion preference
const useReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -10,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
