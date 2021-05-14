import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './filters'
// import Messages from './views/Messages.vue'
// import Input from './views/Input.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
// Vue.component('app-messages', Messages)
// Vue.component('app-input', Input)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
