import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, LOGO_URL } from '../constants';

interface HeaderProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  t: (key: string) => string;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Protech Store" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">{t('header.storeName')}</h1>
            <p className="text-xs md:text-sm text-gray-500">{t('header.tagline')}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">{t('header.products')}</a>
            <a href="#how" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">{t('header.howItWorks')}</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">{t('header.faq')}</a>
          </nav>

          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
            aria-label="Toggle language"
          >
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE("a product")}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            <span className="hidden sm:inline">{t('header.orderViaWhatsapp')}</span>
            <span className="sm:hidden">{t('header.order')}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;