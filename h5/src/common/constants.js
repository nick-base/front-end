import development from './env/development'
import production from './env/production'
import test from './env/test'

export const env = process.env
export const isDev = process.env.NODE_ENV === 'development'

let envConstant = {}
if (env.NODE_ENV === 'development') {
  envConstant = development
} else if (env.NODE_ENV === 'production') {
  envConstant = production
} else if (env.NODE_ENV === 'test') {
  envConstant = test
}

export const envConstants = envConstant
