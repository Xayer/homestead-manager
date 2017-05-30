import * as types from '../mutation-types';

const state = {
  running: false,
};

const mutations = {
  [types.TOGGLE_HOMESTEAD](state) {
    state.running = !state.running;
  },
};

export default {
  state,
  mutations,
};
