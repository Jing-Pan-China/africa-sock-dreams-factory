
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AfricanBenefits from "@/components/AfricanBenefits";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Index = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  // Set language based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/en')) {
      setLanguage('en');
    } else if (path.includes('/sw')) {
      setLanguage('sw');
    } else if (path.includes('/fr')) {
      setLanguage('fr');
    }
  }, [location.pathname, setLanguage]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AfriSocks Global - Sock Manufacturing Solutions for Africa</title>
        <meta name="description" content="Your one-stop global partner for sock factory solutions in Africa" />
        
        {/* Hreflang tags for language alternatives */}
        <link rel="alternate" hreflang="en" href="https://africasock.com/en" />
        <link rel="alternate" hreflang="sw" href="https://africasock.com/sw" />
        <link rel="alternate" hreflang="fr" href="https://africasock.com/fr" />
        <link rel="canonical" href={`https://africasock.com${location.pathname}`} />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AfricanBenefits />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
