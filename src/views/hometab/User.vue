<template>
  <div>
    <div class="user">
      <NavMenu />
      <div class="content">
        <!-- 面包屑 -->
        <div class="header_container">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">数据管理</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 头像 -->
          <div class="demo-basic--circle">
            <div id="user" @click="block">
              <el-avatar :size="sizeList" :src="circleUrl"></el-avatar>
              <div class="text" :style="{height:H + 'px'}" @mouseout="none">
                <p v-text="username" @click="login_in"></p>
                <p @click="login_out">退出</p>
              </div>
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
          <el-table-column prop="index" label="#" width="180"></el-table-column>
          <el-table-column prop="date" label="注册日期" width="180"></el-table-column>
          <el-table-column prop="name" label="用户姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="注册地址"></el-table-column>
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
  </div>
</template>
<script>
import NavMenu from "../../components/NavMenu";
import { setTimeout } from "timers";

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
      total: 0,
      H: 0,
      username: "登录"
    };
  },
  components: {
    NavMenu
  },
  mounted() {
    this.getData();
    this.adminCount();
    let name = this.common.getCookie("username");
    if (name) {
      this.username = "首页";
    }
  },
  methods: {
    //  用户表格数据请求
    async getData() {
      let offset = this.offset;
      let limit = this.limit;
      let data = await this.$axios("https://elm.cangdu.org/v1/users/list", {
        offset,
        limit
      });
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
    //  管理员数量，和总页数
    async adminCount() {
      let data = await this.$axios("https://elm.cangdu.org/v1/users/count");
      this.total = data.data.count;
    },
    block() {
      this.H = 80;
    },
    none() {
      setTimeout(() => {
        this.H = 0;
      }, 1500);
    },
    login_out() {
      this.common.delCookie("username");
      this.$router.push({
        name: "login"
      });
    },
    login_in() {
      if (this.username == "登录") {
        this.$router.push({
          name: "login"
        });
      }else{
        this.$router.push({
          name: "home"
        });
      }
    }
  },
  filters: {
    //  表格数据过滤筛选
    tableDataComput(data) {
      let newtableData = [];
      data.forEach((item, index) => {
        item.index = index + 1;
        item.date = item.registe_time;
        item.name = item.username;
        item.address = item.city;

        newtableData.push(item);
      });
      return newtableData;
    }
  }
};
</script>


<style lang="scss" scoped>
.user {
  display: flex;
}
.header_container {
  background: #eff2f7;
  display: flex;
  justify-content: space-between;
  .el-breadcrumb {
    line-height: 60px;
    padding-left: 20px;
  }
  .demo-basic--circle {
    padding: 10px 50px;
  }
}
.el-table {
  padding: 20px;
}
#user {
  position: relative;
  cursor: pointer;
  .text {
    transition: all 0.5s;
    width: 100px;
    height: 0px;
    position: absolute;
    z-index: 99;
    left: -30px;
    background: #fff;
    color: #000;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 1px #ccc;
    overflow: hidden;
    p {
      padding: 5px;
      box-sizing: border-box;
      &:hover {
        background: #ccc;
      }
    }
  }
}
</style>
