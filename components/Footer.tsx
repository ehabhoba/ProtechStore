import React from 'react';
import { WHATSAPP_NUMBER, LOGO_URL, FACEBOOK_URL } from '../constants';

interface FooterProps {
  t: (key: string) => string;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={LOGO_URL} alt="Protech Store" className="w-24 mb-4 h-auto" style={{ filter: 'brightness(0) invert(1)' }}/>
            <p className="text-gray-400 text-sm">{t('header.storeName')} — {t('footer.tagline')}</p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-3">{t('footer.contact')}</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">WhatsApp:</span> <a className="text-green-400 hover:text-green-300" href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`}>{WHATSAPP_NUMBER}</a>
              </li>
              <li>
                <span className="font-medium">Email:</span> <a className="text-green-400 hover:text-green-300" href="mailto:info@protechstore.com">info@protechstore.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Facebook:</span>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  Protech Store Page
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-3">{t('footer.policy')}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.privacyPolicy')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-sm text-center text-gray-500">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;