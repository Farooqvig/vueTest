import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import BootstrapVue from "bootstrap-vue";
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')