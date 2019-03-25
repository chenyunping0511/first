<template>
  <div class="canvas-wrapper">
      <Input prefix="ios-contact" v-model="wid" placeholder="请输入工号" style="width: auto" id="input-1" />
      <Input prefix="ios-contacts" v-model="group" placeholder="请输入组名" style="width: auto" id="input-2"/>
      <Input prefix="ios-color-palette" v-model="dir" placeholder="请输入项目名" style="width: auto" id="input-3"/>
      <br/>
      <!--<button v-on:click="change_pic">换一张</button>-->
    <button id="button-refresh" v-on:click="refresh">刷新</button>
      <button id="button-load" v-on:click="finish">完成</button>
      <canvas width="800" height="800" id="canvas-1" >
        <span>亲，您的浏览器不支持canvas，换个浏览器试试吧！</span>
      </canvas>
      <canvas width="800" height="800" id="canvas-2" >
      </canvas>
      <canvas width="800" height="800" id="canvas-3" >
      </canvas>
      <haka-commit-cards @changeCommitInPicture="changeCommitFinal" id="commit" :commits="commits"></haka-commit-cards>
      <textarea v-model="textC" id="commit-input" v-on:input="OnInput" />
  </div>

</template>

<script>
  import CONST from '../const'
  import HakaDropdown from './hakaDropdown'
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
  var imgSrc
  var widthZoom
  var heightZoom
  var hasOnload=false
  // var img = new Image();
  // var imgSrc = require('C:/17.1-03.jpg')
  // var imgSrc = require('/home/smart/17.1-03.jpg')
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
  var sleep =function (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  var InitCanvas = function () {
    console.log("init start")
    commitInput=document.getElementById("commit-input");//获取控件
    canvasBackOri= document.getElementById('canvas-1');
    canvasFrontOri= document.getElementById('canvas-2');
    canvasPreviewOri= document.getElementById('canvas-3');
    canvasFront = new WrappedCanvas(canvasFrontOri)
    canvasBack = new WrappedCanvas(canvasBackOri)
    canvasPreview = new WrappedCanvas(canvasPreviewOri,true)
    canvasFront.ctx.strokeStyle="red";
    console.log("init new over")
    // var img = new Image();
    // // img.src='http://i1.bvimg.com/667520/ffc49fc95b68fb3e.jpg'
    // // img.src='/home/smart/17.1-03.jpg'
    // console.log("have src")
    // img.src=imgSrc
    // img.src="http://localhost/resource/test_dir/file/first_dir/3.jpg"
    // img.onload = function(){
    //   hasOnload=true
    //       console.log("draw_src:"+img.src)
    //   canvasBack.drawImage(img,0,0,800,800)
    // };
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
  var InitImg = function (src) {
    var img = new Image();
    // img.addEventListener('load', function() {
    //   hasOnload=true
    //   console.log("draw_src:"+img.src)
    //   if ( "undefined" != typeof  canvasBack ) {
    //     canvasBack.drawImage(img,0,0,800,800)
    //   }else {
    //     console.log("canvas undefined:" + img.src)
    //   }
    // }, false);
    //   console.log("set onload")
    //   img.onload = function(){
    //     hasOnload=true
    //     console.log("draw_src:"+img.src)
    //     if ( "undefined" != typeof  canvasBack ) {
    //       canvasBack.drawImage(img,0,0,800,800)
    //     }else {
    //       console.log("canvas undefined:"+img.src)
    //     }
    //   };
    async function f () {
      while (true){
        if (img.complete){
          console.log("complete draw_src:"+img.src)
          if ( "undefined" != typeof  canvasBack ) {
            canvasBack.drawImage(img,0,0,800,800)
          }else {
            console.log("canvas undefined:"+img.src)
          }
          break
        }else{
          await sleep(50)
          console.log("sleep")
        }
      }
    }
    img.src=src
    f()
      // if (img.complete){
      //   console.log("complete draw_src:"+img.src)
      //   if ( "undefined" != typeof  canvasBack ) {
      //     canvasBack.drawImage(img,0,0,800,800)
      //   }else {
      //     console.log("canvas undefined:"+img.src)
      //   }
      // }
    // img.src='http://i1.bvimg.com/667520/ffc49fc95b68fb3e.jpg'
    // img.src='/home/smart/17.1-03.jpg'
    // img.src="http://localhost/resource/test_dir/file/first_dir/3.jpg"
  }
  export default {
    name: 'hakaPicture',
    components: {HakaDropdown, HakaCommitCards },
    data () {
      return {
        commits:[
        ],
        positions:[],
        zooms:[],
        needInput:true,
        textC:"",
        wid:"",
        group:"",
        dir:"",
        admin:false,
        dropname1:"现有小组",
        dropname2:"现有任务",
        dropname3:"小组成员",
        group_name:"",
        people_name:"",
        groups:[],
        peoples:[],
        missions:[],
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
        if (myVue.dir==""){
          alert("未填写项目名")
          return
        }
        if (myVue.wid==""){
          alert("未填写工号")
          return
        }
        if (myVue.group==""){
          alert("未填写组名")
          return
        }
        var retStr="<?xml version=\"1.0\"?>\n" +
          "-<root company=\"\" pagetype=\"\" zoom=\"1\">\n"
        for (var i =0 ;i <this.commits.length;i++){
            retStr+="<rect type=\"\" text=\""+this.commits[i].text+"\" w=\""+this.positions[i].width*widthZoom+"\" h=\""+this.positions[i].height*heightZoom+"\" y=\""+this.positions[i].top*heightZoom+"\" x=\""+this.positions[i].left*widthZoom+"\"/>\n"
        }
        retStr+="</root>"
        console.log(retStr)
        this.$http.post(CONST.PREFIX+'push_answer',{
          answer:retStr,
          dir:myVue.dir,
          wid:myVue.wid,
          group:myVue.group,
        },{emulateJSON:true,credentials: true}).then(response => {
        }, response => {
          // alert("上报失败")
          alert(response.data)
        }) ;
      },
      get_message:function(){
        this.$http.post(CONST.PREFIX+'get_message',{
          answer:retStr,
          dir:myVue.dir,
          wid:myVue.wid,
          group:myVue.group,
        },{emulateJSON:true,credentials: true}).then(response => {
        }, response => {
          // alert("上报失败")
          alert(response.data)
        }) ;
      },
      get_image:function() {
        this.$http.post(CONST.PREFIX+'get_image',{
          group:"test_group",
          dir:"first_dir",
          wid:"001",
        },{emulateJSON:true,credentials: true}).then(response => {
          console.log(response.data);
          widthZoom=response.data["WidthZoom"]
          heightZoom=response.data["HeightZoom"]
          console.log(widthZoom)
          console.log(heightZoom)
          // imgSrc="http://114.116.23.135:8090/image/first_dir/"+response.data["name"]
          InitImg(response.data["Name"])
        }, response => {
          // console.log("error");
          // alert("该类型下没有任务")
          alert(response.data)
        }) ;
    },
      refresh:function() {
        this.get_image()
      },
    },
    mounted:function () {
        // GET /someUrl
      InitCanvas()
      this.get_image()
    },
    created:function () {
      myVue=this
      InitListener()
    }
  }



</script>

<style scoped>
  #input-1 {
    position: absolute;
    left: 200px;
    top: 200px;
    margin: 20px;
  }
  #input-2 {
    position: absolute;
    left: 400px;
    top: 200px;
    margin: 20px;
  }
  #input-3 {
    position: absolute;
    left: 600px;
    top: 200px;
    margin: 20px;
  }

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
  #button-load{
    position: absolute;
    left: 1010px;
    top: 200px;
    margin: 20px;
  }
  #button-refresh{
    position: absolute;
    left: 970px;
    top: 200px;
    margin: 20px;
  }
  canvas::selection { background: rgba(0,0,0,0); color: rgba(0,0,0,0); }
  textarea{
    border:0;
    height: auto;
    resize: none;
    overflow: hidden;
    color: #666464;
  }
</style>
