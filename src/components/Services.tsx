
import { 
  Settings, 
  Package, 
  Globe, 
  Truck,
  Loader2
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { memo } from "react";

const Services = memo(() => {
  const { t, isLoading } = useLanguage();
  
  const serviceItems = [
    {
      icon: Settings,
      title: isLoading ? "Sock Machines" : t("services.machines.title"),
      description: isLoading ? "State-of-the-art sock knitting machinery for all production scales." : t("services.machines.description"),
      color: "text-blue-600",
      bg: "bg-blue-50",
      ariaLabel: "Sock knitting machinery"
    },
    {
      icon: Package,
      title: isLoading ? "Quality Yarns" : t("services.yarns.title"),
      description: isLoading ? "Premium yarns sourced globally for sock production." : t("services.yarns.description"),
      color: "text-green-600",
      bg: "bg-green-50",
      ariaLabel: "Premium yarns for sock production"
    },
    {
      icon: Globe,
      title: isLoading ? "Export Services" : t("services.export.title"),
      description: isLoading ? "Comprehensive export solutions for sock manufacturers." : t("services.export.description"),
      color: "text-purple-600",
      bg: "bg-purple-50",
      ariaLabel: "Export services for sock manufacturers"
    },
    {
      icon: Truck,
      title: isLoading ? "Finished Socks" : t("services.socks.title"),
      description: isLoading ? "High-quality sock products in various styles and materials." : t("services.socks.description"),
      color: "text-africa-orange",
      bg: "bg-africa-beige",
      ariaLabel: "Ready-made sock products"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-4 relative">
            {isLoading ? (
              <div className="inline-flex items-center">
                Our Comprehensive Sock Solutions
                <Loader2 className="ml-2 w-6 h-6 animate-spin" />
              </div>
            ) : (
              t("services.title")
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isLoading ? "From setting up your own factory to supplying ready-made products." : t("services.subtitle")}
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
});

Services.displayName = "Services";

export default Services;
