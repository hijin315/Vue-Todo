<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">모두 지우기</span>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const todoHelper = createNamespacedHelpers('todo')

export default {
    methods: {
    ...todoHelper.mapActions(['clearAll']),
    clearTodo() {
      this.clearAll()
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  font-family: 'Gamja Flower', cursive;
  font-size: 1.2rem;
  color: salmon;
  display: block;
}
</style>
