import { Database, InventoryModel } from '../../database/dbHelper'
import validateInventoryData from '../../utils/validateInventoryData'

export default ({ id, name, quantity }) => {
  /**
   * TODO as the projects grows this should be used as a middleware function instead
   */
  const validationResult = validateInventoryData(id, name, quantity)

  /**if not null then there is a validation issue */
  if (validationResult) {
    return validationResult
  }
  const result = InventoryModel().findOne({ id })
  if (result) {
    result.quantity = quantity
    result.name = name
    InventoryModel().update(result)
    //persist on disc
    Database().saveDatabase()
    return { id, quantity, name }
  }
  return { error: 'inventory not found' }
}
