import React from 'react';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  t: (key: string) => string;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

const Header: React.FC<HeaderProps> = ({ t, lang, setLang }) => {
  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <img src={LOGO_URL} alt="Protech Store Logo" className="h-10 w-auto" />
              <span className="hidden sm:inline">Protech Store</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">{t('nav.products')}</a>
            <a href="#how" className="text-gray-600 hover:text-blue-600 transition-colors">{t('nav.how')}</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">{t('nav.faq')}</a>
          </nav>
          <div>
            <button
              onClick={toggleLang}
              className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
