import { useState, useRef, useEffect } from "react";
import { Menu, X, MapPin, Search } from "lucide-react";
import { Link, useLocation as useRouterLocation } from "react-router-dom";
import { useLocation } from "@/contexts/LocationContext";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const locations = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Pune",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Nagpur",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const routerLocation = useRouterLocation();
  const { location, setLocation } = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    setShowLocationDropdown(false);
    toast.success(`Location updated to ${loc}`, {
      description: "Your preferences have been saved.",
      duration: 3000,
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm py-2 xs:py-3">
      <nav className="section-container">
        {/* Desktop Navigation - Rounded Container */}
        <motion.div 
          className="hidden lg:flex items-center justify-between bg-card rounded-full px-4 xl:px-6 py-2.5 xl:py-3 border border-border shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <motion.span 
              className="text-midnight font-semibold text-2xl xl:text-3xl tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RL
            </motion.span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium text-xs xl:text-sm transition-all duration-200 whitespace-nowrap relative ${
                  routerLocation.pathname === link.href 
                    ? 'text-midnight border border-border rounded-md px-2.5 xl:px-3 py-1 xl:py-1.5' 
                    : 'text-midnight/70 hover:text-midnight'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Location Selector */}
            <div className="relative" ref={locationRef}>
              <motion.button 
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-xs xl:text-sm font-medium text-midnight min-h-[40px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin size={14} className="text-forest shrink-0" />
                <span className="hidden xl:inline">{location}</span>
                <span className="xl:hidden">{location === "India" ? "Location" : location}</span>
                <motion.svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  className="ml-0.5 shrink-0"
                  animate={{ rotate: showLocationDropdown ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.button>
              
              <AnimatePresence>
                {showLocationDropdown && (
                  <motion.div 
                    className="absolute top-full mt-2 right-0 w-48 bg-card rounded-xl border border-border shadow-lg py-2 z-50 max-h-64 overflow-y-auto"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {locations.map((loc) => (
                      <motion.button
                        key={loc}
                        onClick={() => handleLocationSelect(loc)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                          location === loc ? 'text-forest font-medium bg-muted' : 'text-midnight'
                        }`}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.1 }}
                      >
                        {loc}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Discover Button */}
            <Link to="/search">
              <motion.div 
                className="flex items-center gap-1.5 xl:gap-2 bg-forest text-white rounded-full px-4 xl:px-5 py-2 font-medium text-xs xl:text-sm transition-all min-h-[40px]"
                whileHover={{ scale: 1.02, opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search size={14} className="shrink-0" />
                <span>Discover</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div 
          className="lg:hidden flex items-center justify-between bg-card rounded-full px-3 xs:px-4 py-2.5 xs:py-3 border border-border shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <span className="text-midnight font-semibold text-xl xs:text-2xl tracking-tight">RL</span>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden mt-2 xs:mt-3 py-3 xs:py-4 px-3 xs:px-4 bg-card rounded-2xl border border-border shadow-sm max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-1.5 xs:gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`font-medium text-sm transition-colors py-2.5 xs:py-2 px-3 rounded-lg min-h-[44px] flex items-center ${
                        routerLocation.pathname === link.href 
                          ? 'text-midnight bg-muted' 
                          : 'text-midnight/70 hover:text-midnight hover:bg-muted'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="flex flex-col gap-2 xs:gap-3 pt-3 xs:pt-4 mt-2 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  {/* Location Selector Mobile */}
                  <div className="relative">
                    <button 
                      onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                      className="flex items-center gap-2 px-4 py-3 xs:py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight w-full justify-center min-h-[44px]"
                    >
                      <MapPin size={16} className="text-forest shrink-0" />
                      <span className="truncate">{location}</span>
                    </button>
                    
                    <AnimatePresence>
                      {showLocationDropdown && (
                        <motion.div 
                          className="absolute top-full mt-2 left-0 right-0 bg-card rounded-xl border border-border shadow-lg py-2 z-50 max-h-48 overflow-y-auto"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {locations.map((loc) => (
                            <button
                              key={loc}
                              onClick={() => handleLocationSelect(loc)}
                              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors min-h-[44px] ${
                                location === loc ? 'text-forest font-medium bg-muted' : 'text-midnight'
                              }`}
                            >
                              {loc}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Discover Button Mobile */}
                  <Link 
                    to="/search" 
                    className="flex items-center gap-2 bg-forest text-white rounded-full px-5 py-3 xs:py-2.5 font-medium text-sm transition-all hover:opacity-90 justify-center min-h-[44px]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Search size={16} className="shrink-0" />
                    <span>Discover</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
