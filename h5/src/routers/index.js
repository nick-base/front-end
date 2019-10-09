import Vue from 'vue'
import Router from 'vue-router'

import Demo from './modules/demo'

Vue.use(Router)

const routes = [
  ...Demo
]

export default new Router({
  routes
})
