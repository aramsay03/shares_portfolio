<template lang="html">
  <div id="stockList">
  <ul>
    <list-item v-for="(stock, index) in stocks" :stock="stock" :key="index"></list-item>
  </ul>
  <add-stock></add-stock>
</div>
</template>

<script>

import ListItem from './ListItem'
import { eventBus } from '@/main'
import AddStock from './AddStockForm'


export default {
  name: 'stocks-list',
  props: ['stocks'],
  components: {
  'list-item': ListItem,
  'add-stock': AddStock
  },
}
</script>

<style lang="css" scoped>

</style>
