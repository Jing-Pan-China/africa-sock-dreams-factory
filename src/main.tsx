
import React from 'react'
import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css'
import { TooltipProvider } from "@radix-ui/react-tooltip"

// Use React.lazy for code splitting
const App = lazy(() => import('./App.tsx'))

// Add Google Analytics type declaration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Register service worker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration.scope);
      })
      .catch(error => {
        console.log('SW registration failed: ', error);
      });
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element not found');

// Wrapping the entire app in a TooltipProvider function component to ensure proper React context
const Root = () => (
  <React.StrictMode>
    <TooltipProvider>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </TooltipProvider>
  </React.StrictMode>
);

createRoot(rootElement).render(<Root />);
