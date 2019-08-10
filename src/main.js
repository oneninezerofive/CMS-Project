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
    Button,
    Form,
    Message,
    Upload,
    TimeSelect,
    Switch,
    Dialog,
    Cascader,
    InputNumber
} from 'element-ui'
Vue.use(Breadcrumb).use(BreadcrumbItem).use(Avatar).use(Table).use(TableColumn).use(Pagination).use(Input).use(Button).use(Form).use(Upload).use(TimeSelect).use(Switch).use(Dialog).use(Cascader).use(InputNumber)
import axios from 'axios'
import Common from './util/util'
Vue.prototype.$axios = axios;
Vue.prototype.common = Common;
Vue.prototype.$message = Message;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')