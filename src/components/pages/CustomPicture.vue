<template>
  <div>
    <haka-menus></haka-menus>
    <haka-selectors></haka-selectors>
    <haka-picture></haka-picture>
  </div>
</template>

<script>
  import HakaMenus from '../haka/hakaMenus'
  import HakaSelectors from '../haka/hakaSelectors'
  import HakaPicture from '../haka/hakaPicture'
  export default {
    name: 'CustomPicture',
    components: {HakaPicture, HakaSelectors, HakaMenus},
    data () {
      return {
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        input1:'default',
        flag:true,
        mod:"custom"
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
