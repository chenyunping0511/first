import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/Main'
import customPicture from '../components/pages/CustomPicture'
import ComfirmRegistration from '../components/haka/ConfirmRegistration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component:  main
    },
    {
      path: '/ComfirmRegistration',
      component: ComfirmRegistration
    }
    // {
    //   path: '/customPicture',
    //   name: 'customPicture',
    //   component: customPicture
    // },
  ],
  mode: 'history'
})
