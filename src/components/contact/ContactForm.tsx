
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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

  return (
    <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-africa-brown">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Your Name
            </label>
            <Input 
              id="name" 
              name="name" 
              onChange={handleChange} 
              required 
              placeholder=""
              value={formData.name}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              onChange={handleChange} 
              required 
              placeholder=""
              value={formData.email}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
              Phone Number
            </label>
            <Input 
              id="phone" 
              name="phone" 
              onChange={handleChange} 
              placeholder=""
              value={formData.phone}
            />
          </div>
          <div>
            <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
              Country
            </label>
            <Input 
              id="country" 
              name="country" 
              onChange={handleChange} 
              required 
              placeholder=""
              value={formData.country}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="interest" className="block mb-2 font-medium text-gray-700">
            I'm Interested In
          </label>
          <Select onValueChange={value => handleSelectChange("interest", value)} value={formData.interest}>
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
          <Textarea 
            id="message" 
            name="message" 
            onChange={handleChange} 
            placeholder=""
            value={formData.message}
            rows={5} 
          />
        </div>
        
        <Button type="submit" className="w-full bg-africa-orange hover:bg-africa-terracotta text-white py-6 text-lg" disabled={loading}>
          {loading ? "Sending..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
