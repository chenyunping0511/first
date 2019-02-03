<template>
  <div class="canvas-wrapper">
    <div v-if="admin==false">
      <Button type="info" v-on:click="init_all" ghost>全面初始化</Button>
      <br/>
      <br/>

      <haka-dropdown @changeDropdown="changeDropdownName1" :dropname="dropname1" :items="groups"></haka-dropdown>
      <haka-dropdown @changeDropdown="changeDropdownName2" :dropname="dropname2" :items="missions"></haka-dropdown>
      <Button type="info" v-on:click="add_permission" ghost>授权</Button>
      <Button type="info" v-on:click="out_answer_group"  ghost>导出数据</Button>
      <br/>
      <br/>
      <haka-dropdown @changeDropdown="changeDropdownName3" :dropname="dropname3" :items="peoples"></haka-dropdown>
      <Button type="info" v-on:click="out_answer_people" ghost>导出数据</Button>
      <br/>
      <br/>
      <Input v-model="group_name" size="large" placeholder="添加小组" clearable style="width: 200px"/>
      <Button type="info" v-on:click="add_group"  ghost>添加小组</Button>
      <br/>
      <Input v-model="people_name" size="large" placeholder="为小组添加成员" clearable style="width: 200px"/>
      <Button type="info" v-on:click="add_people"  ghost>添加成员</Button>
      <br/>
      <br/>
      <Button type="info" ghost>查看项目进度</Button>
      <Button type="info" ghost>查看小组进度</Button>
      <Button type="info" ghost>查看人员进度</Button>
      <Button type="info" ghost>查看授权关系</Button>
      <Table id="table-1" height="600" width="800" :columns="columns1" :data="data2"></Table>
    </div>



    <div v-if="admin">
      <Input prefix="ios-contact" v-model="wid" placeholder="请输入工号" style="width: auto" id="input-1" />
      <Input prefix="ios-contacts" v-model="group" placeholder="请输入组名" style="width: auto" id="input-2"/>
      <Input prefix="ios-color-palette" v-model="dir" placeholder="请输入项目名" style="width: auto" id="input-3"/>
      <br/>
      <!--<button v-on:click="change_pic">换一张</button>-->
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

  </div>
</template>

