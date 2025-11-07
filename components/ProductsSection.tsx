import React from 'react';
import type { Product } from '../types';

interface ProductsSectionProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
  t: (key: string) => string;
}

const ProductCard: React.FC<{ product: Product, onSelect: () => void, t: (key: string) => string }> = ({ product, onSelect, t }) => {
  const name = t(`products.${product.id}.name`);
  const short = t(`products.${product.id}.short`);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
        <img src={product.img} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="p-6 text-start">
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        <p className="text-gray-600 mt-2 h-12">{short}</p>
         <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-600 font-medium">{t('products.priceLabel')} <span className="font-bold text-blue-600">{t('products.priceValue')}</span></span>
          <button 
            onClick={onSelect}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            {t('products.viewDetails')}
          </button>
        </div>
      </div>
    </div>
  );
}


const ProductsSection: React.FC<ProductsSectionProps> = ({ products, onProductSelect, t }) => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{t('products.title')}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onSelect={() => onProductSelect(p)} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
