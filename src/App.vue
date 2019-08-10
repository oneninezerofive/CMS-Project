<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './components/Login_page.vue'
// import OrderList from './components/OrderList.vue'
// import ShopList from './components/ShopList.vue'
// import UserList from './components/UserList.vue'

export default {
  name: 'app',
  components: {
    // 登录页面子组件
    Login,
    //  订单列表子组件
    // OrderList,
    // 用户列表子组件
    // UserList,
    // 商铺列表子组件
    // ShopList
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
