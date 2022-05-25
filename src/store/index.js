import Vue from "vue";
import Vuex from "vuex";
import Order from "./modules/order";
import Auth from "./modules/auth";
// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  modules: {
    Order,
    Auth
  },
});
