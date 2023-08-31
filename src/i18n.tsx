import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translations/en.json";
import frTranslation from "./translations/fr.json";
import itTranslation from "./translations/it.json";
import esTranslation from "./translations/es.json";
import cnTranslation from "./translations/cn.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
        en: { translation: enTranslation },
        fr: { translation: frTranslation },
        it: { translation: itTranslation },
        es: { translation: esTranslation },
        cn: { translation: cnTranslation },
    
    },
        lng: "en",
        interpolation: {
        escapeValue: false,
    },
});

export default i18n;