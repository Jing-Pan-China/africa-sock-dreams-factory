
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emmanuel Okafor",
      position: "CEO, Nigerian Textiles Ltd",
      text: "AfriSocks Global provided end-to-end support in establishing our sock manufacturing unit. Their expertise in machine selection and installation was invaluable.",
      image: "/placeholder.svg",
      initials: "EO"
    },
    {
      name: "Amara Mensah",
      position: "Operations Director, Ghana Hosiery",
      text: "The quality of yarns and ongoing technical support has helped us create premium sock products that are now exported across West Africa.",
      image: "/placeholder.svg",
      initials: "AM"
    },
    {
      name: "Daniel Kimathi",
      position: "Founder, Kenyan Sock Company",
      text: "Their understanding of African markets made all the difference. Our factory is now producing 10,000 pairs daily with machines perfectly suited to our local conditions.",
      image: "/placeholder.svg",
      initials: "DK"
    },
    {
      name: "Fatima Diallo",
      position: "Import Manager, Senegal Retail Group",
      text: "The cost-effective sock products we import through AfriSocks Global have transformed our retail offering. Excellent quality at competitive prices.",
      image: "/placeholder.svg",
      initials: "FD"
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-4">
            What Our African Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from businesses across Africa who have partnered with us to build successful sock manufacturing operations.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-africa-orange text-white">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic flex-grow">"{testimonial.text}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
