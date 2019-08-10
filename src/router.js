import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/hometab/Home'
Vue.use(Router)
import User from './views/hometab/User'
import Firm from './views/hometab/Firm'
import Order from './views/hometab/Order'
import Addfirm from './views/hometab/Addfirm'
import Setting from './views/hometab/Setting'
import Admin from './views/hometab/Admin'

export default new Router({
  routes: [
    {
      path: '/',
      alias:'/home',
      name: 'home',
      component: Home,
    },{
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/firm',
      name: 'firm',
      component: Firm
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/addfirm',
      name: 'addfirm',
      component: Addfirm
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
