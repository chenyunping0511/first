import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/Main'
import learn from '@/components/Learn'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import busLabel from '@/components/BusLabel'
import hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'test',
    //   component: About
    // },
    // {
    //   path: '/',
    //   name: 'busLabel',
    //   component: busLabel
    // },
    // {
    //   path: '/',
    //   name: 'busLabel',
    //   component: hello
    // }
    // {
    //   path: '/',
    //   name: 'main',
    //   component: main
    // }
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
})
