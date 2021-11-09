import Vue from 'vue'
import TodoApp from './TodoApp.vue'

new Vue({
  render: h => h(TodoApp),
}).$mount('#todo')

