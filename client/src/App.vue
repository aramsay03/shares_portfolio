<template>
  <div id="app">
    <div class="header">
      <!-- <h1>Spend<span>.</span>Stock<sup>&#8482;</sup></h1> -->
      <h1>Storacle<span>.</span></h1>
    </div>

    <div class="tab">
      <button class="tablinks" v-on:click="openTab('SummaryPage')" id="defaultOpen">Summary</button>
      <button class="tablinks" v-on:click="openTab('StockChart')">Stocks</button>
    </div>

    <div id="SummaryPage"class="tabcontent">
      <div class="summary-container">
        <h1>Summary</h1>
        <summary-list :stocks="stocks"/>
      </div>
      <div class="chart-container">
        <div class="list-container">
          <h2 class="list-head">Search</h2>

        </div>
        <summary-stock-chart></summary-stock-chart>
      </div>
    </div>



    <div id="StockChart" class="tabcontent">



      <div class="chart-container">
        <div class="list-container">
          <h2 class="list-head">Your Shares</h2>
          <stocks-list :stocks="stocks"></stocks-list>
          <add-stock></add-stock>
        </div>
        <stock-chart></stock-chart>
      </div>
        <stock-detail v-if="selectedStock" :stock="selectedStock"></stock-detail>
    </div>

    <div class="footer">
      <p class="sponsor">Sponsored by OnTrack<span>.</span></p>
    </div>

  </div>
</template>

<script>

import StockChart from './components/StockChart.vue'
import StockList from './components/StockList.vue'
import StockDetail from './components/StockDetail.vue'
import ListItem from './components/ListItem.vue'
import StockService from './services/StockService.js'
import { eventBus } from '@/main.js'
import AddStock from './components/AddStockForm.vue'
import SummaryList from './components/SummaryList.vue'
import SummaryStockChart from './components/SummaryStockChart.vue'

export default {
  name: 'App',
  data(){
    return {
      stocks: [],
      selectedStock: null
    }
  },
  components: {
    'stock-chart': StockChart,
    'stocks-list': StockList,
    'stock-detail': StockDetail,
    'add-stock': AddStock,
    'summary-list': SummaryList,
    'summary-stock-chart': SummaryStockChart
  },
  mounted() {
    this.getStocks();

    eventBus.$on('submit-stock', (stock) => {
      StockService.addStock(stock)
      .then(stockWithId => this.stocks.push(stockWithId));
    });

    eventBus.$on('updated-stock', (stock) => {
      StockService.updateStock(stock)
      .then(() => this.getStocks())
    });

    eventBus.$on('stock-selected', stock => (this.selectedStock = stock));

    this.openDefaultTab('defaultOpen');
  },
  methods: {
    openTab(pageName) {
      let i, tabcontent, tablinks;

      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      document.getElementById(pageName).style.display = "block";
      event.currentTarget.className += " active";
    },
    openDefaultTab(tabId) {
      document.getElementById(tabId).click();
    },

    getStocks() {
      StockService.getStocks()
      .then(stocks => this.stocks = stocks)
    }
  }
}
</script>

<style>

  .header h1 {
    font-family: 'Nunito', sans-serif;
    color: ghostwhite;
    font-size: 4em;
    text-align: center;
    padding: 0.5em 0 0.5em 0;
  }

  .header h1 span, .stock h2, .total h1 span, .list-item h2 span, .sponsor span {
    color: #F4B41A;
  }

  .header h1 sup {
    position: relative;
    font-size: 30%;
    line-height: 0;
    vertical-align: baseline;
    top: -1.6em;
  }

  .summary-container {
    width: 90%;
    margin: 1em 5% 2em 5%;
    padding: 1em;
    background-color: #4c4c4d;
    border-radius: 2em;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .summary-container h1 {
    width: 100%;
    font-size: 3em;
    padding: 0.2em 0;
  }

  .stock {
    width: 17%;
    border-radius: 2em;
    border: 1px solid ghostwhite;
    margin: 1em 2em;
    padding: 1em 0.5em;
  }

  .stock:hover, .list-item:hover {
    cursor: pointer;
    background-color: #7e7e81;
  }

  .chart {
    width: 80%;
    float: right;
    padding: 1em;
    border: 1px solid ghostwhite;
    border-radius: 2em;
  }

  .chart-container {
    width: 90%;
    display: flex;
    margin: 2em 5%;
  }

  .list-container {
    width: 20%;
    background-color: #4c4c4d;
    margin-right: 2%;
    border-radius: 2em;
    padding-bottom: 1em;
    overflow: scroll;
  }

  .list-head{
    text-align: center;
    padding: 1em 0 0.5em 0;
  }

  .list-item, .list-item-add {
    text-align: center;
    border: 1px solid ghostwhite;
    border-radius: 2em;
    width: 80%;
    margin: 1em 10%;
    padding: 0.5em;
    list-style: none;
  }

  .list-item-add {
    background-color: #F4B41A;
  }

  .list-item-add:hover {
    background-color: #f6be3c;
    cursor: pointer;
  }

  li {
    font-size: 1.2em;
  }

  .stock-list {
    text-align: center;
  }


  .footer {
    max-width: 100%;
    margin-top: 4%;
  }

  .sponsor {
    text-align: right;
    padding: 1em;
  }

  /* STOCK TAB */

  .tab {
    overflow: hidden;
    text-align: center;
  }

  /* Style the buttons that are used to open the tab content */
  .tab button {
    background-color: inherit;
    font-size: 1.5em;
    border-radius: 2em;
    border: none;
    color: ghostwhite;
    margin: 0 0.5em;
    text-align: center;
    border: ;
    outline: none;
    cursor: pointer;
    padding: 0.5em 1em;
    transition: 0.3s;
  }

  /* Change background color of buttons on hover */
  .tab button:hover {
    color: #F4B41A;
  }

  /* Create an active/current tablink class */
  .tab button.active {
    color: #F4B41A;
    text-decoration: underline;
  }

  .tab button:focus {
    outline: none;
  }
  /* Style the tab content */
  .tabcontent {
    padding: 6px 12px;
    border-top: none;
  }

  .tabelement {
    display: inline-block;
    padding: 20px;
  }
</style>
