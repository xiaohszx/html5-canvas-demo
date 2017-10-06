import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
