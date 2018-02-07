import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@views/main/index'
const About = () => import(/* webpackChunkName: "About" */'@views/about/index')
const Numbers = () => import(/* webpackChunkName: "Number" */'@views/about/number')
const Products = () => import(/* webpackChunkName: "Product" */'@views/about/product')

// vue安装路由插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '',
          component: Numbers
        },
        {
          path: 'number',
          component: Numbers
        },
        {
          path: 'product',
          component: Products
        }
      ]
    }
  ]
})
