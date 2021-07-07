<template>
  <header>
    <h1><i class="user_name">{{ this.$route.query.id }}님<br></i>
      <i>Todo List</i>
    </h1>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  font-family: 'Gamja Flower', cursive;
  color: white;
  font-size: 40px;
  font-weight: 1000;
  margin: 2.5rem 0 1.5rem;
}
.user_name{
  font-size: 26px;
  color: bisque;
}
</style>
