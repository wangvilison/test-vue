import Vue from "vue";
import VueRouter from "vue-router";

import App from "./app";
Vue.use(VueRouter);

import router from "./router/index.js";

import dsui from "../lib/dsui";
import "../lib/styles/dsui.css";

Vue.use(dsui);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
