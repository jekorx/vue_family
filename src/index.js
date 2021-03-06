import Vue from 'vue'
import FastClick from 'fastclick'

import router from '@route/router'
import store from '@vuex/index'
import App from '@views/app'

import '@styles/reset'
import '@styles/fonts'

// 初始化vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')

// 使用fastclick，解决touch 300ms延迟问题
//
// FastClick的实现原理是在检测到touchend事件的时候，
// 会通过DOM自定义事件立即出发模拟一个click事件，
//  并把浏览器在300ms之后真正的click事件阻止掉
document.addEventListener('DOMContentLoaded', () => {
  FastClick.attach(document.body)
}, false);

/**
 * 可伸缩布局方案
 * rem计算方式：设计图尺寸px / 100 = 实际rem  【例: 100px = 1rem，32px = .32rem】
 */
!function (window) {
  /* 设计图文档宽度 */
  var docWidth = 750

  var doc = window.document,
    docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = (function refreshRem() {
    var clientWidth = docEl.getBoundingClientRect().width
    /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
    docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px'
    return refreshRem
  })()
  /* 添加倍屏标识，安卓为1 */
  docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1)
  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
    /* 添加IOS标识 */
    doc.documentElement.classList.add('ios')
    /* IOS8以上给html添加hairline样式，以便特殊处理 */
    if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
      doc.documentElement.classList.add('hairline')
  }
  if (!doc.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
}(window)
