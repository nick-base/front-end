import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getGlobalLanguage } from '@/common/lang'
import commonCN from './lang/zh-CN'
import commonEN from './lang/en-US'
import errorCN from '@/pages/error/i18n/zh-CN'
import errorEN from '@/pages/error/i18n/en-US'
import { demoCN, demoEN } from '@/pages/demo/locale'

Vue.use(VueI18n)

const messages = {
  'en-US': {
    common: commonEN,
    error: errorEN,
    demo: demoEN
  },
  'zh-CN': {
    common: commonCN,
    error: errorCN,
    demo: demoCN
  }
}

const i18n = new VueI18n({
  locale: getGlobalLanguage(),
  messages
})

export default i18n
