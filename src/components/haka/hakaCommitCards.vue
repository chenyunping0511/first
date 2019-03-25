<template>
  <div>
    <div v-for="commit in commits" :key="commit.cid" >
      <!--{{commit}}-->
      <haka-commit-card @changeCommit="changeCommitInCards" :text="commit.text" :cid="commit.cid" ></haka-commit-card>
    </div>
  </div>
</template>

<script>
  import HakaCommitCard from './hakaCommitCard'
  export default {
    name: 'hakaCommitCards',
    components: {HakaCommitCard},
    props:['commits'],
    data () {
      return {
      }
    },
    methods:{
      changeCommitInCards(data){
        this.$emit('changeCommitInPicture',data);//select事件触发后，自动触发showCityName事件
      }
    }
  }
</script>

<style scoped>

</style>
