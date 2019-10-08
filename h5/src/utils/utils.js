export const validatenull = (val) => {
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

export const serialize = data => {
  let list = []
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}
