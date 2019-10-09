import { register } from '@/routers/helper'

const moduleError = 'error'

const routes = [
  {
    path: '/404',
    name: 'error-404',
    component: register('404', moduleError)
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default routes
