import Vue from 'vue'
import Router from 'vue-router'
import { authGuard } from './auth'

import DemoPages from '@/pages/demo/router'
import ErrorPages from '@/pages/error/router'

Vue.use(Router)

const routes = [
  ...DemoPages,
  ...ErrorPages
]

const router = new Router()
router.addRoutes(routes)

authGuard(router)

export default router
