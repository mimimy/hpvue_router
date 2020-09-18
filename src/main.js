import Vue from 'vue'
import App from './App.vue'
// import router from './router'
 import router from './hprouter'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
