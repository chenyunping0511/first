<template>
  <div class="canvas-wrapper">
    <canvas width="500" height="500" id="canvas-1" >
      <span>亲，您的浏览器不支持canvas，换个浏览器试试吧！</span>
    </canvas>
    <canvas width="500" height="500" id="canvas-2" >
      <span>亲，您的浏览器不支持canvas，换个浏览器试试吧！</span>
    </canvas>
    <Button v-on:click="undoDraw">撤销</Button>
  </div>
</template>

<script>
  var startX=0
  var startY=0
  var endX=0
  var endY=0
  var canvasBackOri
  var canvasFrontOri
  var canvasFront
  var canvasBack
  class WrappedCanvas {
    constructor (canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = this.ctx.canvas.width;
      this.height = this.ctx.canvas.height;
      this.executionArray = [];
    }
    drawImage (...params) {
      this.executionArray.push({
        method: 'drawImage',
        params: params
      });
      this.ctx.drawImage(...params);
    }
    drawSquareWithMemory(...params){
      this.executionArray.push({
        method: 'drawSquare',
        params: params
      });
      this.drawSquare(...params);
    }
    drawSquare(startX,startY,endX,endY){
      console.log(startX,startY)
      this.ctx.beginPath()
      this.ctx.moveTo(startX,startY);
      this.ctx.lineTo(startX,endY) ;
      this.ctx.lineTo(endX,endY) ;
      this.ctx.lineTo(endX,startY) ;
      this.ctx.lineTo(startX,startY) ;
      this.ctx.stroke();
      this.ctx.closePath() ;
    }
    clearCanvas () {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
    undo () {
      if (this.executionArray.length > 0) {
        this.clearCanvas();
        console.log(this.executionArray)
        this.executionArray.pop();
        console.log(this.executionArray)
        for (let exe of this.executionArray) {
          this[exe.method](...exe.params)
        }
      }
    }
  }
  export default {
    name: 'hakaPicture',
    data () {
      return {
      }
    },
    methods:{
      undoDraw: function () {
        canvasFront.undo()
      }
    }
  }
  window.onload= function(){
    canvasBackOri= document.getElementById('canvas-1');
    canvasFrontOri= document.getElementById('canvas-2');
    canvasFront = new WrappedCanvas(canvasFrontOri)
    canvasBack = new WrappedCanvas(canvasBackOri)
    canvasFront.ctx.strokeStyle="red";
    var img = new Image();
    img.src='http://i1.bvimg.com/667520/8b713753fda07e24.jpg'
    img.onload = function(){
      canvasBack.drawImage(img,0,0)
    };


    canvasFrontOri.onmousedown = function(evDown){
      evDown=evDown || window.event;
      startX=evDown.clientX-canvasFrontOri.offsetLeft
      startY=evDown.clientY-canvasFrontOri.offsetTop
      console.log("!!!",startX,startY)
      document.onmouseup = function(evUp){
        evUp = evUp || window.event;
        endX=evUp.clientX-canvasFrontOri.offsetLeft
        endY=evUp.clientY-canvasFrontOri.offsetTop
        canvasFront.drawSquareWithMemory(startX,startY,endX,endY)
        document.onmousemove = null;
        document.onmouseup = null;
      };

    }
  }
</script>

<style scoped>
  #canvas-1 {
    position: absolute;
    left: 200px;
    top: 200px;
    margin: 20px;
    background: #ffffff;
    border: thin solid #aaaaaa;
  }

  #canvas-2 {
    position: absolute;
    left: 200px;
    top: 200px;
    margin: 20px;
    border: thin solid #aaaaaa;
  }
</style>
