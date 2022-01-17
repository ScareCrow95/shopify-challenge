import { Database, InventoryModel } from '../../database/dbHelper'

export default async ({ id, name, quantity }) => {
  const result = InventoryModel().findOne({ id })
  if (result) {
    result.quantity = quantity
    result.name = name
    InventoryModel().update(result)
    //persist on disc
    Database().saveDatabase()
    return result
  }
  return null
}
