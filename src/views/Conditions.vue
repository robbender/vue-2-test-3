<template>
    <div>
     <h3>Conditions TEST</h3>
        <b-alert
        :show="dismissCountDown"
        dismissible
        variant="info"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        >Counter C L E A R E D !</b-alert>

             <!-- This will switch buttons but not using bootstrap vue variants -->
     <!-- <b-button 
        v-on:click="changeName" 
        v-bind:class="{'hidecolor': !show, 'showcolor' : show}"
        ref="btnToggle">Show</b-button> -->
        <b-button
            variant="primary"
            v-on:click="changeName" 
            v-if="!show"
            ref="btnToggle">Show</b-button>
        <b-button
            variant="outline-primary"
            v-on:click="changeName(); showClearedAlert()" 
            v-if="show"
            ref="btnToggle">Hide</b-button>
        </b-button>
     <div v-show="show">
         <br>
            <h4>This was hidden before. Click 'Hide' to remove.</h4>
        </div>
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'Conditions',
  props: {
  },
  data: () => {
      return {
        show: false,
        dismissSecs: 2,
        dismissCountDown: 0,
      }
  },
  methods: {
    changeName() {
        this.show = !this.show;
        this.$refs.btnToggle.innerText = this.show?'Hide':'Show';
    },
    countDownChanged(dismissCountDown) {
    this.dismissCountDown = dismissCountDown
    },
    showClearedAlert() {
        this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
<style scoped>
    .hidecolor {
       background-color: #338333;
   }
   .showcolor{
       background-color: #3875e3;
   }


</style>
