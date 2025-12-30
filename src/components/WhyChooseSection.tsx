import { Check, X } from "lucide-react";

const WhyChooseSection = () => {
  const withRankLocal = [
    "Verified and trusted reviews",
    "Real-time availability checks",
    "Side-by-side comparisons",
    "Direct booking options",
    "AI-powered recommendations",
    "24/7 customer support",
  ];

  const withoutRankLocal = [
    "Fake or biased reviews",
    "Outdated information",
    "Multiple website searches",
    "Phone call back and forth",
    "Random recommendations",
    "No support available",
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
            Why choose RankLocal?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See the difference our platform makes in your local service search.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* With RankLocal */}
          <div className="bg-forest/5 border border-forest/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-forest mb-6 text-center">
              With RankLocal
            </h3>
            <ul className="space-y-4">
              {withRankLocal.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-midnight/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Without RankLocal */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-red-600 mb-6 text-center">
              Without RankLocal
            </h3>
            <ul className="space-y-4">
              {withoutRankLocal.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-midnight/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
