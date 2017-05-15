import logger from '../../../src/services/logger'

describe('Services:Logger', () => {
  it('should expose info method', () => {
    expect(logger).toBeDefined()
    expect(logger).toHaveProperty('info')
    expect(logger).toHaveProperty('warn')
    expect(logger).toHaveProperty('error')
    expect(logger).toHaveProperty('debug')
  })  
})
