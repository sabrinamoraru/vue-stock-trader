import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from "./App.vue";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://stock-trader-vuejs-sabrina.firebaseio.com/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  node: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
