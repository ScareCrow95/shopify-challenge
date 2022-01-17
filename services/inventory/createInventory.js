import { Database, InventoryModel } from '../../database/dbHelper'

export default async ({ id, name, quantity }) => {
  const item = InventoryModel().findOne({ id })
  if (item) {
    /**
     * Already exits in the database just update values
     */
    item.quantity = quantity
    item.name = name
    InventoryModel().update(item)
  } else {
    InventoryModel().insert({ name, id, quantity })
  }
  //persist on disc
  Database().saveDatabase()
  return true
}
