import axios from 'axios'
import { serialize } from '@/utils/utils'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { isDev, envConstants } from './constants'

const DEBUG_PREFIX = '/debug'
const DEBUG_EXT = '.json'

axios.defaults.baseURL = envConstants.baseURL
axios.defaults.timeout = 10000

axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500
}

axios.defaults.withCredentials = true

NProgress.configure({
  showSpinner: false
})

axios.interceptors.request.use(config => {
  NProgress.start()
  const meta = (config.meta || {})
  if (config.url.startsWith(DEBUG_PREFIX)) {
    if (isDev) {
      config.url += DEBUG_EXT
    } else {
      config.url = config.url.replace(DEBUG_PREFIX, '')
    }
  }
  if (config.method === 'post' && meta.isSerialize === true) {
    config.data = serialize(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  NProgress.done()
  const status = res.data.code || 200

  if (status !== 200) {
    const message = res.data.message || '未知错误'
    return Promise.reject(new Error(message))
  }
  return res.data
}, error => {
  NProgress.done()
  return Promise.reject(new Error(error))
})

export default axios
