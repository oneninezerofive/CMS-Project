<template>
  <div class="home">
    <NavMenu />
    <div class="content">

      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-tag>当日数据</el-tag>
        <el-tag type="info"><span v-text="newuser"></span>新增用户</el-tag>
        <el-tag type="info"><span v-text="neworder"></span>新增订单</el-tag>
      </div>
      <div>
        <el-tag type="success">总数据</el-tag>
        <el-tag type="info"><span v-text="alluser"></span>注册用户</el-tag>
        <el-tag type="info"><span v-text="allorder"></span>订单</el-tag>
      </div>
      <ve-line
        :data="chartData"
        :settings="chartSettings"
      ></ve-line>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tag, PageHeader } from "element-ui";
Vue.use(Tag).use(PageHeader);
import NavMenu from "../../components/NavMenu";
export default {
  data() {
    return {
      chartData: {},
      chartSettings: {},
      newuser: {},
alluser:{},
neworder:{},
allorder:{}
    };
  },
  async created() {
    this.chartData = {
      columns: ["日期", "新增订单",'新增用户'],
      rows: [
        {
          新增订单: 9,
          日期: "2019-07-31",
          新增用户: 35
        },
        {
          新增订单: 13,
          日期: "2019-08-01"
          ,
          新增用户: 13
        },{
          新增订单: 13,
          日期: "2019-08-02"
          ,
          新增用户: 74
        },{
新增订单: 1,
          日期: "2019-08-03"
          ,
          新增用户: 23
        },{
新增订单: 0,
          日期: "2019-08-04"
          ,
          新增用户: 1
        }
      ]
    }
    this.chartSettings = {
      metrics: ["新增订单",'新增用户'],
      dimension: ["日期"]
    }
    let newuser = await this.$axios(
      "https://elm.cangdu.org/statis/api/:date/count"
    );
    this.newuser = newuser.data.count;
    let alluser = await this.$axios(
      'https://elm.cangdu.org/statis/api/count'
    )
    this.alluser = alluser.data.count;
    let neworder = await this.$axios(
      'https://elm.cangdu.org/statis/order/:date/count'
    )
    this.neworder = neworder.data.count;
    let allorder = await this.$axios(
      'https://elm.cangdu.org/bos/orders/count'
    )
    this.allorder = allorder.data.count;
  },
  components: {
    NavMenu
  }
};
</script>
<style>
.home {
  display: flex;
}
.content {
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
}
.el-tag {
  width: 150px;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
