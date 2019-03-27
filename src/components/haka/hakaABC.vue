<<<<<<< HEAD
<template>
  <div>
    <Button type="info" v-on:click="init_all" ghost>全面初始化</Button>
    <br/>
    <br/>

    <haka-dropdown @changeDropdown="changeDropdownName1" :dropname="dropname1" :items="groups"></haka-dropdown>
    <haka-dropdown @changeDropdown="changeDropdownName2" :dropname="dropname2" :items="missions"></haka-dropdown>
    <Button type="info" v-on:click="add_permission" ghost>授权</Button>
    <Button type="info" v-on:click="out_answer_group"  ghost>导出数据</Button>
    <br/>
    <br/>
    <haka-dropdown @changeDropdown="changeDropdownName3" :dropname="dropname3" :items="peoples"></haka-dropdown>
    <Button type="info" v-on:click="out_answer_people" ghost>导出数据</Button>
    <br/>
    <br/>
    <Input v-model="group_name" size="large" placeholder="添加小组" clearable style="width: 200px"/>
    <Button type="info" v-on:click="add_group"  ghost>添加小组</Button>
    <br/>
    <Input v-model="people_name" size="large" placeholder="为小组添加成员" clearable style="width: 200px"/>
    <Button type="info" v-on:click="add_people"  ghost>添加成员</Button>
    <br/>
    <br/>
    <Button type="info" ghost>查看项目进度</Button>
    <Button type="info" ghost>查看小组进度</Button>
    <Button type="info" ghost>查看人员进度</Button>
    <Button type="info" ghost>查看授权关系</Button>
    <!--<Table id="table-1" height="600" width="800" :columns="columns1" :data="data2"></Table>-->
  </div>


</template>

