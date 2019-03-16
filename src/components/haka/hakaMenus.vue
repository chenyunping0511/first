<template>
    <div>
        <img src="../../assets/head.png">
        <!--<a>注册&nbsp;&nbsp;</a>-->
        <!--<a>登录 &nbsp;&nbsp;</a></div>-->
        <br/>
      <br/>
      <Row>
        <Col>
          <Menu mode="horizontal" active-name="1">
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
              <MenuItem name="4-1">个人主页</MenuItem>
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
  /*div{ display:inline;}*/
  a{ float:right;}
</style>
