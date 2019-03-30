<template>
      <div class="pers">
         <!-- <div class="check-list">
              <div v-for="(item,index) in this.dishes" :key="(item,index)" class="boxList">
                  <div class="btn-type">
                      <input type="checkbox" class="check">
                      <span>{{item.name}}</span>
                  </div>
              </div>
          </div> -->
            <div class="content-index" style="">
              <ul class="content-list content-title">
                  <li class="type">任务名称</li>
                  <li>标注量</li>
                  <li>审核通过</li>
                  <li>标注失败</li>
                  <li>合格率</li>
              </ul>
              <ul class="content-list">
                  <li class="type">语音导航转写任务</li>
                  <li>500</li>
                  <li>465</li>
                  <li>35</li>
                  <li>90%</li>
              </ul>
              <ul class="content-list">
                  <li class="type">语音导航转写任务</li>
                  <li>500</li>
                  <li>465</li>
                  <li>35</li>
                  <li>90%</li>
              </ul>
             <ul class="content-list">
                  <li class="type">语音导航转写任务</li>
                  <li>500</li>
                  <li>465</li>
                  <li>35</li>
                  <li>90%</li>
              </ul>
           </div>
      </div>
</template>
<script>
export default {
  name: 'TasSquare',
  data () {
    return {
      //  dishes: [
      //   {name: '中文语音采集'}, {name: '外语语音采集'}, {name: '文本采集'}, {name: '图片拉框'},
      //   {name: '视频采集'}, {name: '方言采集'}, {name: '中文转语音采集'}, {name: '语音质检'},
      //   {name: '外语语音转写'}, {name: '属性标签'}, {name: '方言转写'}, {name: '图像抠图'},
      //   {name: '关键点标注'}, {name: '交通道路路线标注'}, {name: '3D点云标注'}
      // ]
    }
  }
}
</script>
<style scoped>
.pers{
  width:100%;
  height: 400px;
  border: 1px solid white;
  background: rgb(216, 215, 215);
}
/* 主体 */
.content-index{
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  background: grey;
}
.content-list{
  width:100%;
  height: 45px;
  line-height: 45px;
  list-style-type: none;
  margin:0;
  /* margin-top: 30px; */
   border: 1px solid rgb(122, 120, 120);
}
.content-list li{
  width:20%;
  height: 45px;
  float: left;
  border: 1px solid rgb(189, 194, 189);
  list-style-type: none;
  /* display: inline-block; */
}
.content-title{
  background: rgb(85, 84, 84);
  color:honeydew;
}
</style>
