
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
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-16 h-16 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
