
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const About = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img 
              src="/lovable-uploads/d230f0c1-c100-4501-8504-b1981ecdc3fd.png" 
              alt="Jing Pan's LinkedIn QR Code" 
              className="rounded-lg shadow-lg mx-auto max-w-[300px]" 
            />
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-africa-brown flex items-center justify-center">
                <Linkedin className="mr-2 text-blue-600" /> Jing Pan's LinkedIn - Welcome to connect!
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-africa-brown mb-6">
              About AfriSocks Global
            </h2>
            <p className="text-lg text-gray-700 mb-6">
             We offer end-to-end sock industry services, including factory setup. Our CEO, Jing Pan, from a textile family with 20+ years of experience, is expanding globally after studying public health in Sweden. Inspired by African classmates, She aims to support local employment in Africa through the sock business.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to empower African entrepreneurs and businesses to build successful sock manufacturing operations, creating jobs and fostering economic growth throughout the continent.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-africa-beige flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-africa-orange">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Expert Consultation</h4>
                  <p className="text-gray-600">Personalized guidance from industry specialists familiar with African markets.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-africa-beige flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-africa-orange">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Comprehensive Support</h4>
                  <p className="text-gray-600">End-to-end solutions from factory setup to product distribution.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-africa-beige flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-africa-orange">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Long-term Partnership</h4>
                  <p className="text-gray-600">Ongoing technical assistance, market insights, and growth strategies.</p>
                </div>
              </div>
            </div>
            <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white px-8 py-6 text-lg">
              <a href="#contact">Partner With Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
