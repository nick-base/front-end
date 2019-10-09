import Vue from 'vue'
import Router from 'vue-router'

import DemoPages from '@/pages/demo'
import ErrorPages from '@/pages/error'

Vue.use(Router)

const routes = [
  ...DemoPages,
  ...ErrorPages
]

export default new Router({
  routes
})
