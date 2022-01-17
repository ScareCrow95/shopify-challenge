import { Database, InventoryModel } from '../../database/dbHelper'

export default async ({ id }) => {
  const result = InventoryModel().findOne({ id })
  if (result) {
    InventoryModel().remove(result)
    //persist on disc
    Database().saveDatabase()
    return true
  } else {
    return false
  }
}
