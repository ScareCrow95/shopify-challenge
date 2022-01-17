import { Database, InventoryModel } from '../../database/dbHelper'
import validateInventoryData from '../../utils/validateInventoryData'

export default ({ id, name, quantity }) => {
  const validationResult = validateInventoryData(id, name, quantity)
  /**if not null then there is a validation issue */
  if (validationResult) {
    return validationResult
  }

  const item = InventoryModel().findOne({ id })
  if (item) {
    return { error: 'id already exists' }
  } else {
    InventoryModel().insert({ name, id, quantity: parseInt(quantity) })
  }
  //persist on disc
  Database().saveDatabase()
  return true
}
