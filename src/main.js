// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 导入reset.js  和  rem.js
import "./assets/css/reset.css"
import "./assets/js/rem.js"

// 引进Vant
import Vant from "vant"
import  "vant/lib/index.css";
Vue.use(Vant);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
