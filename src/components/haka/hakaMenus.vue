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
