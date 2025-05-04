
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-africa-orange">
              AfriSocks<span className="text-africa-brown">Global</span>
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="font-medium text-gray-700 hover:text-africa-orange transition-colors">
              Services
            </a>
            <a href="#benefits" className="font-medium text-gray-700 hover:text-africa-orange transition-colors">
              Benefits
            </a>
            <a href="#about" className="font-medium text-gray-700 hover:text-africa-orange transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-africa-orange transition-colors">
              Testimonials
            </a>
            <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              className="font-medium text-gray-700 hover:text-africa-orange transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="font-medium text-gray-700 hover:text-africa-orange transition-colors"
              onClick={toggleMenu}
            >
              Benefits
            </a>
            <a
              href="#about"
              className="font-medium text-gray-700 hover:text-africa-orange transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#testimonials"
              className="font-medium text-gray-700 hover:text-africa-orange transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <Button asChild className="w-full bg-africa-orange hover:bg-africa-terracotta text-white">
              <a href="#contact" onClick={toggleMenu}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
