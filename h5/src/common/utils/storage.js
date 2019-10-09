import { validatenull } from './utils'

const keyName = 'site-'

const setStorage = (params = {}, isSessionStorage = false) => {
  let {
    name,
    content
  } = params
  let obj = {
    dataType: typeof (content),
    content: content,
    datetime: new Date().getTime()
  }

  if (isSessionStorage) {
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  } else {
    name = keyName + name
    window.localStorage.setItem(name, JSON.stringify(obj))
  }
}

export const setLocal = (params = {}) => {
  setStorage(params, false)
}

export const setSession = (params = {}) => {
  setStorage(params, true)
}

const getStorage = (name, debug, isSessionStorage = false) => {
  let obj = {}
  let content
  if (isSessionStorage) {
    obj = window.sessionStorage.getItem(name)
  } else {
    name = keyName + name
    obj = window.localStorage.getItem(name)
  }
  if (validatenull(obj)) {
    return
  }

  try {
    obj = JSON.parse(obj)
  } catch {
    return obj
  }
  if (debug) {
    return obj
  }
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = Boolean(obj.content)
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content
}

export const getLocal = (name, debug = false) => {
  return getStorage(name, debug, false)
}

export const getSession = (name, debug = false) => {
  return getStorage(name, debug, true)
}

const removeStorage = (name, isSessionStorage = false) => {
  if (isSessionStorage) {
    window.sessionStorage.removeItem(name)
  } else {
    name = keyName + name
    window.localStorage.removeItem(name)
  }
}

export const removeLocal = (name = {}) => {
  removeStorage(name, false)
}

export const removeSession = (name = {}) => {
  removeStorage(name, true)
}

export const getAllLocal = () => {
  let list = []
  for (let i = 0; i <= window.localStorage.length; i++) {
    list.push({
      name: window.localStorage.key(i),
      content: getLocal(window.sessionStorage.key(i))
    })
  }
  return list
}

export const getAllSession = () => {
  let list = []
  for (let i = 0; i <= window.sessionStorage.length; i++) {
    list.push({
      name: window.sessionStorage.key(i),
      content: getSession(window.sessionStorage.key(i))
    })
  }
  return list
}

export const clearLocal = () => {
  window.localStorage.clear()
}

export const clearSession = () => {
  window.sessionStorage.clear()
}
