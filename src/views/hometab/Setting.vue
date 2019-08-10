<template>
  <div class="setting">
    <NavMenu />
    <div class="content">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
        <el-breadcrumb-item>管理员设置</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="管理员ID">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="注册时间">
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="管理权限">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="上传头像">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog>
            <img
              width="100%"
              :src="dialogImageUrl"
              alt=""
            >
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >确认并保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import NavMenu from "../../components/NavMenu";
import {
  Form,
  FormItem,
  Option,
  Select,
  Input,
  Radio,
  Button,
  Switch,
  DatePicker,
  Upload,
  Dialog
} from "element-ui";
Vue.use(Form)
  .use(FormItem)
  .use(Option)
  .use(Select)
  .use(Input)
  .use(Radio)
  .use(Button)
  .use(Switch)
  .use(DatePicker)
  .use(Dialog)
  .use(Upload);
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: "",
      dialogVisible: "",
      handlePictureCardPreview: "",
      handleRemove: "",
      dialogImageUrl: ""
    };
  },
  components: {
    NavMenu
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
    }
  }
};
</script>
<style scoped>
.setting {
  display: flex;
}
.el-input__inner {
  display: inline-block;
  width: 400px;
}
.el-breadcrumb{
  margin-bottom: 30px;
}
</style>

