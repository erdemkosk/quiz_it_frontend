import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueCookie from 'vue-cookie';
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import Vuelidate from 'vuelidate';


import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueCookie);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Donut);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
