import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
//  引入登录页面路由
import Element from './element/index'
Element();

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')