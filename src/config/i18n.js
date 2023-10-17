import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import appLayoutEN from '../locales/en/appLayout.json';
import errorMessageEN from '../locales/en/errorMessage.json';

const resources = {
  en: {
    appLayout: appLayoutEN,
    errorMessage: errorMessageEN,
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