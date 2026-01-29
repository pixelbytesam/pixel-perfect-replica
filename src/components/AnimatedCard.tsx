import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0,
  hoverEffect = true 
}: AnimatedCardProps) => {
  return (
    <motion.div
      className={cn(
        'bg-card rounded-2xl p-6 shadow-card transition-shadow duration-300',
        hoverEffect && 'hover:shadow-lg',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      whileHover={hoverEffect ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
