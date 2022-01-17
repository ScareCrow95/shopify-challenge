import { initDatabase } from '../database/dbHelper'
import createInventory from '../services/inventory/createInventory'
import editInventory from '../services/inventory/editInventory'
import removeInventory from '../services/inventory/removeInventory'

describe('Test Edit Inventory', () => {
  beforeAll(async () => {
    await initDatabase()
    removeInventory({ id: 'test' })
    createInventory({ id: 'test', name: 'test', quantity: 10 })
  })
  test('remove inventory', () => {
    expect(removeInventory({ id: 'test' })).toBe(true)
  })
  test('remove inventory wrong id', () => {
    expect(removeInventory({ id: 'test-2' })).toEqual({
      error: 'inventory not found',
    })
  })
})
