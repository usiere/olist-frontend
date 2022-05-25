import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faHome, faFile, faDatabase, faAddressBook, faQuestion, faPowerOff, faPencilAlt, faGift, faPlus, faSmile, faUser, faArrowRight, faQuestionCircle, faMoneyBill, faUsers, faPiggyBank, faBars, faBuilding, faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Paginate from 'vuejs-paginate'


// register globally
Vue.component('multiselect', Multiselect)
Vue.component('paginate', Paginate)
// Vue.component('paginate', VuejsPaginate)



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(faPhone, faHome, faFile, faDatabase, faAddressBook, faQuestion, faPowerOff, faPencilAlt, faGift, faPlus, faSmile, faUser, faArrowRight, faQuestionCircle, faMoneyBill, faUsers, faHome, faPiggyBank, faBars, faBuilding, faEye)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
