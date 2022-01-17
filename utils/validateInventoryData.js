export default (id, name, quantity) => {
  let result = null
  if (!id) {
    result = { error: 'id is required' }
  } else if (!name) {
    result = { error: 'name is required' }
  } else if (!quantity) {
    result = { error: 'quantity is required' }
  } else if (isNaN(quantity)) {
    result = { error: 'quantity must be a number' }
  } else if (quantity < 0 || quantity > 9999) {
    result = { error: 'quantity must be in range 0-9999' }
  }
  if (result) {
    console.log(`<====Validation Error====>
Received: id: ${id} | name: ${name} | quantity: ${quantity}
Error: ${result.error}`)
  }
  return result
}
