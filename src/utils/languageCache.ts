
// Utility for caching language translations
import { Language } from "@/contexts/LanguageContext";

const CACHE_PREFIX = 'afrisocks_translations_';
const CACHE_VERSION = 'v1';
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

interface CachedTranslation {
  data: Record<string, string>;
  timestamp: number;
  version: string;
}

/**
 * Get cached translations for a language
 */
export const getCachedTranslations = (language: Language): Record<string, string> | null => {
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${language}`);
    if (!cached) return null;
    
    const parsedCache: CachedTranslation = JSON.parse(cached);
    
    // Check if cache version is current and not expired
    if (parsedCache.version !== CACHE_VERSION || 
        Date.now() - parsedCache.timestamp > CACHE_TTL) {
      localStorage.removeItem(`${CACHE_PREFIX}${language}`);
      return null;
    }
    
    return parsedCache.data;
  } catch (error) {
    console.error('Error getting cached translations:', error);
    return null;
  }
};

/**
 * Cache translations for a language
 */
export const cacheTranslations = (language: Language, translations: Record<string, string>): void => {
  try {
    const cacheObject: CachedTranslation = {
      data: translations,
      timestamp: Date.now(),
      version: CACHE_VERSION
    };
    
    localStorage.setItem(`${CACHE_PREFIX}${language}`, JSON.stringify(cacheObject));
  } catch (error) {
    console.error('Error caching translations:', error);
  }
};
