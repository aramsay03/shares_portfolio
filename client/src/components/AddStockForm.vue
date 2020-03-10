<template lang="html">

  <div class="popup">
    <span v-on:click="loadAddNewStockForm">Add New Stock</span>
  <span v-bind:class="[isActive ? 'popuptext popuptextvisable' : 'popuptext popuptexthidden']" id="myPopup">
    <span v-on:click="handleClose" class="close" id="myPopupClose">&times;</span>

    <form v-on:submit.prevent="handleSubmit">

      <label for="stock-name">Stock Name:</label><br>
      <input type="text" id="stock-name" name="stock-name" v-model="name"/><br>

      <label for="shares-amount">How Many Shares?:</label><br>
      <input type="text" id="shares-amount" name="shares-amount" v-model.number="shares"/><br>

      <input type="submit" name="submit" value="Add Stock"/><br>

    </form>
    </span>
</div>
</template>

<script>
import { eventBus } from '@/main'

export default {
  name: 'add-stock',
  data(){
    return {
      name: '',
      shares: '',
      isActive: false

    }
  },
  methods: {
    loadAddNewStockForm() {
      this.isActive = true;
    },
    handleSubmit() {
      eventBus.$emit('submit-stock', this.$data);
      this.name = this.shares = '';
    },
    handleClose() {
      this.isActive = false;
      console.log(this.isActive)
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
