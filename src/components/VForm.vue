<template>
<div>
    <form @submit.prevent="onSubmit" class="form">
        <input type="text" class="item-form create__task" placeholder="nom de la tâche" v-model="form.title">
        <input type="text" class="item-form create--task" placeholder="Lieu" v-model="form.lieu">
        <input type="text" class="item-form" placeholder=" Description" v-model="form.description">
        <input type="time" class="item-form" v-model="form.date">
        <button class="item-form" >Ajouter</button>
    </form>
    </div>
</template>

<script>

console.log("2")
export default {
    props: ['tasks'],
    data(){
        return {
            id: 0,
            form: {
                title: null, 
                lieu: null,
                description: null,
                date: null
            }
        }
    },
    mounted(){
        console.log(this.task)
    },
    methods: {
        onSubmit(){
            console.log(this.form)
            const taskList = {
                ...this.form,
                id: this.id 
            }
            this.tasks.push(taskList)
            this.id ++
            console.log(tasks)
            console.log('oui')
        }
    }
}
</script>

<style>
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F5DCDC;
    margin:20px;
    border-radius:10px;
}

.item-form{
    margin: 20px;
    border: none;
    padding: 5px 10px;
}
</style>