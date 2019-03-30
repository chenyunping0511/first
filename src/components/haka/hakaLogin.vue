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
.bgimg[data-v-3eca38ac] {
    height: 783px;
    background-color: #e3f9f9;
    padding: 77px;
    padding-top: 6px;
}
.login_area {
    height: 655px;
    width: 800px;
    padding-top:40px;
    margin-top:10px;
    /* opacity:0.4;
    filter:alpha(opacity=40); */
    background: rgba(255,255,255,.5);

}
.user-title{
  float:left;
  margin-top:-20px;
  color:#4dbfb0;
  font-size:20px;
}
.contant {
   position:relative;
   z-index:99;
   box-shadow: 10px 10px 35px 5px #888888;
    border-radius: 15px;
    /* box-shadow: 0 0 3px #888888; */
    /* background: url(../images/login_input_area_bg.png) center center no-repeat; */
    background: rgba(255,255,255,.8);
}
.contant{
 /* width:18%; */
 height:465px;
 padding-top:50px;
 /* border:1px solid red; */
 margin:0 auto;
}
.contant p{
  margin-top:18px;
}
.contant p label{
  font-size:18px;
  padding-right:20px;
}
.input-login input{
    margin-bottom: 17px;
    padding: 9px 12px;
    width: 250px;
    border: solid 1px #E1E1E1;
    background: #FFF;
    color: #333333;
    font-size: 13px;
    line-height: 20px;
    border-radius: 3px;
}
.btn-login button{
  border: 1px solid white;
  width: 295px;
  height: 40px;
  background-color: rgb(94, 194, 166);
  /* border: 1px solid; */
  border-radius: 5px;
}
.forget{
  margin-right: 236px;
  color: rgb(52, 168, 219);
  cursor: pointer;
}

/* line */
.horizontal_line {
    margin: 25px auto;
    width: 380px;
    /* margin-top:; */
    border:1px solid #f6f5f7;
}
.welcome-user{
  color:red;
  font-size:20px;
}
.regin-now{
  margin-left:50px;
}
</style>
