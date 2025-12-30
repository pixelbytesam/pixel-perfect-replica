import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Home as HomeIcon, Search as SearchIcon, Filter, Star, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import store1 from "@/assets/store-1.jpg";

const Search = () => {
  const [selectedStores, setSelectedStores] = useState<number[]>([]);

  const stores = [
    { id: 1, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 2, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 3, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 4, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 5, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 6, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 7, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 8, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 },
    { id: 9, name: "The Green Bean Cafe", description: "Cozy spot for organic coffee and homemade pastries. Perfect for remote work.", distance: "100 Meter", time: "5 min", rating: 4.5 }
  ];

  const toggleStore = (id: number) => {
    if (selectedStores.includes(id)) {
      setSelectedStores(selectedStores.filter(s => s !== id));
    } else if (selectedStores.length < 3) {
      setSelectedStores([...selectedStores, id]);
    }
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
                  className="flex-1 bg-transparent outline-none text-midnight placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-forest/10 rounded-full">
                <HomeIcon className="w-5 h-5 text-forest" />
                <input
                  type="text"
                  placeholder="Enter Category"
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
      <section className="py-8 lg:py-12">
        <div className="section-container">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8 bg-card p-4 rounded-xl">
            <p className="font-semibold text-midnight">8 Results Found</p>
            <button className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:bg-card transition-colors">
              <span className="text-sm font-medium">Filter</span>
              <Filter className="w-4 h-4" />
            </button>
          </div>

          {/* Store Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
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
                    src={store1} 
                    alt={store.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full text-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{store.rating}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-midnight mb-2">{store.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{store.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{store.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{store.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex-1 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-background transition-colors">
                      View Details
                    </button>
                    <button 
                      onClick={() => toggleStore(store.id)}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedStores.includes(store.id) 
                          ? 'bg-forest text-white' 
                          : 'bg-midnight text-white hover:bg-midnight/90'
                      }`}
                    >
                      {selectedStores.includes(store.id) ? 'Selected' : 'Add to Compare'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compare Bar */}
          {selectedStores.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 lg:static lg:mt-8 lg:rounded-xl lg:border"
            >
              <div className="section-container flex items-center justify-between">
                <p className="font-semibold text-midnight">{selectedStores.length} Shops Selected</p>
                <button className="btn-forest flex items-center gap-2">
                  Final Compare
                  <TrendingUp className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
