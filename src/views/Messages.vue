<template>
    <div class="mt-4">
        <h3>{{ title }}</h3>
        <!-- <p>{{ message }}</p> -->
        <div class="user" v-for="(user, index) in users" :key="index">
            <p>Name: <strong>{{ user.username }}</strong></p>
            <p>Age: {{ user.age }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Messages',
    components: { 
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
                 {username: 'Roberto', age: 35},
                 {username: 'Lizzo', age: 41},
                 {username: 'Taco', age: 1}

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