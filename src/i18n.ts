import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(Backend)
  // .use(LanguageDetector)
  .init({
    fallbackLng: "es",
    lng : "es",
    debug: import.meta.env.DEV,
    ns: ["heroFirstPart", "heroSecondPart"],
    // defaultNS: "heroFirstPart",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    interpolation:{
        escapeValue: false
    }
  });
