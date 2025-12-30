import { Users, TrendingUp, Star } from "lucide-react";

const MetricsSection = () => {
  const metrics = [
    {
      icon: Users,
      value: "25K+",
      label: "Active Users",
    },
    {
      icon: TrendingUp,
      value: "1M+",
      label: "Comparisons Made",
    },
    {
      icon: Star,
      value: "4.8+",
      label: "Average Rating",
    },
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
            Metrics that matters!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our platform helps thousands of users make informed decisions every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-forest" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-midnight mb-2">
                {metric.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
