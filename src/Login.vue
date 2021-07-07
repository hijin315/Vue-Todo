<template>
  <div>
    <header>
      <h1>Todo List</h1>
    </header>
    <div class="inputBox">
      <input type="text" placeholder="ID" v-model="id">
    </div>
    <div class="inputBox">
      <input type="password" placeholder="PW">
    </div>
    <span class="loginContainer" v-on:click="goTodo()">
      Login <i class="loginBtn fas fa-sign-in-alt" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      id: ''
    }
  },
  methods: {
    goTodo() {
      let id = this.id
      this.$router.push({
        path : '/todo',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>
h1 {
  color: white;
  font-weight: bold;
  font-family: 'Gamja Flower', cursive;
  font-size: 40px;
  margin: 2.5rem 0 1.5rem;
}

input:focus {
  outline: none;
}

.inputBox {
  font-family: 'Gamja Flower', cursive;
  font-weight: bold;
  margin: 30px;
  background: white;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
}

.inputBox input {
  border-style: none;
  height: 45px;
  font-size: 1.2rem;
}

.loginContainer {
  font-size: 30px;
  font-family: 'Gamja Flower', cursive;
  color: lightsteelblue;
}
</style>
