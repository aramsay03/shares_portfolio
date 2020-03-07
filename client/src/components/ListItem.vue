<template lang="html">
  <li>{{stock.name}}</li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['stock']
}
</script>

<style lang="css" scoped>
</style>
