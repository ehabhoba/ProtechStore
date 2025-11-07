import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import { PRODUCTS } from '../constants';
import type { Product } from '../types';

interface HomePageProps {
  t: (key: string) => string;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

const HomePage: React.FC<HomePageProps> = ({ t, lang, setLang }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <ProductsSection t={t} products={PRODUCTS} onProductSelect={handleProductSelect} />
        <HowItWorks t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
          t={t}
          lang={lang}
        />
      )}
    </div>
  );
};

export default HomePage;
