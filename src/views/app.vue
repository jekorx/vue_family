<template>
  <div id="app">
    <Header/>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

import { SET_SCROLL } from '@store/types'

import Header from '@views/header'
import Footer from '@views/footer'

export default {
  components: {
    Header,
    Footer
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    // 初始化betterscroll
    init () {
      let scroll = new BScroll(this.$refs.wrapper, {
        bounceTime: 600
      })
      this.$store.dispatch(SET_SCROLL, scroll)
    }
  }
}
</script>
<style lang="stylus">
#app
  position relative
  width 100%
  height 100%
  >div
    position fixed
    width 100%
    left 0
  .wrapper
    top .8rem
    max-height calc(100% - 1.6rem)
    z-index 10
</style>
