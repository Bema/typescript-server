import * as express from 'express'
import logger from './services/logger'

const app = express()
const PORT = process.env.PORT || 3000

app.get('*', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  logger.info(`Example app listening on port ${PORT}`)
})

export default server
