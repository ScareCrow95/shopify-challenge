import { parse } from 'json2csv'
import viewAllInventory from './viewAllInventory'
export default () => {
  const result = viewAllInventory()
  /**
   * this will either be a [] or will have values in array.
   * no need for any other checks
   */
  return parse(result, { fields: ['id', 'name', 'quantity'] })
}
