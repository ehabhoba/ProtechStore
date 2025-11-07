import React from 'react';

interface FaqProps {
  t: (key: string) => string;
}

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
  <details className="bg-white p-5 rounded-lg shadow-md group transition-all duration-300 open:bg-blue-50 open:shadow-lg">
    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-800">
      {question}
      <span className="transition-transform duration-300 group-open:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </summary>
    <div className="mt-3 text-gray-600 leading-relaxed">
      {children}
    </div>
  </details>
);

const FAQ: React.FC<FaqProps> = ({ t }) => {
  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{t('faq.title')}</h3>
        <p className="text-gray-500 mt-2">{t('faq.subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FaqItem question={t('faq.q1')}>
          {t('faq.a1')}
        </FaqItem>
        <FaqItem question={t('faq.q2')}>
          {t('faq.a2')}
        </FaqItem>
        <FaqItem question={t('faq.q3')}>
          {t('faq.a3')}
        </FaqItem>
        <FaqItem question={t('faq.q4')}>
          {t('faq.a4')}
        </FaqItem>
      </div>
    </section>
  );
};

export default FAQ;