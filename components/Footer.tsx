import React from 'react';

interface FooterProps {
  t: (key: string) => string;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Protech Store. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
