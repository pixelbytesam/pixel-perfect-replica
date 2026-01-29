import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  return (
    <motion.div 
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
