<template>
  <div class="login_page">
    <section class="form_contianer">
      <div class="manage_tip">
        <p>后台管理系统</p>
      </div>
      <div class="login_form">
        <el-input v-model="input_user" placeholder="用户名" @blur="blur_user"></el-input>
        <div class="el-form-item__error" v-if="bool_user">请输入用户名</div>
      </div>
      <div class="login_form">
        <el-input placeholder="密码" @blur="blur_pwd" v-model="input_pwd" show-password></el-input>
        <div class="el-form-item__error" v-if="bool_pwd">请输入密码</div>
      </div>
      <div class="login_form">
        <el-button type="primary" size="medium" @click="admin_login">登录</el-button>
      </div>
      <p class="tip">温馨提示：</p>
      <p class="tip">未登陆过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </section>
    <el-button :plain="true" @click="open"></el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 用户名和密码表单值
      input_user: "",
      input_pwd: "",
      //  表单的提示显示隐藏
      bool_user:false,
      bool_pwd:false
    };
  },
  methods:{
    // 用户名表单失去焦点
    blur_user() {
      if(this.input_user) {
        this.bool_user = false;
      }else {
        this.bool_user = true;
      }
    },
    // 密码框失去焦点
    blur_pwd() {
      if(this.input_pwd) {
        this.bool_pwd = false;
      }else {
        this.bool_pwd = true;
      }
    },
    
    async admin_login() {
      await this.$axios.post('https://elm.cangdu.org/admin/login',{
        user_name:this.input_user,
        password:this.input_pwd
      });
      // console.log(res)
    },
    //  登录消息提醒
     async open() {
        //  登录发送post请求
        let res = await this.$axios.post('https://elm.cangdu.org/admin/login',{
        user_name:this.input_user,
        password:this.input_pwd
      });
      this.$message(res.data.success);
      }
  }
};
</script>

<style lang="scss" scoped>
.login_page {
  width: 100%;
  height: 100%;
  min-height: 947px;
  background: #324057;
  .form_contianer {
    width: 320px;
    height: 210px;
    position: absolute;
    top: 50%;
    left: 48%;
    margin-top: -105px;
    margin-left: -160px;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .manage_tip {
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0;
      p {
        font-size: 34px;
        color: #fff;
      }
    }
    .login_form {
      margin-bottom: 22px;
      position: relative;
      font-size: 14px;
      .el-form-item__error {
        color: #ff4949;
        font-size: 12px;
        line-height: 1;
        padding-top: 4px;
        position: absolute;
        top: 100%;
        left: 0;
      }
      .el-button {
        width: 100%;
      }
    }
    .tip {
      font-size: 12px;
      color: red;
    }
  }
  .el-button--default {
    position: absolute;
    top: 54.5%;
    left: 38.5%;
    width:320px;
    height: 36px;
    opacity: 0;
  }
}
</style>


