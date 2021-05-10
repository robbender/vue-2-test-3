import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './filters'
import Messages from './views/Messages.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('Messages', Messages)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