<script>
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
      if (myVue.dir=="C5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUubmFtZSA9IGlkO1xuICAgIHJldHVybiBpZnJhbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgZGVidWcoJ2NyZWF0ZUZvcm0nKTtcbiAgZm9ybSA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuICBmb3JtLmVuY3R5cGUgPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgZm9ybS5hY2NlcHRDaGFyc2V0ID0gJ1VURi04JztcblxuICBhcmVhID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGFyZWEubmFtZSA9ICdkJztcbiAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcblxuICBnbG9iYWwuZG9jdW1lbnQuYm"){
        myVue.admin=true
      }
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
    console.log("have src")
    img.src=imgSrc
    img.onload = function(){
          console.log("draw_src:"+img.src)
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
    components: {HakaDropdown, HakaCommitCards },
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




        // columns1: [
        //   {
        //     title: 'Name',
        //     key: 'name'
        //   },
        //   {
        //     title: 'Age',
        //     key: 'age'
        //   },
        //   {
        //     title: 'Address',
        //     key: 'address'
        //   }
        // ],
        // data2: [
        //   {
        //     name: 'John Brown',
        //     age: 18,
        //     address: 'New York No. 1 Lake Park',
        //     date: '2016-10-03'
        //   },
        //   {
        //     name: 'Jim Green',
        //     age: 24,
        //     address: 'London No. 1 Lake Park',
        //     date: '2016-10-01'
        //   },
        //   {
        //     name: 'Joe Black',
        //     age: 30,
        //     address: 'Sydney No. 1 Lake Park',
        //     date: '2016-10-02'
        //   },
        //   {
        //     name: 'Jon Snow',
        //     age: 26,
        //     address: 'Ottawa No. 2 Lake Park',
        //     date: '2016-10-04'
        //   },
        //   {
        //     name: 'John Brown',
        //     age: 18,
        //     address: 'New York No. 1 Lake Park',
        //     date: '2016-10-03'
        //   },
        //   {
        //     name: 'Jim Green',
        //     age: 24,
        //     address: 'London No. 1 Lake Park',
        //     date: '2016-10-01'
        //   },
        //   {
        //     name: 'Joe Black',
        //     age: 30,
        //     address: 'Sydney No. 1 Lake Park',
        //     date: '2016-10-02'
        //   },
        //   {
        //     name: 'Jon Snow',
        //     age: 26,
        //     address: 'Ottawa No. 2 Lake Park',
        //     date: '2016-10-04'
        //   }
        // ],







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

        // retJson=[]
        //   for (var i =0 ;i <this.commits.length;i++){
        //     retJson.push({
        //       text:
        //     })
        //   }

        var retStr="<?xml version=\"1.0\"?>\n" +
          "-<root company=\"\" pagetype=\"\" zoom=\"1\">\n"
        for (var i =0 ;i <this.commits.length;i++){
            retStr+="<rect type=\"\" text=\""+this.commits[i].text+"\" w=\""+this.positions[i].width*widthZoom+"\" h=\""+this.positions[i].height*heightZoom+"\" y=\""+this.positions[i].top*heightZoom+"\" x=\""+this.positions[i].left*widthZoom+"\"/>\n"
        }
        retStr+="</root>"
        console.log(retStr)
        this.$http.post('http://114.116.23.135:5000/push_answer',{
          answer:retStr,
          dir:myVue.dir,
          wid:myVue.wid,
          group:myVue.group,
        },{emulateJSON:true}).then(response => {
        }, response => {
          alert("上报失败")
        }) ;
      },
      init_all: function () {
        this.$http.post('http://114.116.23.135:5000/init_dir',{
        }).then(response => {
          alert("初始化成功")
        }, response => {
          alert("上报失败")
        });
      },
      get_info: function () {
        this.$http.post('http://114.116.23.135:5000/get_info',{
        }).then(response => {
          console.log(response.body)
          console.log("获取成功")
          this.groups=response.body["groups"]
          this.missions=response.body["dirs"]
        }, response => {
          alert("上报失败")
        });
      },
      add_group: function () {
        this.$http.post('http://114.116.23.135:5000/add_group',{
          name:myVue.group_name,
        }).then(response => {
          this.groups=response.body
          console.log("添加成功")
        }, response => {
          alert("上报失败")
        });
      },
      add_people: function () {
        this.$http.post('http://114.116.23.135:5000/add_people',{
          group:myVue.dropname1,
          people:myVue.people_name,
        }).then(response => {
          this.peoples=response.body
          console.log("添加成功")
        }, response => {
          alert("上报失败")
        });
      },
      add_permission: function () {
        this.$http.post('http://114.116.23.135:5000/add_permission',{
          group:myVue.dropname1,
          dir:myVue.dropname2,
        }).then(response => {
          // this.peoples=response.body
          console.log("授权成功")
        }, response => {
          alert("上报失败")
        });
      },
      get_people: function () {
        this.$http.post('http://114.116.23.135:5000/get_people',{
          group:myVue.dropname1,
        }).then(response => {
          this.peoples=response.body
          console.log("获取成员成功")
        }, response => {
          alert("上报失败")
        });
      },
      changeDropdownName1: function (data) {
        this.dropname1=data
        this.get_people()
      },
      changeDropdownName2: function (data) {
        this.dropname2=data
      },
      changeDropdownName3: function (data) {
        this.dropname3=data
      },
      out_answer_group: function(){
        this.$http.post('http://114.116.23.135:5000/out_answer',{
          group:myVue.dropname1,
          dir:myVue.dropname2,
        }).then(response => {
          // this.peoples=response.body
          console.log("打包数据成功")
          console.log(response.body)
          window.open('http://114.116.23.135:8090/image/zip_out_answer/'+response.body)
          // http://114.116.23.135:8090/image/zip_out_answer/out1544976053.zip
        }, response => {
          alert("上报失败")
        });
      },
      out_answer_people: function(){
        this.$http.post('http://114.116.23.135:5000/out_answer',{
          people:myVue.dropname3,
          dir:myVue.dropname2,
        }).then(response => {
          // this.peoples=response.body
          console.log("获取成员成功")
          console.log(response.body)
          window.open('http://114.116.23.135:8090/image/zip_out_answer/'+response.body)
        }, response => {
          alert("上报失败")
        });
      },
      change_pic:function(){

      },
      get_message:function(){
        this.$http.post('http://114.116.23.135:5000/get_message',{
          answer:retStr,
          dir:myVue.dir,
          wid:myVue.wid,
          group:myVue.group,
        },{emulateJSON:true}).then(response => {
        }, response => {
          alert("上报失败")
        }) ;
      }
    },
    mounted:function () {
        myVue.get_info()
        // GET /someUrl
        this.$http.post('http://114.116.23.135:5000/get_image',{
          group:"test_group",
          dir:"first_dir",
          wid:"001",
        },{emulateJSON:true}).then(response => {
          console.log(response.data);
          widthZoom=response.data["widthZoom"]
          heightZoom=response.data["heightZoom"]
          console.log(widthZoom)
          console.log(heightZoom)
          imgSrc="http://114.116.23.135:8090/image/first_dir/"+response.data["name"]
          this.someData = response.body;
          InitCanvas()
        }, response => {
          console.log("error");
          alert("该类型下没有任务")
        }) ;
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
  canvas::selection { background: rgba(0,0,0,0); color: rgba(0,0,0,0); }
  textarea{
    border:0;
    height: auto;
    resize: none;
    overflow: hidden;
    color: #666464;
  }
  #table-1{
    margin:0px auto;
    width:1024px;
  }
</style>
