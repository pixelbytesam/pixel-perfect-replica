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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm py-2 xs:py-3">
      <nav className="section-container">
        {/* Desktop Navigation - Rounded Container */}
        <div className="hidden lg:flex items-center justify-between bg-card rounded-full px-4 xl:px-6 py-2.5 xl:py-3 border border-border shadow-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <span className="text-midnight font-semibold text-2xl xl:text-3xl tracking-tight">RL</span>
          </Link>

          {/* Center Navigation */}
          <div className="flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium text-xs xl:text-sm transition-colors whitespace-nowrap ${
                  location.pathname === link.href 
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
              <button 
                onClick={() => {
                  setShowLocationDropdown(!showLocationDropdown);
                  setShowLanguageDropdown(false);
                }}
                className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-xs xl:text-sm font-medium text-midnight min-h-[40px]"
              >
                <MapPin size={14} className="text-forest shrink-0" />
                <span className="hidden xl:inline">{selectedLocation === "Select Location" ? t.selectLocation : selectedLocation}</span>
                <span className="xl:hidden">{selectedLocation === "Select Location" ? "Location" : selectedLocation}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`ml-0.5 transition-transform shrink-0 ${showLocationDropdown ? 'rotate-180' : ''}`}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {showLocationDropdown && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-card rounded-xl border border-border shadow-lg py-2 z-50 max-h-64 overflow-y-auto">
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
                className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-xs xl:text-sm font-medium text-midnight min-h-[40px]"
              >
                <Globe size={14} className="text-forest shrink-0" />
                <span>{currentLangShort}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`ml-0.5 transition-transform shrink-0 ${showLanguageDropdown ? 'rotate-180' : ''}`}>
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
              className="flex items-center gap-1.5 xl:gap-2 bg-forest text-white rounded-full px-4 xl:px-5 py-2 font-medium text-xs xl:text-sm transition-all hover:opacity-90 min-h-[40px]"
            >
              <Search size={14} className="shrink-0" />
              <span>{t.discover}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between bg-card rounded-full px-3 xs:px-4 py-2.5 xs:py-3 border border-border shadow-sm">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <span className="text-midnight font-semibold text-xl xs:text-2xl tracking-tight">RL</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 xs:mt-3 py-3 xs:py-4 px-3 xs:px-4 bg-card rounded-2xl border border-border shadow-sm max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5 xs:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium text-sm transition-colors py-2.5 xs:py-2 px-3 rounded-lg min-h-[44px] flex items-center ${
                    location.pathname === link.href 
                      ? 'text-midnight bg-muted' 
                      : 'text-midnight/70 hover:text-midnight hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex flex-col gap-2 xs:gap-3 pt-3 xs:pt-4 mt-2 border-t border-border">
                {/* Location Selector Mobile */}
                <div className="relative">
                  <button 
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                    className="flex items-center gap-2 px-4 py-3 xs:py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight w-full justify-center min-h-[44px]"
                  >
                    <MapPin size={16} className="text-forest shrink-0" />
                    <span className="truncate">{selectedLocation === "Select Location" ? t.selectLocation : selectedLocation}</span>
                  </button>
                  
                  {showLocationDropdown && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-card rounded-xl border border-border shadow-lg py-2 z-50 max-h-48 overflow-y-auto">
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => handleLocationSelect(loc)}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors min-h-[44px] ${
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
                    className="flex items-center gap-2 px-4 py-3 xs:py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight w-full justify-center min-h-[44px]"
                  >
                    <Globe size={16} className="text-forest shrink-0" />
                    <span>{languages.find(l => l.code === language)?.label}</span>
                  </button>
                  
                  {showLanguageDropdown && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-card rounded-xl border border-border shadow-lg py-2 z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors min-h-[44px] ${
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
                  className="flex items-center gap-2 bg-forest text-white rounded-full px-5 py-3 xs:py-2.5 font-medium text-sm transition-all hover:opacity-90 justify-center min-h-[44px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search size={16} className="shrink-0" />
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
