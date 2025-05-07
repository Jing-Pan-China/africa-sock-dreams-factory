import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define our available languages
export type Language = 'en' | 'sw' | 'fr';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: {},
  t: (key: string) => key,
});

// Translations data
const translations: Record<Language, Record<string, string>> = {
  en: {
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
  },
  sw: {
    // Hero section
    "hero.title": "Kujenga Mustakabali wa Kiwanda cha Soksi Afrika",
    "hero.subtitle": "Mshirika wako wa kimataifa wa suluhisho la kiwanda cha soksi - kutoka mashine na nyuzi hadi huduma za usafirishaji na bidhaa za soksi zenye ubora na gharama nafuu.",
    "hero.cta.factory": "Anza Kiwanda Chako",
    "hero.cta.services": "Chunguza Huduma",
    "hero.stats.experience": "Miaka ya Uzoefu",
    "hero.stats.countries": "Nchi za Afrika",
    "hero.stats.factories": "Viwanda Vilivyojengwa",
    "hero.stats.satisfaction": "Kuridhika kwa Wateja",
    
    // Services section
    "services.title": "Suluhisho Letu Kamili la Soksi",
    "services.subtitle": "Kutoka kuanzisha kiwanda chako hadi kupata bidhaa zilizokamilika, tunatoa huduma zote unazohitaji kufanikiwa katika sekta ya soksi.",
    "services.machines.title": "Mashine za Soksi",
    "services.machines.description": "Mashine za kisasa za kusuka soksi kwa ajili ya uzalishaji wa viwango vyote. Tunatoa huduma za ufungaji, mafunzo na matengenezo.",
    "services.yarns.title": "Nyuzi Bora",
    "services.yarns.description": "Nyuzi bora zinazotoka duniani kote - pamba, sufu, mchanganyiko wa nyuzi bandia, na nyuzi maalumu kwa bei nafuu.",
    "services.export.title": "Huduma za Usafirishaji",
    "services.export.description": "Suluhisho kamili za usafirishaji ikiwa ni pamoja na hati, usafirishaji, uondoaji wa forodha, na mikakati ya kufikia soko.",
    "services.socks.title": "Soksi Zilizokamilika",
    "services.socks.description": "Bidhaa za soksi zenye ubora wa juu na gharama nafuu katika mitindo, ukubwa, na vifaa mbalimbali, tayari kwa soko lako.",
    
    // Benefits section
    "benefits.title": "Kwa Nini Uchague Sisi kwa Masoko ya Afrika",
    "benefits.subtitle": "Tunaelewa changamoto na fursa za kipekee za sekta ya utengenezaji wa soksi Afrika.",
    "benefits.africaSolutions.title": "Suluhisho Maalumu za Afrika",
    "benefits.economicAdvantages.title": "Faida za Kiuchumi",
    "benefits.customizedSupport.title": "Msaada wa Kibinafsi",
    
    // About section
    "about.title": "Kuhusu AfriSocks Global",
    "about.description1": "Tunatoa huduma kamili za sekta ya soksi, ikiwa ni pamoja na uanzishaji wa kiwanda. CEO wetu, Jing Pan, kutoka familia ya nguo yenye uzoefu wa miaka 20+, anapanuka kimataifa baada ya kusoma afya ya umma nchini Uswidi. Akihamasishwa na wanafunzi wenzake wa Afrika, analenga kuunga mkono ajira za ndani Afrika kupitia biashara ya soksi.",
    "about.description2": "Dhamira yetu ni kuwapa nguvu wajasiriamali na biashara za Afrika kujenga shughuli za uzalishaji wa soksi zenye mafanikio, kutengeneza kazi na kukuza ukuaji wa uchumi katika bara zima.",
    "about.consultation": "Ushauri wa Mtaalam",
    "about.consultation.description": "Mwongozo binafsi kutoka kwa wataalamu wa tasnia wanaozijua masoko za Afrika.",
    "about.support": "Msaada Kamili",
    "about.support.description": "Suluhisho kamili kutoka uanzishaji wa kiwanda hadi usambazaji wa bidhaa.",
    "about.partnership": "Ushirikiano wa Muda Mrefu",
    "about.partnership.description": "Msaada wa kiufundi unaoendelea, ufahamu wa soko, na mikakati ya ukuaji.",
    "about.cta": "Shirikiana Nasi",
    
    // Testimonials section
    "testimonials.title": "Wateja Wetu Wanasema Nini",
    
    // Contact section
    "contact.title": "Uko Tayari Kuanza Biashara Yako ya Soksi?",
    "contact.subtitle": "Wasiliana nasi kwa ushauri kuhusu mahitaji yako mahususi na jinsi tunaweza kukusaidia kuanzisha au kukuza biashara yako ya utengenezaji wa soksi barani Afrika.",
    "contact.getintouch": "Wasiliana Nasi",
    "contact.email": "Tuma Barua Pepe",
    "contact.call": "Tupigie Simu",
    "contact.offices": "Ofisi Zetu",
    "contact.availablefor": "Inapatikana Kwa",
    "contact.message": "Tuma Ujumbe",
    "contact.form.name": "Jina Lako",
    "contact.form.email": "Anwani ya Barua Pepe",
    "contact.form.phone": "Nambari ya Simu",
    "contact.form.country": "Nchi",
    "contact.form.interest": "Ninapendezwa Na",
    "contact.form.message": "Ujumbe Wako",
    "contact.form.submit": "Wasilisha Hoja",
    "contact.form.sending": "Inatuma..."
  },
  fr: {
    // Basic translations for French
    "hero.title": "Construire l'avenir de la fabrication de chaussettes en Afrique",
    "hero.subtitle": "Votre partenaire mondial pour des solutions complètes de fabrication de chaussettes - des machines et fils aux services d'exportation et produits de qualité.",
    "hero.cta.factory": "Démarrer Votre Usine",
    "hero.cta.services": "Explorer les Services",
    // Add more translations as needed
    "contact.form.submit": "Envoyer la Demande"
  }
};

// Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      translations, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
