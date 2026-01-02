import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'mr';

interface Translations {
  // Navbar
  home: string;
  search: string;
  features: string;
  about: string;
  contact: string;
  selectLocation: string;
  discover: string;
  
  // Hero Section
  trustedByThousands: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroSubheading: string;
  getStartedToday: string;
  learnMore: string;
  
  // Animated words
  hospital: string;
  hotel: string;
  salon: string;
  carServicing: string;
  clothShops: string;
  agriEquipments: string;
  
  // Other common
  searchPlaceholder: string;
  locationPlaceholder: string;
  categoryPlaceholder: string;
}

const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    home: 'Home',
    search: 'Search',
    features: 'Features',
    about: 'About',
    contact: 'Contact',
    selectLocation: 'Select Location',
    discover: 'Discover',
    
    // Hero Section
    trustedByThousands: '✓ Trusted by thousands',
    heroHeadline1: 'Choosing the Right',
    heroHeadline2: 'Your journey starts here.',
    heroSubheading: 'We help you find the perfect local services by comparing reviews, ratings, and quality metrics all in one place.',
    getStartedToday: 'Get Started Today',
    learnMore: 'Learn More',
    
    // Animated words
    hospital: 'Hospital',
    hotel: 'Hotel',
    salon: 'Salon',
    carServicing: 'Car Servicing',
    clothShops: 'Cloth Shops',
    agriEquipments: 'Agri Equipments',
    
    // Other common
    searchPlaceholder: 'Search for services...',
    locationPlaceholder: 'Enter location',
    categoryPlaceholder: 'Select category',
  },
  hi: {
    // Navbar
    home: 'होम',
    search: 'खोजें',
    features: 'विशेषताएं',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    selectLocation: 'स्थान चुनें',
    discover: 'खोजें',
    
    // Hero Section
    trustedByThousands: '✓ हजारों लोगों का भरोसा',
    heroHeadline1: 'सही चुनाव करें',
    heroHeadline2: 'आपकी यात्रा यहाँ से शुरू होती है।',
    heroSubheading: 'हम आपको समीक्षाओं, रेटिंग और गुणवत्ता मेट्रिक्स की तुलना करके सही स्थानीय सेवाएं खोजने में मदद करते हैं।',
    getStartedToday: 'आज ही शुरू करें',
    learnMore: 'और जानें',
    
    // Animated words
    hospital: 'अस्पताल',
    hotel: 'होटल',
    salon: 'सैलून',
    carServicing: 'कार सर्विसिंग',
    clothShops: 'कपड़ों की दुकान',
    agriEquipments: 'कृषि उपकरण',
    
    // Other common
    searchPlaceholder: 'सेवाएं खोजें...',
    locationPlaceholder: 'स्थान दर्ज करें',
    categoryPlaceholder: 'श्रेणी चुनें',
  },
  mr: {
    // Navbar
    home: 'मुख्यपृष्ठ',
    search: 'शोधा',
    features: 'वैशिष्ट्ये',
    about: 'आमच्याबद्दल',
    contact: 'संपर्क',
    selectLocation: 'स्थान निवडा',
    discover: 'शोधा',
    
    // Hero Section
    trustedByThousands: '✓ हजारो लोकांचा विश्वास',
    heroHeadline1: 'योग्य निवड करा',
    heroHeadline2: 'तुमचा प्रवास इथून सुरू होतो.',
    heroSubheading: 'आम्ही तुम्हाला पुनरावलोकने, रेटिंग आणि गुणवत्ता मेट्रिक्सची तुलना करून योग्य स्थानिक सेवा शोधण्यात मदत करतो.',
    getStartedToday: 'आजच सुरू करा',
    learnMore: 'अधिक जाणून घ्या',
    
    // Animated words
    hospital: 'रुग्णालय',
    hotel: 'हॉटेल',
    salon: 'सलून',
    carServicing: 'कार सर्व्हिसिंग',
    clothShops: 'कापड दुकाने',
    agriEquipments: 'कृषी उपकरणे',
    
    // Other common
    searchPlaceholder: 'सेवा शोधा...',
    locationPlaceholder: 'स्थान प्रविष्ट करा',
    categoryPlaceholder: 'श्रेणी निवडा',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
