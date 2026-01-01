import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Check, X, ArrowLeft } from "lucide-react";

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

const Compare = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stores: Store[] = location.state?.stores || [];

  if (stores.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold text-midnight mb-4">No stores to compare</h1>
          <p className="text-muted-foreground mb-6">Please select stores from the search page first.</p>
          <button onClick={() => navigate('/search')} className="btn-forest">
            Go to Search
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Find best values for highlighting
  const bestHourlyRate = Math.min(...stores.map(s => s.hourlyRate));
  const bestRating = Math.max(...stores.map(s => s.rating));
  const bestReviews = Math.max(...stores.map(s => s.reviews));
  const bestDistance = Math.min(...stores.map(s => s.distance));

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <Star 
            key={star} 
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 lg:pt-32 pb-16">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <button 
              onClick={() => navigate('/search')}
              className="flex items-center gap-2 text-forest hover:underline mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Search
            </button>
            <h1 className="text-3xl lg:text-4xl font-bold text-midnight">
              Detailed Feature Comparison
            </h1>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-midnight bg-background min-w-[160px]">
                      Attribute
                    </th>
                    {stores.map(store => (
                      <th key={store.id} className="text-left p-4 font-semibold text-midnight min-w-[200px]">
                        {store.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Hourly Rate */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Hourly Rate</td>
                    {stores.map(store => (
                      <td key={store.id} className={`p-4 ${store.hourlyRate === bestHourlyRate ? 'text-forest font-semibold' : 'text-midnight'}`}>
                        ${store.hourlyRate}/hr
                      </td>
                    ))}
                  </tr>

                  {/* Avg. Rating */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Avg. Rating</td>
                    {stores.map(store => (
                      <td key={store.id} className="p-4">
                        <div className="flex items-center gap-2">
                          {renderStars(store.rating)}
                          <span className={`${store.rating === bestRating ? 'text-forest font-semibold' : 'text-midnight'}`}>
                            {store.rating}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Total Reviews */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Total Reviews</td>
                    {stores.map(store => (
                      <td key={store.id} className={`p-4 ${store.reviews === bestReviews ? 'text-forest font-semibold' : 'text-midnight'}`}>
                        {store.reviews}
                      </td>
                    ))}
                  </tr>

                  {/* Distance */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Distance</td>
                    {stores.map(store => (
                      <td key={store.id} className={`p-4 ${store.distance === bestDistance ? 'text-forest font-semibold' : 'text-midnight'}`}>
                        {store.distanceLabel}
                      </td>
                    ))}
                  </tr>

                  {/* Offers */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Offers</td>
                    {stores.map(store => (
                      <td key={store.id} className="p-4">
                        <span className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm text-midnight">
                          {store.offers}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Availability */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Availability</td>
                    {stores.map(store => (
                      <td key={store.id} className={`p-4 ${store.availability.includes('Mon-Fri 8am-5pm') ? 'text-forest font-semibold' : 'text-midnight'}`}>
                        {store.availability}
                      </td>
                    ))}
                  </tr>

                  {/* Services */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Services</td>
                    {stores.map(store => (
                      <td key={store.id} className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {store.services.map(service => (
                            <span key={service} className="inline-block px-2 py-1 bg-background border border-border rounded-full text-xs text-midnight">
                              {service}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Insurance/Cert. */}
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-midnight bg-background">Insurance/Cert.</td>
                    {stores.map(store => (
                      <td key={store.id} className="p-4">
                        {store.insurance ? (
                          <span className="flex items-center gap-1 text-forest">
                            <Check className="w-4 h-4" />
                            Yes
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-500">
                            <X className="w-4 h-4" />
                            No
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Sample Photos */}
                  <tr>
                    <td className="p-4 font-medium text-midnight bg-background">Sample Photos</td>
                    {stores.map(store => (
                      <td key={store.id} className="p-4">
                        <img 
                          src={store.image} 
                          alt={store.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-border"
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mt-8"
          >
            <button 
              onClick={() => navigate('/search')}
              className="px-6 py-3 border border-border rounded-full font-medium text-midnight hover:bg-card transition-colors"
            >
              Compare More
            </button>
            <button className="btn-forest">
              Contact Best Match
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compare;
