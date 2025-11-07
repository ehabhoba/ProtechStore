import React, { useState, useCallback } from 'react';
import HomePage from './pages/HomePage';
import { i18n } from './constants';

type Lang = 'en' | 'ar';

function App() {
  const [lang, setLang] = useState<Lang>('en');

  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let result: any = i18n[lang];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return key; // Return key if translation not found
      }
    }
    return result;
  }, [lang]);

  return (
    <div className="App">
      <HomePage t={t} lang={lang} setLang={setLang} />
    </div>
  );
}

export default App;
