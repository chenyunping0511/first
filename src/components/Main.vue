<template>
  <div>
    <img src="../assets/head.png"><br/>
    <br/>
    <haka-menus></haka-menus>
    <haka-selectors></haka-selectors>
    <haka-picture></haka-picture>
  </div>
</template>

<script>
    import HakaMenus from './haka/hakaMenus'
    import HakaSelectors from './haka/hakaSelectors'
    import HakaPicture from './haka/hakaPicture'
    export default {
      name: "Main",
      components: {HakaPicture, HakaSelectors, HakaMenus},
      data () {
        return {
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
