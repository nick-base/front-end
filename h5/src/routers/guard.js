import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const checkLogin = () => {
  return true
}
const AUTH_DEFAULT = true
const LOGIN_PAGE = '/login'

export const routerGuard = (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start()

    const meta = Object.assign({ auth: AUTH_DEFAULT }, to.meta)
    let auth = meta.auth

    if (!auth) {
      next()
    } else {
      if (checkLogin()) {
        next()
      } else if (to.path === LOGIN_PAGE) {
        next()
      } else {
        next(LOGIN_PAGE)
        if (from.path === LOGIN_PAGE) {
          NProgress.done()
        }
      }
    }
  })

  router.afterEach((to, from) => {
    NProgress.done()
    let meta = to.meta || {}
    if (meta && meta.title) {
      document.title = meta.title
    }
  })
}
