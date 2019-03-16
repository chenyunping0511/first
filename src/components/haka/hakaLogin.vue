<template>
    <div >
      <label>账号</label>
      <input v-model="user_name"></input>
      <br/>
      <label>密码</label>
      <input v-model="password"></input>
      <br/>
      <button v-on:click="send_register">注册</button>
      <button v-on:click="send_login">登录</button>
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
</style>
