import { Check } from "lucide-react";
import comparisonImage from "@/assets/comparison-image.jpg";

const ComparisonSection = () => {
  const features = [
    "Compare all options in one place",
    "Verified reviews from real customers",
    "Real-time availability updates",
    "Direct booking integration",
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-6">
              The Best Local Choice Is
              <br />
              Just One Compare Away
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Stop wasting time searching multiple websites. Our comparison platform brings everything together so you can make the best choice quickly.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-forest" />
                  </div>
                  <span className="text-midnight/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="btn-forest px-8 py-4">
              Start Comparing
            </button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={comparisonImage}
                alt="Compare local services easily"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
