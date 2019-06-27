import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import C1 from './components/C1.vue'
import C2 from './components/C2.vue'
import C3 from './components/C3.vue'
import C4 from './components/C4.vue'
import C5 from './components/C5.vue'
import C6 from './components/C6.vue'
import C7 from './components/C7.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/c1',
      name: 'c1',
      component: C1
    },
    {
      path: '/c2',
      name: 'c2',
      component: C2
    },
    {
      path: '/c3',
      name: 'c3',
      component: C3
    },
    {
      path: '/c4',
      name: 'c4',
      component: C4
    },
    {
      path: '/c5',
      name: 'c5',
      component: C5
    },
    {
      path: '/c6',
      name: 'c6',
      component: C6
    },
    {
      path: '/c7',
      name: 'c7',
      component: C7
    }
  ]
})
