<template>
    <div class="">
        <div class="user-header">
            <div class="title">
              <Icon type="ios-list"></Icon>
              任务明细
            </div>
            <div class="more">
              查看更多
            </div>
        </div>
        <div class="content-index" style="">
              <ul class="content-list content-title">
                  <li class="type">
                    <img src="../../assets/comfim.png">
                  </li>
                  <li class="son">
                    <h2 class="son-title">语音导航转写任务</h2><br/><br/>
                    <h6>【标注任务】TV-四川话-AIUI-20190119_20190128</h6>
                    </li>
              </ul>
             <ul class="content-list content-title">
                  <li class="type">
                    <img src="../../assets/comfim.png">
                  </li>
                  <li class="son">
                    <h2 class="son-title">语音导航转写任务</h2><br/><br/>
                    <h6>【标注任务】TV-四川话-AIUI-20190119_20190128</h6>
                    </li>
              </ul>
              <ul class="content-list content-title">
                  <li class="type">
                    <img src="../../assets/comfim.png">
                  </li>
                  <li class="son">
                    <h2 class="son-title">语音导航转写任务</h2><br/><br/>
                    <h6>【标注任务】TV-四川话-AIUI-20190119_20190128</h6>
                    </li>
              </ul>
           </div>
      </div>
</template>
<script>
export default {
  name: 'ConfirmRegistration',
  data () {
    return {
    }
  },
  methods: {},
  watch: {
  },
  computed: {}
}
</script>

<style scoped>
 .user-header{
background-color:rgb(83, 80, 83);
width:100%;
height:45px;
line-height: 45px;
color: rgb(202, 207, 211);
 }
 .title,.more{
margin-left: 20px;

 }
 .title{
float: left;
font-size: 18px;
 }
.more{
float: right;
margin-right: 20px;
font-size: 12px;
color:royalblue;
}
 /* 主体 */
.content-index{
  width: 104.2%;
  margin: 0 auto;
}
.content-list{
  width:96%;
  height: 70px;
  /* line-height: 70px; */
  list-style-type: none;
  margin:0;
   border: 1px solid rgb(122, 120, 120);
}
.content-list li{
  float: left;
  list-style-type: none;
}
.son{
 width:50%;
}
.son h2,.son h6{
  float:left;
}
.son h2{
  font-weight: 500;
}
.son h6{
  color:rgb(143, 141, 141);
}
.type{
 width:20%;
}
.type img{
  vertical-align: middle;
  margin-top: 10px;
}
</style>
