const state = {
  order: {},
};

const getters = {
  getOrder: (state) => state.order,
};

const actions = {
  async setOrder({ commit }, order) {
    commit("setOrder", order);
  },
};

const mutations = {
  setOrder: (state, order) => (state.order = order),
  //check this
};

export default {
  state,
  getters,
  actions,
  mutations,
};

export const namespaced = true;
