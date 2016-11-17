import Vue from 'vue';
import App from './App';
import 'muse-css/muse-ui.css';
import 'muse-css/theme-teal.css';
import http from 'vue-resource';
import infiniteScroll from 'vue-infinite-scroll';
import store from './store';
//import router from './router';
/* eslint-disable no-new */
//引入vue-resource 网络请求
Vue.use(http);
Vue.use(infiniteScroll);
new Vue({
  el: '#app',
  store,
  //router,
  template: '<App/>',
  components: {App},
})
