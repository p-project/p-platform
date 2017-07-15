import i18next from 'i18next'
import translations from '~assets/translations/translations'

i18next.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: translations.en
    },
    fr: {
      translation: translations.fr
    }
  }
})
