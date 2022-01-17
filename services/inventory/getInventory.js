import { InventoryModel } from '../../database/dbHelper'

export default ({ id }) => {
  const result = InventoryModel().findOne({ id })
  if (result) {
    return { name: result.name, id, quantity: result.quantity }
  }
  return { error: 'inventory not found' }
}
