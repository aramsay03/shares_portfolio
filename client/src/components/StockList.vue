<template lang="html">
  <div id="stockList">
  <ul>
    <list-item v-for="(stock, index) in stocks" :stock="stocks" :key="index"></list-item>
  </ul>
  <div class="popup" v-on:click="loadAddNewStockForm()">Add New Stock
  <span class="popuptext" id="myPopup">
    <form class="" action="index.html" method="post">
      <label for="stock-name">Stock Name:</label><br>
      <input type="text" id="stock-name" name="stock-name"><br>
      <label for="shares-amount">How Many Shares?:</label><br>
      <input type="text" id="shares-amount" name="shares-amount">
      <input type="submit" value="Submit">
    </form>
    </span>
</div>
</div>
</template>

<script>

import ListItem from './ListItem'

export default {
  name: 'stocks-list',
  props: ['stocks'],
  components: {
  'list-item': ListItem
  },
  methods: {
    loadAddNewStockForm() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
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

/* The actual popup (appears on top) */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
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

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
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
