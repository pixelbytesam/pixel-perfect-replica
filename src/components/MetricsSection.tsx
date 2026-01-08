import { motion } from "framer-motion";
import { CheckCircle, Building2, Star } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      icon: CheckCircle,
      value: "25K+",
      label: "Active Comparisons",
    },
    {
      icon: Building2,
      value: "1M+",
      label: "Total Businesses",
    },
    {
      icon: Star,
      value: "4.8+",
      label: "Average Rating",
    },
  ];

  return (
    <section className="py-12 xs:py-14 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative floating blocks - Hidden on small screens */}
      <motion.div 
        className="absolute top-8 left-[15%] w-12 h-12 bg-forest/15 rounded-lg hidden lg:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-20 right-[10%] w-10 h-10 bg-forest/20 rounded-lg hidden lg:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-16 left-[8%] w-8 h-8 bg-forest/25 rounded-lg hidden lg:block"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-[5%] w-14 h-14 bg-forest/15 rounded-lg hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div 
        className="absolute top-32 left-[45%] w-8 h-8 bg-forest/20 rounded-lg hidden lg:block"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.div 
        className="absolute top-28 left-[52%] w-10 h-10 bg-forest/15 rounded-lg hidden lg:block"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-8 xs:mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-bold text-midnight mb-3 xs:mb-4">
            Metrics that matters!
          </h2>
          <p className="text-sm xs:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Key performance indicators that deliver real insight. Focused on outcomes that truly matter. Clear, actionable metrics that guide smarter decisions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-8 xs:gap-6 sm:gap-8 md:gap-12 lg:gap-20 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-2 xs:gap-3 mb-1.5 xs:mb-2">
                <metric.icon className="w-5 h-5 xs:w-6 xs:h-6 text-forest shrink-0" strokeWidth={1.5} />
                <span className="text-[clamp(1.75rem,6vw,3rem)] font-bold text-forest">
                  {metric.value}
                </span>
              </div>
              <span className="text-muted-foreground text-xs xs:text-sm font-medium">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
