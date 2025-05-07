
/**
 * Smoothly scrolls to a section on the page
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (defaults to accounting for fixed header)
 */
export const scrollToSection = (elementId: string, offset = 80): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Checks if element is in viewport
 * @param el - The element to check
 * @param partiallyVisible - Whether partial visibility is sufficient
 */
export const isElementInViewport = (el: Element, partiallyVisible = false): boolean => {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return partiallyVisible 
    ? rect.top < windowHeight && rect.bottom >= 0
    : rect.top >= 0 && rect.bottom <= windowHeight;
};
