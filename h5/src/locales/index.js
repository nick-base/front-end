import Vue from 'vue'
import VueI18n from 'vue-i18n'
import commonCN from './lang/zh-CN'
import commonEN from './lang/en-US'
import { getGlobalLanguage } from '@/common/lang'

Vue.use(VueI18n)

const messages = {
  'en-US': {
    common: commonEN
  },
  'zh-CN': {
    common: commonCN
  }
}

const i18n = new VueI18n({
  locale: getGlobalLanguage(),
  messages
})

export default i18n
