
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Benefits" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-africa-orange">AfriSocks</span>
            <span className="text-sm ml-1 text-africa-brown">Global</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-africa-orange font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
            <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white">
              <a href="#contact">Contact Us</a>
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
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-africa-orange font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white w-full">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
