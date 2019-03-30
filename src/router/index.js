import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/Main'
import customPicture from '../components/pages/CustomPicture'
import ComfirmRegistration from '../components/haka/ConfirmRegistration'
import Website from '../components/haka/Website'

Vue.use(Router)

export default new Router({
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
    }
    // {
    //   path: '/customPicture',
    //   name: 'customPicture',
    //   component: customPicture
    // },
  ],
  mode: 'history'
})
