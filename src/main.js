// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ("babel-polyfill")
import 'babel-polyfill'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US';
import 'iview/dist/styles/iview.css'
import 'lib-flexible'
import 'lib-flexible/flexible'
import VueResource from 'vue-resource'
import 'jquery'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
// import regin from './components/haka/ReginPesorn'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.options.xhr = { withCredentials: true};
/* eslint-disable no-new */

// // 全局注册组件
// Vue.component('haka-regin', regin)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
