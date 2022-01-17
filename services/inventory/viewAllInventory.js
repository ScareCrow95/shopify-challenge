import { InventoryModel } from '../../database/dbHelper'

export default () => {
  return InventoryModel().find()
}
