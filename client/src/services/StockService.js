const baseURL = 'http://localhost:3000/api/stocks/'

export default {
  addStock(stock) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json());
  }
}
