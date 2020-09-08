import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Шина
export const emitter = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
