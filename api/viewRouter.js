import { InventoryModel } from '../database/dbHelper'
import viewAllInventory from '../services/inventory/viewAllInventory'

/**
 * ideally this would not be needed as I dont see a usecase
 * for this API where we will use a templating engine.
 *
 * I used handlebars to keep things light weight
 */
export default (api) => {
  api.get('/', (req, res) => {
    res.redirect('/list')
  })

  api.get('/list', async (req, res) => {
    const data = await viewAllInventory()
    /**
     * added index for easy numbering in handlebars
     */
    data.forEach((ele, idx) => {
      ele.index = idx + 1
    })
    res.render('list', { data })
  })

  api.get('/create', (req, res) => {
    res.render('create')
  })

  api.post('/edit', async (req, res) => {
    const data = await InventoryModel().findOne({ id: req.query.id })
    res.render('edit', { data })
  })
}
