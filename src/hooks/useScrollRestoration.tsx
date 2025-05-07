import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This hook handles scroll restoration when navigating between pages
// and also handles hash links to scroll to specific sections
export default function useScrollRestoration() {
  const { pathname, hash } = useLocation();

  // Handle scroll restoration on navigation
  useEffect(() => {
    // Save the current scroll position with path in sessionStorage
    const saveScrollPosition = () => {
      const scrollPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
      scrollPositions[pathname] = window.scrollY;
      sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositions));
    };

    // Save position when navigating away
    window.addEventListener('beforeunload', saveScrollPosition);
    
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      saveScrollPosition();
    };
  }, [pathname]);

  // Handle scroll to top or to hash on new navigation
  useEffect(() => {
    // Handle scrolling to hash if present
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 0);
      }
      return;
    }

    // Otherwise restore previous position or scroll to top
    const scrollPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
    const savedPosition = scrollPositions[pathname];

    // If we have a saved position, restore it, otherwise scroll to top
    window.scrollTo({
      top: savedPosition || 0,
      behavior: savedPosition ? 'auto' : 'smooth'
    });
    
    // Use RAF to ensure scrolling happens after rendering is complete
    requestAnimationFrame(() => {
      window.scrollTo({
        top: savedPosition || 0,
        behavior: savedPosition ? 'auto' : 'smooth'
      });
    });
  }, [pathname, hash]);
}
