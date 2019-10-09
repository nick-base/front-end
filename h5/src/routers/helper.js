import device from '@/common/utils/device'
import { isArray } from '@/common/utils/utils'

const isMobile = device.mobile()
const isPad = device.tablet()
/**
 * mobileIndependent: 是否mobile使用`-m`后缀的独立组件
 * padIndependent:    是否pad使用`-p`后缀的独立组件
 */
const mobileIndependent = false
const padIndependent = false

export const register = (name, moudle, params = {
  isMobileIndependent: mobileIndependent,
  isPadIndependent: padIndependent
}) => {
  let fileName = name
  let componentName = name

  if (isMobile && params.isMobileIndependent) {
    componentName = name + '-m'
  }
  if (isPad && params.isPadIndependent) {
    componentName = name + '-p'
  }
  if (moudle) {
    moudle = isArray(moudle) ? moudle.join('/') : moudle
    return () => import(`@/pages/${moudle}/${fileName}/${componentName}.vue`)
  } else {
    return () => import(`@/pages/${fileName}/${componentName}.vue`)
  }
}
