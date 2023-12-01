import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar section
      home: "Home",
      // Home translate
    },
  },

  ru: {
    translation: {
      // Navbar section starts here ...

      home: "Главная",
      // Home translate
    },
  },

  tm: {
    translation: {
      // Navbar section ends here .....

      home: "Baş sahypa",
      // Home translate
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
