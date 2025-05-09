
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
