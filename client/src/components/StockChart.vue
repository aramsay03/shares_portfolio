<template lang="html">
  <div class="chart-container">
    <highcharts class="stock" :constructor-type="'stockChart'" :options="stockOptions" />
  </div>
</template>

<script>
const API_KEY=process.env.VUE_APP_ENV_SHARESAPI
import Highcharts from 'highcharts'
import dark from '@/themes/dark.js'

export default {
  name: "stock-chart",
  mounted(){
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => this.msft = data)
  },
  data(){
    return {
      msft: [],

      stockOptions: {
        rangeSelector: {
          selected: 1
        },

        title: {
          text: 'MSFT Stock Price'
        },
        subtitle: {
          text: 'Source: Alpha Vantage'
        },
        yAxis: {
          title: {
            text: 'Closing Price'
          }
        },
        xAxis: {
          title: {
            text: 'Date'
          },
          accessibility: {
            enabled: true,
            rangeDescription: 'Range 2010 to 2018'
          }
        },
        plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
          }
        },
          series: [{
          name: 'MSFT Stock Price',
          data: [0,1,2,3],
          type: 'areaspline',
          threshold: null,
          tooltip: {
            valueDecimals: 2
          },
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          }
        }]
      }
    }
  },
}


</script>

<style lang="css" scoped>

  .chart-container {
    width: 100%;
    height: 400px;
  }

</style>
