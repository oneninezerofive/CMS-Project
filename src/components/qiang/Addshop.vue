<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">添加数据</el-breadcrumb-item>
      <el-breadcrumb-item>添加商铺</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="400px" :model="formLabelAlign">
      <el-form-item
        label="店铺名称"
        prop="name"
        :rules="[
      { required: true, message: '店铺名不能为空'},
    ]"
      >
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item
        label="详细地址"
        prop="address"
        :rules="[
      { required: true, message: '地址不能为空'},
    ]"
      >
        <el-input v-model="formLabelAlign.region" placeholder="请输入地址"></el-input>
      </el-form-item>
      <p style="margin-left:408px">当前城市：广州</p>
      <el-form-item
        label="联系电话"
        prop="phone"
        :rules="[
      { required: true, message: '电话不能为空'},
    ]"
      >
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="店铺简介">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="店铺标语">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="店铺分类">
        <el-cascader :options="options" v-model="selectedOptions3"></el-cascader>
      </el-form-item>
      <el-form-item label="店铺特点">
        <span>品牌保证</span>
        <el-switch v-model="pinpai"></el-switch>
        <span>蜂鸟专送</span>
        <el-switch v-model="zhuansong"></el-switch>
        <span>新开店铺</span>
        <el-switch v-model="xinkai"></el-switch>
        <br />
        <span>外卖保</span>
        <el-switch v-model="waimaibao"></el-switch>
        <span>准时达</span>
        <el-switch v-model="zhunshida"></el-switch>
        <span>开发票</span>
        <el-switch v-model="kaifapiao"></el-switch>
      </el-form-item>
      <el-form-item label="配送费">
        <el-input-number v-model="peisong" :min="0" :max="20" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="起送价">
        <el-input-number v-model="qisong" :min="20" :max="100" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="营业时间">
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          style="margin-right:10px"
          :picker-options="{
         start: '05:30',
      step: '00:15',
      end: '23:30',
    }"
        ></el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
      start: '05:30',
      step: '00:15',
      end: '23:30',
      minTime: startTime
    }"
        ></el-time-select>
      </el-form-item>
      <el-form-item label="上传店铺头像">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="上传餐饮服务许可证">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="优惠活动">
        <el-cascader :options="youhui" v-model="满减优惠" placeholder="满减优惠"></el-cascader>
      </el-form-item>
    </el-form>
     <el-table
      :data="tableData"
      style="width: 640px;margin-left:280px;"
      :header-row-style="huodong">
      <el-table-column
        prop="date"
        label="活动标题"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="活动名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="活动详情"
         width="280">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
     <el-button type="primary" >立即创建</el-button>
  </div>
</template>



<script>
export default {
  data() {
    return {
        huodong:{
            background:"#ccc",
        },
      pinpai: true,
      zhuansong: true,
      xinkai: true,
      waimaibao: true,
      zhunshida: true,
      kaifapiao: true,
      peisong: 5,
      qisong: 20,
      startTime: "",
      endTime: "",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        address: "",
        phone: ""
      },
      dialogImageUrl: "",
      dialogVisible: false,
      options: [
        {
          value: "yiguolioali",
          label: "异国料理",
          children: [
            {
              value: "rihanliaoli",
              label: "日韩料理"
            },
            {
              value: "xican",
              label: "西餐"
            },
            {
              value: "pisayimian",
              label: "披萨意面"
            },
            {
              value: "dongnanyacai",
              label: "东南亚菜"
            }
          ]
        },       {
          value: "kuaicanbaindang",
          label: "快餐便当",
          children: [
            {
              value: "jiancan",
              label: "简餐"
            },
            {
              value: "gaijiaofan",
              label: "盖浇饭"
            },
            {
              value: "mifenmianguan",
              label: "米粉面馆"
            },
            {
              value: "baozizhoudian",
              label: "包子粥店"
            }
          ]
        },       {
          value: "xiaochiyexiao",
          label: "小吃夜宵",
          children: [
            {
              value: "xiaolongxia",
              label: "小龙虾"
            },
            {
              value: "difangxiaochi",
              label: "地方小吃"
            },
            {
              value: "xiaokao",
              label: "烧烤"
            },
            {
              value: "zhajizhachuan",
              label: "炸鸡炸串"
            }
          ]
        },       {
          value: "guocaishengshu",
          label: "果菜生疏",
          children: [
            {
              value: "shuiguo",
              label: "水果"
            },
            {
              value: "shengxian",
              label: "生鲜"
            },
            {
              value: "shucai",
              label: "蔬菜"
            },
            {
              value: "haixianshuichan",
              label: "海鲜水产"
            }
          ]
        },       {
          value: "tesecaixi",
          label: "特色菜系",
          children: [
            {
              value: "chuanxiangcai",
              label: "川湘菜"
            },
            {
              value: "qita",
              label: "其他菜系"
            },
            {
              value: "jiangzhecai",
              label: "江浙菜系"
            },
            {
              value: "yuecai",
              label: "粤菜"
            }
          ]
        },       {
          value: "shangdianchaoshi",
          label: "商店超市",
          children: [
            {
              value: "chaoshi",
              label: "超市"
            },
            {
              value: "bianlidian",
              label: "便利店"
            },
            {
              value: "mingjiufang",
              label: "名酒坊"
            },
            {
              value: "lingshi",
              label: "零食"
            }
          ]
        },       {
          value: "xianhuadangao",
          label: "鲜花蛋糕",
          children: [
            {
              value: "xianhua",
              label: "鲜花"
            },
            {
              value: "dangao",
              label: "蛋糕"
            },
            {
              value: "mianbao",
              label: "面包"
            }
          ]
        },       {
          value: "tianpinyinpin",
          label: "甜品饮品",
          children: [
            {
              value: "naicha",
              label: "奶茶"
            },
            {
              value: "tianpin",
              label: "甜品"
            },
            {
              value: "kafei",
              label: "咖啡"
            }
          ]
        }
      ],
      youhui: [
        { value: "manjianyouhui", label: "满减优惠" },
        { value: "youhuidachoubing", label: "优惠大酬宾" },
        { value: "xingyonghulijian", label: "新用户立减" },
        {value: "jindianlingjuan", label: "进店领卷"}
      ],
    
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
