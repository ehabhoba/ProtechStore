import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, HERO_PRODUCTS_URL } from '../constants';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-start">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">{t('hero.title')}</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">{t('hero.subtitle')}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl">{t('hero.shopNow')}</a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE("the collection")}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
            >{t('header.orderViaWhatsapp')}</a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300 max-w-md mx-auto lg:mx-0">
            <li className="flex items-center gap-2">✅ {t('hero.feature1')}</li>
            <li className="flex items-center gap-2">✅ {t('hero.feature2')}</li>
            <li className="flex items-center gap-2">✅ {t('hero.feature3')}</li>
            <li className="flex items-center gap-2">✅ {t('hero.feature4')}</li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <img src={HERO_PRODUCTS_URL} alt="Protech products collection" className="rounded-xl shadow-2xl w-full h-auto object-cover" />
            <div className="absolute bottom-4 start-4 bg-black/30 backdrop-blur-md p-3 rounded-lg border border-white/20">
              <p className="text-sm text-white">{t('productsSection.price')}: <span className="font-semibold text-yellow-300">{t('productsSection.surprise')}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;