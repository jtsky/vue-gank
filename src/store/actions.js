/**
 * Created by wlw-97 on 2016/11/15.
 */
import * as types from './types';


export const showModal = ({commit}, payload) => {
  commit(types.SHOW_MODAL, payload);
}
