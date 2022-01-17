import http from 'http'
import api from './api/api.js'
import { initDatabase } from './database/dbHelper.js'
const port = 8200

async function startup() {
  const server = http.Server(api)
  initDatabase()
  server.listen(port)
  console.log(`server started at ${port}`)
}
startup()
