<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import {createNamespacedHelpers} from 'vuex'
import TodoHeader from "./components/Todo/TodoHeader";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import TodoFooter from "./components/Todo/TodoFooter";

const todoHelper = createNamespacedHelpers('todo')
export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  },
  methods: {
    ...todoHelper.mapActions(['getTodo'])
  },
  created() {
    this.getTodo()
  }
}
</script>

<style>
body {
  padding: 10px;
  text-align: center;
  background-color: cornflowerblue;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
