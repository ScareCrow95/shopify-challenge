import { Database, InventoryModel } from '../../database/dbHelper'

export default ({ id }) => {
  const result = InventoryModel().findOne({ id })
  if (result) {
    InventoryModel().remove(result)
    //persist on disc
    Database().saveDatabase()
    return true
  } else {
    return { error: 'inventory not found' }
  }
}
