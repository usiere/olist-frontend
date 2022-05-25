import axios from "axios";

const state = {
  auth: false,
};

const getters = {
  getAuth: (state) => state.auth,
};

const actions = {
  async setAuth( { commit }, auth) {
   
    await axios({
      method: "post",
      url: "http://localhost:3000/seller",
      data: auth,
      // Check this, whether or not to use res.data
    })
      .then
      // this.$router.push('/')
      (  commit("setAuth"))
      .catch((err) => {
        // what now?
        console.log("this" + err);
      });

    

  
  },
};

const mutations = {
  setAuth: (state) => (state.auth = !state.auth),
  //check this
};

export default {
  state,
  getters,
  actions,
  mutations,
};

export const namespaced = true;
