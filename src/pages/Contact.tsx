import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { User, Mail, FileText, MessageSquare, Instagram, Linkedin, Youtube, Twitter, Home, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import contactHero from "@/assets/contact-hero.jpg";
import contactTeam from "@/assets/contact-team.jpg";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    { q: "What is this platform and how does it work?", a: "Our platform helps you discover and compare local services in your area with transparent ratings and verified reviews." },
    { q: "How do you rank local services?", a: "We use a combination of user reviews, verification checks, and quality metrics to rank local services." },
    { q: "How are services verified on your platform?", a: "Our team manually verifies each business listing and continuously monitors for quality and accuracy." },
    { q: "Do I need to create an account to explore services?", a: "No, you can browse services without an account. An account is only needed to leave reviews or save favorites." },
    { q: "Which cities and locations are currently supported?", a: "We currently support major metropolitan areas and are rapidly expanding to more locations." }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields", {
        description: "Name, email, and message are required.",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact Us - RankLocal"
        description="Get in touch with RankLocal. We're here to help with questions about our local services comparison platform."
        canonical="https://ranklocal.com/contact"
        keywords="contact ranklocal, support, help, local services"
      />
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
                alt="Customer support team ready to help" 
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
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="e.g John Wick"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="email" 
                      placeholder="e.g johnwick@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
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
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <textarea 
                      placeholder="e.g I have a question about..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20 resize-none transition-all"
                    />
                  </div>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-midnight text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
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
                alt="Our dedicated support team" 
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
                    {[Instagram, Linkedin, Youtube, Twitter].map((Icon, index) => (
                      <motion.a 
                        key={index}
                        href="#" 
                        className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-forest hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="font-medium text-midnight mb-2">Quick Support Links</p>
                  <a href="/faq" className="text-sm text-muted-foreground hover:text-forest transition-colors">General FAQs</a>
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
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      className="pb-4 text-muted-foreground text-sm overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <motion.div 
            className="bg-card rounded-3xl p-8 lg:p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
              Got Your Answer?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Great! You can return to the homepage to continue exploring, or let us know how we did—your feedback helps us serve you better.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="/" 
                className="btn-forest flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-4 h-4" />
                Go to Home
              </motion.a>
              <motion.a 
                href="/feedback" 
                className="flex items-center gap-2 bg-white border border-border text-midnight px-6 py-3 rounded-full font-medium hover:bg-card transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-4 h-4" />
                Share Feedback
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
