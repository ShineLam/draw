// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './libs/rem.js'
import './styles/main.less'
import './styles/reset.css'

Vue.config.productionTip = false

// 路由跳转公用方法
Vue.prototype.goto = function (name, query, params) {
  this.$router.push({
    name: name,
    query: query || {},
    params: params || {}
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
