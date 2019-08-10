import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeLine from 'v-charts/lib/line'
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false
import {
    Breadcrumb,
    BreadcrumbItem,
    Avatar,
    Table,
    TableColumn,
    Pagination,
    Input,
    Button
} from 'element-ui'
Vue.use(Breadcrumb).use(BreadcrumbItem).use(Avatar).use(Table).use(TableColumn).use(Pagination).use(Input).use(Button)
import axios from 'axios'
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')