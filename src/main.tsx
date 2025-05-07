
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Google Analytics type declaration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

createRoot(document.getElementById("root")!).render(<App />);
