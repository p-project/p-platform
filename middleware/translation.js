import i18next from 'i18next'

export default function (context) {
  let language
  if (context.isServer) {
    language = context.req.headers['accept-language'].split(',')[0].split('-')[0]
  } else {
    language = (navigator.languages || [navigator.language || navigator.userLanguage])[0].split('-')[0]
  }

  i18next.changeLanguage(language)
}
