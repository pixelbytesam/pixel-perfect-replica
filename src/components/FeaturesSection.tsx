import { BarChart3, Shield, Clock, Search, Star, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Compare Rankings",
      description: "Compare multiple local businesses side by side with comprehensive data and insights.",
    },
    {
      icon: Shield,
      title: "Check Reviews & Rating",
      description: "Access verified customer reviews and authentic ratings for informed decisions.",
    },
    {
      icon: Clock,
      title: "Find Opening Hours",
      description: "Check real-time availability and operating hours for all local services.",
    },
    {
      icon: Search,
      title: "Hire Freelancers & Availability",
      description: "Find skilled professionals and check their availability for your needs.",
    },
    {
      icon: Star,
      title: "Smart Search & Filters",
      description: "Use advanced filters to narrow down exactly what you're looking for.",
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "All businesses are verified to ensure quality and trustworthiness.",
    },
  ];

  return (
    <section id="features" className="py-12 xs:py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <span className="inline-block text-forest text-xs xs:text-sm font-medium mb-2 xs:mb-3">✓ Our Features</span>
          <h2 className="text-[clamp(1.25rem,4.5vw,2.25rem)] font-bold text-midnight mb-3 xs:mb-4 px-2">
            The Modern Platform for Trusted
            <br className="hidden xs:block" />
            <span className="xs:hidden"> </span>
            Local Comparisons
          </h2>
          <p className="text-sm xs:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Our platform provides everything you need to make informed decisions about local services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
            >
              <div className="w-10 h-10 xs:w-12 xs:h-12 bg-forest/10 rounded-lg xs:rounded-xl flex items-center justify-center mb-3 xs:mb-4 group-hover:bg-forest group-hover:scale-110 transition-all">
                <feature.icon className="w-5 h-5 xs:w-6 xs:h-6 text-forest group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-midnight mb-1.5 xs:mb-2">
                {feature.title}
              </h3>
              <p className="text-sm xs:text-base text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
