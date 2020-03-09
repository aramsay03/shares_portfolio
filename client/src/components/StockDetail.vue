<template lang="html">
  <div v-if="stock" id="StockDetail">
    <h2>{{stock.name}}</h2>
    <p>{{stock.shares}}</p>
    <form>
      <label for="shares-number">Number of Shares</label>
      <input type="text" name="shares-number" value="">
      <input type="submit" name="buy" value="Buy Shares" v-on:click="handleBuy()">
      <input type="submit" name="sell" value="Sell Shares" v-on:click="handleSell()">
    </form>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'

export default {
  name: 'stock-detail',
  props: ['stock']
}
</script>

<style lang="css" scoped>
</style>
