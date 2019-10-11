import Vue from 'vue'
import Router from 'vue-router'
import { routerGuard } from './guard'

import DemoPages from '@/pages/demo/router'
import ErrorPages from '@/pages/error/router'

Vue.use(Router)

const routes = [
  ...DemoPages,
  ...ErrorPages
]

const router = new Router()
router.addRoutes(routes)

routerGuard(router)

export default router
