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
    <section className="py-16 lg:py-24 bg-forest">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={intelligenceImage}
                alt="Smarter Service with Rank Local Intelligence"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-cloud">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Smarter Service with
              <br />
              Rank Local Intelligence
            </h2>
            <p className="text-cloud/80 mb-8 text-lg">
              Our intelligent platform uses advanced algorithms to help you find the best local services tailored to your specific needs and preferences.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-cloud/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-cloud" />
                  </div>
                  <span className="text-cloud/90">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-cloud text-midnight rounded-full px-8 py-4 font-medium hover:bg-cloud/90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
