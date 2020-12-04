import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import UserList from './components/UserList.vue';
import Home from './components/Home.vue';
import User from './components/User.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/:id',
      component: User
    },
  ]
});



new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')



import './custom.css'