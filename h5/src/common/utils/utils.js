const validatenull = (val) => {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array && val.length === 0) {
    return true
  }
  if (val instanceof Object && JSON.stringify(val) === '{}') {
    return true
  }
  if (val === 'null' || val === null || val === 'undefined' || val === undefined || val === '') {
    return true
  }
  return false
}

const isString = (obj) => {
  return Object.prototype.toString.call(obj) === '[object String]'
}

const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const serialize = data => {
  let list = []
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}

const isWechat = (() => {
  const UA = window.navigator.userAgent.toLowerCase()
  return UA && UA.indexOf('micromessenger') > 0
})()

export {
  validatenull,
  isString,
  isArray,
  serialize,
  isWechat
}
