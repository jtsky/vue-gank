/**
 * Created by wlw-97 on 2016/11/15.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About'
import Home from '../components/Home'
import User from '../components/User'
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/users', component: User}
  ]
});
