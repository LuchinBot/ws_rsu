import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import axios from 'axios'

// Importa tus archivos CSS
import "@/assets/css/tailwind.css";
import "@/assets/css/default.css";
import "@/assets/css/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

window.baseUrl = process.env.VUE_APP_ROOT_API;
window.tokenAPI = process.env.VUE_APP_TOKEN_API;
window.baseCli = process.env.VUE_APP_ROOT_CLI;
console.log(window.baseUrl + 'hola');  // Verifica que esta URL sea correcta

const instance = axios.create({
  baseURL: window.baseUrl,
  headers: {
    Authorization: "Bearer " + window.tokenAPI,
  },
});

Vue.config.productionTip = false;
Vue.prototype.$http = instance;
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
