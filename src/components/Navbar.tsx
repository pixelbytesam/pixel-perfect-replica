import { useState } from "react";
import { Menu, X, MapPin, Globe, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Search", href: "/search" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

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
                key={link.label}
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
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight">
              <MapPin size={16} className="text-forest" />
              <span>{selectedLocation}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Language Selector */}
            <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight">
              <Globe size={16} className="text-forest" />
              <span>{selectedLanguage}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Discover Button */}
            <Link 
              to="/search" 
              className="flex items-center gap-2 bg-forest text-white rounded-full px-5 py-2 font-medium text-sm transition-all hover:opacity-90"
            >
              <Search size={16} />
              <span>Discover</span>
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
                  key={link.label}
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
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm font-medium text-midnight w-full justify-center">
                  <MapPin size={16} className="text-forest" />
                  <span>{selectedLocation}</span>
                </button>

                {/* Discover Button Mobile */}
                <Link 
                  to="/search" 
                  className="flex items-center gap-2 bg-forest text-white rounded-full px-5 py-2.5 font-medium text-sm transition-all hover:opacity-90 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Search size={16} />
                  <span>Discover</span>
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
