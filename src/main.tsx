
import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css'

// Preload critical assets
const preloadHeroImage = () => {
  const img = new Image();
  img.src = "/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png";
};

// Execute preload immediately
preloadHeroImage();

// Use React.lazy with named chunks for better code splitting
const App = lazy(() => import(/* webpackChunkName: "app" */ './App.tsx'))

// Add Google Analytics type declaration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-africa-beige"></div>}>
    <App />
  </Suspense>
);
