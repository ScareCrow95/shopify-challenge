require('dotenv').config()

import http from 'http'
import api from './api/api.js'
import { initDatabase } from './database/dbHelper.js'

async function startup() {
  const server = http.Server(api)
  initDatabase()
  server.listen(process.env.PORT)
  console.log(`server started at ${process.env.PORT}`)
}
startup()
