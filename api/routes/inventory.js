import { Router } from 'express'
import createInventory from '../../services/inventory/createInventory'
import editInventory from '../../services/inventory/editInventory'
import exportInventory from '../../services/inventory/exportInventory'
import removeInventory from '../../services/inventory/removeInventory'

const router = Router()

router.post('/create', (req, res) => {
  createInventory(req.body)
  res.redirect('/list')
})

router.post('/delete', (req, res) => {
  const result = removeInventory(req.query)
  /**
   * here we can handle the logic where the inventory was deleted or not
   * currently it simply redirects to list page, if the inventory was not
   * deleted it does not effect functionality
   */
  res.redirect('/list')
})

router.post('/edit', (req, res) => {
  const result = editInventory(req.body)
  /**
   * we can send the data back to client here, since I am using handlebars
   * a simple redirect is enough, as it will reload the inventory list.
   */
  res.redirect('/list')
})

router.get('/export', (req, res) => {
  const result = exportInventory()
  /**
   * setup correct headers for file to be downloaded
   */
  res.header('Content-Type', 'text/csv')
  res.attachment('inventory-exports.csv')
  return res.send(result)
})

export default router
