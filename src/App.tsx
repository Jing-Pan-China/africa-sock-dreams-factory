
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

// Create a performance-optimized loading component
const PageLoading = () => (
  <div className="min-h-screen bg-africa-beige flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-africa-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-africa-brown">Loading...</p>
    </div>
  </div>
);

// Use chunk naming with proper prefetching for better code splitting
const Index = lazy(() => {
  // Start prefetching other chunks as soon as Index is requested
  import(/* webpackPrefetch: true */ "./components/Services");
  import(/* webpackPrefetch: true */ "./components/AfricanBenefits");
  
  // Return the actual component
  return import(/* webpackChunkName: "index-page" */ "./pages/Index");
});

const NotFound = lazy(() => import(/* webpackChunkName: "not-found-page" */ "./pages/NotFound"));

// Configure query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      // Use optimized fetch policy
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Google Analytics page view tracking component with performance optimization
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Delay analytics to prioritize rendering
    const timeout = setTimeout(() => {
      // With proper type definition, we don't need type checking here
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search
        });
      }
    }, 1000); // Delay by 1 second
    
    return () => clearTimeout(timeout);
  }, [location]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <PageTracker />
            <Routes>
              {/* Language-specific routes */}
              <Route path="/en" element={
                <Suspense fallback={<PageLoading />}>
                  <Index />
                </Suspense>
              } />
              <Route path="/sw" element={
                <Suspense fallback={<PageLoading />}>
                  <Index />
                </Suspense>
              } />
              <Route path="/fr" element={
                <Suspense fallback={<PageLoading />}>
                  <Index />
                </Suspense>
              } />
              {/* Redirect root to default language (English) */}
              <Route path="/" element={<Navigate to="/en" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={
                <Suspense fallback={<PageLoading />}>
                  <NotFound />
                </Suspense>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
