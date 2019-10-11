let dev = require('./vue.dev.config')
let prod = require('./vue.prod.config')

let current = {}

if (process.env.NODE_ENV === 'development') {
  current = dev
} else {
  current = prod
}

module.exports = current
