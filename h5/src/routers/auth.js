import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const checkLogin = () => {
  return true
}

const checkPermission = (permission) => {
  return true
}

const AUTH_DEFAULT = true
const LOGIN_PAGE = '/login'
const FORBIDDEN_PAGE = '/403'

export const authGuard = (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start()

    const meta = Object.assign({ auth: AUTH_DEFAULT }, to.meta)
    let auth = meta.auth

    if (!auth) {
      next()
    } else {
      if (checkLogin()) {
        if (meta.permission) {
          if (checkPermission(meta.permission)) {
            next()
          } else {
            next(FORBIDDEN_PAGE)
            if (from.path === FORBIDDEN_PAGE) {
              NProgress.done()
            }
          }
        } else {
          next()
        }
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
