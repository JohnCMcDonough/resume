// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue';
import jmcdHeader from './components/jmcd-Header.vue';
import jmcdFooter from './components/jmcd-Footer.vue';
import router from './router'

require("../node_modules/font-awesome/css/font-awesome.min.css")
require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
require("../node_modules/roboto-fontface/css/roboto/roboto-fontface.css")

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, jmcdHeader, jmcdFooter }
})
