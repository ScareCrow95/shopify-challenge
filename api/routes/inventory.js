import { Router } from 'express'
import createInventory from '../../services/inventory/createInventory'
import editInventory from '../../services/inventory/editInventory'
import exportInventory from '../../services/inventory/exportInventory'
import getInventory from '../../services/inventory/getInventory'
import removeInventory from '../../services/inventory/removeInventory'
import viewAllInventory from '../../services/inventory/viewAllInventory'

const router = Router()

router.post('/create', (req, res) => {
  const result = createInventory(req.body)
  console.log(result)
  if (result.error) {
    res.statusCode = 400
    res.json(result)
  } else {
    res.redirect('/list')
  }
})

router.get('/list', (req, res) => {
  /**
   * returns the array of all inventory
   */
  res.json(viewAllInventory())
})

router.get('/get', (req, res) => {
  const result = getInventory(req.query)
  /**
   * returns the array of all inventory
   */
  if (result.error) {
    res.statusCode = 404
  }
  res.json(result)
})

router.post('/delete', (req, res) => {
  const result = removeInventory(req.query)
  /**
   * if the inventory doesnt exist send the 404 code with error
   * else redirect to get the updated list
   */
  if (result.error) {
    res.statusCode = 404
    res.json(result)
  } else {
    res.redirect('/list')
  }
})

router.post('/edit', (req, res) => {
  const result = editInventory(req.body)
  /**
   * we can send the data back to client here, since I am using handlebars
   * a simple redirect is enough, as it will reload the inventory list.
   */
  if (result.error) {
    /**
     * some validation error occured or inventory you are trying to edit doesnt exist
     * */
    res.statusCode = 400
    res.json(result)
  } else {
    res.redirect('/list')
  }
})

router.get('/export', (req, res) => {
  const result = exportInventory()
  /**
   * setup correct headers for file to be downloaded
   */
  if (!result) {
    res.send({ error: 'inventory list empty' })
  } else {
    res.header('Content-Type', 'text/csv')
    res.attachment('inventory-exports.csv')
    return res.send(result)
  }
})

export const inventoryRouter = router
