<template>
    <div>
    <h3>Benders</h3>
    <b-alert
        :show="dismissCountDown"
        dismissible
        variant="info"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
    <h5>New Bender {{ }} addition Successful!</h5>
    <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
    <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
    ></b-progress>
    </b-alert>
    <b-card>
        <b-form-input v-model="newBender" :class="[newBender.length < 2 ? 'red' : 'green']" @keyup.enter="addBender" placeholder="Enter name to add new Bender" ></b-form-input>
        <br>
        <div class="mt-2">Results: {{ newBender }}</div>
            <b-button class="mt-3 mb-3" v-if="newBender.length<2" disabled >Disabled</b-button>
            <b-button class="mt-3 mb-3" v-else variant="success" @click="addBender" >Submit</b-button>
        <p class="bender mt-2" v-for="(bender, index) in benders" :key="index">{{ bender.name | capitalize | benderfy }}</p>
    </b-card>
    </div>
</template>
<script>
export default {
    name: 'Bender',
    components: { 
    },
    props: {
    },
    data: () => {
        return {
            text: '',
            dismissSecs: 3,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            benders: [
                {name: 'joe'},
                {name: 'jim'},
                {name: 'james'},
                {name: 'jack'},
                {name: 'john'},
            ],
            newBender: '',
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        },
        showAlert() {
        this.dismissCountDown = this.dismissSecs
        },
        addBender() {
            console.log(this.newBender);
             this.benders.push({name: this.newBender});
             this.showAlert()
             this.newBender='';
        }

    },
    filters: {
        capitalize(value) {
            return value.toUpperCase();
        },
        benderfy(value) {
            return value+'derfy';
        }
    }

    
}
</script>
<style scoped>
.green {
    border: 3px solid green;
}
.red {
    border: 2px solid red;
}
.bender {
    border: 1px solid #ccc;
    background-color: lightblue;
    padding: 10px;
}

</style>