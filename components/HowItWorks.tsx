import React from 'react';

interface HowItWorksProps {
  t: (key: string) => string;
}

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md h-full">
    <h4 className="text-2xl font-bold mb-3 text-gray-800">{title}</h4>
    {children}
  </div>
);

const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  return (
    <section id="how" className="bg-gray-100 border-t border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-8">
        <InfoCard title={t('howItWorks.title')}>
          <ol className="list-decimal list-inside text-gray-600 space-y-3">
            <li>{t('howItWorks.step1')}</li>
            <li>{t('howItWorks.step2')}</li>
            <li>{t('howItWorks.step3')}</li>
            <li>{t('howItWorks.step4')}</li>
          </ol>
        </InfoCard>

        <InfoCard title={t('howItWorks.shippingTitle')}>
          <p className="text-gray-600">{t('howItWorks.shippingBody')}</p>
          <ul className="mt-4 text-gray-600 space-y-2 font-medium">
            <li className="flex items-center gap-2">🚚 {t('howItWorks.shippingFeature1')}</li>
            <li className="flex items-center gap-2">🔒 {t('howItWorks.shippingFeature2')}</li>
            <li className="flex items-center gap-2">💬 {t('howItWorks.shippingFeature3')}</li>
          </ul>
        </InfoCard>

        <InfoCard title={t('howItWorks.privacyTitle')}>
          <p className="text-gray-600">{t('howItWorks.privacyBody')}</p>
        </InfoCard>
      </div>
    </section>
  );
};

export default HowItWorks;