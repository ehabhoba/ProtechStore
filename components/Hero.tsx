import React from 'react';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8">
          <a
            href="#products"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
