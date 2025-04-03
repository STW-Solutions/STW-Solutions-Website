import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import all translation files
import English from './Translation/en.json';
import French from './Translation/fr.json';
import German from './Translation/de.json';

const resources = {
  en: {
    translation: English,
  },
  fr: {
    translation: French
  },
  de: {
    translation: German
  }
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng: "en", //default language
})