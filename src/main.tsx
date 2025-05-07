
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import './index.css';

// Define a lightweight loading component with instant render
const InitialLoader = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-africa-beige">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-africa-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-africa-brown">Loading...</p>
    </div>
  </div>
);

// Implement modern browser features for loading optimization
const preloadCriticalAssets = () => {
  if ('connection' in navigator && (navigator.connection as any).saveData) {
    // Skip preloading if user has data-saver enabled
    return Promise.resolve();
  }

  // Array of promises to load critical assets
  const criticalAssets = [
    // Preload hero image with high priority
    new Promise<void>(resolve => {
      const img = new Image();
      img.fetchPriority = "high";
      img.src = "/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png";
      img.onload = () => resolve();
      img.onerror = () => resolve();
    }),
    
    // Prefetch important JS chunks
    navigator.serviceWorker?.register?.('/service-worker.js').catch(() => {}),
  ];
  
  // Wait for assets with timeout to prevent hanging
  return Promise.race([
    Promise.allSettled(criticalAssets),
    new Promise(resolve => setTimeout(resolve, 2000)) // 2s timeout
  ]);
};

// Asynchronously initialize the app with performance tracking
const initializeApp = async () => {
  // Start performance measurement
  const startTime = performance.now();
  
  try {
    // Preload critical assets in parallel with app module
    const preloadPromise = preloadCriticalAssets();
    
    // Dynamically import App in parallel
    const AppModulePromise = import(/* webpackPrefetch: true, webpackChunkName: "app" */ './App.tsx');
    
    // Wait for both operations
    const [AppModule] = await Promise.all([
      AppModulePromise,
      preloadPromise
    ]);
    
    const App = AppModule.default;
    
    // Mount when ready
    createRoot(document.getElementById("root")!).render(
      <Suspense fallback={<InitialLoader />}>
        <App />
      </Suspense>
    );

    // Log performance metrics
    const loadTime = performance.now() - startTime;
    console.log(`App initialized in ${loadTime.toFixed(0)}ms`);
    
    // Report metrics to analytics after a delay
    setTimeout(() => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'performance', {
          event_category: 'timing',
          event_label: 'app_init',
          value: Math.round(loadTime)
        });
      }
    }, 3000);
    
  } catch (error) {
    console.error("Failed to initialize app:", error);
    
    // Fallback rendering in case of error
    createRoot(document.getElementById("root")!).render(
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-africa-beige text-africa-brown p-4 text-center">
        <h1 className="text-xl font-bold mb-2">Loading AfriSocks Global</h1>
        <p>Please wait while we prepare everything for you...</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-africa-orange text-white rounded hover:bg-africa-terracotta"
        >
          Retry
        </button>
      </div>
    );
  }
};

// Start initialization process immediately
initializeApp();

// Register Google Analytics with minimal impact on loading
window.dataLayer = window.dataLayer || [];
window.gtag = function() {
  window.dataLayer.push(arguments);
};

// Register service worker for offline support and caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}
