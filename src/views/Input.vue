<template>
    <div class="mt-4">
        <h3>Input</h3>
        <b-card
            body-bg-variant="dark">
            <div class="mt-2 text-light"><strong>Original:</strong>{{ note }}</div>
            <!-- <b-form-input v-model="text" placeholder="Enter your text"></b-form-input> -->
            <b-form-input class="mt-3" :value="note" v-on:input="changeNote"></b-form-input>
            <!-- internal two way binding -->
            <p class="mt-3 text-light"><strong>Updated:</strong>{{ notice }}</p>
    
        </b-card>
    </div>   
</template>
<script>
export default {
    name: 'Input',
    props: [
        // from :note on Links.vue
        'note'
    ],
    components: {

    },
    data: () => {
        return {
            text: '',
            notice: 'This is an important notice!',
        }
    },
    methods: {
        changeNote(event) {
            console.log(event);
            // console.log(event.target.value)
            this.notice = event;
            // this.notice = event.target.value;
            // this.$emit();
        }
    }
}
</script>
<style scoped>

</style>
 