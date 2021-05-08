<template>
    <div>
         <h3>Filters TEST</h3>
            <p>Title in uppercase: {{ title | uppercase }}</p>
            <p>Regular Title : {{ title }}</p>
            <p>Message: {{ message }}</p>
    </div>
</template>
<script>
export default {
    name: 'Filters',
    props: {},
    data: () => {
        return {
             title: 'The First Noel',
             message: 'The LORD has come!'
        }
    },
    methods: {

    },
    computed: {
        // may put filters here but still local only. Use here for better performance.
    },
    filters: {
        //local only
    }
}
</script>
