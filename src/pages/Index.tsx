
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical components
const Services = lazy(() => import("@/components/Services"));
const AfricanBenefits = lazy(() => import("@/components/AfricanBenefits"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading placeholder component
const LoadingSection = () => (
  <div className="w-full py-16">
    <div className="container mx-auto px-4">
      <Skeleton className="h-8 w-1/3 mx-auto mb-4" />
      <Skeleton className="h-4 w-2/3 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-40 rounded-lg" />
        <Skeleton className="h-40 rounded-lg" />
      </div>
    </div>
  </div>
);

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
        <link rel="alternate" hrefLang="en" href="https://africasock.com/en" />
        <link rel="alternate" hrefLang="sw" href="https://africasock.com/sw" />
        <link rel="alternate" hrefLang="fr" href="https://africasock.com/fr" />
        <link rel="canonical" href={`https://africasock.com${location.pathname}`} />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Hero is loaded eagerly as it's above the fold */}
        <Hero />
        
        {/* Lazy load components below the fold */}
        <Suspense fallback={<LoadingSection />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <AfricanBenefits />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingSection />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<LoadingSection />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
