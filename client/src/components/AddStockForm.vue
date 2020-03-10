<template lang="html">

  <div class="popup">
    <span v-on:click="loadAddNewStockForm">Add New Stock</span>
  <span v-bind:class="[isActive ? 'popuptext popuptextvisable' : 'popuptext popuptexthidden']" id="myPopup">
    <span v-on:click="CloseAddNewStockForm" class="close" id="myPopupClose">&times;</span>

    <form v-on:submit.prevent="handleSubmit">

      <form v-on:submit.prevent="searchSymbol">
        <label for="search">Search Stock</label>
        <input type="text" v-model="search" name="search" value="">
        <input type="submit" name="search" value="search">
      </form>
      <label for="stocksearch">Stock Select</label>

      <select v-model="selectedStock.symbol" class="" name="stocksearch">
        <option value="" disabled></option>
        <option v-for="stock in searchResult" v-bind:value="stock">{{stock['1. symbol']}} - {{ stock['2. name']}}</option>

      </select>

      <label for="shares-amount">Shares owned:</label>
      <input type="text" id="shares-amount" name="shares-amount" v-model.number="selectedStock.shares"/>

      <input type="submit" name="submit" value="Add Stock"/><br>

    </form>
    </span>
</div>
</template>

<script>
import { eventBus } from '@/main'
const API_KEY=process.env.VUE_APP_ENV_SHARESAPI

export default {
  name: 'add-stock',
  data(){
    return {
      search: '',
      searchResult: [],
      selectedStock: {
        symbol: '',
        shares: 0
      },
      submitStock: {
      name: '',
      symbol: '',
      shares: ''
      },
      isActive: false,
      selected: []

    }
  },
  methods: {
    loadAddNewStockForm() {
      this.isActive = true;
    },

    addStock() {
      this.submitStock.symbol = this.selectedStock.symbol['1. symbol']
      this.submitStock.name = this.selectedStock.symbol['2. name']
      this.submitStock.shares = this.selectedStock.shares
    },

    handleSubmit() {
      this.addStock();
      eventBus.$emit('submit-stock', this.$data.submitStock);
      this.submitStock.name = this.submitStock.shares = this.submitStock.symbol ='';
      this.isActive = false;
    },

    CloseAddNewStockForm() {
      this.isActive = false;
      console.log(this.isActive)
    },
    searchSymbol(){
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.search}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          this.searchResult = data.bestMatches
        })
    }
  }
}
</script>

<style lang="css" scoped>
/* Popup container */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.popup .popuptextvisable {
  display: block;
}

.popup .popuptexthidden {
  display: none;
}
/* The actual popup (appears on top) */
.popup .popuptext {
  width: 320px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 16px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
