import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import generalEN from '../locales/en/general.json';

const resources = {
  en: {
    general: generalEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;