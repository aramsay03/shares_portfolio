const baseURL = 'http://localhost:3000/api/shares/'

export default {
  addStock(stock) {
    console.log('fetched', stock)
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
