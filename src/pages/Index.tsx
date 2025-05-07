
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { lazy, Suspense, useEffect, useCallback, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "@/components/ui/skeleton";
import useScrollRestoration from "@/hooks/useScrollRestoration";

// Enhanced loading placeholder with animation
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

// Improved chunk naming and progressively loaded components
const Services = lazy(() => 
  import(/* webpackChunkName: "services" */ "@/components/Services")
);
const AfricanBenefits = lazy(() => 
  import(/* webpackChunkName: "african-benefits" */ "@/components/AfricanBenefits")
);
const About = lazy(() => 
  import(/* webpackChunkName: "about" */ "@/components/About")
);
const Contact = lazy(() => 
  import(/* webpackChunkName: "contact" */ "@/components/Contact")
);
const Footer = lazy(() => 
  import(/* webpackChunkName: "footer" */ "@/components/Footer")
);

// Advanced lazy loading component with better error handling
const LazyComponent = ({ 
  children, 
  fallback = <LoadingSection />,
  errorFallback = <div className="p-4 text-center text-red-500">Failed to load this section</div>
}: { 
  children: React.ReactNode, 
  fallback?: React.ReactNode,
  errorFallback?: React.ReactNode
}) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <>{errorFallback}</>;
  }
  
  return (
    <Suspense fallback={fallback}>
      <ErrorBoundary onError={() => setHasError(true)}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};

// Simple error boundary component
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  onError: () => void;
}> {
  componentDidCatch() {
    this.props.onError();
  }
  
  render() {
    return this.props.children;
  }
}

const Index = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  
  // Use our custom hook for scroll restoration
  useScrollRestoration();

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

  // Optimized intersection observer setup for progressive component loading
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          
          // Load specific components based on which section is visible
          if (section === 'services') {
            import("@/components/AfricanBenefits");
          } else if (section === 'benefits') {
            import("@/components/About");
          } else if (section === 'about') {
            import("@/components/Contact");
          }
          
          // Stop observing once we've triggered the load
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '300px', // Load 300px before section comes into view
      threshold: 0.01
    });
    
    // Observe all section placeholders
    document.querySelectorAll('[data-section]').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Preload the most critical next section after the component mounts
  useEffect(() => {
    // Use requestIdleCallback for non-critical preloading
    const requestIdleCallback = window.requestIdleCallback || 
      ((cb) => setTimeout(cb, 1000));
    
    requestIdleCallback(() => {
      // Start loading Services component when the browser is idle
      import("@/components/Services");
    });
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Hero is loaded eagerly as it's above the fold */}
        <Hero />
        
        {/* Progressive loading of below-the-fold sections */}
        <div data-section="services" id="services">
          <LazyComponent>
            <Services />
          </LazyComponent>
        </div>
        
        <div data-section="benefits" id="benefits">
          <LazyComponent>
            <AfricanBenefits />
          </LazyComponent>
        </div>
        
        <div data-section="about" id="about">
          <LazyComponent>
            <About />
          </LazyComponent>
        </div>
        
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
