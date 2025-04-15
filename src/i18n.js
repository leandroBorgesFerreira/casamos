import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", 
    supportedLngs: ['en', 'pt'],
    interpolation: { escapeValue: false }
  });

  export default i18next;