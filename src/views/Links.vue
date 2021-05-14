<template>
    <div>
        <h1>Links Hub</h1>
            <h5>Messages from other Components</h5>
            <hr>
            <h3 class="mt-5"><i>From Input Component</i></h3>
            <!-- :note is in props on input.vue  -->
                <!-- <app-input :note="notice"  /> -->
                <app-input :note="notice"></app-input>
            <hr>
            <h3 class="mt-5"><i>From Messages Component</i></h3>
                <app-messages />
    </div>
</template>
<script>
const Messages = () => import ("@/views/Messages.vue")
const Input = () => import ("@/views/Input.vue")

export default {
    name: 'Links',
    components: {
        'app-messages' : Messages,
        'app-input' : Input,
    },
    data: () => {
        return {
            notice: 'This is an important notice!',
        }
    },
    props: {
    
    }
}
</script>
<style scoped>

</style>
