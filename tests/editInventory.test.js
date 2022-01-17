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
  test('Edit inventory wrong id', () => {
    expect(editInventory({ id: '2345', name: 'test', quantity: 5 })).toEqual({
      error: 'inventory not found',
    })
  })
  test('Edit inventory correct params', () => {
    expect(editInventory({ id: 'test', name: 'test', quantity: 5 })).toEqual({
      name: 'test',
      id: 'test',
      quantity: 5,
    })
  })
  test('Edit inventory, missing id', () => {
    expect(editInventory({ name: 'test', quantity: 5 })).toEqual({
      error: 'id is required',
    })
  })
  test('Edit inventory, missing name', () => {
    expect(editInventory({ id: 'test', quantity: 5 })).toEqual({
      error: 'name is required',
    })
  })
  test('Edit inventory, missing quantity', () => {
    expect(editInventory({ id: 'test', name: 'test' })).toEqual({
      error: 'quantity is required',
    })
  })
  test('Edit inventory, quantity NaN', () => {
    expect(
      editInventory({ id: 'test', name: 'test', quantity: 'qdwq' })
    ).toEqual({
      error: 'quantity must be a number',
    })
  })
  test('Edit inventory, negetive quantity', () => {
    expect(editInventory({ id: 'test', name: 'test', quantity: -5 })).toEqual({
      error: 'quantity must be in range 0-9999',
    })
  })
  test('Edit inventory, really large quantity', () => {
    expect(
      editInventory({ id: 'test', name: 'test', quantity: 99999999999999 })
    ).toEqual({
      error: 'quantity must be in range 0-9999',
    })
  })
  afterAll(() => {
    removeInventory({ id: 'test' })
  })
})
