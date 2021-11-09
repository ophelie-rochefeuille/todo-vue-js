<template>
  <div class="task" :class="{'task--completed': completed}" @click="onClick(); show()">
    <button class="done" @click="doneButton()">{{done}}</button>
    <div>
      <h3 class="item task__title">{{ task.title }} {{task.id}}</h3>
    <p class="item task__place-time">{{ task.lieu }}</p>
    <p v-if="ok" class="item task__description">{{ task.description }}</p>
    <p class="item task__date">{{task.date}}</p>
    </div>
    
    <button class="delete" @click.stop="onDelete()">X</button>
  </div>
</template>

<script>
export default {
  props: ['task', 'tasks'],
  data(){
    return {
      completed: false,
      ok: false, 
      done: ""
    }
  },
methods:{
  onClick(){
    this.completed = !this.completed
  },
  onDelete(){
    console.log('delete')
    this.$emit('delete', this.task.id)
  },
  show(){
    this.ok = !this.ok
  },
  doneButton(){
     if (this.done == ""){this.done = "✓"}else (this.done = " ")
  }
}
}
</script>

<style>


.task{
  display: flex;
  align-items: center;
  box-shadow: 8px 8px 8px 8px rgba(53, 108, 255, 0.05);
  margin: 10px;
  padding: 5px 20px;
  border-radius:10px;
  width: 50%;
  justify-content: space-between;
}

.item{
  margin: 10px;
}

.delete{
  width: 25px;
  height: 25px;
  background-color: #F84444;
  color: white;
  border-radius:5px;
  border: none;
}

.done{
  width: 25px;
  height: 25px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
}

</style>


