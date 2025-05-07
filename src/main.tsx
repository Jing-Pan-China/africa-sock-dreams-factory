
import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css'

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

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
);
