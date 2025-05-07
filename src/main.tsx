
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
  <Suspense fallback={null}>
    <App />
  </Suspense>
);
