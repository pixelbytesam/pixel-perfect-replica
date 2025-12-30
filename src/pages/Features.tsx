import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign, Star, MapPin, Package, Search, Shield, Check, Mail, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import featuresHero from "@/assets/features-hero.jpg";
import featuresMoney from "@/assets/features-money.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const Features = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: DollarSign, title: "Compare Pricing", description: "View & compare prices across vendors to find the most value for your money." },
    { icon: Star, title: "Check Reviews & Rating", description: "Read customer reviews and ratings to make wise and informed decisions." },
    { icon: MapPin, title: "Find Nearby Stores", description: "Discover services and shops near you to save time and travel less." },
    { icon: Package, title: "View Products & Availability", description: "See what's in stock and products are available. No more surprises." },
    { icon: Search, title: "Smart Search & Filters", description: "Use advanced search by filters like rating, distance, or pricing." },
    { icon: Shield, title: "Trusted Verification", description: "All listed businesses are verified for your safety and trust." }
  ];

  const benefits = [
    "Real-time price comparisons from various local vendors.",
    "Save money by identifying the most cost-effective options.",
    "Access historical pricing data for better decision making.",
    "Set price alerts for desired products and services."
  ];

  const howItWorks = [
    { num: "1", title: "Search and Discover", description: "Enter your need and location to find verified local service providers near you." },
    { num: "2", title: "Compare & Evaluate", description: "Add services to your comparison list to view details, pricing and ratings." },
    { num: "3", title: "Choose & Connect", description: "Make an informed decision and connect directly with your chosen provider." }
  ];

  const testimonials = [
    { text: "This platform made comparing local services incredibly easy. I found the right option even without visiting multiple places!", author: "Amit Sharma", email: "amitsharma@gmail.com", avatar: avatar1 },
    { text: "Clean interface, clear comparisons, and genuine reviews. It helped me choose a reliable vendor with confidence!", author: "Rahul Verma", email: "rahulverma@yahoo.com", avatar: avatar2 },
    { text: "Clear interface, clear comparisons, and genuine feedback. It helped me choose a reliable vendor with confidence!", author: "Kamal Verma", email: "kamalverma@gmail.com", avatar: avatar3 }
  ];

  const faqs = [
    { q: "What is this platform and how does it work?", a: "Our platform helps you discover and compare local services in your area with transparent ratings and verified reviews." },
    { q: "How do you rank local services?", a: "We use a combination of user reviews, verification checks, and quality metrics to rank local services." },
    { q: "How are services verified on your platform?", a: "Our team manually verifies each business listing and continuously monitors for quality and accuracy." },
    { q: "Do I need to create an account to explore services?", a: "No, you can browse services without an account. An account is only needed to leave reviews or save favorites." },
    { q: "Which cities and locations are currently supported?", a: "We currently support major metropolitan areas and are rapidly expanding to more locations." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest rounded-full text-sm font-medium mb-6">
                Our Features
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-midnight mb-6 leading-tight">
                The modern pattern for Trusted Local Comparisons
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Our platform makes it simple to find, compare, and choose the local stores in your neighborhood. We empower you with transparent data and genuine feedback.
              </p>
              <button className="btn-forest">Discover More</button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src={featuresHero} 
                alt="Local marketplace" 
                className="rounded-2xl shadow-card w-full h-48 object-cover col-span-2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
              The Modern Platform for Trusted Local Comparisons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform empowers people to find, compare, and choose the best stores in your neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-forest" />
                </div>
                <h3 className="text-lg font-bold text-midnight mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-forest">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Key Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Features That Make the Difference
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Smart, powerful tools, and an intuitive interface - for your local shopping journey. See why Rank Local helps you get more value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={featuresMoney} 
                alt="Save money" 
                className="rounded-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-midnight mb-6">Key Benefits :</h3>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Savings</p>
                  <p className="text-2xl font-bold text-midnight">20%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Comparison Speed</p>
                  <p className="text-2xl font-bold text-midnight">10 sec approx.</p>
                </div>
              </div>

              <button className="btn-forest">Learn More</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight text-center mb-12">
            How RankLocal Works?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-forest/20 mb-4">{step.num}</div>
                <h3 className="text-lg font-bold text-midnight mb-2 underline underline-offset-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight">
              Loved by Clients Everywhere
            </h2>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-3xl text-forest/30">"</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-midnight text-sm mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-midnight text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium text-midnight">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-muted-foreground text-sm">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <a href="/contact" className="flex items-center gap-2 bg-midnight text-white px-6 py-3 rounded-full font-medium hover:bg-midnight/90 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
