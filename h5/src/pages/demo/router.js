import { register } from '@/routers/helper'

const moduleDemo = 'demo'

export const routes = [
  {
    path: '/',
    name: 'demo-home',
    component: register('home', moduleDemo),
    meta: {
      title: 'Home',
      auth: false
    }
  },
  {
    path: '/login',
    name: 'demo-login',
    component: register('login', moduleDemo),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/about',
    name: 'demo-about',
    component: register('about', moduleDemo, {
      isMobileIndependent: true,
      isPadIndependent: true
    }),
    meta: {
      auth: true,
      title: 'About',
      permission: 'page-about'
    }
  }
]

export default routes
