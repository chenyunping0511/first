<template>
  <div>
    <haka-menus :mod="mod"  @changeMod="changeMod" ></haka-menus>
    <div v-if="mod==='login'">
      <haka-login></haka-login>
    </div>
    <div v-else-if="mod === 'main'">
      <haka-card></haka-card>
    </div>
    <div v-else-if="mod === 'label'">
      <haka-picture></haka-picture>
    </div>
    <div v-else-if="mod === 'abc'">
      <haka-a-b-c></haka-a-b-c>
    </div>
    <div v-else="mod != 'main'">
      unknown
    </div>
  </div>
</template>

<script>
    import HakaMenus from './haka/hakaMenus'
    import HakaSelectors from './haka/hakaSelectors'
    import HakaPicture from './haka/hakaPicture'
    import HakaCard from './haka/hakaCard'
    import HakaLogin from './haka/hakaLogin'
    import HakaABC from './haka/hakaABC'
    export default {
      name: "Main",
      components: {HakaABC, HakaLogin, HakaCard, HakaPicture, HakaSelectors, HakaMenus},
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
        },
        changeMod: function (data) {
          this.mod=data
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
