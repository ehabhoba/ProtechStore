import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { translations } from './constants';
import type { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    const currentTranslations = translations[lang].meta;
    document.title = currentTranslations.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', currentTranslations.description);
    
    if (lang === 'ar') {
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  }, [lang]);

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      result = result[k];
      if (result === undefined) return key;
    }
    return result;
  };

  const onProductSelect = (productData: {id: string; img: string;}) => {
    const productText = t(`products.${productData.id}`);
    setSelectedProduct({ ...productData, ...productText });
  };


  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <ProductsSection onProductSelect={onProductSelect} t={t} />
        <HowItWorks t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          t={t}
          lang={lang}
        />
      )}
    </div>
  );
}