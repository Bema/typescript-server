import { includes } from 'lodash'

export const {
  LOGGER_LEVEL = '',
  DEFAULT_LEVEL = 'info'
} = process.env

export const ALLOWED_LEVELS = [
  'error',
  'warn',
  'info',
  'verbose',
  'debug',
  'silly'
]

export function getLevel(envValue) {
  if (includes(ALLOWED_LEVELS, envValue)) {
    return envValue
  }

  return DEFAULT_LEVEL
}

export const config = {
  colorize: true,
  colors: {
    debug: 'green',
    error: 'red',
    info: 'blue',
    warn: 'yellow'
  },
  enabled: true,
  level: getLevel(LOGGER_LEVEL.toLowerCase()),
  prettyPrint: true
}
