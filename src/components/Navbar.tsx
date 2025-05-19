
import { Button } from "@/components/ui/button";
import { useState, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { scrollToSection } from "@/utils/scrollUtils";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);
  
  const handleNavClick = useCallback((sectionId: string) => {
    // First scroll to section
    scrollToSection(sectionId);
    
    // Then update URL with the hash fragment
    const pathname = location.pathname.split('#')[0]; // Remove any existing hash
    navigate(`${pathname}#${sectionId}`, { replace: true });
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  }, [navigate, location.pathname]);

  const menuItems = [
    { id: "services", label: "Services" },
    { id: "benefits", label: "Benefits" },
    { id: "about", label: "About us" },
    // Removed the Contact item from here
  ];

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center"
            onClick={(e) => {
              const isHomePage = window.location.pathname.endsWith('/en') || 
                              window.location.pathname.endsWith('/sw') || 
                              window.location.pathname.endsWith('/fr') || 
                              window.location.pathname === '/';
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Remove hash from URL when scrolling to top
                const pathname = location.pathname.split('#')[0];
                navigate(pathname, { replace: true });
              }
            }}
          >
            <span className="text-2xl font-bold text-africa-orange">AfriSocks</span>
            <span className="text-sm ml-1 text-africa-brown">Global</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-africa-orange font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitcher />
            <Button 
              className="bg-africa-orange hover:bg-africa-terracotta text-white"
              onClick={() => handleNavClick("contact")}
            >
              Contact Us
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
        <div className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-700 hover:text-africa-orange font-medium py-2 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-africa-orange hover:bg-africa-terracotta text-white w-full"
                onClick={() => handleNavClick("contact")}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
