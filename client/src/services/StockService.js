const baseURL = 'http://localhost:3000/api/shares/'

export default {

  getStocks() {
    return fetch(baseURL)
    .then(res => res.json());
  },

  addStock(stock) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  },
  updateStock(payload) {
    const id = payload._id
    delete payload._id
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  }
}
