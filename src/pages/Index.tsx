
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { lazy, Suspense, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";

// Improved chunk naming and more granular code splitting
const Services = lazy(() => 
  import(/* webpackChunkName: "services" */ "@/components/Services").then(module => ({
    default: module.default
  }))
);
const AfricanBenefits = lazy(() => 
  import(/* webpackChunkName: "african-benefits" */ "@/components/AfricanBenefits").then(module => ({
    default: module.default
  }))
);
const About = lazy(() => 
  import(/* webpackChunkName: "about" */ "@/components/About").then(module => ({
    default: module.default
  }))
);
const Contact = lazy(() => 
  import(/* webpackChunkName: "contact" */ "@/components/Contact").then(module => ({
    default: module.default
  }))
);
const Footer = lazy(() => 
  import(/* webpackChunkName: "footer" */ "@/components/Footer").then(module => ({
    default: module.default
  }))
);

// Enhanced loading placeholder
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

// Advanced lazy loading component with deferred loading
const LazyComponent = ({ children, priority = false }: { children: React.ReactNode, priority?: boolean }) => {
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

  // Optimized preloading logic using requestIdleCallback
  const preloadComponent = useCallback((importFunc: () => Promise<any>) => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(() => {
        importFunc().catch(() => {}); // Silent catch to avoid errors in console
      });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        importFunc().catch(() => {});
      }, 1000);
    }
  }, []);

  // Enhanced intersection observer with requestIdleCallback
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            // Preload the next section when current section is visible
            const preloadMap: Record<string, () => Promise<any>> = {
              'services-section': () => import("@/components/AfricanBenefits"),
              'benefits-section': () => import("@/components/About"),
              'about-section': () => import("@/components/Contact")
            };
            
            const preloadFunc = preloadMap[id];
            if (preloadFunc) {
              preloadComponent(preloadFunc);
            }
          }
          observer.unobserve(entry.target);
        }
      });
    }, { 
      rootMargin: '200px', // Load earlier
      threshold: 0.01 // Trigger with minimal visibility
    });
    
    // Observe all sections for visibility
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [preloadComponent]);

  // Preload further sections after initial render
  useEffect(() => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(() => {
        import("@/components/Services");
      });
    }
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
        
        {/* Performance optimizations */}
        <link rel="preload" href="/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png" as="image" />
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

// Add requestIdleCallback type definition for TypeScript
declare global {
  interface Window {
    requestIdleCallback: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback: (handle: number) => void;
  }
}

export default Index;
