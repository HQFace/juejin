import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'assets/scss/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
