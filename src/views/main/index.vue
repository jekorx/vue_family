<template>
  <div class="main">
    <button @touchend="getScroll">getScroll</button>
    <p>first</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>fhdsjkfh</p>
    <p>last</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  // 该操作需要babel-plugin-transform-object-rest-spread
  computed: {
    ...mapState(['scroll'])
  },
  methods: {
    getScroll (e) {
      console.log(e)
      console.log(this.scroll)
    }
  }
}
</script>

<style lang="stylus" scoped>
.main
  >p
    margin 0
</style>
