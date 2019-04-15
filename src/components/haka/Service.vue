<template>
  <div>
   <div class="top">
      <!-- <div id="nav">
		<router-link to="../Main"><span class="welcome">欢迎来到拇指跳动标注官网！</span></router-link>
      </div>-->
      <div class="backgrond_img navbar">
          <img src="../../assets/logo.png" class="logo_word">
           <router-link to="/">
            <span class="login-regin">首页</span>
          </router-link>
           <a href="#dataservice">
            <span class="login-regin">数据标注</span>
          </a>
          <a href="#dataget">
            <span class="login-regin">数据采集</span>
          </a>
          <a href="#service-title">
            <span class="login-regin">服务优势</span>
          </a>
          <a href="#solve">
            <span class="login-regin">人工智能——一站式解决方案</span>
          </a>
          <router-link to="./../Main">
            <span class="login-regin">标注平台</span>
          </router-link>
           <router-link to="./Service">
            <span class="login-regin">联系我们</span>
          </router-link>
      </div>
    </div>

    <!--—————————————————————————————————————— 内容-----------------------————————————————————————- -->
  <div class="content">
    <div class="title-company">
    <Icon type="ios-contacts"  size="40"/><span class="company">商务合作：</span>
    </div>
    <div class="contant">
      <div class="wecontact">
              <p class="input-login">
                <label>姓名</label>
                <input type="name" placeholder="联系人姓名"/>
              </p>
              <p  class="input-login">
                <label>公司</label>
                <input type="text" placeholder="公司"/><br/>
              </p>
              <p  class="input-login">
                <label>手机</label>
                <input type="phone" placeholder="手机"/><br/>
              </p>
              <p  class="input-login">
                <label>邮箱</label>
                <input type="email" placeholder="邮箱"/><br/>
              </p>
              <p  class="input-login">
                <label>需求</label>
                <input type="text" placeholder="公司"/><br/>
              </p>

               <p class="btn-login">
                <Button type="success">提交需求</Button><br/><br/>
              </p>
        </div>
    </div>
  </div>
    <!-----------------------------------------------底部------------------------------------------------------->
    <div id="foot-bg">
      <div class="foot">
        <div class="foot-text">
          邮箱: bd@intellectgrowth.com
          <br>座机电话: 0557-3804116
          手机号: 18155795106
          <br>CopyRight ©2019 . All Rights Reserved
          <a href="http://47.111.170.130">皖ICP备 19005639号</a>.
          <!-- <img src="../../../src/assets/South_IT_img/pic.gif" /> -->
        </div>
        <!--foot-text-->
      </div>
      <!--foot-bg-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Service",
  data() {
    return {
      value2: "1"
    };
  }
};
</script>
<style scoped>
@import "../../assets/css/threeclass";
@import "../../assets/css/service";
@import "../../assets/css/login";
</style>
