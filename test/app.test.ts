import * as supertest from 'supertest'
import { default as server } from '../src/app'

const request = supertest.agent(server)

describe('App', () => {
  afterAll((done) => {
      server.close()
      done()
  })

  it('should serve root endpoint', (done) => {
    request
      .get('/')
      .expect('Hello World!')
      .end(done)
  })
})
