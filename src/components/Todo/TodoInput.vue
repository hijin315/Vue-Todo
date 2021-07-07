<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="여기에 입력하숑" v-on:keyup.enter="add_todo">
    <span class="addContainer" v-on:click="add_todo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal=false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">
        할 일을 입력하세요
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

const todoHelper = createNamespacedHelpers('todo')
import Modal from '../common/Modal.vue'

export default {
  components: {
    Modal: Modal
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    ...todoHelper.mapActions(['addTodo']),
    add_todo() {
      if (this.newTodoItem !== "") {
        const value = this.newTodoItem && this.newTodoItem.trim();
        this.clearInput();
        this.addTodo(value);
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  }
}
</script>
<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  font-family: 'Gamja Flower', cursive;
  border-style: none;
  height: 45px;
  font-size: 1.2rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #62acde, lightblue);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
