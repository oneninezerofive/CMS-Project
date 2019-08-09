import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeLine from 'v-charts/lib/line'
Vue.component(VeLine.name,VeLine)
Vue.config.productionTip = false
import {Breadcrumb,BreadcrumbItem} from 'element-ui'
Vue.use(Breadcrumb).use(BreadcrumbItem)
import axios from 'axios'
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
