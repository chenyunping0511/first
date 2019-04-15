<template>
  <div>
    <div class="top">
      <!-- <div id="nav">
		<router-link to="../Main"><span class="welcome">欢迎来到拇指跳动标注官网！</span></router-link>
      </div>-->
      <div class="backgrond_img" :class="navBarFixed == true ? 'navBarWrap' :''">
          <img src="../../assets/logo.png" class="logo_word">
           <router-link to="/">
            <span class="login-regin">首页</span>
          </router-link>
          <a href="#dataservice">
            <span class="login-regin">数据标注</span>
          </a>
          <a href="#dataget">
            <span class="login-regin">数据采集</span>
          </a>
          <a href="#service-title">
            <span class="login-regin">服务优势</span>
          </a>
          <a href="#solve">

            <span class="login-regin">人工智能一站式解决方案</span>
          </a>
          <router-link to="./../Main">
            <span class="login-regin">标注平台</span>
          </router-link>
           <router-link to="./Service">
            <span class="login-regin">联系我们</span>
          </router-link>
      </div>
    </div>
    <!--top结束-->

    <!-----------------------------------------------轮播图------------------------------------------------------->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> <img src="../../assets/swiper.jpg" height="800px"></div>
        <div class="swiper-slide"> <img src="../../assets/swiper2.jpg" height="800px"></div>
      </div>
    </div>
    <!--flash-->
    
    <!-----------------------------------------------数据标注服务------------------------------------------------------->
    <div id="dataservice" class="Professional-setting">
      <div class="sp_title">
        <p>
          <span class="zhuanye">
            <a href="#">数据标注服务</a>
          </span>
        </p>
      </div>

      <div class="sp_more">
        <span class="zhuanye">
          <a href="#">一站式解决图片、视频、文本、语音标注及处理要求</a>
        </span>
      </div>

      <div class="shetuan-list">
        <div class="shetun-box">
          <div class="shetuan-pic">
            <a href="#">
              <img src="../../../src/assets/word.jpg">
            </a>
          </div>
          <div class="shetuan-text">
            <div class="shetun-title">
              <a href="#">文本标注</a>
            </div>
            <div class="shetun-info">
              快速归类文本（如海量的评价内容归类为正面或反面，让信息变有效。
            </div>
          </div>
        </div>
        <!--shetun-box-->

        <div class="shetun-box">
          <div class="shetuan-pic">
            <a href="#">
              <img src="../../../src/assets/picture.jpg">
            </a>
          </div>
          <div class="shetuan-text">
            <div class="shetun-title">
              <a href="#">图片标注</a>
            </div>
            <div class="shetun-info">对图片（如，身份证，人物，车辆，场景）进行清洗，分类，标注。转写，满足客户的各种需求。</div>
          </div>
        </div>
        <!--shetun-box-->

        <div class="shetun-box">
          <div class="shetuan-pic">
            <a href="#">
              <img src="../../../src/assets/languer.jpg">
            </a>
          </div>
          <div class="shetuan-text">
            <div class="shetun-title">
              <a href="#">语音标注</a>
            </div>
            <div class="shetun-info">除了常规的语音标注服务外，基于科研客户模型训练和测试等算法提升的需求，我们提供私有化的服务类型。</div>
          </div>
        </div>
        <!--shetun-box-->

      </div>
      <!--shetuan-list-->
    </div>

    
    <!-----------------------------------------------数据采集服务------------------------------------------------------->
    <!--Professional-setting-->
    <div id="dataget" class="dataService Professional-setting">
      <div class="sp_title">
        <p>
          <span class="zhuanye dataserviceTitle">
            <a href="#">数据采集服务</a>
          </span>
        </p>
      </div>

      <div class="sp_more">
        <span class="zhuanye">
          <a href="#">覆盖国内外的采集团队，为您提供私有化的采集服务</a>
        </span>
      </div>

      <div class="shetuan-list">
        <div class="shetun-box">
          <div class="shetuan-pic">
            <a href="#">
              <img src="../../../src/assets/equipment.jpg">
            </a>
          </div>
          <div class="">
            <div class="shetun-title">
              <a href="#">专业的采集设备</a>
            </div>
          </div>
        </div>
        <!--shetun-box-->

        <div class="shetun-box">
          <div class="shetuan-pic">
            <a href="#">
              <img src="../../../src/assets/team.jpg">
            </a>
          </div>
          <div class="shetuan-text">
            <div class="shetun-title">
              <a href="#">敏捷的采集团队</a>
            </div>
          </div>
        </div>
        <!--shetun-box-->

        <div class="shetun-box">
          <div class="shetuan-pic">
            <a href="#">
              <img src="../../../src/assets/area.jpg">
            </a>
          </div>
          <div class="shetuan-text">
            <div class="shetun-title">
              <a href="#">覆盖地域广</a>
            </div>
          </div>
        </div>
        <!--shetun-box-->

      </div>
      <!--shetuan-list-->
    </div>
    <!--Professional-setting-->
    <!-----------------------------------------------服务优势------------------------------------------------------->
      
 <div id="service-title" class="int_news Professional-setting">
      <div class="sp_title">
        <p>
          <span class="zhuanye xinwen">
            <a href="#">服务优势</a>
          </span>
        </p>
      </div>

      <div class="sp_more">
        <span class="xinwen">
          <a href="#">一站式服务&gt;&gt;</a>
        </span>
      </div>

      <div id="in_list">
        <div class="in-box">
          <div class="in-title">
            <p>
              <a href="#">高效快捷</a>
            </p>
          </div>
          <!--in-title-->
          <div class="in-pic">
            <a href="#" title="客户导向技术领先">
              <img src="../../../src/assets/South_IT_img/20180820091840_70662.jpg" alt>
            </a>
            <span>平台数百万日采集量，大量数据快速沉淀实现业务无延时。</span>
          </div>
          <!--in-pic-->
          <div class="in-info">
            <dl>
              <dt>
                <a href="#">智能数据结构化处理系统，数据处理速度较普通平台速度加倍，准确率更高</a>
              </dt>
            </dl>
          </div>
          <!--in-info-->
        </div>
        <!--in-box-->

        <div class="in-box">
          <div class="in-title">
            <p>
              <a href="#">低成本</a>
            </p>
          </div>
          <!--in-title-->
          <div class="in-pic">
            <a href="#" title="全球数据采集处理">
              <img src="../../../src/assets/South_IT_img/20180726094615_82704.jpg" alt>
            </a>
            <span>低成本策略，行业标准，为人工智能创业公司节省成本。</span>
          </div>
          <!--in-pic-->
          <div class="in-info">
            <dl>
              <dt>
                <a href="#">低成本策略，行业标准，为人工智能创业公司节省成本。</a>
              </dt>
            </dl>
          </div>
          <!--in-info-->
        </div>
        <!--in-box-->

        <div class="in-box">
          <div class="in-title">
            <p>
              <a href="#">项目管理严密</a>
            </p>
          </div>
          <!--in-title-->
          <div class="in-pic">
            <a href="#" title="项目管理流程严密">
              <img src="../../../src/assets/South_IT_img/20180829101712_56876.jpg" alt>
            </a>
            <span>从严把关，以严格的质量管理保证交付，结构化正确率接近100%</span>
          </div>
          <!--in-pic-->
          <div class="in-info">
            <dl>
              <dt>
                <a href="#">从严把关，以严格的质量管理保证交付，结构化正确率接近100%</a>
              </dt>
            </dl>
          </div>
          <!--in-info-->
        </div>
        <!--in-box-->

        <div class="in-box">
          <div class="in-title">
            <p>
              <a href="#">全程保障</a>
            </p>
          </div>
          <div class="in-pic">
            <a href="#" title="全程保障">
              <img
                src="../../../src/assets/South_IT_img/20180719194247_19570.jpg"
                alt
                style="img:hover{opacity: 5;}"
              >
            </a>
            <span>专业数据解决方案专家全程服务，优质方案让您的产品更专业。</span>
          </div>
          <!--in-pic-->
          <div class="in-info">
            <dl>
              <dt>
                <a href="#">专业数据解决方案专家全程服务，优质方案让您的产品更专业。</a>
              </dt>
            </dl>
          </div>
          <!--in-info-->
        </div>
        <!--in-box-->
      </div>
      <!--in_list-->
    </div>
    <!--int_news-->
