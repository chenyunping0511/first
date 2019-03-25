<template>
  <card>
    <div>
      <p slot="title">
        <Icon type="md-copy" onclick=""></Icon>
        id:{{cid}}
      </p>
      <!--<Input v-model="input1"  value="text" style="width: 300px" v-on:mouseenter="change" @keyup.enter.native="change" />-->
      <textarea v-model="text"  style="width: 300px"  />
      <!--<textarea v-model="text"  style="width: 300px" v-on:mouseenter="change" @keyup.enter.native="change" />-->
    </div>
  </card>
</template>
<script>
  export default {
    name: 'hakaCommitCard',
    data () {
      return {
        // input1:this.text
      }
    },
    props:['text','cid'],
    methods:{
      change:function () {
        let data = {
          "cid": this.cid,
          "text":this.input1
        };
        this.$emit('changeCommit',data);//select事件触发后，自动触发showCityName事件
      }
    }
  }
</script>


<style scoped>
  textarea{
    border:0;
    background-color:transparent;
    color: #666464;
    height: auto;
    resize: none;
    overflow: hidden;
  }
</style>
