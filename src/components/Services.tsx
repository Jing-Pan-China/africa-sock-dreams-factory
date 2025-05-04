
import { 
  Settings, 
  Package, 
  Globe, 
  Truck 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const serviceItems = [
    {
      icon: Settings,
      title: "Sock Machines",
      description: "State-of-the-art sock knitting machinery for all production scales. We provide installation, training, and maintenance services.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Package,
      title: "Quality Yarns",
      description: "Premium yarns sourced globally - cotton, wool, synthetic blends, and specialty fibers at competitive prices.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Globe,
      title: "Export Services",
      description: "Comprehensive export solutions including documentation, logistics, customs clearance, and market access strategies.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Truck,
      title: "Finished Socks",
      description: "High-quality, cost-effective sock products in various styles, sizes, and materials, ready for your market.",
      color: "text-africa-orange",
      bg: "bg-africa-beige"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-4">
            Our Comprehensive Sock Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From setting up your own factory to supplying ready-made products, we provide all the services you need to succeed in the sock industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`${item.bg} rounded-t-lg`}>
                <div className={`${item.color} p-3 inline-block rounded-full mb-4`}>
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
