
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import * as React from "react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Create Query Client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000, // 1 minute
      gcTime: 300000, // 5 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Google Analytics page view tracking component
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
  
  return null;
};

// Preload current language translations based on route
const preloadCurrentLanguage = async (path: string) => {
  let lang = 'en'; // Default
  
  if (path.includes('/sw')) {
    lang = 'sw';
  } else if (path.includes('/fr')) {
    lang = 'fr';
  }
  
  try {
    // Dynamic import of the current language
    await import(`./translations/${lang}.ts`);
    console.log(`Preloaded ${lang} translations`);
  } catch (error) {
    console.error(`Failed to preload ${lang} translations:`, error);
  }
};

// Initial preload based on pathname
preloadCurrentLanguage(window.location.pathname);

const App = () => {
  // Handle offline status
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <HelmetProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <PageTracker />
            <Routes>
              {/* Language-specific routes */}
              <Route path="/en" element={
                <Suspense fallback={null}>
                  <Index />
                </Suspense>
              } />
              <Route path="/sw" element={
                <Suspense fallback={null}>
                  <Index />
                </Suspense>
              } />
              <Route path="/fr" element={
                <Suspense fallback={null}>
                  <Index />
                </Suspense>
              } />
              {/* Thank You page routes for each language */}
              <Route path="/en/thank-you" element={
                <Suspense fallback={null}>
                  <ThankYou />
                </Suspense>
              } />
              <Route path="/sw/thank-you" element={
                <Suspense fallback={null}>
                  <ThankYou />
                </Suspense>
              } />
              <Route path="/fr/thank-you" element={
                <Suspense fallback={null}>
                  <ThankYou />
                </Suspense>
              } />
              {/* Redirect root to default language (English) */}
              <Route path="/" element={<Navigate to="/en" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={
                <Suspense fallback={null}>
                  <NotFound />
                </Suspense>
              } />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
