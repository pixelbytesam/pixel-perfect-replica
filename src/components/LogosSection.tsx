import { motion } from "framer-motion";

const LogosSection = () => {
  const companies = ["Company", "Company", "Company", "Company"];

  return (
    <section className="py-6 xs:py-8 sm:py-10 lg:py-14 relative overflow-hidden">
      {/* Decorative blocks - Hidden on small screens */}
      <motion.div 
        className="absolute top-4 left-[20%] w-10 h-10 bg-forest/15 rounded-lg hidden lg:block"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-4 right-[25%] w-8 h-8 bg-forest/20 rounded-lg hidden lg:block"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      
      <div className="section-container">
        <motion.div 
          className="flex items-center justify-center gap-6 xs:gap-8 sm:gap-12 lg:gap-24 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {companies.map((company, index) => (
            <motion.span
              key={index}
              className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold text-forest/40"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {company}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogosSection;
