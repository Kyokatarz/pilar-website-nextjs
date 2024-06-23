import enDict from './en'
import esDict from './es'

export default function getDictionary(lang: string) {
  switch (lang) {
    case 'en':
      return enDict
    case 'es':
      return esDict
    default:
      return enDict
  }
}
