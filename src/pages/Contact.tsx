import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Mail, FileText, MessageSquare, Instagram, Linkedin, Youtube, Twitter, Home, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import contactHero from "@/assets/contact-hero.jpg";
import contactTeam from "@/assets/contact-team.jpg";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest rounded-full text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-midnight mb-6 leading-tight">
                We'd Love to Hear from You!
              </h1>
              <p className="text-muted-foreground text-lg">
                Whether you have a question about our services, need support, or want to explore partnership opportunities, our team is ready to assist you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={contactHero} 
                alt="Customer support team" 
                className="rounded-2xl shadow-card w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20 bg-forest">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-midnight mb-2">Send us Message</h2>
              <p className="text-muted-foreground mb-6 text-sm">We're here to help and answer any question you might have.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="e.g John Wick"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="email" 
                      placeholder="e.g johnwick@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Subject</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="e.g Inquiry about stores listing"
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <textarea 
                      placeholder="e.g I have an message about"
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20 resize-none"
                    />
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-midnight text-white py-3 rounded-lg font-medium hover:bg-midnight/90 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <img 
                src={contactTeam} 
                alt="Our team" 
                className="rounded-2xl w-full h-64 object-cover"
              />
              
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-midnight mb-4">Our Contact Information</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Reach out to us directly through the details below or follow us on social media.
                </p>
                
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-forest" />
                  <div>
                    <p className="font-medium text-midnight">Email Us</p>
                    <p className="text-sm text-muted-foreground">localconnect@info.com</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="font-medium text-midnight mb-2">Follow Us on</p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors">
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium text-midnight mb-2">Quick Support Links</p>
                  <a href="#" className="text-sm text-muted-foreground hover:text-forest transition-colors">General FAQs</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="bg-card rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
              Got Your Answer?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Great! You can return to the homepage to continue exploring, or let us know how we did—your feedback helps us serve you better.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="btn-forest flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go to Home
              </a>
              <a href="/feedback" className="flex items-center gap-2 bg-white border border-border text-midnight px-6 py-3 rounded-full font-medium hover:bg-card transition-colors">
                <MessageSquare className="w-4 h-4" />
                Share Feedback
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
