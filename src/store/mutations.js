import {set} from 'vue'
import * as types from './types'

export default {
  [types.SHOW_MODAL] (state, {message}) {
    showModal(state, message);
  },


}

function showModal(state, message) {
  set(state.modal, 'status', message.status);
  set(state.modal, 'modalUrl', message.modalUrl);
}


