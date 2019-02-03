<template>
  <Dropdown style="margin-left: 20px"  @on-click="changeMenu">
    <Button type="primary">
      {{dropname}}
      <Icon type="ios-arrow-down"></Icon>
    </Button>
    <DropdownMenu  slot="list" v-for="itemI in items" :key="itemI">
      <DropdownItem :name="itemI">{{itemI}}</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  export default {
    name: 'hakaDropdown',
    props: ['dropname', "items"],
  methods:{
    changeMenu(name) {
//                alert('点击了这个按钮' + name)
//       this.dropname=name
//       let data = {
//         "cid": this.cid,
//         "text":this.input1
//       };
      this.$emit('changeDropdown',name);//select事件触发后，自动触发showCityName事件
      // if (name == 'aaa') {
      //   this.MenuText = 'abc'
      // } else if (name == 'degree') {
      //   this.MenuText = '222222'
      // } else {
      //   this.MenuText = '33333333'
      // }
    },
    },
  }
</script>

<style scoped>

</style>
