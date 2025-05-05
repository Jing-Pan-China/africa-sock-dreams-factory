
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
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white text-lg py-6 px-8">
                <a href="#contact">Start Your Factory</a>
              </Button>
              <Button asChild variant="outline" className="border-africa-brown text-africa-brown hover:bg-africa-brown hover:text-white text-lg py-6 px-8">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12 relative">
            <img 
              src="/lovable-uploads/d230f0c1-c100-4501-8504-b1981ecdc3fd.png" 
              alt="Jing Pan's LinkedIn QR Code" 
              className="rounded-lg shadow-lg mx-auto max-w-[300px]" 
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-africa-brown flex items-center justify-center">
                <Linkedin className="mr-2 text-blue-600" /> Jing Pan's LinkedIn - Welcome to connect!
              </p>
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
