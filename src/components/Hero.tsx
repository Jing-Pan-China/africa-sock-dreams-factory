
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const Hero = () => {
  const { t, isLoading } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png";
    img.onload = () => setImageLoaded(true);
  }, []);
  
  return (
    <div className="relative bg-gradient-to-b from-africa-beige to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-africa-brown leading-tight">
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <span>Building Africa's Sock Manufacturing Future</span>
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              ) : (
                t("hero.title")
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {isLoading ? "Your one-stop global partner for sock factory solutions..." : t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white text-lg py-6 px-8">
                <a href="#contact">{isLoading ? "Start Your Factory" : t("hero.cta.factory")}</a>
              </Button>
              <Button asChild variant="outline" className="border-africa-brown text-africa-brown hover:bg-africa-brown hover:text-white text-lg py-6 px-8">
                <a href="#services">{isLoading ? "Explore Services" : t("hero.cta.services")}</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className={`transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} style={{minHeight: "300px"}}>
              <img 
                src="/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png" 
                alt="Colorful rainbow socks on display, showcasing various patterns and designs for sock manufacturing" 
                className="rounded-lg shadow-lg max-w-full lg:max-w-md h-auto"
                width="600"
                height="400"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">20+</p>
            <p className="text-gray-600">{isLoading ? "Years Experience" : t("hero.stats.experience")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">10+</p>
            <p className="text-gray-600">{isLoading ? "African Countries" : t("hero.stats.countries")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">16+</p>
            <p className="text-gray-600">{isLoading ? "Factories Built" : t("hero.stats.factories")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">98%</p>
            <p className="text-gray-600">{isLoading ? "Client Satisfaction" : t("hero.stats.satisfaction")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
