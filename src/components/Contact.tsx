import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your interest! Our team will contact you shortly."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        interest: "",
        message: ""
      });
    }, 1500);
  };
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
                    <p>Zhuji, China </p>
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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1-234-567-8900" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                      Country
                    </label>
                    <Input id="country" name="country" value={formData.country} onChange={handleChange} required placeholder="Nigeria, Kenya, etc." />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block mb-2 font-medium text-gray-700">
                    I'm Interested In
                  </label>
                  <Select value={formData.interest} onValueChange={value => handleSelectChange("interest", value)}>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="factory-setup">Setting up a sock factory</SelectItem>
                      <SelectItem value="machines">Purchasing sock machines</SelectItem>
                      <SelectItem value="yarn">Sourcing quality yarns</SelectItem>
                      <SelectItem value="export">Export services</SelectItem>
                      <SelectItem value="socks">Buying finished socks</SelectItem>
                      <SelectItem value="other">Other inquiries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                    Your Message
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please describe your requirements in detail..." rows={5} />
                </div>
                
                <Button type="submit" className="w-full bg-africa-orange hover:bg-africa-terracotta text-white py-6 text-lg" disabled={loading}>
                  {loading ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;