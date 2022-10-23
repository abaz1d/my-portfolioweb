import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next).init({
        resources: {
            id: {
                translations: require('./locales/id/translations.json'),
            },
            en: {
                translations: require('./locales/en/translations.json')
            },
        },
        fallbackLng: "en",
        debug: false,
      
        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",
      
        keySeparator: false, // we use content as keys
      
        interpolation: {
          escapeValue: false, // not needed for react!!
          formatSeparator: ","
        },
      
        // react: {
        //   wait: true
        // }
      });

export default i18n;