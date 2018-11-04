<template>
    <div>
      <Input v-model="input1" placeholder="Enter something..." style="width: 300px" v-on:mouseenter="add" @keyup.enter.native="add" />
      <Button v-on:click="add">添加条件</Button>
      <haka-selector v-for="item in items" :label="item.message" :key="item.message" :mainlabel="input1"></haka-selector>
    </div>
</template>

<script>
  import HakaSelector from './hakaSelector'
  export default {
    name: 'hakaSelectors',
    components: {HakaSelector},
    data () {
      return {
        items: [
        ],
        input1: 'default'
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
