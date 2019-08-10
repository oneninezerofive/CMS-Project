<template>
  <div class="firm">
    <NavMenu />
    <div class="content">
      <!-- 面包屑 -->
      <div class="header_container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">数据管理</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>商家列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 头像 -->
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="sizeList" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <el-table
        :data="tableData|tableDataComput"
        style="width: 100%;"
        :row-style="styleRow"
        :header-cell-style="styleTh"
        :cell-style="styleCell"
      >
        <el-table-column prop="arrow" label=" " width="50"></el-table-column>
        <el-table-column prop="shopName" label="店铺名称" width="400"></el-table-column>
        <el-table-column prop="shopAddress" label="店铺地址" width="500"></el-table-column>
        <el-table-column prop="shopDescription" label="店铺介绍" width="500"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import NavMenu from "../../components/NavMenu";
export default {
  data() {
    return {
      //  头像路劲
      circleUrl: "http://elm.cangdu.org/img/default.jpg",
      //  头像尺寸
      sizeList: "medium",
      // 数据页数
      offset: 0,
      //  数据条数
      limit: 20,
      //  表格数据
      tableData: [],
      // 表头样式
      styleTh: {
        background: "#eff2f7",
        borderTop: "1px solid #dfe6ec",
        borderBottom: "1px solid #dfe6ec"
      },
      // 单元格样式
      styleCell: {
        borderBottom: "1px solid #dfe6ec"
      },
      // 行样式
      styleRow: {
        borderLeft: "1px solid #dfe6ec"
      },
      // 分页
      currentPage: 1,
      total: 0
    };
  },
  components: {
    NavMenu
  },
  mounted() {
    this.getData();
    this.adminCount();
  },
  methods: {
    //  商家列表数据请求
    async getData() {
      // let offset = this.offset;
      // let limit = this.limit;
      let data = await this.$axios(
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
      );
      this.tableData = data.data;
    },
    //  分页
    handleSizeChange() {
      // console.log(`每页 ${this.limit} 条`);
    },
    async handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.offset = val;
    },
    //  商家数量，和总页数
    async adminCount() {
      let data = await this.$axios(
        "https://elm.cangdu.org/shopping/restaurants/count"
      );
      this.total = data.data.count;
    }
  },
  filters: {
    //  表格数据过滤筛选
    tableDataComput(data) {
      let newtableData = [];
      data.forEach(item => {
        item.shopName = item.name;
        item.shopAddress = item.address;
        item.shopDescription = item.description;
        item.arrow = ">";

        newtableData.push(item);
      });
      return newtableData;
    }
  }
};
</script>
<style lang="scss" scoped>
.firm {
  display: flex;
}
.header_container {
  background: #eff2f7;
  display: flex;
  justify-content: space-between;
  .el-breadcrumb {
    line-height: 60px;
    padding-left: 25px;
  }
  .demo-basic--circle {
    padding: 10px 50px;
  }
}
.el-table {
  padding: 20px;
}
</style>


