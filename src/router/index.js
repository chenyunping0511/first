import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/Main'
import customPicture from '../components/pages/CustomPicture'
import login from '../components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component:  customPicture
    },
    {
      path: '/customPicture',
      name: 'customPicture',
      component: customPicture
    },
    {
      path: '/login',
      name: 'login',
      component:  login
    },
  ]
})
