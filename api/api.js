import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { engine } from 'express-handlebars'
import fs from 'fs'
import morgan from 'morgan'
import path from 'path'
import { inventoryRouter } from './routes/inventory'
import viewRouter from './viewRouter'
const api = express()

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

/**API Routes */
api.use('/api/inventory', inventoryRouter)

// send 404 catch non-existing routes
api.use(function (req, res, next) {
  res.status(404)
  res.render('404')
})

export default api
