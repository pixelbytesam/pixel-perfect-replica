const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Search and Discover",
      description: "Enter your location and search for local services that match your needs.",
    },
    {
      number: "2",
      title: "Compare & Evaluate",
      description: "Review detailed comparisons, ratings, and customer feedback side by side.",
    },
    {
      number: "3",
      title: "Choose & Connect",
      description: "Make your decision and connect directly with your chosen service provider.",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
            How RankLocal Works?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three simple steps to find the perfect local service for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-forest text-cloud rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-midnight mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
