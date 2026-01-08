import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import AnimatedWord from "@/components/AnimatedWord";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* SVG Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/images/grid-layers-bg.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
        }}
      />

      {/* Decorative floating blocks - Top Right cluster */}
      <motion.div 
        className="absolute top-24 right-[8%] w-16 h-16 bg-forest/20 rounded-lg hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-32 right-[16%] w-10 h-10 bg-forest rounded-lg hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-20 right-[22%] w-14 h-14 bg-forest/30 rounded-lg hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-44 right-[12%] w-8 h-8 bg-forest/40 rounded-lg hidden lg:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Decorative floating blocks - Left side */}
      <motion.div 
        className="absolute top-32 left-[5%] w-12 h-12 bg-forest/20 rounded-lg hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Green Pill Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-forest/10 border border-forest/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-forest">
              <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="currentColor"/>
            </svg>
            <span className="text-forest text-sm font-medium">Better choice begins here.</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-midnight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.heroHeadline1}{" "}
            <span className="text-forest"><AnimatedWord /></span>,
            <br />
            {t.heroHeadline2}
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-base lg:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We simplify your search by showing only verified, trustworthy shops around you. Compare clearly, decide confidently, and begin your journey with the right choice.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="flex items-center gap-2 bg-forest text-white rounded-full px-8 py-4 font-medium text-base transition-all hover:opacity-90 hover:scale-105 shadow-lg">
              <Search size={18} />
              Discover Business
            </button>
            <button className="flex items-center gap-2 bg-white border border-border text-midnight rounded-full px-8 py-4 font-medium text-base transition-all hover:bg-muted hover:scale-105">
              <MapPin size={18} className="text-forest" />
              Select Location
            </button>
          </motion.div>
          
          {/* Floating Avatar - Top Right with cursor */}
          <motion.div 
            className="absolute right-[-5%] top-[10%] hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={avatar2}
                alt="User"
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
              />
              {/* Cursor arrow */}
              <svg 
                width="20" height="20" viewBox="0 0 20 20" fill="none" 
                className="absolute -bottom-1 -left-3 transform rotate-180"
              >
                <path d="M2 2L18 10L10 12L8 18L2 2Z" fill="#2F2F2F"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Floating Avatar - Right side with cursor */}
          <motion.div 
            className="absolute right-[-8%] top-[55%] hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <img
                src={avatar3}
                alt="User"
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <svg 
                width="16" height="16" viewBox="0 0 20 20" fill="none" 
                className="absolute -top-2 -left-2"
              >
                <path d="M2 2L18 10L10 12L8 18L2 2Z" fill="#2F2F2F"/>
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Floating Avatar - Left with cursor */}
          <motion.div 
            className="absolute left-[-5%] top-[45%] hidden lg:block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <img
                src={avatar1}
                alt="User"
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
              />
              {/* Cursor arrow */}
              <svg 
                width="18" height="18" viewBox="0 0 20 20" fill="none" 
                className="absolute -top-1 -right-2"
              >
                <path d="M2 2L18 10L10 12L8 18L2 2Z" fill="#2F2F2F"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