<!-----------------------------------------------一站式服务------------------------------------------------------->
    <!--Professional-setting-->
    <div id="solve" class=" Professional-setting">
      <div class="sp_title">
        <p>
          <span class="zhuanye">
            <a href="#">人工智能</a>
          </span>
        </p>
      </div>

      <div class="sp_more">
        <span class="zhuanye">
          <a href="#">支持一站式解决服务商</a>
        </span>
      </div>

      <div class="shetuan-list">
          <div class="kehu idv-a">
              <span class='circle-text'>客户</span>
          </div>
           <div class="kehu idv-b">
              <span class='circle-text '>客户经理</span>
          </div>
           <div class="kehu idv-c">
              <span class='circle-text '>项目经理</span>
          </div>
           <div class="kehu idv-d">
              <span class='circle-text '>交付经理</span>
          </div>
           <div class="kehu idv-e">
              <span class='circle-text '>客户经理</span>
          </div>
          <div class="kehu idv-f">
              <span class='circle-text '>客户</span>
          </div>
      </div>
      <!--shetuan-list-->
    </div>
    <!--Professional-setting-->
    <!-----------------------------------------------底部------------------------------------------------------->
    <div id="foot-bg">
      <div class="foot">
        <div class="foot-text">
          邮箱: bd@intellectgrowth.com
          <br>座机电话: 0557-3804116
          手机号: 18155795106
          <br>CopyRight ©2019 . All Rights Reserved
          <a href="http://47.111.170.130/">皖ICP备 19005639号</a>.
          <!-- <img src="../../../src/assets/South_IT_img/pic.gif" /> -->
        </div>
        <!--foot-text-->
      </div>
      <!--foot-bg-->
    </div>
    <div class="main">
		<div class="btn-chart">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=124293933&site=qq&menu=yes"  alt="点击这里给我发消息" title="点击这里给我发消息"><img src="../../assets/qq.svg"></a>
      <span class="call">
      <a href="tel:18155795106"  alt="18155795106" title="18155795106"><Icon type="logo-whatsapp" size="45" color="#18ACFC" /></a>
      </span>
      </div>
    </div>

  </div>
