import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Home as HomeIcon, Search as SearchIcon, Filter, Star, Clock, TrendingUp, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import store1 from "@/assets/store-1.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface Store {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string;
  distance: number;
  distanceLabel: string;
  time: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  availability: string;
  isOpen: boolean;
  services: string[];
  offers: string;
  insurance: boolean;
  image: string;
}

const Search = () => {
  const navigate = useNavigate();
  const [selectedStores, setSelectedStores] = useState<number[]>([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [detailsStore, setDetailsStore] = useState<Store | null>(null);
  const [filters, setFilters] = useState({
    maxDistance: 10,
    minRating: 0,
    openNow: false,
    availability: "" as string
  });

  const allStores: Store[] = [
    { id: 1, name: "Green & Grow Landscaping", category: "Landscaping", location: "Brooklyn", description: "Professional lawn care and garden design services. Expert team with 10+ years experience.", distance: 2.1, distanceLabel: "2.1 mi", time: "5 min", rating: 4.8, reviews: 120, hourlyRate: 65, availability: "Mon-Fri 8am-5pm", isOpen: true, services: ["Lawn Care", "Garden Design", "Tree Trimming"], offers: "10% Off New Clients", insurance: true, image: store1 },
    { id: 2, name: "Urban Oasis Designs", category: "Landscaping", location: "Manhattan", description: "Modern landscape architecture for urban spaces. Sustainable and eco-friendly solutions.", distance: 3.5, distanceLabel: "3.5 mi", time: "10 min", rating: 4.5, reviews: 85, hourlyRate: 80, availability: "Mon-Sat 9am-6pm", isOpen: true, services: ["Landscape Architecture", "Hardscaping", "Lighting"], offers: "Free Consultation", insurance: true, image: store1 },
    { id: 3, name: "Leafy Lane Landscapes", category: "Landscaping", location: "Queens", description: "Affordable landscaping for residential and commercial properties. Quick turnaround.", distance: 1.8, distanceLabel: "1.8 mi", time: "4 min", rating: 4.2, reviews: 60, hourlyRate: 55, availability: "Weekdays 7am-4pm", isOpen: false, services: ["Weeding", "Planting", "Small Repairs"], offers: "20% Off First Service", insurance: false, image: store1 },
    { id: 4, name: "EcoScape Services", category: "Landscaping", location: "Brooklyn", description: "Sustainable landscaping solutions with focus on native plants and water conservation.", distance: 4.0, distanceLabel: "4.0 mi", time: "12 min", rating: 4.7, reviews: 95, hourlyRate: 70, availability: "Flexible Scheduling", isOpen: true, services: ["Sustainable Landscaping", "Irrigation", "Consultations"], offers: "Seasonal Discounts", insurance: true, image: store1 },
    { id: 5, name: "The Green Bean Cafe", category: "Restaurant", location: "Manhattan", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: 0.5, distanceLabel: "0.5 mi", time: "2 min", rating: 4.6, reviews: 200, hourlyRate: 0, availability: "Daily 7am-8pm", isOpen: true, services: ["Coffee", "Pastries", "Lunch"], offers: "Happy Hour 3-5pm", insurance: true, image: store1 },
    { id: 6, name: "Wellness Spa Center", category: "Spa", location: "Brooklyn", description: "Full-service spa with massage, facials, and wellness treatments.", distance: 2.5, distanceLabel: "2.5 mi", time: "8 min", rating: 4.9, reviews: 150, hourlyRate: 90, availability: "Tue-Sun 10am-8pm", isOpen: true, services: ["Massage", "Facials", "Wellness"], offers: "First Visit 15% Off", insurance: true, image: store1 },
    { id: 7, name: "City Gym & Fitness", category: "Gym", location: "Queens", description: "Modern gym with state-of-the-art equipment and personal training.", distance: 1.2, distanceLabel: "1.2 mi", time: "4 min", rating: 4.4, reviews: 180, hourlyRate: 50, availability: "24/7", isOpen: true, services: ["Weights", "Cardio", "Classes"], offers: "No Signup Fee", insurance: true, image: store1 },
    { id: 8, name: "Pet Care Plus", category: "Pet Services", location: "Manhattan", description: "Complete pet care including grooming, boarding, and veterinary services.", distance: 3.0, distanceLabel: "3.0 mi", time: "10 min", rating: 4.7, reviews: 110, hourlyRate: 45, availability: "Mon-Sat 8am-7pm", isOpen: true, services: ["Grooming", "Boarding", "Vet"], offers: "Bundle Savings", insurance: true, image: store1 },
    { id: 9, name: "Auto Care Express", category: "Automotive", location: "Brooklyn", description: "Quick and reliable auto repair and maintenance services.", distance: 5.0, distanceLabel: "5.0 mi", time: "15 min", rating: 4.3, reviews: 75, hourlyRate: 85, availability: "Mon-Fri 7am-6pm", isOpen: false, services: ["Oil Change", "Repairs", "Inspection"], offers: "Free Diagnostics", insurance: true, image: store1 }
  ];

  const filteredStores = useMemo(() => {
    return allStores.filter(store => {
      const matchesLocation = !locationQuery || 
        store.location.toLowerCase().includes(locationQuery.toLowerCase());
      const matchesCategory = !categoryQuery || 
        store.category.toLowerCase().includes(categoryQuery.toLowerCase()) ||
        store.name.toLowerCase().includes(categoryQuery.toLowerCase());
      const matchesDistance = store.distance <= filters.maxDistance;
      const matchesRating = store.rating >= filters.minRating;
      const matchesOpenNow = !filters.openNow || store.isOpen;
      const matchesAvailability = !filters.availability || 
        store.availability.toLowerCase().includes(filters.availability.toLowerCase());
      
      return matchesLocation && matchesCategory && matchesDistance && matchesRating && matchesOpenNow && matchesAvailability;
    });
  }, [locationQuery, categoryQuery, filters]);

  const toggleStore = (id: number) => {
    if (selectedStores.includes(id)) {
      setSelectedStores(selectedStores.filter(s => s !== id));
    } else if (selectedStores.length < 4) {
      setSelectedStores([...selectedStores, id]);
    }
  };

  const getSelectedStoreObjects = () => {
    return allStores.filter(store => selectedStores.includes(store.id));
  };

  const handleFinalCompare = () => {
    const selectedData = getSelectedStoreObjects();
    navigate('/compare', { state: { stores: selectedData } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-8">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest rounded-full text-sm font-medium mb-6">
              Find Your Next Local Favorite
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-midnight mb-4">
              Discover Trusted Local Services Instantly
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Search by location and category to find verified services near you.
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-forest/10 rounded-full">
                <MapPin className="w-5 h-5 text-forest" />
                <input
                  type="text"
                  placeholder="Enter Location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-midnight placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-forest/10 rounded-full">
                <HomeIcon className="w-5 h-5 text-forest" />
                <input
                  type="text"
                  placeholder="Enter Category"
                  value={categoryQuery}
                  onChange={(e) => setCategoryQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-midnight placeholder:text-muted-foreground"
                />
              </div>
              
              <button className="btn-forest flex items-center justify-center gap-2 px-8 rounded-full">
                <SearchIcon className="w-5 h-5" />
                <span>Find Now</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 lg:py-12 pb-32">
        <div className="section-container">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8 bg-card p-4 rounded-xl">
            <p className="font-semibold text-midnight">{filteredStores.length} Results Found</p>
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:bg-card transition-colors">
                  <span className="text-sm font-medium">Filter</span>
                  <Filter className="w-4 h-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-card border border-border z-50" align="end">
                <div className="space-y-4">
                  <h4 className="font-semibold text-midnight">Filters</h4>
                  
                  {/* Distance Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-midnight">Max Distance: {filters.maxDistance} mi</label>
                    <Slider
                      value={[filters.maxDistance]}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, maxDistance: value[0] }))}
                      max={20}
                      min={1}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Rating Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-midnight">Min Rating: {filters.minRating}</label>
                    <Slider
                      value={[filters.minRating]}
                      onValueChange={(value) => setFilters(prev => ({ ...prev, minRating: value[0] }))}
                      max={5}
                      min={0}
                      step={0.5}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Open Now Filter */}
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="openNow"
                      checked={filters.openNow}
                      onCheckedChange={(checked) => setFilters(prev => ({ ...prev, openNow: checked as boolean }))}
                    />
                    <label htmlFor="openNow" className="text-sm font-medium text-midnight cursor-pointer">
                      Open Now Only
                    </label>
                  </div>
                  
                  {/* Availability Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-midnight">Availability</label>
                    <input
                      type="text"
                      placeholder="e.g., Mon-Fri, 24/7"
                      value={filters.availability}
                      onChange={(e) => setFilters(prev => ({ ...prev, availability: e.target.value }))}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm outline-none focus:border-forest"
                    />
                  </div>
                  
                  {/* Reset Filters */}
                  <button
                    onClick={() => setFilters({ maxDistance: 10, minRating: 0, openNow: false, availability: "" })}
                    className="w-full py-2 text-sm font-medium text-forest hover:bg-forest/10 rounded-lg transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Store Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-2xl overflow-hidden border border-border"
              >
                <div className="relative">
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{store.rating}</span>
                  </div>
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${store.isOpen ? 'bg-forest text-white' : 'bg-muted-foreground text-white'}`}>
                    {store.isOpen ? 'Open' : 'Closed'}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-midnight mb-1">{store.name}</h3>
                  <p className="text-sm text-forest mb-2">{store.category}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{store.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{store.distanceLabel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{store.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setDetailsStore(store)}
                      className="flex-1 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-background transition-colors"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => toggleStore(store.id)}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1 ${
                        selectedStores.includes(store.id) 
                          ? 'bg-forest text-white' 
                          : 'bg-midnight text-white hover:bg-midnight/90'
                      }`}
                    >
                      {selectedStores.includes(store.id) ? (
                        <>
                          <Check className="w-4 h-4" />
                          Selected
                        </>
                      ) : 'Add to Compare'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No stores found matching your criteria.</p>
              <button
                onClick={() => {
                  setLocationQuery("");
                  setCategoryQuery("");
                  setFilters({ maxDistance: 10, minRating: 0, openNow: false, availability: "" });
                }}
                className="mt-4 text-forest font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Store Details Modal */}
      <Dialog open={!!detailsStore} onOpenChange={() => setDetailsStore(null)}>
        <DialogContent className="max-w-lg bg-card border border-border">
          <DialogHeader>
            <DialogTitle className="text-midnight">{detailsStore?.name}</DialogTitle>
          </DialogHeader>
          {detailsStore && (
            <div className="space-y-4">
              <img 
                src={detailsStore.image} 
                alt={detailsStore.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-forest/10 text-forest rounded-full text-xs font-medium">
                    {detailsStore.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${detailsStore.isOpen ? 'bg-forest/10 text-forest' : 'bg-muted text-muted-foreground'}`}>
                    {detailsStore.isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{detailsStore.description}</p>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-background p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-midnight">{detailsStore.rating}</span>
                      <span className="text-xs text-muted-foreground">({detailsStore.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Distance</p>
                    <p className="font-semibold text-midnight">{detailsStore.distanceLabel}</p>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Hourly Rate</p>
                    <p className="font-semibold text-midnight">${detailsStore.hourlyRate}/hr</p>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Availability</p>
                    <p className="font-semibold text-midnight text-xs">{detailsStore.availability}</p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {detailsStore.services.map(service => (
                      <span key={service} className="px-2 py-1 bg-background border border-border rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-1">Special Offer</p>
                  <span className="px-3 py-1 bg-forest/10 text-forest rounded-full text-sm font-medium">
                    {detailsStore.offers}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Sticky Compare Bar */}
      <AnimatePresence>
        {selectedStores.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50 shadow-lg"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 overflow-x-auto">
                <p className="font-semibold text-midnight whitespace-nowrap">{selectedStores.length} Shops Selected</p>
                <div className="flex items-center gap-2">
                  {getSelectedStoreObjects().map(store => (
                    <div key={store.id} className="flex items-center gap-2 bg-background px-3 py-1.5 rounded-full border border-border">
                      <span className="text-sm text-midnight whitespace-nowrap">{store.name}</span>
                      <button 
                        onClick={() => toggleStore(store.id)}
                        className="text-muted-foreground hover:text-midnight"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={handleFinalCompare}
                className="btn-forest flex items-center gap-2 whitespace-nowrap"
              >
                Final Compare
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Search;
