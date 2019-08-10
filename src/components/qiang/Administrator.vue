<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">数据管理</el-breadcrumb-item>
      <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="create_time" label="注册日期" width="180"></el-table-column>
      <el-table-column prop="city" label="地址"></el-table-column>
      <el-table-column prop="admin" label="权限"></el-table-column>
    </el-table>
    <el-pagination :page-size="20" background layout="total,prev, pager, next " :total="Nums"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      Nums: 0
    };
  },
  methods: {
    async getNews() {
      let data = await this.$axios("https://elm.cangdu.org/admin/all");
      this.tableData = data.data.data;
    },
    async getNums() {
      let num = await this.$axios("https://elm.cangdu.org/admin/count");
      this.Nums = num.data.count;
    }
  },
  created() {
    this.getNums();
    this.getNews();
  }
};
</script>
