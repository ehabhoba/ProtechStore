import React from 'react';
import { PRODUCTS_DATA, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';
import type { Product } from '../types';

interface ProductsSectionProps {
  onProductSelect: (product: {id: string; img: string;}) => void;
  t: (key: string) => string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ onProductSelect, t }) => {
  return (
    <section id="products" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{t('productsSection.title')}</h3>
        <p className="text-gray-500 mt-2">{t('productsSection.subtitle')}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map((p) => {
          const productText = t(`products.${p.id}`);
          return (
            <article key={p.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="h-56 flex items-center justify-center bg-gray-100 p-4">
                <img src={p.img} alt={productText.name} className="h-full w-full object-contain" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-xl font-semibold text-gray-900">{productText.name}</h4>
                <p className="text-gray-500 mt-1">{productText.short}</p>

                <ul className="mt-4 text-sm text-gray-600 space-y-2 flex-1">
                  {productText.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">&#10003;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">{t('productsSection.price')}: <span className="font-semibold text-lg text-blue-600">{t('productsSection.surprise')}</span></span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button onClick={() => onProductSelect(p)} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">{t('productsSection.viewDetails')}</button>
                    <a 
                      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE(productText.name)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold text-center hover:bg-green-600 transition-colors">{t('header.order')}</a>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  );
};

export default ProductsSection;