import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    About: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Company: [
      { label: "Partners", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Affiliates", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
    Legal: [
      { label: "Terms of Service", href: "/terms-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookies-policy" },
      { label: "Sitemap", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-midnight pt-12 xs:pt-16 lg:pt-20 pb-6 xs:pb-8">
      <div className="section-container">
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 xs:gap-8 lg:gap-12 mb-10 xs:mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-3 xs:mb-4">
              <div className="w-7 h-7 xs:w-8 xs:h-8 bg-cloud rounded-lg flex items-center justify-center shrink-0">
                <span className="text-midnight font-bold text-base xs:text-lg">R</span>
              </div>
              <span className="text-cloud font-semibold text-lg xs:text-xl">RankLocal</span>
            </Link>
            <p className="text-cloud/60 mb-4 xs:mb-6 max-w-sm text-sm xs:text-base leading-relaxed">
              Your trusted platform for comparing and discovering the best local services in your area.
            </p>
            <div className="flex items-center gap-3 xs:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 xs:w-10 xs:h-10 bg-cloud/10 rounded-full flex items-center justify-center hover:bg-forest transition-colors min-h-[44px] min-w-[44px]"
                >
                  <social.icon className="w-4 h-4 xs:w-5 xs:h-5 text-cloud" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-cloud font-semibold mb-3 xs:mb-4 text-sm xs:text-base">{title}</h4>
              <ul className="space-y-2 xs:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-cloud/60 hover:text-cloud transition-colors text-sm xs:text-base"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-cloud/60 hover:text-cloud transition-colors text-sm xs:text-base"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 xs:pt-8 border-t border-cloud/10">
          <div className="flex flex-col xs:flex-row items-center justify-between gap-3 xs:gap-4">
            <p className="text-cloud/40 text-xs xs:text-sm text-center xs:text-left">
              © 2026 RankLocal. All rights reserved.
            </p>
            <div className="flex items-center gap-4 xs:gap-6">
              <Link to="/terms-conditions" className="text-cloud/40 hover:text-cloud text-xs xs:text-sm transition-colors">
                Terms
              </Link>
              <Link to="/privacy-policy" className="text-cloud/40 hover:text-cloud text-xs xs:text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/cookies-policy" className="text-cloud/40 hover:text-cloud text-xs xs:text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
