import categoryHospital from "@/assets/category-hospital.jpg";
import categoryRestaurant from "@/assets/category-restaurant.jpg";
import categorySpa from "@/assets/category-spa.jpg";
import marketImage from "@/assets/market-image.jpg";

const CategoriesSection = () => {
  const categories = [
    { name: "Hospitals", image: categoryHospital },
    { name: "Restaurants", image: categoryRestaurant },
    { name: "Spa & Wellness", image: categorySpa },
    { name: "Markets", image: marketImage },
  ];

  return (
    <section className="py-12 xs:py-16 lg:py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 xs:mb-10 sm:mb-12 gap-4 xs:gap-6">
          <div>
            <h2 className="text-[clamp(1.25rem,4.5vw,2.25rem)] font-bold text-midnight mb-2 xs:mb-4">
              Top Picked Categories for you
            </h2>
            <p className="text-sm xs:text-base text-muted-foreground max-w-xl">
              Explore our most popular service categories and find what you need.
            </p>
          </div>
          <div className="flex -space-x-3 shrink-0">
            <img
              src={categoryHospital}
              alt="Category"
              className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border-2 border-card object-cover"
            />
            <img
              src={categoryRestaurant}
              alt="Category"
              className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border-2 border-card object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl xs:rounded-2xl overflow-hidden cursor-pointer aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
              <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4">
                <h3 className="text-sm xs:text-base lg:text-lg font-semibold text-cloud">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 xs:mt-10">
          <button className="btn-outline flex items-center gap-2 mx-auto min-h-[48px] px-6 xs:px-8 text-sm xs:text-base">
            <span>Discover More</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
