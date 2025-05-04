
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AfricanBenefits = () => {
  const benefits = [
    {
      title: "Africa-Specific Solutions",
      points: [
        "Machines optimized for African power conditions",
        "Training programs in local languages",
        "Region-specific business models",
        "Local climate-appropriate yarn selections"
      ]
    },
    {
      title: "Economic Advantages",
      points: [
        "Create local manufacturing jobs",
        "Reduce import dependency",
        "Access to African trade agreements",
        "Lower operational costs with local production"
      ]
    },
    {
      title: "Customized Support",
      points: [
        "African market research and insights",
        "Regional logistics expertise",
        "Trade show representation",
        "Local partnerships and networking"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-africa-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-4">
            Why Choose Us for African Markets
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We understand the unique challenges and opportunities of the African sock manufacturing industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-lg border-none">
              <CardHeader className="bg-white pb-6">
                <h3 className="text-xl font-bold text-africa-terracotta">{benefit.title}</h3>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-4">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-3 text-africa-orange mt-1">
                        <CheckCircle size={18} />
                      </span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-africa-brown mb-4 text-center">
            Our African Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border-l-4 border-africa-orange">
              <p className="italic text-gray-700 mb-2">
                "AfriSocks Global helped us establish the first modern sock factory in Uganda. Their comprehensive support made all the difference."
              </p>
              <p className="font-semibold">- Textile Innovators Ltd, Uganda</p>
            </div>
            <div className="p-4 border-l-4 border-africa-orange">
              <p className="italic text-gray-700 mb-2">
                "From machinery selection to export strategies, their team provided expert guidance for our Kenyan operation."
              </p>
              <p className="font-semibold">- Nairobi Hosiery Manufacturers, Kenya</p>
            </div>
            <div className="p-4 border-l-4 border-africa-orange">
              <p className="italic text-gray-700 mb-2">
                "Their understanding of the Nigerian market helped us overcome challenges and establish a thriving sock business."
              </p>
              <p className="font-semibold">- Lagos Textile Industries, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfricanBenefits;
