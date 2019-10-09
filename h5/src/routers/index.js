import Vue from 'vue'
import Router from 'vue-router'

import DemoPages from './modules/demo'
import ErrorPages from './error'

Vue.use(Router)

const routes = [
  ...DemoPages,
  ...ErrorPages
]

export default new Router({
  routes
})
