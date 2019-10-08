import {
  setSession,
  getSession
} from '@/utils/storage'

// 系统语言
const language = 'language'

export const setLang = (lang) => {
  setSession({
    name: language,
    content: lang
  })
}

export const getLang = (lang) => {
  return getSession(language)
}
