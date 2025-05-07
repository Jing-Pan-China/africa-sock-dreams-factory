
import { 
  Settings, 
  Package, 
  Globe, 
  Truck 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
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

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
