import { initDatabase } from '../database/dbHelper'
import createInventory from '../services/inventory/createInventory'
import removeInventory from '../services/inventory/removeInventory'

describe('Test Create Inventory', () => {
  beforeAll(async () => {
    await initDatabase()
    removeInventory({ id: 'test' })
  })
  test('create inventory new id, correct params', () => {
    expect(createInventory({ id: 'test', name: 'test', quantity: 5 })).toBe(
      true
    )
  })
  test('create inventory dupilicate id, correct params', () => {
    expect(createInventory({ id: 'test', name: 'test', quantity: 5 })).toEqual({
      error: 'id already exists',
    })
  })
  test('create inventory, missing id', () => {
    expect(createInventory({ name: 'test', quantity: 5 })).toEqual({
      error: 'id is required',
    })
  })
  test('create inventory, missing name', () => {
    expect(createInventory({ id: 'test', quantity: 5 })).toEqual({
      error: 'name is required',
    })
  })
  test('create inventory, missing quantity', () => {
    expect(createInventory({ id: 'test', name: 'test' })).toEqual({
      error: 'quantity is required',
    })
  })
  test('create inventory, quantity NaN', () => {
    expect(
      createInventory({ id: 'test', name: 'test', quantity: 'qdwq' })
    ).toEqual({
      error: 'quantity must be a number',
    })
  })
  test('create inventory, negetive quantity', () => {
    expect(createInventory({ id: 'test', name: 'test', quantity: -5 })).toEqual(
      {
        error: 'quantity must be in range 0-9999',
      }
    )
  })
  test('create inventory, really large quantity', () => {
    expect(
      createInventory({ id: 'test', name: 'test', quantity: 99999999999999 })
    ).toEqual({
      error: 'quantity must be in range 0-9999',
    })
  })
  afterAll(() => {
    removeInventory({ id: 'test' })
  })
})
