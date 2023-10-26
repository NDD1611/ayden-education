import { i18n } from '@lingui/core'

export const locales = ['en', 'vi']
export const defaultLocale = 'en'
import en from "../locales/en.json"
import vi from "../locales/vi.json"
export const languages: Record<string, string>[] = [
  {
    name: 'English',
    value: 'en',
    icon: '🇬🇧',
  },
  {
    name: 'Tiếng Việt',
    value: 'vi',
    icon: '🇻🇳',
  },
]

export async function dynamicActivate(locale: string) {
  // const { messages } = (await import(`@lingui/loader!./../locales/${locale}.json`)).default
  // i18n.load(locale, messages)
  if (locale == 'vi') {
    i18n.load(locale, vi)
  }else{
    i18n.load(locale, en)
  }
  i18n.activate(locale)
  return i18n
}
