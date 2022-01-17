import { Database, InventoryModel } from '../../database/dbHelper'

export default async ({ id, name, quantity }) => {
  InventoryModel().insert({ name, id, quantity })
  //persist on disc
  Database().saveDatabase()
  return true
}
