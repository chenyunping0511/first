<template>
  <div>
    <haka-menus></haka-menus>
    <label>账号</label>
    <input></input>
    <br/>
    <label>密码</label>
    <input></input>
    <br/>
    <button>登录</button>
  </div>
</template>

<script>
  import HakaMenus from '../haka/hakaMenus'
  export default {
    name: 'Login',
    components: {HakaMenus}
  }
</script>

<style scoped>

</style>
