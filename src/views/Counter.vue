<template>
    <div>
        <h3>Counter TEST</h3>
            <!-- <b-alert show v-model="showClearedAlert" variant="info" dismissible>
                Counter C L E A R E D !
            </b-alert> -->
            <b-alert
                :show="dismissCountDown"
                dismissible
                variant="info"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
            >Counter C L E A R E D !
            </b-alert>

            <!-- <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
               Counter C L E A R E D !.
            </b-toast> -->
            <b-button variant="outline-primary" v-on:click="increment">Increment</b-button>
            <!-- Using alert -->
            <b-button variant="outline-secondary" v-on:click="reset(); showClearedAlert()">Reset</b-button>
            <!-- Using Toast -->
            <!-- <b-button variant="outline-secondary" v-on:click="reset(); $bvToast.show">Reset</b-button> -->
            <br>
            <br>
            <!-- <p>Counter: {{ counter }}</p> -->
            <p>Counter: {{ counterIncrement }}</p>
            <p>Clicks: {{ clicks }}</p>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

 export default {
  name: 'Counter',
  props: {
  },

data: () => {
    return {
        counter: 0,
        clicks: 0,
        dismissSecs: 2,
        dismissCountDown: 0,
        }
    },
    methods: {
        increment() {
            this.clicks++;
            // this.counter = this.counter + 2;
            // this.counter = this.clicks * 2;
        },
        reset(){
            this.counter=0;
            this.clicks=0;
        },
        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        },
        showClearedAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    },
    computed: {
        counterIncrement() {
            return this.clicks * 2;
        }
    }
 }
</script>
<style scoped>

</style>
