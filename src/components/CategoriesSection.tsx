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
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-midnight mb-4">
              Top Picked Categories for you
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Explore our most popular service categories and find what you need.
            </p>
          </div>
          <div className="flex -space-x-3">
            <img
              src={categoryHospital}
              alt="Category"
              className="w-10 h-10 rounded-full border-2 border-card object-cover"
            />
            <img
              src={categoryRestaurant}
              alt="Category"
              className="w-10 h-10 rounded-full border-2 border-card object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-cloud">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="btn-outline flex items-center gap-2 mx-auto">
            <span>Discover More</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
