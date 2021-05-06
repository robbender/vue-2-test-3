<template>
    <div>
     <h3>Conditions TEST</h3>
     <b-button 
        v-on:click="changeName" 
        v-bind:class="{'hidecolor': !show, 'showcolor' : show}"
        ref="btnToggle">Show</b-button>
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
      }
  },
  methods: {
      changeName() {
          this.show = !this.show;
          this.$refs.btnToggle.innerText = this.show?'Hide':'Show';
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
