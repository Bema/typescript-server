import * as winston from 'winston'
import { config } from '../../config/logger'

winston.remove(winston.transports.Console)
winston.add(winston.transports.Console, config)

export default winston
