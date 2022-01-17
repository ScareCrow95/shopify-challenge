export default (id, name, quantity) => {
  if (!id) {
    return { error: 'id is required' }
  } else if (!name) {
    return { error: 'name is required' }
  } else if (!quantity) {
    return { error: 'quantity is required' }
  } else if (isNaN(quantity)) {
    return { error: 'quantity must be a number' }
  } else if (quantity < 0 || quantity > 9999) {
    return { error: 'quantity must be in range 0-9999' }
  } else {
    return null
  }
}
