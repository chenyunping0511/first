<template>
  <div class="canvas-wrapper">
    <canvas width="800" height="800" id="canvas-1" >
      <span>亲，您的浏览器不支持canvas，换个浏览器试试吧！</span>
    </canvas>
    <canvas width="800" height="800" id="canvas-2" >
    </canvas>
    <canvas width="800" height="800" id="canvas-3" >
    </canvas>
    <haka-commit-cards @changeCommitInPicture="changeCommitFinal" id="commit" :commits="commits"></haka-commit-cards>
    <button id="button-load" v-on:click="finish">完成</button>
    <textarea v-model="textC" id="commit-input" v-on:input="OnInput" />
  </div>
</template>

<script>
  var myVue
  import HakaCommitCards from './hakaCommitCards'
  var downing=false
  var sqCount=0
  var startX=0
  var startY=0
  var moveX=0
  var moveY=0
  var endX=0
  var endY=0
  var commitInput
  var canvasBackOri
  var canvasFrontOri
  var canvasFront
  var canvasBack
  var canvasPreviewOri
  var canvasPreview
  var sqColor="red"
  var preColor="rgba(255,0,0,0.5)"
  var widthZoom
  var heightZoom
  var imgSrc = require('/home/smart/17.1-03.jpg')
  class WrappedCanvas {
    constructor (canvas,pre=false) {
      this.pre=pre
      this.ctx = canvas.getContext('2d');
      this.width = this.ctx.canvas.width;
      this.height = this.ctx.canvas.height;
      this.executionArray = [];
      this.undoArray = [];
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
    drawSquare(startX,startY,endX,endY,nowNum,color){

      if (this.pre==true){
        this.clearCanvas();
      }else{
        canvasPreview.clearCanvas();
      }
      this.ctx.strokeStyle=color;
      this.ctx.beginPath()
      this.ctx.moveTo(startX,startY);
      this.ctx.lineTo(startX,endY) ;
      this.ctx.lineTo(endX,endY) ;
      this.ctx.lineTo(endX,startY) ;
      this.ctx.lineTo(startX,startY) ;
      this.ctx.stroke();
      this.ctx.closePath() ;
      this.ctx.fillStyle = color;
      this.minStartX=Math.min(startX,endX)
      this.minStartY=Math.min(startY,endY)
      this.ctx.fillText(nowNum,this.minStartX,this.minStartY)
    }
    clearCanvas () {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
    undo () {
      if (this.executionArray.length > 0) {
        this.clearCanvas();
        this.undoArray.push(this.executionArray[this.executionArray.length-1])
        this.executionArray.pop();
        for (let exe of this.executionArray) {
          this[exe.method](...exe.params)
        }
      }
    }
    redo(){
      if (this.undoArray.length>0){
        this.clearCanvas();
        for (let exe of this.executionArray) {
          this[exe.method](...exe.params)
        }
        this.undoExe=this.undoArray[this.undoArray.length-1]
        this[this.undoExe.method](...this.undoExe.params)
        this.undoArray.pop()
        this.executionArray.push(this.undoExe)
      }
    }
  }
  var InitListener = function () {
    document.onkeydown = function (e) {
      e = event || window.event
      console.log(e.keyCode)
      if(e && e.shiftKey && e.keyCode==90){ // 按 z
        canvasFront.redo()
        return
      }
      if(e && e.keyCode==90){ // 按 z
        canvasFront.undo()
        return
      }
      if (e && e.keyCode==49  || e.keyCode==97){
        sqColor="red"
        preColor="rgba(255,0,0,0.5)"
        return
      }
      if (e && e.keyCode==50 || e.keyCode==98){
        sqColor="blue"
        preColor="rgba(0,0,255,0.5)"
        return
      }
      if (e && e.keyCode==13 && e.shiftKey){
        commitInput.style.display="none"
        myVue.textC=""
        return
      }
    }

  }
  var InitCanvas = function () {
    commitInput=document.getElementById("commit-input");//获取控件
    canvasBackOri= document.getElementById('canvas-1');
    canvasFrontOri= document.getElementById('canvas-2');
    canvasPreviewOri= document.getElementById('canvas-3');
    canvasFront = new WrappedCanvas(canvasFrontOri)
    canvasBack = new WrappedCanvas(canvasBackOri)
    canvasPreview = new WrappedCanvas(canvasPreviewOri,true)
    canvasFront.ctx.strokeStyle="red";
    var img = new Image();
    // img.src='http://i1.bvimg.com/667520/ffc49fc95b68fb3e.jpg'
    // img.src='/home/smart/17.1-03.jpg'
    img.src=imgSrc
    img.onload = function(){
          widthZoom=img.width/800
          heightZoom=img.height/800
      canvasBack.drawImage(img,0,0,800,800)
    };
    canvasPreviewOri.onmousedown = function(evDown){
      downing=true
      evDown=evDown || window.event;
      startX=evDown.clientX-canvasFrontOri.offsetLeft
      startY=evDown.clientY-canvasFrontOri.offsetTop
      canvasPreviewOri.onmousemove = function(evMove){
        if (downing==false){
          return
        }
        evMove=evMove || window.event;
        moveX=evMove.clientX-canvasFrontOri.offsetLeft
        moveY=evMove.clientY-canvasFrontOri.offsetTop
        canvasPreview.drawSquare(startX,startY,moveX,moveY,sqCount+1,preColor)
      }
      document.onmouseup = function(evUp){
        downing=false
        if (
          evUp.clientX==evDown.clientX || evUp.clientY==evDown.clientY
          || evUp.clientX<canvasFrontOri.offsetLeft || evUp.clientX>canvasFrontOri.offsetWidth+canvasFrontOri.offsetLeft
          || evUp.clientY<canvasFrontOri.offsetTop || evUp.clientX>canvasFrontOri.offsetHeight+canvasFrontOri.offsetTop
        ) {
          canvasPreview.clearCanvas()
          return
        }
        evUp = evUp || window.event;
        endX=evUp.clientX-canvasFrontOri.offsetLeft
        endY=evUp.clientY-canvasFrontOri.offsetTop
        sqCount+=1
        canvasFront.drawSquareWithMemory(startX,startY,endX,endY,sqCount,sqColor)
        document.onmousemove = null;
        document.onmouseup = null;
      myVue.positions.push({
        "cid": sqCount,
        "top": Math.min(startY,endY),
        "left":  Math.min(startX,endX),
        "width": Math.abs(startX-endX),
      "height" : Math.abs(endY-startY)
      })
      console.log("push position")
        commitInput.style.display=""
        commitInput.style.position = "absolute";//设置绝对定位（或者相对定位）
        commitInput.style.left = Math.min(evUp.clientX,evDown.clientX)+"px";//设置left数值
        commitInput.style.top = Math.max(evUp.clientY,evDown.clientY)+2+"px";//设置top数值
        commitInput.style.width=Math.abs(evUp.clientX-evDown.clientX)+"px"
        commitInput.style.height=Math.abs(evUp.clientY-evDown.clientY)+"px"
        commitInput.focus()
      };
    }
  }
  export default {
    name: 'hakaPicture',
    components: {HakaCommitCards },
    data () {
      return {
        commits:[
          // {
          //   "text":"text1",
          //   "cid":1
          // },
          // {
          //   "text":"text2",
          //   "cid":2
          // },
        ],
        positions:[],
        zooms:[],
        needInput:true,
        textC:"",
      }
    },
    methods:{
      undoDraw: function () {
        canvasFront.undo()
      },
      changeCommitFinal: function (data) {
        for ( var i = 0; i <this.commits.length; i++){
          if (this.commits[i].cid===data.cid) {
            this.commits[i].text=data.text
          }
        }
        console.log(this.commits)
      },
      OnInput: function (event) {
        if (this.commits.length < sqCount) {
          this.commits.push({
            "cid": sqCount,
            "text": event.target.value,
          })
          console.log("push")
          console.log(this.commits)
        } else {
          this.commits[sqCount - 1].text = event.target.value
          console.log("change")
          console.log(this.commits)
        }
      },
      finish: function () {
        var retStr="<?xml version=\"1.0\"?>\n" +
          "-<root company=\"\" pagetype=\"\" zoom=\"1\">\n"
        for (var i =0 ;i <this.commits.length;i++){
            retStr+="<rect type=\"\" text=\""+this.commits[i].text+"\" w=\""+this.positions[i].width*widthZoom+"\" h=\""+this.positions[i].height*heightZoom+"\" y=\""+this.positions[i].top*heightZoom+"\" x=\""+this.positions[i].left*widthZoom+"\"/>\n"
        }
        retStr+="</root>"
        console.log(retStr)
        console.log(widthZoom,heightZoom)
      }
    },
    mounted:function () {
      InitCanvas()
    },
    created:function () {
      myVue=this
      InitListener()
    }
  }



</script>

<style scoped>
  #canvas-1 {
    position: absolute;
    left: 200px;
    top: 300px;
    margin: 20px;
    background: #ffffff;
    border: thin solid #aaaaaa;
  }

  #canvas-2 {
    position: absolute;
    left: 200px;
    top: 300px;
    margin: 20px;
    border: thin solid #aaaaaa;
  }

  #canvas-3 {
    position: absolute;
    left: 200px;
    top: 300px;
    margin: 20px;
    border: thin solid #aaaaaa;
  }

  #commit {
    position: absolute;
    left: 1010px;
    top: 300px;
    margin: 20px;
  }
  /*#button-load{*/
    /*position: absolute;*/
    /*left: 1010px;*/
    /*top: 200px;*/
    /*margin: 20px;*/
  /*}*/
  canvas::selection { background: rgba(0,0,0,0); color: rgba(0,0,0,0); }
  textarea{
    border:0;
    height: auto;
    resize: none;
    overflow: hidden;
    color: #666464;
  }
</style>
