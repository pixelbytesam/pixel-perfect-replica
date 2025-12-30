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
    <section id="features" className="py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-forest text-sm font-medium mb-3">✓ Our Features</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
            The Modern Platform for Trusted
            <br />
            Local Comparisons
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides everything you need to make informed decisions about local services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
            >
              <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest group-hover:scale-110 transition-all">
                <feature.icon className="w-6 h-6 text-forest group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
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
