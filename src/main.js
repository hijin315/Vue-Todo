import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./components/router";

// store.js를 불러오는 코드
import { store } from "./store";
Vue.prototype.$axios = axios

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