<script>
  import CONST from '../const'
  import HakaDropdown from './hakaDropdown'
  var myVue
  var sqCount=0
  export default {
    name: 'hakaPicture',
    components: {HakaDropdown},
    data () {
      return {
        commits:[
          // {
          //   "text":"text1",
          //   "cid":1
          // },
          // {
          //   "text":"text2",
          //   "cid":2
          // },
        ],
        positions:[],
        zooms:[],
        needInput:true,
        textC:"",
        wid:"",
        group:"",
        dir:"",
        admin:false,
        dropname1:"现有小组",
        dropname2:"现有任务",
        dropname3:"小组成员",
        group_name:"",
        people_name:"",
        groups:[],
        peoples:[],
        missions:[],
      }
    },
    methods:{
      init_all: function () {
        // alert(CONST.PREFIX+"init_dir")
        this.$http.post(CONST.PREFIX+'init_dir',{
        },{emulateJSON:true,credentials: true}).then(response => {
          alert("初始化成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      get_info: function () {
        this.$http.post(CONST.PREFIX+'get_info',{
        },{emulateJSON:true,credentials: true}).then(response => {
          console.log(response.body)
          console.log("获取成功")
          this.groups=response.body["groups"]
          this.missions=response.body["dirs"]
        }, response => {
          // alert("获取失败")
          alert(response.data)
        });
      },
      add_group: function () {
        this.$http.post(CONST.PREFIX+'add_group',{
          name:myVue.group_name,
        },{emulateJSON:true,credentials: true}).then(response => {
          this.groups=response.body
          console.log("添加成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      add_people: function () {
        this.$http.post(CONST.PREFIX+'add_people',{
          group:myVue.dropname1,
          people:myVue.people_name,
        },{emulateJSON:true,credentials: true}).then(response => {
          this.peoples=response.body
          console.log("添加成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      add_permission: function () {
        this.$http.post(CONST.PREFIX+'add_relation',{
          group:myVue.dropname1,
          dir:myVue.dropname2,
        },{emulateJSON:true,credentials: true}).then(response => {
          // this.peoples=response.body
          console.log("授权成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      get_people: function () {
        this.$http.post(CONST.PREFIX+'get_people',{
          group:myVue.dropname1,
        },{emulateJSON:true,credentials: true}).then(response => {
          this.peoples=response.body
          console.log("获取成员成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      changeDropdownName1: function (data) {
        this.dropname1=data
        this.get_people()
      },
      changeDropdownName2: function (data) {
        this.dropname2=data
      },
      changeDropdownName3: function (data) {
        this.dropname3=data
      },
      out_answer_group: function(){
        this.$http.post(CONST.PREFIX+'out_answer',{
          group:myVue.dropname1,
          dir:myVue.dropname2,
        },{emulateJSON:true,credentials: true}).then(response => {
          // this.peoples=response.body
          console.log("打包数据成功")
          console.log(response.body)
          // window.open('http://114.116.23.135:8090/image/zip_out_answer/'+response.body)
          window.open(response.body)
          // http://114.116.23.135:8090/image/zip_out_answer/out1544976053.zip
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
        alert(response.data)
      },
      out_answer_people: function(){
        this.$http.post(CONST.PREFIX+'out_answer',{
          people:myVue.dropname3,
          dir:myVue.dropname2,
        },{emulateJSON:true,credentials: true}).then(response => {
          // this.peoples=response.body
          console.log("获取成员成功")
          console.log(response.body)
          window.open('http://114.116.23.135:8090/image/zip_out_answer/'+response.body)
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      }
    },
    mounted:function () {
      myVue.get_info()
    },
    created:function () {
      myVue=this
    }
  }



</script>


<style scoped>
  textarea{
    border:0;
    height: auto;
    resize: none;
    overflow: hidden;
    color: #666464;
  }
  #table-1{
    margin:0px auto;
    width:1024px;
  }
</style>
=======
<template>
  <div>
    <Button type="info" v-on:click="init_all" ghost>全面初始化</Button>
    <br/>
    <br/>
    <!--<Upload action="//127.0.0.1:5000/web/api/upload">-->
      <!--<Button icon="ios-cloud-upload-outline">Upload files</Button>-->
    <!--</Upload>-->
    <!--<br/>-->
    <!--<br/>-->

    <haka-dropdown @changeDropdown="changeDropdownName1" :dropname="dropname1" :items="groups"></haka-dropdown>
    <haka-dropdown @changeDropdown="changeDropdownName2" :dropname="dropname2" :items="missions"></haka-dropdown>
    <Button type="info" v-on:click="add_permission" ghost>授权</Button>
    <Button type="info" v-on:click="out_answer_group"  ghost>导出数据</Button>
    <br/>
    <br/>
    <haka-dropdown @changeDropdown="changeDropdownName3" :dropname="dropname3" :items="peoples"></haka-dropdown>
    <Button type="info" v-on:click="out_answer_people" ghost>导出数据</Button>
    <br/>
    <br/>
    <Input v-model="group_name" size="large" placeholder="添加小组" clearable style="width: 200px"/>
    <Button type="info" v-on:click="add_group"  ghost>添加小组</Button>
    <br/>
    <Input v-model="people_name" size="large" placeholder="为小组添加成员" clearable style="width: 200px"/>
    <Button type="info" v-on:click="add_people"  ghost>添加成员</Button>
    <br/>
    <br/>
    <Button type="info" ghost>查看项目进度</Button>
    <Button type="info" ghost>查看小组进度</Button>
    <Button type="info" ghost>查看人员进度</Button>
    <Button type="info" ghost>查看授权关系</Button>
    <!--<Table id="table-1" height="600" width="800" :columns="columns1" :data="data2"></Table>-->
  </div>


</template>

<script>
  import CONST from '../const'
  import HakaDropdown from './hakaDropdown'
  var myVue
  var sqCount=0
  export default {
    name: 'hakaPicture',
    components: {HakaDropdown},
    data () {
      return {
        commits:[
          // {
          //   "text":"text1",
          //   "cid":1
          // },
          // {
          //   "text":"text2",
          //   "cid":2
          // },
        ],
        positions:[],
        zooms:[],
        needInput:true,
        textC:"",
        wid:"",
        group:"",
        dir:"",
        admin:false,
        dropname1:"现有小组",
        dropname2:"现有任务",
        dropname3:"小组成员",
        group_name:"",
        people_name:"",
        groups:[],
        peoples:[],
        missions:[],
      }
    },
    methods:{
      init_all: function () {
        // alert(CONST.PREFIX+"init_dir")
        this.$http.post(CONST.PREFIX+'init_dir',{
        },{emulateJSON:true,credentials: true}).then(response => {
          alert("初始化成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      get_info: function () {
        this.$http.post(CONST.PREFIX+'get_info',{
        },{emulateJSON:true,credentials: true}).then(response => {
          console.log(response.body)
          console.log("获取成功")
          this.groups=response.body["groups"]
          this.missions=response.body["dirs"]
        }, response => {
          // alert("获取失败")
          alert(response.data)
        });
      },
      add_group: function () {
        this.$http.post(CONST.PREFIX+'add_group',{
          name:myVue.group_name,
        },{emulateJSON:true,credentials: true}).then(response => {
          this.groups=response.body
          console.log("添加成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      add_people: function () {
        this.$http.post(CONST.PREFIX+'add_people',{
          group:myVue.dropname1,
          people:myVue.people_name,
        },{emulateJSON:true,credentials: true}).then(response => {
          this.peoples=response.body
          console.log("添加成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      add_permission: function () {
        this.$http.post(CONST.PREFIX+'add_relation',{
          group:myVue.dropname1,
          dir:myVue.dropname2,
        },{emulateJSON:true,credentials: true}).then(response => {
          // this.peoples=response.body
          console.log("授权成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      get_people: function () {
        this.$http.post(CONST.PREFIX+'get_people',{
          group:myVue.dropname1,
        },{emulateJSON:true,credentials: true}).then(response => {
          this.peoples=response.body
          console.log("获取成员成功")
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      },
      changeDropdownName1: function (data) {
        this.dropname1=data
        this.get_people()
      },
      changeDropdownName2: function (data) {
        this.dropname2=data
      },
      changeDropdownName3: function (data) {
        this.dropname3=data
      },
      out_answer_group: function(){
        this.$http.post(CONST.PREFIX+'out_answer',{
          group:myVue.dropname1,
          dir:myVue.dropname2,
        },{emulateJSON:true,credentials: true}).then(response => {
          // this.peoples=response.body
          console.log("打包数据成功")
          console.log(response.body)
          // window.open('http://114.116.23.135:8090/image/zip_out_answer/'+response.body)
          window.open(response.body)
          // http://114.116.23.135:8090/image/zip_out_answer/out1544976053.zip
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
        alert(response.data)
      },
      out_answer_people: function(){
        this.$http.post(CONST.PREFIX+'out_answer',{
          people:myVue.dropname3,
          dir:myVue.dropname2,
        },{emulateJSON:true,credentials: true}).then(response => {
          // this.peoples=response.body
          console.log("获取成员成功")
          console.log(response.body)
          window.open('http://114.116.23.135:8090/image/zip_out_answer/'+response.body)
        }, response => {
          // alert("上报失败")
          alert(response.data)
        });
      }
    },
    mounted:function () {
      myVue.get_info()
    },
    created:function () {
      myVue=this
    }
  }



</script>


<style scoped>
  textarea{
    border:0;
    height: auto;
    resize: none;
    overflow: hidden;
    color: #666464;
  }
  #table-1{
    margin:0px auto;
    width:1024px;
  }
</style>
>>>>>>> 25b3fdb202512b148d8c95b8eeabfa058ccf8609
