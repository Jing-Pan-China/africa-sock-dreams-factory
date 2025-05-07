
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define our available languages
export type Language = 'en' | 'sw' | 'fr';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, string>;
  t: (key: string) => string;
  isLoading: boolean;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: {},
  t: (key: string) => key,
  isLoading: false,
});

// Split translations into separate files for each language
// Create a translation loader function
const loadTranslations = async (lang: Language): Promise<Record<string, string>> => {
  switch (lang) {
    case 'en':
      return {
        // Hero section
        "hero.title": "Building Africa's Sock Manufacturing Future",
        "hero.subtitle": "Your one-stop global partner for sock factory solutions - from machinery and yarns to export services and high-quality, cost-effective sock products.",
        "hero.cta.factory": "Start Your Factory",
        "hero.cta.services": "Explore Services",
        "hero.stats.experience": "Years Experience",
        "hero.stats.countries": "African Countries",
        "hero.stats.factories": "Factories Built",
        "hero.stats.satisfaction": "Client Satisfaction",
        
        // Services section
        "services.title": "Our Comprehensive Sock Solutions",
        "services.subtitle": "From setting up your own factory to supplying ready-made products, we provide all the services you need to succeed in the sock industry.",
        "services.machines.title": "Sock Machines",
        "services.machines.description": "State-of-the-art sock knitting machinery for all production scales. We provide installation, training, and maintenance services.",
        "services.yarns.title": "Quality Yarns",
        "services.yarns.description": "Premium yarns sourced globally - cotton, wool, synthetic blends, and specialty fibers at competitive prices.",
        "services.export.title": "Export Services",
        "services.export.description": "Comprehensive export solutions including documentation, logistics, customs clearance, and market access strategies.",
        "services.socks.title": "Finished Socks",
        "services.socks.description": "High-quality, cost-effective sock products in various styles, sizes, and materials, ready for your market.",
        
        // Benefits section
        "benefits.title": "Why Choose Us for African Markets",
        "benefits.subtitle": "We understand the unique challenges and opportunities of the African sock manufacturing industry.",
        "benefits.africaSolutions.title": "Africa-Specific Solutions",
        "benefits.economicAdvantages.title": "Economic Advantages",
        "benefits.customizedSupport.title": "Customized Support",
        
        // About section
        "about.title": "About AfriSocks Global",
        "about.description1": "We offer end-to-end sock industry services, including factory setup. Our CEO, Jing Pan, from a textile family with 20+ years of experience, is expanding globally after studying public health in Sweden. Inspired by African classmates, She aims to support local employment in Africa through the sock business.",
        "about.description2": "Our mission is to empower African entrepreneurs and businesses to build successful sock manufacturing operations, creating jobs and fostering economic growth throughout the continent.",
        "about.consultation": "Expert Consultation",
        "about.consultation.description": "Personalized guidance from industry specialists familiar with African markets.",
        "about.support": "Comprehensive Support",
        "about.support.description": "End-to-end solutions from factory setup to product distribution.",
        "about.partnership": "Long-term Partnership",
        "about.partnership.description": "Ongoing technical assistance, market insights, and growth strategies.",
        "about.cta": "Partner With Us",
        
        // Testimonials section
        "testimonials.title": "What Our Clients Say",
        
        // Contact section
        "contact.title": "Ready to Start Your Sock Business?",
        "contact.subtitle": "Contact us for a consultation about your specific needs and how we can help you establish or grow your sock manufacturing business in Africa.",
        "contact.getintouch": "Get In Touch",
        "contact.email": "Email Us",
        "contact.call": "Call Us",
        "contact.offices": "Our Offices",
        "contact.availablefor": "Available For",
        "contact.message": "Send Us a Message",
        "contact.form.name": "Your Name",
        "contact.form.email": "Email Address",
        "contact.form.phone": "Phone Number",
        "contact.form.country": "Country",
        "contact.form.interest": "I'm Interested In",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Submit Inquiry",
        "contact.form.sending": "Sending..."
      };
    case 'sw':
      return {
        "hero.title": "Kujenga Mustakabali wa Kiwanda cha Soksi Afrika",
        "hero.subtitle": "Mshirika wako wa kimataifa wa suluhisho la kiwanda cha soksi - kutoka mashine na nyuzi hadi huduma za usafirishaji na bidhaa za soksi zenye ubora na gharama nafuu.",
        "hero.cta.factory": "Anza Kiwanda Chako",
        "hero.cta.services": "Chunguza Huduma",
        "hero.stats.experience": "Miaka ya Uzoefu",
        "hero.stats.countries": "Nchi za Afrika",
        "hero.stats.factories": "Viwanda Vilivyojengwa",
        "hero.stats.satisfaction": "Kuridhika kwa Wateja",
        // Add rest of Swahili translations as needed
        "contact.form.submit": "Wasilisha Hoja",
        "contact.form.sending": "Inatuma..."
      };
    case 'fr':
      return {
        "hero.title": "Construire l'avenir de la fabrication de chaussettes en Afrique",
        "hero.subtitle": "Votre partenaire mondial pour des solutions complètes de fabrication de chaussettes - des machines et fils aux services d'exportation et produits de qualité.",
        "hero.cta.factory": "Démarrer Votre Usine",
        "hero.cta.services": "Explorer les Services",
        // Add rest of French translations as needed
        "contact.form.submit": "Envoyer la Demande"
      };
    default:
      return {};
  }
};

// Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Load translations when language changes
  useEffect(() => {
    const loadLanguage = async () => {
      setIsLoading(true);
      try {
        const newTranslations = await loadTranslations(language);
        setTranslations(newTranslations);
      } catch (error) {
        console.error("Failed to load translations:", error);
        // Fallback to English if translation loading fails
        if (language !== 'en') {
          const fallbackTranslations = await loadTranslations('en');
          setTranslations(fallbackTranslations);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    loadLanguage();
  }, [language]);
  
  // Translation function
  const t = (key: string): string => {
    return translations[key] || key;
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
