
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'en';

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper function to create section links that work with the current language
  const createSectionLink = (section: string) => `/${currentLang}${section}`;

  const menuItems = [
    { href: createSectionLink("#services"), label: "Services" },
    { href: createSectionLink("#benefits"), label: "Benefits" },
    { href: createSectionLink("#about"), label: "About us" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={`/${currentLang}`} className="flex items-center">
            <span className="text-2xl font-bold text-africa-orange">AfriSocks</span>
            <span className="text-sm ml-1 text-africa-brown">Global</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-africa-orange font-medium transition-colors"
                onClick={(e) => {
                  // Handle section scrolling without page reload
                  if (item.href.includes('#')) {
                    e.preventDefault();
                    const sectionId = item.href.split('#')[1];
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
            <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white">
              <a 
                href={`/${currentLang}#contact`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-africa-orange"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-africa-orange font-medium py-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (item.href.includes('#')) {
                      const sectionId = item.href.split('#')[1];
                      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white w-full">
                <a 
                  href={`/${currentLang}#contact`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
