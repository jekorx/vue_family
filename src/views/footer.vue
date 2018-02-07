<template>
  <div class="footer">
    footer
    <router-link to="/">Main</router-link>
    <router-link to="/about">About</router-link>
    <button @touchend="axiosTest">axiosTest</button>
  </div>
</template>
<script>
import { axiosGet } from '@api/api'

export default {
  methods: {
    axiosTest () {
      axiosGet()
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  background-color #FFF
  bottom 0
  height .8rem
  z-index 11
</style>
