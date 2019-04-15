<template>
    <div class="bgimg">
        <div class="login_area">
          <div class="contant">
              <div class="user-title">
                  <Icon type="ios-person" size="30"/>
                  <span>用户登录</span>
              </div>
              <div class="horizontal_line"></div>
              <p class="input-login">
                <label>账号</label>
                <input v-model="user_name" placeholder="账号"/>
              </p>
              <p  class="input-login">
                <label>密码</label>
                <input v-model="password" placeholder="密码"/><br/>
                <span  class="forget">忘记密码？</span>
              </p>
              <p class="btn-login">
                <Button type="success"  @click.native="changeMod('website')"  name="website">登录</Button><br/><br/>
                <span class="regin-now">还没有账号？</span><span  class="forget "  @click.native="changeMod('regin')"  name="regin" >立即注册</span>
                <!-- v-on:click="send_register"  -->
              </p>
              <div class="horizontal_line"></div>
              <p class="welcome-user">欢迎使用拇指跳动平台</p>
          </div>
        </div>
    </div>
</template>

<script>
  import CONST from '../const'
  export default {
    name: 'hakaLogin',
      data () {
    return {
      user_name:"",
      password: "",
    }
  },
    methods: {
      add: function (event) {
        this.items.push({message: this.input1})
      },
      send_login: function() {
        var that=this
        this.$http.post(CONST.PREFIX+'login', {
          user_name: that.user_name,
          password: window.btoa(that.password),
        },{emulateJSON:true,credentials: true}).then(response => {
          alert("登录成功")
        }, response => {
          alert(response.data)
        });
      },
        send_register: function() {
          console.log(this.user_name)
          console.log(this.password)
          var that=this
          this.$http.post(CONST.PREFIX+'register', {
            user_name: that.user_name,
            password: window. btoa(that.password),
          },{emulateJSON:true,credentials: true}).then(response => {
            alert("注册成功")
          }, response => {
            alert(response)
          });
        }
    }
  }
</script>

<style scoped>
@import "../../assets/css/login";
</style>
