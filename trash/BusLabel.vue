<template>
  <div>
    <label>车辆类型:<br/></label>
    <input type="radio" name="radios" value="1" v-model="param"><label>普通车</label>
    <input type="radio" name="radios" value="2" v-model="param"><label>公交车</label>
    <input type="radio" name="radios" value="3" v-model="param"><label>警车</label>
    <br/>
    <canvas id="myCanvas" width="350" height="350" @click="draw"></canvas>
  </div>
</template>

<script>
    export default {
      name: "BusLabel",
      data() {
        return {
          param: '2' //设置默认值为1，即设置第一个单选框为选中状态
        }
      },
      canvas:null,
      methods:{
        draw:function () {
          var canvas = document.getElementById('myCanvas')
          var context=canvas.getContext("2d");
          context.moveTo(100,100)
          context.lineTo(700,700)

          context.stroke()
        }
      }
    }
</script>

<style scoped>
  #myCanvas{
    border:5px solid red;
  }
</style>
