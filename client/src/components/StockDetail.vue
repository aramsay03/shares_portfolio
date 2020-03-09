<template lang="html">
  <div v-if="stock" id="StockDetail">
    <h2>{{stock.name}}</h2>
    <p>{{stock.shares}}</p>
    <form method="patch">
      <label for="shares-number">Number of Shares</label>
      <input type="text" name="shares-number" v-model="stock.shares" value="">
      <input type="submit" name="buy" value="Buy Shares" v-on:click.prevent="handleUpdate()">
    </form>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'

export default {
  // data() {
  //   return {
  //     name: this.stocks.name,
  //     shares: this.stocks.shares
  //   }
  // },
  name: 'stock-detail',
  props: ['stock'],
  methods: {
    handleUpdate() {
      eventBus.$emit('updated-stock', {
        name: this.stock.name,
        shares: this.stock.shares
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
