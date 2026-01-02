import { useState, useRef, useEffect } from "react";
import { Menu, X, MapPin, Globe, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";

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

const languages: { code: Language; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'हिंदी', short: 'HI' },
  { code: 'mr', label: 'मराठी', short: 'MR' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.home, href: "/" },
    { label: t.search, href: "/search" },
    { label: t.features, href: "/features" },
    { label: t.about, href: "/about" },
    { label: t.contact, href: "/contact" },
  ];

  const currentLangShort = languages.find(l => l.code === language)?.short || 'EN';

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocationSelect = (loc: string) => {
    setSelectedLocation(loc);
    setShowLocationDropdown(false);
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm py-3">
      <nav className="section-container">
        {/* Desktop Navigation - Rounded Container */}
        <div className="hidden lg:flex items-center justify-between bg-card rounded-full px-6 py-3 border border-border shadow-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-midnight font-semibold text-3xl tracking-tight">RL</span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium text-sm transition-colors ${
                  location.pathname === link.href 
                    ? 'text-midnight border border-border rounded-md px-3 py-1.5' 
                    : 'text-midnight/70 hover:text-midnight'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Location Selector */}
            <div className="relative" ref={locationRef}>
              <button 
                onClick={() => {
                  setShowLocationDropdown(!showLocationDropdown);
                  setShowLanguageDropdown(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight"
              >
                <MapPin size={16} className="text-forest" />
                <span>{selectedLocation === "Select Location" ? t.selectLocation : selectedLocation}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`ml-1 transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {showLocationDropdown && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-card rounded-xl border border-border shadow-lg py-2 z-50">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocationSelect(loc)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        selectedLocation === loc ? 'text-forest font-medium bg-muted' : 'text-midnight'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <button 
                onClick={() => {
                  setShowLanguageDropdown(!showLanguageDropdown);
                  setShowLocationDropdown(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight"
              >
                <Globe size={16} className="text-forest" />
                <span>{currentLangShort}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`ml-1 transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute top-full mt-2 right-0 w-36 bg-card rounded-xl border border-border shadow-lg py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        language === lang.code ? 'text-forest font-medium bg-muted' : 'text-midnight'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Discover Button */}
            <Link 
              to="/search" 
              className="flex items-center gap-2 bg-forest text-white rounded-full px-5 py-2 font-medium text-sm transition-all hover:opacity-90"
            >
              <Search size={16} />
              <span>{t.discover}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between bg-card rounded-full px-4 py-3 border border-border shadow-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-midnight font-semibold text-2xl tracking-tight">RL</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 py-4 px-4 bg-card rounded-2xl border border-border shadow-sm">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium text-sm transition-colors py-2 px-3 rounded-lg ${
                    location.pathname === link.href 
                      ? 'text-midnight bg-muted' 
                      : 'text-midnight/70 hover:text-midnight hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
                {/* Location Selector Mobile */}
                <div className="relative">
                  <button 
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight w-full justify-center"
                  >
                    <MapPin size={16} className="text-forest" />
                    <span>{selectedLocation === "Select Location" ? t.selectLocation : selectedLocation}</span>
                  </button>
                  
                  {showLocationDropdown && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-card rounded-xl border border-border shadow-lg py-2 z-50 max-h-48 overflow-y-auto">
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => handleLocationSelect(loc)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                            selectedLocation === loc ? 'text-forest font-medium bg-muted' : 'text-midnight'
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Language Selector Mobile */}
                <div className="relative">
                  <button 
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight w-full justify-center"
                  >
                    <Globe size={16} className="text-forest" />
                    <span>{languages.find(l => l.code === language)?.label}</span>
                  </button>
                  
                  {showLanguageDropdown && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-card rounded-xl border border-border shadow-lg py-2 z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                            language === lang.code ? 'text-forest font-medium bg-muted' : 'text-midnight'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Discover Button Mobile */}
                <Link 
                  to="/search" 
                  className="flex items-center gap-2 bg-forest text-white rounded-full px-5 py-2.5 font-medium text-sm transition-all hover:opacity-90 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search size={16} />
                  <span>{t.discover}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
