<template>
    <div class="content">
      <div class="login-content">
         <h2 class="title-name">{{ msg }}</h2>
        <ul class="inpt-login">
          <li>
            <span>昵称</span>
            <input type="name" placeholder="name">
            <br>
          </li>
          <li>
            <span>邮箱/账号名</span>
            <input type="email" placeholder="email">
          </li>
          <li>
            <span>密码</span>
            <input type="pwd" placeholder="password">
          </li>
          <li>
            <span>确认密码</span>
            <input type="text" placeholder="email">
          </li>
          <li>
            <span>姓名</span>
            <input type="name" placeholder="user-name">
          </li>
          <li>
            <span>身份证号</span>
            <input type="text" placeholder="Id number">
          </li>
          <li>
            <span>手机号</span>
            <input type="tel" placeholder="tel">
          </li>
          <li>
            <span>支付宝账号</span>
            <input type="text" placeholder="Alipay account">
          </li>
        </ul>
        <div>
          <router-link to="/Login">
            <button class="btn-login">登录
              <span class="have-login">[已有账号]</span>
            </button>
          </router-link>
          <router-link to="/Login">
            <button class="btn-login">确认注册</button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  mode: 'history',
  name: 'ReginPesorn',
  data () {
    return { msg: '拇指跳动数据标注平台' }
  },
  created: function () {
    this.$emit('public_header', true)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.title-name{
    color: #2d8cf0;
    font-size: 27px;
}
/* 主体内容文本框 */
.content {
  width: 100%;
  margin-bottom: 90px;
  position: relative;
  background: linear-gradient(to bottom,#a5e0f787 0%,#ecbea7 25%, #d56de254 75%,#2b2828 100%);
  /* z-index: -99; */
  padding-top:80px;
  padding-bottom: 90px;
  border-radius: 45px;
}
.login-content {
  width: 60%;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  background: white;
  padding-top: 35px;
  padding-bottom: 40px;
}
.inpt-login {
  margin: 0 auto;
  width: 400px;
}
.inpt-login li {
  list-style-type: none;
  margin-top: 30px;
}
.inpt-login li input {
  height: 35px;
  width: 250px;
}
.inpt-login li span {
  width: 150px;
  float: left;
  font-size: 18px;
  /* border:1px solid blue; */
}
.cancellation {
  text-decoration: none;
  color: rgb(129, 124, 124);
  font-size: 20px;
  margin-left: 167px;
}
.btn-login {
  border: 1px solid rgb(252, 250, 250);
  background-color: rgb(25, 201, 83);
  width: 150px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  margin-left: 25px;
  margin-top: 25px;

}
.have-login {
  font-size: 14px !important;
  color: #1c40ca;
}

</style>
