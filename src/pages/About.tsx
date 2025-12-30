import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const coreValues = [
    {
      icon: Eye,
      title: "Transparency",
      description: "Open and honest sharing of information, empowering users to make informed decisions without hidden agendas."
    },
    {
      icon: Target,
      title: "Verified Listings",
      description: "Ensuring authenticity and reliability by rigorously verifying all local business listings on our platform."
    },
    {
      icon: Target,
      title: "Accessibility",
      description: "Designing our platform to be inclusive and usable for everyone, regardless of their technical proficiency or abilities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest rounded-full text-sm font-medium mb-6">
                About
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-midnight mb-6 leading-tight">
                Making Local shopping Transparent and Empowered
              </h1>
              <p className="text-muted-foreground text-lg">
                LocalView is dedicated to creating a vibrant marketplace where consumers can easily discover, compare, and connect with local businesses.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={aboutHero} 
                alt="Local marketplace" 
                className="rounded-2xl shadow-card w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose & Aspiration */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
              Our Purpose & Aspiration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are driven by a clear mission to empower and a bold vision for the future of local economies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-card"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-midnight mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide unparalleled transparency and tools that enable consumers to confidently support local businesses, fostering community growth and economic resilience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-card"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-midnight mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading platform for local commerce, recognized for empowering every consumer and business to thrive within a connected and trustworthy ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-forest">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Guide Us : Our Core Values
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Our commitment to these fundamental principles shapes everything we do and how we interact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl text-center"
              >
                <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-midnight mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-midnight text-white px-6 py-3 rounded-full font-medium hover:bg-midnight/90 transition-colors">
              <Mail className="w-4 h-4" />
              Let's Connect with Us
            </button>
            <button className="flex items-center gap-2 bg-white text-midnight px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
              <FileText className="w-4 h-4" />
              Discover Our Approach
            </button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight text-center mb-12">
            Our Valued Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-2xl font-bold text-muted-foreground/50">
                Company
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="bg-card rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
              Ready to Compare ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join Rank Local today and start making smarter, more informed decisions about local businesses. Unlock the power of transparent comparisons
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-forest flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8H12M8 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Start Comparing
              </button>
              <button className="flex items-center gap-2 bg-midnight text-white px-6 py-3 rounded-full font-medium hover:bg-midnight/90 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
