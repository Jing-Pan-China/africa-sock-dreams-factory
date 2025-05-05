
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Hero = () => {
  return <div className="relative bg-gradient-to-b from-africa-beige to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-africa-brown leading-tight">
              Building Africa's Sock Manufacturing Future
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Your one-stop global partner for sock factory solutions - from machinery and yarns to export services and high-quality, cost-effective sock products.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white text-lg py-6 px-8">
                <a href="#contact">Start Your Factory</a>
              </Button>
              <Button asChild variant="outline" className="border-africa-brown text-africa-brown hover:bg-africa-brown hover:text-white text-lg py-6 px-8">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <a href="https://www.linkedin.com/in/jing-pan" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                <Linkedin className="h-5 w-5" />
                <span>Connect with Jing Pan on LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1586438506563-ebdf96675653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" alt="Modern sock factory equipment" className="rounded-lg shadow-lg w-full object-cover" />
              <div className="absolute -bottom-10 -right-5 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-center mb-2">
                  <img src="lovable-uploads/36815fa1-0c9b-4cca-a2ee-92b9675e83b4.png" alt="Jing Pan LinkedIn QR Code" className="w-32 h-32 mx-auto" />
                  <p className="text-sm font-medium text-gray-700 mt-2">Scan to connect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">20+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">10+</p>
            <p className="text-gray-600">African Countries</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">200+</p>
            <p className="text-gray-600">Factories Built</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">98%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
