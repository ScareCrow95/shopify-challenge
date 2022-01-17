import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { engine } from 'express-handlebars'
import fs from 'fs'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import viewRouter from './viewRouter'
const api = express()

api.use(helmet())
api.use(cors())

morgan.token('body', (req, _res) => JSON.stringify(req.body))

api.set('views', path.join(__dirname, 'views/'))

api.engine('handlebars', engine())
api.set('view engine', 'handlebars')

api.use(
  morgan(
    ':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'
  )
)

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))

/**Initialize View Routes */
viewRouter(api)

/**API Routes
 * All files under /routes will automatically be added at startup.
 * /api/{filename}/...
 */
fs.readdir('./api/routes', (err, files) => {
  files.forEach((file) => {
    console.log('added routes: ' + file.split('.')[0])
    api.use(`/api/${file.split('.')[0]}`, require('./routes/' + file).default)
  })
})

// middleware to catch non-existing routes
api.use(function (req, res, next) {
  // you can do what ever you want here
  // for example rendering a page with '404 Not Found'
  res.status(404)
  res.render('404')
})

export default api
