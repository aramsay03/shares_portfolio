use shares;
db.dropDatabase();

db.shares.insertMany([

  {
  name: 'MSFT',
  shares: 50
  },
  {
  name: 'APPL',
  shares: 35
  },
  {
  name: "GOOG",
  shares: 75  
  }
])
