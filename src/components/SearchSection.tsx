import { MapPin, Grid3X3, Search } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="py-12 xs:py-14 sm:py-16 lg:py-20 bg-card">
      <div className="section-container">
        <div className="text-center mb-8 xs:mb-10">
          <h2 className="text-[clamp(1.25rem,4.5vw,2.25rem)] font-bold text-midnight mb-3 xs:mb-4 px-2">
            Discover Trusted Local Services Instantly
          </h2>
          <p className="text-sm xs:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Search by location or category to find the best services near you
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-xl xs:rounded-2xl p-2.5 xs:p-3 shadow-card flex flex-col lg:flex-row gap-2.5 xs:gap-3">
            {/* Location Input */}
            <div className="flex-1 flex items-center gap-2 xs:gap-3 px-3 xs:px-4 py-3 bg-card rounded-lg xs:rounded-xl border border-border min-h-[48px]">
              <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-forest shrink-0" />
              <input
                type="text"
                placeholder="Enter Location"
                className="flex-1 bg-transparent outline-none text-midnight placeholder:text-muted-foreground text-sm xs:text-base min-w-0"
              />
            </div>
            
            {/* Category Input */}
            <div className="flex-1 flex items-center gap-2 xs:gap-3 px-3 xs:px-4 py-3 bg-card rounded-lg xs:rounded-xl border border-border min-h-[48px]">
              <Grid3X3 className="w-4 h-4 xs:w-5 xs:h-5 text-forest shrink-0" />
              <input
                type="text"
                placeholder="Select Category"
                className="flex-1 bg-transparent outline-none text-midnight placeholder:text-muted-foreground text-sm xs:text-base min-w-0"
              />
            </div>
            
            {/* Search Button */}
            <button className="btn-forest flex items-center justify-center gap-2 px-6 xs:px-8 min-h-[48px] w-full lg:w-auto">
              <Search className="w-4 h-4 xs:w-5 xs:h-5 shrink-0" />
              <span className="text-sm xs:text-base">Search Now</span>
            </button>
          </div>
          
          {/* Quick Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-3 mt-4 xs:mt-6 px-2">
            <span className="text-xs xs:text-sm text-muted-foreground">Popular:</span>
            {["Hospitals", "Restaurants", "Salons", "Gyms"].map((tag) => (
              <span
                key={tag}
                className="px-3 xs:px-4 py-1.5 bg-background rounded-full text-xs xs:text-sm text-midnight/70 border border-border hover:border-forest hover:text-forest transition-colors cursor-pointer min-h-[32px] flex items-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
