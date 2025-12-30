const LogosSection = () => {
  const companies = ["Company", "Company", "Company", "Company"];

  return (
    <section className="py-8 lg:py-12 border-y border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-center gap-12 lg:gap-24 flex-wrap">
          {companies.map((company, index) => (
            <span
              key={index}
              className="text-xl lg:text-2xl font-semibold text-midnight/40"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
