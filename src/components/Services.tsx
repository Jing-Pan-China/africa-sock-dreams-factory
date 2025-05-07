
import { Settings, Package, Globe, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const serviceItems = [
    {
      icon: Settings,
      title: t("services.machines.title"),
      description: t("services.machines.description"),
      color: "text-blue-600",
      bg: "bg-blue-50",
      ariaLabel: "Sock knitting machinery"
    },
    {
      icon: Package,
      title: t("services.yarns.title"),
      description: t("services.yarns.description"),
      color: "text-green-600",
      bg: "bg-green-50",
      ariaLabel: "Premium yarns for sock production"
    },
    {
      icon: Globe,
      title: t("services.export.title"),
      description: t("services.export.description"),
      color: "text-purple-600",
      bg: "bg-purple-50",
      ariaLabel: "Export services for sock manufacturers"
    },
    {
      icon: Truck,
      title: t("services.socks.title"),
      description: t("services.socks.description"),
      color: "text-africa-orange",
      bg: "bg-africa-beige",
      ariaLabel: "Ready-made sock products"
    }
  ];

  // Animation variants for staggered card appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          variants={containerVariants}
          animate={isVisible ? "visible" : "hidden"}
        >
          {serviceItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader className={`${item.bg} rounded-t-lg`}>
                  <div className={`${item.color} p-3 inline-block rounded-full mb-4`} aria-hidden="true">
                    <item.icon size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-gray-600 text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
