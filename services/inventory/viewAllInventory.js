import { InventoryModel } from '../../database/dbHelper'

export default () => {
  return InventoryModel()
    .find()
    .map((x) => {
      return { name: x.name, quantity: x.quantity, id: x.id }
    })
}
