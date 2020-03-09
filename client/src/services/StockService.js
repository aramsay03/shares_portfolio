const baseURL = 'http://localhost:3000/api/shares/'

export default {

  getStocks() {
    return fetch(baseURL)
    .then(res => res.json())
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
  updateStock(stock) {
    return fetch(baseURL, {
      method: 'PATCH',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
