
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { scrollToSection } from "@/utils/scrollUtils";
import { memo } from "react";

const Footer = memo(() => {
  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-africa-orange">AfriSocks</span>
              <span className="text-white">Global</span>
            </h3>
            <p className="mb-6">
              Your trusted partner for sock manufacturing solutions across Africa and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/8618356666977" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="https://linkedin.com/in/jingpan" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" onClick={(e) => handleNavClick("services", e)} className="text-gray-400 hover:text-africa-orange">Sock Machines</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick("services", e)} className="text-gray-400 hover:text-africa-orange">Quality Yarns</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick("services", e)} className="text-gray-400 hover:text-africa-orange">Export Services</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick("services", e)} className="text-gray-400 hover:text-africa-orange">Finished Socks</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick("services", e)} className="text-gray-400 hover:text-africa-orange">Training & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" onClick={(e) => handleNavClick("about", e)} className="text-gray-400 hover:text-africa-orange">About Us</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick("testimonials", e)} className="text-gray-400 hover:text-africa-orange">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">FAQ</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick("contact", e)} className="text-gray-400 hover:text-africa-orange">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">African Regions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">West Africa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">East Africa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">Southern Africa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">North Africa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">Central Africa</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} AfriSocks Global. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-4">
              <a href="https://wa.me/8618356666977" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                +86 18356666977 (China)
              </a>
              <a href="https://linkedin.com/in/jingpan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center">
                <Linkedin className="h-4 w-4 mr-1" />
                Connect with Jing Pan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
