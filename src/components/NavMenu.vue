<template>
  <div class="navmenu">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
:default-openeds="openeds"
        >               
        <router-link to="home">
       <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
</router-link>  
          <el-submenu
            :index="item.num"
            v-for="(item,index) in menu"
            :key="index"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-text="item.name"></span>
            </template>

            <el-menu-item-group
            >
              <el-menu-item
                v-for="(n,index) in item.options"
                :key="index"
                :index="n.num"
                v-text="n.option"
                @click="navto(n.url)"
              ></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
     <el-col :span="24" class="content-wrapper">
  <transition name="fade" mode="out-in">
     <router-view></router-view>
   </transition>
 </el-col>
    </el-row>
  </div>

</template>
<script>
import Vue from "vue";
import { Menu, MenuItemGroup, MenuItem, Submenu, Row, Col } from "element-ui";
Vue.use(MenuItemGroup)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Row)
  .use(Col);
export default {
  data() {
    return {
      menu: [
        // {
        //   name: "首页",
        //   num: "1",
        //   icon: 'el-icon-s-home',
        // },
        {
          name: "数据管理",
          options: [
            {
              num: "2-1",
              option: "用户列表",
              url: 'user'
            },
            {
              num: "2-2",
              option: "商家列表",
              url: 'firm'
            },
            {
              num: "2-3",
              option: "订单列表",
              url: 'order'
            },
            {
              num: "2-4",
              option: "管理员列表",
              url: 'admin'
            }
          ],
          num: "2",
          icon:'el-icon-s-order'
        },
        {
          name: "添加数据",
          options: [
            {
              num: "3-1",
              option: "添加商铺",
              url: 'addfirm'
            }
          ],
          num: "3",
          icon: 'el-icon-circle-plus-outline'
        },
        {
          name: "设置",
          options: [
            {
              num: "4-1",
              option: "管理员设置",
              url: 'setting'
            }
          ],
          num: "4",
          icon: 'el-icon-s-tools'
        }
      ],
       openeds: ['1','2','3','4']
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    navto(name){
      this.$router.replace({
        name
      })
    },
  }
};
</script>

<style>
.el-menu{
    width: 270px;
    height: auto;
}
</style>

