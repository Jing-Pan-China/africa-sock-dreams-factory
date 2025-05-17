
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { handleInitialUrlHash } from "@/utils/scrollUtils";

// Lazy load non-critical components
const Services = lazy(() => import("@/components/Services"));
const AfricanBenefits = lazy(() => import("@/components/AfricanBenefits"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const { language, setLanguage, isLoading } = useLanguage();
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Set language based on URL path
  useEffect(() => {
    const path = location.pathname;
    let newLang;
    
    if (path.includes('/en')) {
      newLang = 'en';
    } else if (path.includes('/sw')) {
      newLang = 'sw';
    } else if (path.includes('/fr')) {
      newLang = 'fr';
    } else {
      newLang = 'en'; // Default
    }
    
    if (newLang !== language) {
      setLanguage(newLang as 'en' | 'sw' | 'fr');
    }
    
    // After initial path-based language detection
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
  }, [location.pathname, setLanguage, language, isInitialLoad]);

  // Handle URL hash for scrolling to section on initial page load
  useEffect(() => {
    if (!isLoading) {
      handleInitialUrlHash();
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AfriSocks Global - Sock Manufacturing Solutions for Africa</title>
        <meta name="description" content="Your one-stop global partner for sock factory solutions in Africa" />
        
        {/* Hreflang tags for language alternatives */}
        <link rel="alternate" hrefLang="en" href="https://africasock.com/en" />
        <link rel="alternate" hrefLang="sw" href="https://africasock.com/sw" />
        <link rel="alternate" hrefLang="fr" href="https://africasock.com/fr" />
        <link rel="canonical" href={`https://africasock.com${location.pathname}`} />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Hero is loaded eagerly as it's above the fold */}
        <Hero />
        
        {/* Only load components below the fold after initial language load */}
        {!isLoading && (
          <>
            <Suspense fallback={<div className="h-96" />}>
              <Services />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
              <AfricanBenefits />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
              <About />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
              <Contact />
            </Suspense>
          </>
        )}
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
