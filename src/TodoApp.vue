<template>
  <div class="TodoApp">
    <p>Coucou</p>
    <VTask />
  </div>
</template>

<script>
import VTask from './components/VTask.vue'
export default {
  components: {
    VTask
  }
}
</script>

<style scoped>
  .TodoApp {
    /* background-color: red; */
  }
</style>