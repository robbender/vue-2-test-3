<template>
    <div>
        <hr>
        <h3>Input</h3>
        <b-card 
            body-bg-variant="dark">
             <b-form-input v-model="text" placeholder="Enter your text"></b-form-input>
        <div class="mt-2 text-light">Value: {{ text }}</div>
        </b-card>
    </div>   
</template>
<script>
export default {
    name: 'Input',
    components: {

    },
    data: () => {
        return {
            text: ''
        }
    }
}
</script>
<style scoped>

</style>
 