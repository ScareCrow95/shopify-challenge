import loki from 'lokijs'

/**
 * light weight in memory databse with an option to write the db to disk.
 * https://www.npmjs.com/package/lokijs
 */

let db = new loki('inventory.json')
let inventory

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      inventory = db.addCollection('inventory', { indices: ['id'] })
      resolve(true)
    })
  })
  /**
   * try and restore the databse if it exists on disc, if not initialize and continue
   */
}

export const InventoryModel = () => inventory
export const Database = () => db
