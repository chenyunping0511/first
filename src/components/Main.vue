<template>

  <div>
    <img src="../assets/head.png"><br/>

    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
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
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
      <Radio label="primary"></Radio>
    </RadioGroup>
<br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Button v-on:click="add">添加条件</Button>
    <Input v-model="input1" placeholder="Enter something..." style="width: 300px" v-on:mouseenter="add" @keyup.enter.native="add" />
    <br/>
    <RadioGroup  v-model="animal" >
      <Radio v-for='item in items'  :label='item.message' :key='item.message'></Radio>
    </RadioGroup>

  </div>
</template>

<script>
    export default {
      name: "Main",
      data () {
        return {
          theme1: 'light',
          items: [
            { message: 'Foo' },
            { message: 'Bar' }
          ],
          input1:'default'
        }
      },
      methods:{
        add: function (event) {
          this.items.push({message:this.input1})
        }
      }
    }
</script>

<style scoped>

</style>
