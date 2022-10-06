import * as dotenv from 'dotenv'
dotenv.config({
  path: __dirname + '/../.env'
});
import { AppDataSource } from './data-source'
import { ENV } from './my_env'
import { addAdmin } from './utils/addAdmin'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import helmet from 'helmet'

AppDataSource.initialize()
  .then(async () => {
    const app = express()
    const cors = require('cors')
    const router = require('./routers')
    const port = ENV.PORT || 4000

    addAdmin(ENV.ADMIN_PASSWORD)

    app.use(cors(ENV.CORS_DOMAINS ?? '*'))
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(express.urlencoded({ extended: true }))

    app.use(router)

    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    });
  })
  .catch((error) => console.log(error))
