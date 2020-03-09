<template lang="html">
  <li v-on:click="handleClick">{{stock.name}}</li>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
  name: 'list-item',
  props: ['stock'],
  methods: {
    handleClick() {
      eventBus.$emit('stock-selected', this.stock);
    }
  }
}
</script>

<style lang="css" scoped>
li:hover {
  color: blue;
}
</style>
