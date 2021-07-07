import Vue from 'vue'
import router from "vue-router";
import Todo from "../Todo";
import Login from "../Login";

Vue.use(router)

export default new router({
  routes: [
    {
      path: '/',
      name: Login,
      component: Login
    },
    {
      path: '/todo',
      name: Todo,
      component: Todo
    }
  ]
})
