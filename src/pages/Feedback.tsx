import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Mail, ChevronDown, Star, Upload, MessageSquare, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import feedbackHero from "@/assets/feedback-hero.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const Feedback = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const feedbackBenefits = [
    "Drives continuous improvement for local services.",
    "Guides other consumers to make better choices.",
    "Highlights businesses that excel in their community.",
    "Ensures transparency and accountability.",
    "Strengthens the local economy by rewarding quality."
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
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest rounded-full text-sm font-medium mb-6">
                Feedback
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-midnight mb-6 leading-tight">
                Tell us How was your experience.
              </h1>
              <p className="text-muted-foreground text-lg">
                Your valuable feedback helps local businesses improve their service and allows others to make informed choices. Share your thoughts and contribute to a better community.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={feedbackHero} 
                alt="Share feedback" 
                className="rounded-2xl shadow-card w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-16 lg:py-20 bg-forest/10">
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
              <h2 className="text-2xl font-bold text-midnight mb-2">Submit Your Feedback</h2>
              <p className="text-muted-foreground mb-6 text-sm">We're here to help and answer any question you might have.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-midnight mb-1">Select Category</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20 appearance-none">
                      <option>Category</option>
                      <option>Restaurant</option>
                      <option>Salon</option>
                      <option>Gym</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-midnight mb-1">Vendor Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g The Daily Gourmet"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Your Rating</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1"
                      >
                        <Star 
                          className={`w-6 h-6 transition-colors ${
                            star <= (hoverRating || rating) 
                              ? 'text-yellow-500 fill-yellow-500' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Message</label>
                  <textarea 
                    placeholder="e.g I have an message about"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-forest/20 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-midnight mb-1">Upload Photos (Optional)</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-forest transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to Upload or Drag and drop</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, or WebP</p>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-midnight text-white py-3 rounded-lg font-medium hover:bg-midnight/90 transition-colors">
                  Submit Feedback
                </button>
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-midnight mb-6">How Feedback Helps</h3>
              <ul className="space-y-4">
                {feedbackBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-forest">•</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight">
              Loved by Clients Everywhere
            </h2>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors">
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors">
                <ChevronDown className="w-5 h-5 rotate-90" />
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
                className="bg-card p-6 rounded-2xl"
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
      <section className="py-16 lg:py-20 bg-card">
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
                className="border-b border-border bg-background rounded-lg px-4"
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
              <button className="flex items-center gap-2 bg-white border border-border text-midnight px-6 py-3 rounded-full font-medium hover:bg-card transition-colors">
                <MessageSquare className="w-4 h-4" />
                Share Feedback
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
