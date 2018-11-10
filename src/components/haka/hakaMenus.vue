<template>
    <div>
      <Menu mode="horizontal" active-name="1">
        <MenuItem to="/"  name="main">
          <Icon type="ios-infinite" size="20" />
          主页
        </MenuItem>
        <MenuItem to="/customPicture"  name="label">
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
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
          <Icon type="md-build" size="20" />
          综合设置
        </MenuItem>
      </Menu>
    </div>
</template>

<script>
  export default {
    name: 'hakaMenus',
    props:['mod'],
    methods:{
      toLabel: function () {
        props.mod="custom"
      }
    }
  }
</script>

<style scoped>

</style>
