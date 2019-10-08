import development from './env/development'
import production from './env/production'
import test from './env/test'

const env = process.env

let envConstants = {}
if (env.NODE_ENV === 'development') {
  envConstants = development
} else if (env.NODE_ENV === 'production') {
  envConstants = production
} else if (env.NODE_ENV === 'test') {
  envConstants = test
}

export default envConstants
