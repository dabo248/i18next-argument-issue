import i18n from "i18next";
import en from "./locales/en.json";
import de from "./locales/de.json";

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

i18n.init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
