
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

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-africa-beige">
    <div className="animate-pulse text-africa-brown text-xl">Loading AfriSocks Global...</div>
  </div>}>
    <App />
  </Suspense>
);
