
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  return <section id="contact" className="py-16 bg-africa-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Sock Business?
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Contact us for a consultation about your specific needs and how we can help you establish or grow your sock manufacturing business in Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-africa-terracotta rounded-lg p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p>jingpan0523@yeah.net</p>
                    <p></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p>+86-18356666977 (Whatsapp)</p>
                    <p></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Offices</h4>
                    <p>Xiamen, China</p>
                    <p>Zhuji, China </p>
                    <p>Shenzhen/ Dongguan,China</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Available For</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white text-africa-brown px-3 py-1 rounded-full text-sm">Factory Setup</span>
                  <span className="bg-white text-africa-brown px-3 py-1 rounded-full text-sm">Machine Supply</span>
                  <span className="bg-white text-africa-brown px-3 py-1 rounded-full text-sm">Yarn Sourcing</span>
                  <span className="bg-white text-africa-brown px-3 py-1 rounded-full text-sm">Export Services</span>
                  <span className="bg-white text-africa-brown px-3 py-1 rounded-full text-sm">Sock Supply</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-africa-brown">Send Us a Message</h3>
              
              <div className="flex justify-center items-center py-8">
                <p className="text-lg text-gray-600 text-center">
                  Please contact us directly via email or phone for inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
