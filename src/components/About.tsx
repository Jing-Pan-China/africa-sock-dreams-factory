
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img 
              src="/lovable-uploads/d230f0c1-c100-4501-8504-b1981ecdc3fd.png" 
              alt="Jing Pan's LinkedIn QR Code - Scan to connect with Jing Pan on LinkedIn" 
              className="rounded-lg shadow-lg mx-auto max-w-[300px]" 
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-africa-brown flex items-center justify-center">
                <Linkedin className="mr-2 text-blue-600" aria-hidden="true" /> 
                Jing Pan's LinkedIn - Welcome to connect!
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t("about.description1")}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t("about.description2")}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-africa-beige flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                  <span className="font-bold text-africa-orange">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t("about.consultation")}</h4>
                  <p className="text-gray-600">{t("about.consultation.description")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-africa-beige flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                  <span className="font-bold text-africa-orange">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t("about.support")}</h4>
                  <p className="text-gray-600">{t("about.support.description")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-africa-beige flex items-center justify-center mr-4 flex-shrink-0" aria-hidden="true">
                  <span className="font-bold text-africa-orange">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t("about.partnership")}</h4>
                  <p className="text-gray-600">{t("about.partnership.description")}</p>
                </div>
              </div>
            </div>
            <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white px-8 py-6 text-lg">
              <a href="#contact">{t("about.cta")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
