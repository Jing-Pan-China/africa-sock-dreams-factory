
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getCachedTranslations, cacheTranslations } from '@/utils/languageCache';

// Define our available languages
export type Language = 'en' | 'sw' | 'fr';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
  isLoading: boolean;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: {},
  t: (key: string) => key,
  isLoading: true,
});

// Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({});
  const [isLoading, setIsLoading] = useState(true);
  
  // Load translations for a language
  const loadTranslations = async (lang: Language) => {
    setIsLoading(true);
    
    try {
      // Check if translations are cached
      const cachedData = getCachedTranslations(lang);
      
      if (cachedData) {
        setTranslations(prev => ({
          ...prev,
          [lang]: cachedData
        }));
        setIsLoading(false);
        return;
      }
      
      // If not in cache, dynamically import
      const module = await import(`@/translations/${lang}.ts`);
      const loadedTranslations = module.default;
      
      // Update translations state
      setTranslations(prev => ({
        ...prev,
        [lang]: loadedTranslations
      }));
      
      // Cache the translations
      cacheTranslations(lang, loadedTranslations);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      
      // If loading fails, try to use English as fallback if it's not already English
      if (lang !== 'en') {
        loadTranslations('en');
      } else {
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Load translations when language changes
  useEffect(() => {
    // If translations for this language are already loaded, don't reload them
    if (translations[language]) {
      setIsLoading(false);
      return;
    }
    
    loadTranslations(language);
  }, [language]);
  
  // Preload current language on mount
  useEffect(() => {
    // Initial language is set in the Index component based on the URL path
    loadTranslations('en');
  }, []);
  
  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      translations, 
      t,
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
