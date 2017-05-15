import {
  config,
  getLevel,
  DEFAULT_LEVEL,
  ALLOWED_LEVELS,
} from '../../src/config/logger'

describe('Config:Logger', () => {
  it('should get correct log level', () => {
    ALLOWED_LEVELS.forEach((level) => {
        expect(getLevel(level)).toEqual(level)
    })

    expect(getLevel('UNKNOWN')).toEqual(DEFAULT_LEVEL)
  })

  it('should expose correct config object', () => {
    const expectedConfig = {
      colorize: true,
      colors: {
        debug: 'green',
        error: 'red',
        info: 'blue',
        warn: 'yellow'
      },
      enabled: true,
      level: 'info',
      prettyPrint: true
    }

    expect(config).toEqual(expectedConfig)
  })
})
