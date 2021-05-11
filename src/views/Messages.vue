<template>
    <div class="mt-4">
        <h5>{{ title }}</h5>
        <div class="user" v-for="(user, id) in users" :key="id">
            <p>Name: <strong>{{ user.username }}</strong></p>
            <p>Age: {{ user.age }}</p>
        </div>
    </div>
</template>
<script>
// const Messages = () => import ("@/views/Messages.vue")
// const Input = () => import ("@/views/Input.vue")

export default {
    name: 'Messages',
    components: {
        // 'app-input' : Input,
        // 'app-messages' : Messages
    },
    props: {

    },
    data: () => {
        return {
            title: 'Messages',
            users: [
                 {username: 'Jimbo', age: 25},
                 {username: 'Danno', age: 29},
                 {username: 'Stevo', age: 21},
                 {username: 'Roberto', age: 35}

                ]
        }
    }
    
}
</script>
<style scoped>
.user {
    border: 1px solid #ccc;
    background-color: lightblue;
    padding: 10px;
}
</style>