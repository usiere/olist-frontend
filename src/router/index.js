import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Order from "../views/Order.vue";
import Edit from "../views/Edit.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 
  {
    path: "/login",
    name: "Login",
    component: Login
  },

  {
    path: "/order",
    name: "Order",
    component: Order
  },

  {
    path: "/edit",
    name: "Edit",
    component: Edit
  }





];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
