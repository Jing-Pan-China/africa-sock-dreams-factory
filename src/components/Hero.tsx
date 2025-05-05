
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-b from-africa-beige to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-africa-brown leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white text-lg py-6 px-8">
                <a href="#contact">{t("hero.cta.factory")}</a>
              </Button>
              <Button asChild variant="outline" className="border-africa-brown text-africa-brown hover:bg-africa-brown hover:text-white text-lg py-6 px-8">
                <a href="#services">{t("hero.cta.services")}</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png" 
              alt="Colorful rainbow socks on display, showcasing various patterns and designs for sock manufacturing" 
              className="rounded-lg shadow-lg max-w-full lg:max-w-md h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">20+</p>
            <p className="text-gray-600">{t("hero.stats.experience")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">10+</p>
            <p className="text-gray-600">{t("hero.stats.countries")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">16+</p>
            <p className="text-gray-600">{t("hero.stats.factories")}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <p className="text-2xl md:text-3xl font-bold text-africa-orange">98%</p>
            <p className="text-gray-600">{t("hero.stats.satisfaction")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
