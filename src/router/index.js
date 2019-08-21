import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/Home'
import {navList} from 'components/Home/home.config.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/welcome${navList[0].key}/全部`
    },
    {
      path: '/welcome',
      redirect: `/welcome${navList[0].key}/全部`
    },
    {
      path: '/welcome/:key',
      redirect: `/welcome/:key/全部`
    },
    {
      path: '/welcome/:key/:tag',
      name: 'Home',
      component: Home
    }
  ]
})
