// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueRouter)

// const router =new VueRouter({
//   routes:[
//     {path:"/",component:Home},
//     {path:"/helloworld",component:HelloWorld},
//   ],

// })

/* eslint-disable no-new */
new Vue({
  // router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
