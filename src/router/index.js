import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/Main'
import customPicture from '../components/pages/CustomPicture'
import ComfirmRegistration from '../components/haka/ConfirmRegistration'
import Website from '../components/haka/Website'
import Service from '../components/haka/Service'

Vue.use(Router)

export default new Router({
  // mode: 'history',//去掉#，
  base: '/yiTownWebApp/',//这个配置也很重要，否则会出现页面空白情况
  routes: [
    {
      path: '/',
      name: 'Website',
      component:  Website
    },
    {
      path: '/ComfirmRegistration',
      component: ComfirmRegistration
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/Service',
      component: Service
    }
    // {
    //   path: '/customPicture',
    //   name: 'customPicture',
    //   component: customPicture
    // },
  ],
  // mode: 'history'
})
