
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { lazy, Suspense, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load non-critical components with chunk naming
const Services = lazy(() => import(/* webpackChunkName: "services" */ "@/components/Services"));
const AfricanBenefits = lazy(() => import(/* webpackChunkName: "african-benefits" */ "@/components/AfricanBenefits"));
const About = lazy(() => import(/* webpackChunkName: "about" */ "@/components/About"));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "@/components/Contact"));
const Footer = lazy(() => import(/* webpackChunkName: "footer" */ "@/components/Footer"));

// More lightweight loading placeholder component
const LoadingSection = () => (
  <div className="w-full py-12">
    <div className="container mx-auto px-4">
      <Skeleton className="h-6 w-1/4 mx-auto mb-3" />
      <Skeleton className="h-3 w-1/2 mx-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-24 rounded-lg" />
        <Skeleton className="h-24 rounded-lg" />
      </div>
    </div>
  </div>
);

// Implement intersection observer to load components when in viewport
const LazyComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<LoadingSection />}>
      {children}
    </Suspense>
  );
};

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

  // Preconnect to critical domains and preload next screen components
  useEffect(() => {
    // Use intersection observer to load components when needed
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting && id) {
          // Preload the next section when current section is visible
          const preloadMap: Record<string, () => void> = {
            'services-section': () => import("@/components/AfricanBenefits"),
            'benefits-section': () => import("@/components/About"),
            'about-section': () => import("@/components/Contact")
          };
          
          const preloadFunc = preloadMap[id];
          if (preloadFunc) {
            preloadFunc();
          }
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all sections for visibility
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

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
        
        {/* Lazy load components below the fold with section ids for intersection observer */}
        <section id="services-section">
          <LazyComponent>
            <Services />
          </LazyComponent>
        </section>
        
        <section id="benefits-section">
          <LazyComponent>
            <AfricanBenefits />
          </LazyComponent>
        </section>
        
        <section id="about-section">
          <LazyComponent>
            <About />
          </LazyComponent>
        </section>
        
        <LazyComponent>
          <Contact />
        </LazyComponent>
      </main>
      
      <LazyComponent>
        <Footer />
      </LazyComponent>
    </div>
  );
};

export default Index;
