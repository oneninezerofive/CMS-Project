<template>
    <div class="order">
       <NavMenu/>
       <div class="content">
                      <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                 <el-breadcrumb-item>数据管理</el-breadcrumb-item>
                  <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
       </div>
    </div>
</template>
<script>
import NavMenu from '../../components/NavMenu';
export default {
    data(){
        return{

        }
    },
    components:{
        NavMenu
    }
}
</script>
<style>
.order{
    display: flex
}
</style>

