import { MapPin, Grid3X3, Search } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
            Discover Trusted Local Services Instantly
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Search by location or category to find the best services near you
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-3 shadow-card flex flex-col lg:flex-row gap-3">
            {/* Location Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border">
              <MapPin className="w-5 h-5 text-forest" />
              <input
                type="text"
                placeholder="Enter Location"
                className="flex-1 bg-transparent outline-none text-midnight placeholder:text-muted-foreground"
              />
            </div>
            
            {/* Category Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border">
              <Grid3X3 className="w-5 h-5 text-forest" />
              <input
                type="text"
                placeholder="Select Category"
                className="flex-1 bg-transparent outline-none text-midnight placeholder:text-muted-foreground"
              />
            </div>
            
            {/* Search Button */}
            <button className="btn-forest flex items-center justify-center gap-2 px-8">
              <Search className="w-5 h-5" />
              <span>Search Now</span>
            </button>
          </div>
          
          {/* Quick Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Hospitals", "Restaurants", "Salons", "Gyms"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-background rounded-full text-sm text-midnight/70 border border-border hover:border-forest hover:text-forest transition-colors cursor-pointer"
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
