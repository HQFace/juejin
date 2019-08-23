import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/Home'
import Book from 'components/Book/Book'
import Event from 'components/Event/Event'
import Pin from 'components/PinList/PinList'
import Topic from 'components/Topic/Topic'
import { navList as homeNavList } from 'components/Home/home.config.js'
import { navList as pinsNavList } from 'components/PinList/pin.config.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/welcome${homeNavList[0].key}/全部`
    },
    {
      path: '/welcome',
      redirect: `/welcome${homeNavList[0].key}/全部`
    },
    {
      path: '/welcome/:key',
      redirect: `/welcome/:key/全部`
    },
    {
      path: '/welcome/:key/:tag',
      name: 'welcome',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Book
    },
    {
      path: '/events',
      name: 'events',
      component: Event
    },
    {
      path: '/pins',
      redirect: `/pins${pinsNavList[0].key}`
    },
    {
      path: '/pins/:key',
      name: 'pins',
      component: Pin
    },
    {
      path: '/pins/:key/:tag',
      component: Pin
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topic
    }
  ]
})
