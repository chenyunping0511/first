<template>
  <div id="app">
    <!-- 左侧栏 -->
     <haka-menus :mod="mod"  @changeMod="changeMod"></haka-menus>
    <div id="content">
        <nav class="conNav">
          <div class="item">
            <div class="pic">
              <router-link to="/">
              <img src="../assets/logo.png" class="log">
              </router-link>
            </div>
               
            <!-- <div >
              <Icon type="person-add" size="30"></Icon>
              注册
              </div> -->
             <MenuItem  @click.native="changeMod('regin')" name="regin" class="word">
                 <Icon type="md-people"  size="30" />
                 注册
            </MenuItem>
          </div>
        </nav>
        <!-- 右侧内容 -->
        <div class="box" >
          <div class="box-content" style="">
                <div v-if="mod==='login'">
                  <haka-login></haka-login>
                </div>
                <div v-else-if="mod === 'main'">
                  <haka-card></haka-card>
                </div>
                <div v-else-if="mod === 'label'">
                  <haka-picture></haka-picture>
                </div>
                <div v-else-if="mod === 'abc'">
                  <haka-a-b-c></haka-a-b-c>
                </div>
                <div v-else-if="mod === 'Comfrim'">
                  <Comfrim></Comfrim>
                </div>
                <div v-else-if="mod === 'regin'">
                  <regin></regin>
                </div>
                <div v-else-if="mod === 'marked'">
                  <marked></marked>
                </div>
                <div v-else-if="mod === 'personal'">
                  <personal></personal>
                </div>
                <div v-else-if="mod === 'website'">
                  <website></website>
                </div>
                <div v-else-if="mod !='login'">
                   <haka-login></haka-login>
                </div>
              </div>
            </div>
        </div>
    </div>
   
</template>

<script>
    import HakaMenus from './haka/hakaMenus'
    import HakaSelectors from './haka/hakaSelectors'
    import HakaPicture from './haka/hakaPicture'
    import HakaCard from './haka/hakaCard'
    import HakaLogin from './haka/hakaLogin'
    import HakaABC from './haka/hakaABC'
    import ConfirmRegistration from './haka/ConfirmRegistration'
    import ReginPesorn from './haka/ReginPesorn'
    import Marked from './haka/Marked'
    import Personal from './haka/Personal'
    import Website from './haka/Website'
    export default {
      name: "Main",
      components: {HakaABC, HakaLogin, HakaCard, HakaPicture, HakaSelectors, HakaMenus, 
      "Comfrim":ConfirmRegistration, 
      "regin":ReginPesorn,
      "marked":Marked,
      "personal":Personal,
      "website":Website},
      data () {
        return {
          items: [
            {message: 'Foo'},
            {message: 'Bar'}
          ],
          input1: 'default',
          flag: true,
          mod: "custom"
        }
      },
      methods: {
        add: function (event) {
          this.items.push({message: this.input1})
        },
        changeMod: function (data) {
          console.log(data)
          this.mod=data
        }
      }
      // mounted: function () {
      //     // GET /someUrl
      //   this.$http.get('http://localhost:5000/init_dir').then(response => {
      //     console.log(response.data);
      //   // get body data
      //     this.someData = response.body;
      //     }, response => {
      //     console.log("error");
      //   }); }
      // }
    }
</script>

<style scoped>
@import '../assets/css/indexMenus';
body,p{
  margin:0;
}
ul{
  margin:0;
  padding:0;
  list-style: none;
}
a{
  text-decoration: none;
}
#app{
  display: flex;
  width:100%;
}
/* img-logo */
.log{
    height: 109px;
    margin-top: -20px;
    margin-left: 22px;
}
/* nav */
.conNav{
  margin-left: -240px;
  width:140.4%;
  border: 1px solid rgb(199, 197, 197);
  /* background: -webkit-linear-gradient(left,#ff5000,#ff9000) no-repeat; */
  /* -moz-box-shadow:2px 2px 5px #333333; 
  -webkit-box-shadow:2px 2px 5px #333333; 
  box-shadow:20px 20px 50px #333333; */
  background: #E6E7EB;
}
.item{
  height: 65px;
  width:100%;
  line-height: 80px;
}
.item .pic { float:left;margin-right:10px;width:100px;height:100px; }
.item .word {float:right;font-size: 20px;line-height: 60px;margin-right: 40px;}
/* box */
.box{
      /* padding-right: 1400px; */
      width:116.4%;
      background-color: #F2F2F0;
}
.box-content{
  /* padding:20px; */
  width:1000px;
  padding-left:40px;
  padding-top: 40px;
}
</style>
