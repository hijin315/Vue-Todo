<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todo, index) in todoItems" :key="todo.seq" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        <input v-if="todo.seq === showInput" type="text" v-model=newTodoItem placeholder="입력하숑"
               v-on:keyup.enter="edit_todo(todo.seq)">

        <div v-if="todo.seq !== showInput">{{ todo.todo }}</div>

        <span class="editBtn" type="button" @click="changeInput(todo.seq)">
          <i class="far fa-edit" aria-hidden="true"></i>
        </span>
        <span class="removeBtn" type="button" @click="remove_todo(todo.seq)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

const todoHelper = createNamespacedHelpers('todo')

export default {
  data() {
    return {
      newTodoItem: "",
      showInput: -1
    }
  },
  computed: {
    ...todoHelper.mapState(["todoItems"]),
  },
  methods: {
    ...todoHelper.mapActions(['editTodo', 'removeTodo']),
    remove_todo(seq) {
      this.removeTodo(seq)
    },
    changeInput(seq) {
      this.showInput = seq
    },
    edit_todo(seq) {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.editTodo({seq: seq, todo: value})
        this.showInput = -1
        this.clearInput()
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  font-family: 'Gamja Flower', cursive;
  font-size: 1.1rem;
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  padding: 0 0.9rem;
  background: white;
  margin: 15px;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 6px;
}

.removeBtn {
  margin-left: 20px;
  color: salmon;
}

.editBtn {
  color: lightsteelblue;
  margin-left: auto;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

input:focus {
  outline: none;
}

input {
  border-style: none;
  font-size: 0.9rem;
}
</style>
