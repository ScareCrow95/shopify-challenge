import { initDatabase } from '../database/dbHelper'
import createInventory from '../services/inventory/createInventory'
import getInventory from '../services/inventory/getInventory'
import removeInventory from '../services/inventory/removeInventory'

describe('Test Edit Inventory', () => {
  beforeAll(async () => {
    await initDatabase()
    removeInventory({ id: 'test' })
    createInventory({ id: 'test', name: 'test', quantity: 10 })
  })
  test('get inventory', () => {
    expect(getInventory({ id: 'test' })).toEqual({
      id: 'test',
      name: 'test',
      quantity: 10,
    })
  })
  test('remove inventory wrong id', () => {
    expect(getInventory({ id: 'test-2' })).toEqual({
      error: 'inventory not found',
    })
  })
})
