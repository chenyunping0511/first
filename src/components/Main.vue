<template>
  <div>
    <haka-menus></haka-menus>
    <haka-card></haka-card>
  </div>
</template>

<script>
    import HakaMenus from './haka/hakaMenus'
    import HakaSelectors from './haka/hakaSelectors'
    import HakaPicture from './haka/hakaPicture'
    import HakaCard from './haka/hakaCard'
    export default {
      name: "Main",
      components: {HakaCard, HakaPicture, HakaSelectors, HakaMenus},
      data () {
        return {
          items: [
            {message: 'Foo'},
            {message: 'Bar'}
          ],
          input1: 'default',
          flag: true,
          mod: "custom"
        }
      },
      methods: {
        add: function (event) {
          this.items.push({message: this.input1})
        }
      }
      // mounted: function () {
      //     // GET /someUrl
      //   this.$http.get('http://localhost:5000/init_dir').then(response => {
      //     console.log(response.data);
      //   // get body data
      //     this.someData = response.body;
      //     }, response => {
      //     console.log("error");
      //   }); }
      // }
    }
</script>

<style scoped>

</style>
