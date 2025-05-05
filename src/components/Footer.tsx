import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
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
            
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-africa-orange">Sock Machines</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-africa-orange">Quality Yarns</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-africa-orange">Export Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-africa-orange">Finished Socks</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-africa-orange">Training & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-africa-orange">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-africa-orange">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-africa-orange">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-africa-orange">Contact Us</a></li>
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
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} AfriSocks Global. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;