<template lang="html">
  <div v-if="stock" id="StockDetail" class="stock-detail">
      <div class="stock-detail-item">
        <h2>{{stock.name}}</h2>
        <p>You own <span>{{stock.shares}}</span> shares</p>
      </div>
      <div class="stock-detail-form">
        <form method="patch">
          <label for="shares-number">Shares: </label>
          <input type="text" name="shares-number" v-model="updatedStock.shares" value="">
          <input type="submit" name="buy" value="Add Shares" v-on:click.prevent="handleUpdate()">
        </form>
      </div>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'

export default {
  data() {
    return {
      updatedStock: {
        _id: this.stock._id,
        shares: ''
      }
    }
  },
  name: 'stock-detail',
  props: ['stock'],
  methods: {
    handleUpdate() {
      eventBus.$emit('updated-stock', this.updatedStock)
    },
  }
}
</script>

<style lang="css" scoped>

  .stock-detail {
    width: 40%;
    display: flex;
    margin: 0 30%;
    flex-wrap: wrap;
    background-color: #4c4c4d;
    border-radius: 2em;
  }

  .stock-detail-item, .stock-detail-form, .stock-detail-buy {
    width: 100%;
    text-align: center;
  }

  .stock-detail-item {
    font-size: 1.5em;
  }

  .stock-detail-item h2 {
    padding: 0.5em 0;
  }

  .stock-detail-item p {
    font-size: 1.2em;
  }

  .stock-detail-item p span{
    color: #F4B41A;
  }

  .stock-detail-form {
    margin: 0.5em 0;
  }

  .stock-detail-form label {
    font-size: 1.5em;
  }

  .stock-detail-form input[type="text"]{
    padding: 0.5em 1em;
    border-radius: 2em;
    outline: none;
    border: none;
    text-align: center;
    font-size: 1em;
  }

  .stock-detail-form input[type="submit"] {
    background-color: #F4B41A;
    border: 1px solid ghostwhite;
    border-radius: 2em;
    color: ghostwhite;
    padding: 0.5em 1em;
    font-size: 1em;
    margin: 1em;
  }

  .stock-detail-buy input:hover {
    background-color: #f6be3c;
    cursor: pointer;
  }

</style>
