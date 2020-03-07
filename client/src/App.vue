<template>
  <div id="app">
    <div class="tab">
      <button class="tablinks" v-on:click="openTab(event, 'Summary')" id="defaultOpen">Summary</button>
      <button class="tablinks" v-on:click="openTab(event, 'StockChart')">Stocks</button>
    </div>
      <div id="Summary" class="tabcontent">
        <h3>Summary</h3>
        <p>Your shares are worth $5 today :(</p>
      </div>
     <div id="StockChart" class="tabcontent">
      <stock-chart></stock-chart>
    </div>
    </div>
</template>

<script>

import StockChart from './components/StockChart.vue'

export default {
  name: 'App',
  data(){
    return {
      stockList: ["APPL", "MSFT", "GOOG"]
    }
  },
  components: {
    'stock-chart': StockChart,
  },
  mounted: function () {
    this.openDefaultTab('defaultOpen')
  },
  methods: {
    openTab(event, pageName) {
      // Declare all variables
      let i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

    // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(pageName).style.display = "block";
      event.currentTarget.className += " active";
    },
    openDefaultTab(tabId) {
      document.getElementById(tabId).click();
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
