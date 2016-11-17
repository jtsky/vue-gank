/**
 * Created by wlw-97 on 2016/11/15.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
Vue.use(Vuex);

const state = {
  modal: {
    modalUrl: '',
    status: false
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
