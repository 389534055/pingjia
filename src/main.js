// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
Vue.use(ElementUI)
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

Vue.prototype.$qs=qs;

import store from './store/store.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
