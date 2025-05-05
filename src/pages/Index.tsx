
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AfricanBenefits from "@/components/AfricanBenefits";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { setLanguage } = useLanguage();
  const location = useLocation();

  // Set language based on URL parameter if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('lang');
    if (langParam && ['en', 'sw', 'fr'].includes(langParam)) {
      setLanguage(langParam as 'en' | 'sw' | 'fr');
    }
  }, [location.search, setLanguage]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AfricanBenefits />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
