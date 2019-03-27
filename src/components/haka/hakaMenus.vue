<<<<<<< HEAD
<template>
    <div class="top">
      <div class="nav-right">
        <Menu active-name="1"   class="light-left">
            <MenuItem  @click.native="changeMod('login')" name="1">
                  <!-- <Icon type="ios-infinite" /> -->
                  <Icon type="ios-home"  size="30" ></Icon>
                  标注主页
            </MenuItem>
            <MenuItem  @click.native="changeMod('label')" name="label">
                  <Icon type="ios-brush-outline" size="30" />
                  数据标注
            </MenuItem>
                <MenuItem name="Comfrim" @click.native="changeMod('Comfrim')">
                    <Icon type="md-document" size="30"/>
                    任务广场
                </MenuItem>
                <!-- <MenuItem name="3">
                    <Icon type="ios-flag"  size="35"></Icon>
                    正在标注
                </MenuItem> -->
                <MenuItem name="marked"  @click.native="changeMod('marked')">
                    <!-- <Icon type="md-chatbubbles" /> -->
                    <Icon type="ios-pricetags" size="30"></Icon>
                    任务明细
                </MenuItem>
                <MenuItem name="personal" @click.native="changeMod('personal')">
                    <Icon type="md-chatbubbles" size="30" />
                    个人主页
                </MenuItem>
            <MenuItem @click.native="changeMod('abc')" name="6">
                  <Icon type="md-people" size="30" />
                  管理页
                  </MenuItem>
        </Menu>
      </div>
    </div>
</template>


<script>
  export default {
    mode:history,
    name: 'hakaMenus',
    props:['mod'],
    methods:{
      changeMod: function (data) {
        this.$emit('changeMod',data);
      }
    }
  }
</script>

<style scoped>
@import '../../assets/css/indexMenus.css';
  /*div{ display:inline;}*/
  a{ float:right;}
</style>
=======
<template>
    <div>

        <!--<a>注册&nbsp;&nbsp;</a>-->
        <!--<a>登录 &nbsp;&nbsp;</a></div>-->
      <Row>
        <Col>
          <Menu mode="horizontal" active-name="1">
             <MenuItem name="">
              <img src="../../assets/logo.png" style="height:140px">
            </MenuItem>
            <!--<MenuItem to="/"  name="main">-->
              <MenuItem @click.native="changeMod('main')"  name="main">
              <Icon type="ios-infinite" size="20" />
              主页
            </MenuItem>
            <!--<MenuItem to="/customPicture"  name="label">-->
              <MenuItem  @click.native="changeMod('label')" name="label">
              <Icon type="ios-brush-outline" size="20" />
              数据标注
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-color-wand" size="20" />
              数据采集
            </MenuItem>
            <Submenu name="3" >
              <template slot="title">
                <Icon type="md-analytics" size="20" />
                统计分析
              </template>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
                <!--<MenuItem name="3-4">用户留存</MenuItem>-->
                <!--<MenuItem name="3-5">流失用户</MenuItem>-->
            </Submenu>
            <Submenu name="4" >
              <template slot="title">
                <Icon type="md-analytics" size="20" />
                综合设置
              </template>
              <MenuItem name="4-1" @click.native="changeMod('personal')">个人主页</MenuItem>
              <MenuItem name="4-2" @click.native="changeMod('login')" >注册/登录</MenuItem>
              <!--<MenuItem name="3-4">用户留存</MenuItem>-->
              <!--<MenuItem name="3-5">流失用户</MenuItem>-->
            </Submenu>
            <MenuItem @click.native="changeMod('abc')" name="5">
              <Icon type="md-people" size="20" />
              管理页
              </MenuItem>
          </Menu>
        </Col>
      </Row>
    </div>
</template>

<script>
  export default {
    mode:history,
    name: 'hakaMenus',
    props:['mod'],
    methods:{
      changeMod: function (data) {
        this.$emit('changeMod',data);
      }
    }
  }
</script>

<style scoped>
@import '../../assets/css/indexMenus.css';
  /*div{ display:inline;}*/
  a{ float:right;}
</style>
>>>>>>> 25b3fdb202512b148d8c95b8eeabfa058ccf8609
