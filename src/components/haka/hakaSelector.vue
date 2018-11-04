<template>
<div>
  <label>标签类型:{{selflabel}}</label>
  <RadioGroup  v-model="animal" >
    <Radio v-for='item in items'  :label='item.message' :key='item.message'></Radio>
  </RadioGroup>
  <Input v-model="input1" placeholder="Enter something..." style="width: 300px" v-on:mouseenter="add" @keyup.enter.native="add" />
  <Button v-on:click="add">添加条件</Button>
</div>
</template>

<script>
export default {
  name: 'hakaSelector',
  props:["mainlabel"],
  data () {
    return {
      items: [
      ],
      input1: 'default',
      selflabel:this.mainlabel
    }
  },
  methods: {
    add: function (event) {
      this.items.push({message: this.input1})
    }
  }
}
</script>

<style scoped>

</style>
