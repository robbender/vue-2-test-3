<template>
    <div>
        <h3>Link TEST</h3>
            <h5>Messages from other Components</h5>
        <app-input />
        <app-messages />
    </div>
</template>
<script>
const Messages = () => import ("@/views/Messages.vue")

export default {
    name: 'Links',
    components: {
        'app-messages' : Messages
    },
}
</script>
<style scoped>

</style>
