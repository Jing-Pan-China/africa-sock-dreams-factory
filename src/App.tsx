import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

// Use chunk naming for better code splitting
const Index = lazy(() => import(/* webpackChunkName: "index-page" */ "./pages/Index"));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found-page" */ "./pages/NotFound"));

// Create a lightweight loading component
const PageLoading = () => (
  <div className="min-h-screen bg-africa-beige"></div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

// Google Analytics page view tracking component
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // With proper type definition, we don't need type checking here
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search
      });
    }
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
