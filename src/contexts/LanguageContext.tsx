
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define our available languages
export type Language = 'en' | 'zh' | 'fr' | 'es';

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
  zh: {
    // Hero section
    "hero.title": "构建非洲袜子制造业的未来",
    "hero.subtitle": "您的一站式全球袜厂解决方案合作伙伴 - 从机械和纱线到出口服务和高质量、经济实惠的袜子产品。",
    "hero.cta.factory": "建立您的工厂",
    "hero.cta.services": "探索服务",
    "hero.stats.experience": "年经验",
    "hero.stats.countries": "非洲国家",
    "hero.stats.factories": "已建工厂",
    "hero.stats.satisfaction": "客户满意度",
    
    // Services section
    "services.title": "我们的全面袜子解决方案",
    "services.subtitle": "从建立自己的工厂到供应成品，我们提供您在袜子行业取得成功所需的所有服务。",
    "services.machines.title": "袜机",
    "services.machines.description": "适用于各种生产规模的最先进袜子编织机械。我们提供安装、培训和维护服务。",
    "services.yarns.title": "优质纱线",
    "services.yarns.description": "全球采购的优质纱线 - 棉、羊毛、合成纤维混纺和特种纤维，价格具有竞争力。",
    "services.export.title": "出口服务",
    "services.export.description": "全面的出口解决方案，包括文件、物流、海关清关和市场准入策略。",
    "services.socks.title": "成品袜",
    "services.socks.description": "各种款式、尺寸和材料的高质量、经济实惠的袜子产品，随时满足您的市场需求。",
    
    // Benefits section
    "benefits.title": "为什么选择我们服务非洲市场",
    "benefits.subtitle": "我们了解非洲袜子制造业的独特挑战和机遇。",
    "benefits.africaSolutions.title": "非洲特定解决方案",
    "benefits.economicAdvantages.title": "经济优势",
    "benefits.customizedSupport.title": "定制支持",
    
    // About section
    "about.title": "关于非洲袜业全球",
    "about.description1": "我们提供端到端的袜子行业服务，包括工厂设置。我们的首席执行官Jing Pan来自一个拥有20多年经验的纺织家族，在瑞典学习公共卫生后正在全球扩张。受非洲同学的启发，她旨在通过袜子业务支持非洲当地就业。",
    "about.description2": "我们的使命是赋能非洲企业家和企业建立成功的袜子制造业务，在整个大陆创造就业机会和促进经济增长。",
    "about.consultation": "专家咨询",
    "about.consultation.description": "来自熟悉非洲市场的行业专家的个性化指导。",
    "about.support": "全面支持",
    "about.support.description": "从工厂设置到产品分销的端到端解决方案。",
    "about.partnership": "长期合作",
    "about.partnership.description": "持续的技术援助、市场洞察和成长策略。",
    "about.cta": "与我们合作",
    
    // Testimonials section
    "testimonials.title": "客户评价",
    
    // Contact section
    "contact.title": "准备开始您的袜子业务？",
    "contact.subtitle": "请联系我们进行咨询，了解您的具体需求以及我们如何帮助您在非洲建立或发展袜子制造业务。",
    "contact.getintouch": "联系我们",
    "contact.email": "发送电子邮件",
    "contact.call": "致电我们",
    "contact.offices": "我们的办公室",
    "contact.availablefor": "可提供服务",
    "contact.message": "给我们发消息",
    "contact.form.name": "您的姓名",
    "contact.form.email": "电子邮件地址",
    "contact.form.phone": "电话号码",
    "contact.form.country": "国家",
    "contact.form.interest": "我感兴趣的是",
    "contact.form.message": "您的留言",
    "contact.form.submit": "提交咨询",
    "contact.form.sending": "发送中..."
  },
  fr: {
    // Basic translations for French
    "hero.title": "Construire l'avenir de la fabrication de chaussettes en Afrique",
    "hero.subtitle": "Votre partenaire mondial pour des solutions complètes de fabrication de chaussettes - des machines et fils aux services d'exportation et produits de qualité.",
    "hero.cta.factory": "Démarrer Votre Usine",
    "hero.cta.services": "Explorer les Services",
    // Add more translations as needed
    "contact.form.submit": "Envoyer la Demande"
  },
  es: {
    // Basic translations for Spanish
    "hero.title": "Construyendo el futuro de la fabricación de calcetines en África",
    "hero.subtitle": "Su socio global integral para soluciones de fábrica de calcetines - desde maquinaria e hilos hasta servicios de exportación y productos de calcetines de alta calidad y rentables.",
    "hero.cta.factory": "Inicie Su Fábrica",
    "hero.cta.services": "Explorar Servicios",
    // Add more translations as needed
    "contact.form.submit": "Enviar Consulta"
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
