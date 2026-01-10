import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Link } from "react-router-dom";
import { Search, Phone, HelpCircle, ShieldCheck, MapPin, Star, CreditCard, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    questions: [
      {
        question: "What is RankLocal and how does it work?",
        answer: "RankLocal is a smart comparison platform that helps you find and compare local businesses. We aggregate verified data from multiple sources, allowing you to make informed decisions by comparing ratings, reviews, services, and pricing across different providers in your area."
      },
      {
        question: "Is RankLocal free to use?",
        answer: "Yes, RankLocal is completely free for consumers. You can search, compare, and access all business information without any charges. We believe everyone deserves access to transparent business comparisons."
      },
      {
        question: "How do I start comparing businesses?",
        answer: "Simply use our search bar to find businesses in your area. You can filter by category, location, ratings, and more. Once you find businesses you're interested in, add them to your comparison list and view side-by-side comparisons."
      }
    ]
  },
  {
    category: "Trust & Verification",
    icon: ShieldCheck,
    questions: [
      {
        question: "How do you verify business information?",
        answer: "We use a multi-step verification process that includes cross-referencing official business registrations, validating contact information, and monitoring customer reviews. Businesses with verified badges have passed our comprehensive verification checks."
      },
      {
        question: "Are the reviews on RankLocal authentic?",
        answer: "We employ advanced algorithms and manual review processes to detect and remove fake reviews. Our system analyzes review patterns, user behavior, and content authenticity to ensure you see genuine customer experiences."
      },
      {
        question: "What does the 'Verified' badge mean?",
        answer: "The Verified badge indicates that a business has completed our verification process, which includes confirming their business license, physical location, contact details, and service offerings. This badge helps you identify trustworthy businesses."
      }
    ]
  },
  {
    category: "Search & Location",
    icon: MapPin,
    questions: [
      {
        question: "How accurate is the location-based search?",
        answer: "Our location-based search uses precise GPS coordinates and address matching to find businesses within your specified radius. You can search within 1km to 50km of your location for accurate local results."
      },
      {
        question: "Can I search for businesses in a different city?",
        answer: "Absolutely! While we default to your current location, you can manually enter any city or area in the location dropdown. This is helpful when planning visits or researching businesses in areas you're moving to."
      },
      {
        question: "Why can't I find a specific business?",
        answer: "Some businesses may not yet be in our database. You can suggest a business to be added through our Contact page. We continuously expand our database to include more local businesses across all categories."
      }
    ]
  },
  {
    category: "Ratings & Reviews",
    icon: Star,
    questions: [
      {
        question: "How is the overall rating calculated?",
        answer: "Our overall rating is a weighted average that considers multiple factors: customer reviews, service quality metrics, response time, and consistency of service. This provides a more comprehensive score than simple star averages."
      },
      {
        question: "Can I leave a review for a business?",
        answer: "Yes, registered users can leave reviews for businesses they've used. We encourage honest, detailed reviews that help other users make informed decisions. All reviews go through our authenticity verification process."
      },
      {
        question: "How often are ratings updated?",
        answer: "Ratings are updated in real-time as new reviews come in. However, our weighted rating algorithm recalculates comprehensive scores weekly to ensure stability and accuracy in overall rankings."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    icon: CreditCard,
    questions: [
      {
        question: "Does RankLocal handle payments?",
        answer: "No, RankLocal is purely a comparison and discovery platform. All transactions and payments are handled directly between you and the business. We simply help you find and compare the best options."
      },
      {
        question: "Are the prices shown accurate?",
        answer: "We strive to display accurate pricing information, but prices are provided by businesses and may change. We recommend confirming current prices directly with the business before making decisions."
      },
      {
        question: "Do businesses pay to be listed higher?",
        answer: "No, our rankings are based purely on merit—ratings, reviews, and service quality. While businesses can claim their profiles for free, they cannot pay for higher placement in search results."
      }
    ]
  },
  {
    category: "Account & Support",
    icon: Clock,
    questions: [
      {
        question: "Do I need an account to use RankLocal?",
        answer: "You can search and compare businesses without an account. However, creating a free account allows you to save favorites, write reviews, receive personalized recommendations, and track your comparison history."
      },
      {
        question: "How can I contact RankLocal support?",
        answer: "You can reach our support team through the Contact page, email us at support@ranklocal.com, or use the live chat feature available on our website. We typically respond within 24 hours."
      },
      {
        question: "Can I suggest new features?",
        answer: "We love hearing from our users! You can submit feature suggestions through our Feedback page. Many of our current features came directly from user suggestions, and we actively review all submissions."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-cloud">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 xs:pt-28 lg:pt-32 pb-12 xs:pb-16 lg:pb-20 bg-midnight relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="section-container relative">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-forest/20 text-forest px-4 py-2 rounded-full mb-6">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Help Center</span>
              </div>
              
              <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-cloud mb-4 xs:mb-6 leading-tight">
                Frequently Asked{" "}
                <span className="text-forest">Questions</span>
              </h1>
              
              <p className="text-cloud/70 text-sm xs:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about RankLocal. Can't find what you're looking for? 
                Our support team is always here to help.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 xs:py-16 lg:py-24 bg-cloud">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <ScrollAnimationWrapper key={categoryIndex}>
                <div className="mb-8 xs:mb-12">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 xs:mb-6">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                      <category.icon className="w-5 h-5 xs:w-6 xs:h-6 text-forest" />
                    </div>
                    <h2 className="text-lg xs:text-xl lg:text-2xl font-bold text-midnight">
                      {category.category}
                    </h2>
                  </div>
                  
                  {/* Questions Accordion */}
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-white rounded-xl border border-midnight/10 px-4 xs:px-6 overflow-hidden"
                      >
                        <AccordionTrigger className="text-left text-sm xs:text-base font-medium text-midnight hover:no-underline py-4 xs:py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-midnight/70 text-sm xs:text-base leading-relaxed pb-4 xs:pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-16 lg:py-24 bg-midnight relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
        
        <div className="section-container relative">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 xs:w-20 xs:h-20 bg-forest/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 xs:w-10 xs:h-10 text-forest" />
              </div>
              
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-cloud mb-4 xs:mb-6">
                Resolved Your{" "}
                <span className="text-forest">Query?</span>
              </h2>
              
              <p className="text-cloud/70 mb-8 xs:mb-10 text-sm xs:text-base lg:text-lg leading-relaxed">
                If you found the answers you were looking for, start comparing local businesses today. 
                Still have questions? Our friendly support team is just a click away.
              </p>
              
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
                <Link to="/search">
                  <button className="btn-forest px-6 xs:px-8 py-3.5 xs:py-4 text-sm xs:text-base lg:text-lg min-h-[48px] w-full xs:w-auto inline-flex items-center justify-center gap-2">
                    <Search className="w-4 h-4 xs:w-5 xs:h-5" />
                    Start Comparing
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border-2 border-cloud/30 text-cloud rounded-full px-6 xs:px-8 py-3.5 xs:py-4 font-medium hover:bg-cloud/10 transition-colors text-sm xs:text-base lg:text-lg min-h-[48px] w-full xs:w-auto inline-flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 xs:w-5 xs:h-5" />
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
