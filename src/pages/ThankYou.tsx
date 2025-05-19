
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const ThankYou = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // Redirect back to home page after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${language}`);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [navigate, language]);

  const handleBackToHome = () => {
    navigate(`/${language}`);
  };

  return (
    <div className="min-h-screen bg-africa-brown flex items-center justify-center px-4">
      <Helmet>
        <title>Thank You - AfriSocks Global</title>
      </Helmet>
      
      <div className="max-w-lg bg-white rounded-lg shadow-2xl p-8 text-center">
        <div className="py-6">
          <h1 className="text-3xl font-bold text-africa-terracotta mb-6">Thank You for Your Inquiry!</h1>
          
          <div className="my-8 space-y-6">
            <p className="text-lg">
              Your message has been successfully sent. Our team will review your inquiry and contact you shortly.
            </p>
            
            <p className="text-gray-600">
              You will be redirected to the homepage in 10 seconds.
            </p>
          </div>
          
          <Button 
            onClick={handleBackToHome}
            className="bg-africa-orange hover:bg-africa-terracotta text-white py-6 text-lg"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
