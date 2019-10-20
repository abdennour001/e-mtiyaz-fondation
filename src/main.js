import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free-brands'

Vue.config.productionTip = false

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
