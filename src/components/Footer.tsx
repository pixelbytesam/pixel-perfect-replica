import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    About: ["About Us", "Careers", "Press", "Blog"],
    Company: ["Partners", "Investors", "Affiliates", "Contact"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Sitemap"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-midnight pt-16 lg:pt-20 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cloud rounded-lg flex items-center justify-center">
                <span className="text-midnight font-bold text-lg">R</span>
              </div>
              <span className="text-cloud font-semibold text-xl">RankLocal</span>
            </a>
            <p className="text-cloud/60 mb-6 max-w-sm">
              Your trusted platform for comparing and discovering the best local services in your area.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-cloud/10 rounded-full flex items-center justify-center hover:bg-forest transition-colors"
                >
                  <social.icon className="w-5 h-5 text-cloud" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-cloud font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cloud/60 hover:text-cloud transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cloud/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cloud/40 text-sm">
              © 2024 RankLocal. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-cloud/40 hover:text-cloud text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-cloud/40 hover:text-cloud text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-cloud/40 hover:text-cloud text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
