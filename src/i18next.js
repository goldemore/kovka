import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextHttpBackend from "i18next-http-backend";
import i18nextLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(i18nextHttpBackend)
  .use(i18nextLanguageDetector)
  .use(initReactI18next)
  .init({
    
    lng: localStorage.getItem("kovka_lg") || "az", // Сохранение языка в localStorage
    // debug: true, // Покажет ошибки в консоли
    interpolation: {
      escapeValue: false, // Не экранировать значения
    },

    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/translation.json`,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["kovka_lg"],
    },
  });

export default i18n;
