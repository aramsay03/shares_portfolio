use shares;
db.dropDatabase();

// const API_KEY=process.env.VUE_APP_ENV_SHARESAPI


db.shares.insertMany([

  {
    name: 'Microsoft',
    symbol: 'MSFT',
    shares: 50,
    api: ''
  },
  {
    name: 'Apple Inc',
    symbol: 'AAPL',
    shares: 35,
    api: ''
  },
  {
    name: 'Alphabet Inc',
    symbol: "GOOG",
    shares: 75,
    api: ''
  }
]);

// getApi(this.shares[0]);
// getApi(this.shares[1]);
// getApi(this.shares[2]);
//
//
// const getApi = ((database) => {
//   fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&apikey=${API_KEY}`)
//     .then(res = res.json())
//     .then(data => {
//       database.api = data
//     });
// })
