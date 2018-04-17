import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sunChart from '@/components/sunChart'
import aGoodDemo from '@/components/aGoodDemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sunChart',
      name: 'sunChart',
      component: sunChart
    },
    {
      path: '/aGoodDemo',
      name: 'aGoodDemo',
      component: aGoodDemo
    }
  ]
})
