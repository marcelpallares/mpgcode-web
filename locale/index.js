import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGB from './en-GB.json';

const translation = (language) => ({ translation: language });

const resources = {
  en: translation(enGB),
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: Object.keys(resources),
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
