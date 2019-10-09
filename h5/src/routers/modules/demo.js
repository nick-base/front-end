import { register } from '@/routers/helper'

const moduleDemo = 'demo'

const routes = [
  {
    path: '/',
    name: 'demo-home',
    component: register('home', moduleDemo)
  },
  {
    path: '/about',
    name: 'demo-about',
    component: register('about', moduleDemo, {
      isMobileIndependent: true,
      isPadIndependent: true
    })
  }
]

export default routes
