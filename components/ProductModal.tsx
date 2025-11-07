import React, { useEffect } from 'react';
import type { Product } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  t: (key: string) => string;
  lang: 'ar' | 'en';
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, t, lang }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 transform transition-all animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label={t('modal.close')}>
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-full sm:w-48 h-48 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center p-2">
            <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
          </div>
          <div className="text-start">
            <h4 className="text-2xl font-bold text-gray-800">{product.name}</h4>
            <p className="text-gray-600 mt-1">{product.short}</p>

            <ul className="mt-4 space-y-2">
              {product.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-500">&#10003;</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${WHATSAPP_MESSAGE(product.name)}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                {t('modal.orderViaWhatsapp')}
              </a>
              <button onClick={onClose} className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t('modal.close')}
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">{t('modal.priceInfo')}</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
