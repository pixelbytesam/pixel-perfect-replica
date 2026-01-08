import { Check } from "lucide-react";
import intelligenceImage from "@/assets/intelligence-image.jpg";

const IntelligenceSection = () => {
  const benefits = [
    "AI-powered recommendations",
    "Real-time data updates",
    "Personalized suggestions",
    "Comprehensive analytics",
  ];

  return (
    <section className="py-12 xs:py-16 lg:py-24 bg-forest">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl xs:rounded-3xl overflow-hidden shadow-lg">
              <img
                src={intelligenceImage}
                alt="Smarter Service with Rank Local Intelligence"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-cloud order-1 lg:order-2">
            <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-bold mb-4 xs:mb-6">
              Smarter Service with
              <br className="hidden xs:block" />
              <span className="xs:hidden"> </span>
              Rank Local Intelligence
            </h2>
            <p className="text-cloud/80 mb-6 xs:mb-8 text-sm xs:text-base lg:text-lg leading-relaxed">
              Our intelligent platform uses advanced algorithms to help you find the best local services tailored to your specific needs and preferences.
            </p>
            
            <ul className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2.5 xs:gap-3">
                  <div className="w-5 h-5 xs:w-6 xs:h-6 bg-cloud/20 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 xs:w-4 xs:h-4 text-cloud" />
                  </div>
                  <span className="text-cloud/90 text-sm xs:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full xs:w-auto bg-cloud text-midnight rounded-full px-6 xs:px-8 py-3.5 xs:py-4 font-medium hover:bg-cloud/90 transition-colors min-h-[48px] text-sm xs:text-base">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
