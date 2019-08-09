<template>
    <div class="addfirm">
       <NavMenu/>
       <div class="content">
                      <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                 <el-breadcrumb-item>添加数据</el-breadcrumb-item>
                  <el-breadcrumb-item>添加商铺</el-breadcrumb-item>
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
.addfirm{
    display: flex;
}

</style>

