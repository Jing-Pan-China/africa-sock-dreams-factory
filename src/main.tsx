
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import './index.css';

// Define a lightweight loading component
const InitialLoader = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-africa-beige"></div>
);

// Use dynamic import with prefetch for critical resources
const preloadCriticalAssets = async () => {
  // Preload hero image
  const imagePreload = new Promise(resolve => {
    const img = new Image();
    img.src = "/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png";
    img.onload = resolve;
    img.onerror = resolve; // Continue even if image fails
  });
  
  // Preload app component
  const appPreload = import(/* webpackChunkName: "app" */ './App.tsx');
  
  // Wait for critical assets but with timeout to avoid hanging
  return Promise.race([
    Promise.all([imagePreload, appPreload]),
    new Promise(resolve => setTimeout(resolve, 3000)) // 3s timeout
  ]);
};

// Asynchronously initialize the app
const initializeApp = async () => {
  try {
    // Preload critical assets in background
    preloadCriticalAssets();
    
    // Dynamically import App with priority
    const AppModule = await import(/* webpackPrefetch: true, webpackChunkName: "app" */ './App.tsx');
    const App = AppModule.default;
    
    // Mount when ready
    createRoot(document.getElementById("root")!).render(
      <Suspense fallback={<InitialLoader />}>
        <App />
      </Suspense>
    );
  } catch (error) {
    console.error("Failed to initialize app:", error);
    // Fallback rendering in case of error
    createRoot(document.getElementById("root")!).render(
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-africa-beige text-africa-brown p-4 text-center">
        <h1 className="text-xl font-bold mb-2">Loading AfriSocks Global</h1>
        <p>Please wait while we prepare everything for you...</p>
      </div>
    );
  }
};

// Start initialization process
initializeApp();

// Add Google Analytics to window object for type safety
window.dataLayer = window.dataLayer || [];
window.gtag = function() {
  window.dataLayer.push(arguments);
};
