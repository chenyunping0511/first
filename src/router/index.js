import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/Main'
import customPicture from '../components/pages/CustomPicture'
<<<<<<< HEAD
import ComfirmRegistration from '../components/haka/ConfirmRegistration'
=======
>>>>>>> 25b3fdb202512b148d8c95b8eeabfa058ccf8609

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component:  main
<<<<<<< HEAD
    },
    {
      path: '/ComfirmRegistration',
      component: ComfirmRegistration
=======
>>>>>>> 25b3fdb202512b148d8c95b8eeabfa058ccf8609
    }
    // {
    //   path: '/customPicture',
    //   name: 'customPicture',
    //   component: customPicture
    // },
<<<<<<< HEAD
  ],
  mode: 'history'
=======
  ]
>>>>>>> 25b3fdb202512b148d8c95b8eeabfa058ccf8609
})
