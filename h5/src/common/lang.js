
import Vue from 'vue'
import { setLang, getLang } from './session'

export const EN = 'en'
export const ZH = 'zh'

export const DEFAULT_LANGUAGE = 'en-US'
export const STANDARD_EN_US = 'en-US'
export const STANDARD_ZH_CN = 'zh-CN'

export const checkLanguage = () => {
  let language = navigator.language
  let lang = DEFAULT_LANGUAGE

  if (language) {
    if (language.indexOf(EN) === 0) {
      lang = STANDARD_EN_US
    } else if (language.indexOf(ZH) === 0) {
      lang = STANDARD_ZH_CN
    }
  }
  return lang
}

export const getGlobalLanguage = () => {
  let lang = getLang()
  if (!lang) {
    lang = checkLanguage()
  }
  if (!Vue.config.lang) {
    Vue.config.lang = lang
  }
  return lang
}

export const setGlobalLanguage = (language) => {
  let langs = [
    STANDARD_EN_US,
    STANDARD_ZH_CN
  ]
  let current = getGlobalLanguage()

  if (langs.indexOf(language) !== -1 && current !== language) {
    setLang(language)
    window.location.reload()
  }
}

export const setEn = () => {
  setGlobalLanguage(STANDARD_EN_US)
}

export const setZh = () => {
  setGlobalLanguage(STANDARD_ZH_CN)
}

export const isEn = () => {
  let lang = getGlobalLanguage()
  return lang === STANDARD_EN_US
}
