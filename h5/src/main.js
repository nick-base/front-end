import 'normalize.css/normalize.css'
import './common/utils/device'

import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import i18n from './locales'
import axios from './common/axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
