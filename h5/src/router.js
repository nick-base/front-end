import Vue from 'vue'
import Router from 'vue-router'
import device from './common/utils/device'
import { isArray } from './common/utils/utils'

Vue.use(Router)

const isMobile = device.mobile()
const isPad = device.tablet()
/**
 * mobileIndependent: 是否mobile使用`-m`后缀的独立组件
 *   - true:   mobilePage 中为不使用后缀的过滤列表
 *   - false:  mobilePage 中为使用后缀的过滤列表
 * padIndependent:    是否pad使用`-p`后缀的独立组件
 *   - true:   padPage 中为不使用后缀的过滤列表
 *   - false:  padPage 中为使用后缀的过滤列表
 */
const mobileIndependent = true
const padIndependent = false

const mobilePage = [
  'home'
]
const padPage = [
  'about'
]

const register = (name, moudle) => {
  let fileName = name
  let componentName = name
  let component = ''

  if (isMobile) {
    if ((mobileIndependent && mobilePage.indexOf(name) === -1) ||
      (!mobileIndependent && mobilePage.indexOf(name) !== -1)) {
      componentName = name + '-m'
    }
  } else if (isPad) {
    if ((padIndependent && padPage.indexOf(name) === -1) ||
      (!padIndependent && padPage.indexOf(name) !== -1)) {
      componentName = name + '-p'
    }
  }
  if (moudle) {
    moudle = isArray(moudle) ? moudle.join('/') : moudle
    component = `./pages/${moudle}/${fileName}/${componentName}.vue`
  } else {
    component = `./pages/${fileName}/${componentName}.vue`
  }
  return () => import(`${component}`)
}

// String or String array
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
    component: register('about', moduleDemo)
  }
]

export default new Router({
  routes
})
