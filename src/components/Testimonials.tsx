
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [{
    name: "Emmanuel Okafor",
    position: "CEO, Nigerian Textiles Ltd",
    text: "AfriSocks Global provided end-to-end support in establishing our sock manufacturing unit. Their expertise in machine selection and installation was invaluable.",
    image: "/placeholder.svg",
    initials: "EO"
  }, {
    name: "Amara Mensah",
    position: "Operations Director, Ghana Hosiery",
    text: "The quality of yarns and ongoing technical support has helped us create premium sock products that are now exported across West Africa.",
    image: "/placeholder.svg",
    initials: "AM"
  }, {
    name: "Daniel Kimathi",
    position: "Founder, Kenyan Sock Company",
    text: "Their understanding of African markets made all the difference. Our factory is now producing 10,000 pairs daily with machines perfectly suited to our local conditions.",
    image: "/placeholder.svg",
    initials: "DK"
  }, {
    name: "Fatima Diallo",
    position: "Import Manager, Senegal Retail Group",
    text: "The cost-effective sock products we import through AfriSocks Global have transformed our retail offering. Excellent quality at competitive prices.",
    image: "/placeholder.svg",
    initials: "FD"
  }];
  
  return (
    <section id="testimonials" className="py-16 bg-africa-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-africa-brown text-center mb-12">
          What Our Clients Say
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-africa-orange text-white">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <blockquote className="flex-grow">
                        <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                      </blockquote>
                      <footer>
                        <p className="font-semibold text-africa-brown">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </footer>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-africa-orange hover:bg-africa-terracotta text-white" />
            <CarouselNext className="static translate-y-0 bg-africa-orange hover:bg-africa-terracotta text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
