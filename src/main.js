import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);



Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  axios,
  store,
}).$mount('#app')
