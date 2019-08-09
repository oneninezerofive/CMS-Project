<template>
    <div class="firm">
       <NavMenu/>
       <div class="content">
           <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                 <el-breadcrumb-item>数据管理</el-breadcrumb-item>
                  <el-breadcrumb-item>商家列表</el-breadcrumb-item>
            </el-breadcrumb>
       </div>
    </div>
</template>
<script>
import Vue from 'vue'
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
.firm{
    display: flex;
}

</style>