</template>
<script>
import { myfun } from '../../assets/js/website';
// console.log(myfun())
import Swiper from 'swiper';
export default {
  name: "Website",
   data () {
   return {
        navBarFixed: false,
    }
  },
   mounted(){
     // 事件监听滚动条
    window.addEventListener('scroll', this.watchScroll)
     new Swiper ('.swiper-container', {
    autoplay : true,//可选选项，自动滑动
    loop: true,//可选选项，开启循环
    // 如果需要分页器
    initialSlide :0,//默认播放（值为图片下标）
    notNextTick: true,
    setWrapperSize: true,
    autoHeight:true,
      speed: 600, //切换速度
      paginationClickable: true, //点击小点可以切换
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // 如果需要滚动条
    // scrollbar: '.swiper-scrollbar',
    
  })    
  },
  methods: {
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
     },

}

};

</script>

<style scoped>
@import "../../assets/css/threeclass";
*{
            margin:0;
            padding:0;
        }
        .test{
            margin:900px auto 500px;
            width:800px;
            height:600px;
            position: relative;
            background-color: #00ac61;
        }
        .target{
            position: absolute;
            left:200px;
            width:400px;
            height:300px;
            opacity: 0;
            background-color: palevioletred;
        }
/* @media (min-width: 1366px) {
.swiper-slide{width:1300px;}
}

@media (min-width: 1440px) {
.swiper-slide{width:90px;}
}

@media (min-width: 1680px) {
.swiper-slide{width:90px;}
}
@media (min-width: 1920px) {
.swiper-slide{width:90px;}
}
@media screen and (max-width: 300px) {
    body {
        background-color:lightblue;
    }
} */
 
</style>

