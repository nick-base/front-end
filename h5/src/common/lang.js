
export const EN = 'en'
export const ZH = 'zh'

export const DEFAULT_LANGUAGE = 'en-US'
export const STANDARD_EN_US = 'en-US'
export const STANDARD_ZH_CN = 'zh-CN'

const checkLanguage = () => {
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

export default {
  checkLanguage
}
