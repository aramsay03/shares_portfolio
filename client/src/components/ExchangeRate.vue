<template lang="html">
  <p>{{this.exchangeRate}}</p>
</template>

<script>
const API_KEY=process.env.VUE_APP_ENV_SHARESAPI

export default {
  data() {
    return {
      exchangeRate: []
    }
  },
  name: "exchange-rate",
  mounted(){
    fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => this.exchangeRate = data)
  }
}

</script>

<style lang="css" scoped>
</style>
