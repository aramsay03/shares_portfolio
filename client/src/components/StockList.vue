<template lang="html">
  <div id="stockList">
  <ul>
    <list-item v-for="(stock, index) in stocks" :stock="stocks" :key="index"></list-item>
  </ul>
</div>
</template>

<script>

import ListItem from './ListItem'

export default {
  name: 'stocks-list',
  props: ['stocks'],
  components: {
  'list-item': ListItem}
}
</script>

<style lang="css" scoped>
</style>
