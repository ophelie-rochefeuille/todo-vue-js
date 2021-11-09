<template>
  <div class="TodoApp">
    <p>To do List </p>
    <button class="buttonOpen" @click="toogleChange()">+</button>
    <div class="form-design" v-if="toogle == true">
       <VForm :tasks="tasks"></VForm>
    </div>
     
    <VTask v-for="task in tasks" :key="task.id" :task="task" @delete="onDelete"></VTask>
  
    
  </div>
</template>

<script>
import VTask from './components/VTask.vue';
import VForm from './components/VForm.vue';
export default {
  components: {
    VTask,
    VForm
  },
  data(){
    return {
      tasks: [],
      toogle: false
  }
  },
  mounted(){

  },
  methods:{
     onDelete(index){
    console.log('delete')
    const id = this.tasks.findIndex((task) => task.id === index)
    this.tasks.splice(id, 1)
  },
  toogleChange(){
    this.toogle = !this.toogle
  }
  }
}
</script>

<style scoped>
  .TodoApp {
   background-color: white;
   display: flex;
   flex-direction: column;
   justify-content: center;
    align-items: center;
  }

  .buttonOpen{
    width: 50px;
    height: 50px;
    color: white;
    background-color: #F5B9B9;
    font-size: 40px;
    border:none;
    border-radius: 25px;
  }

  .form-design{
    width: 40%;
  }
</style>