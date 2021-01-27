<template>
<b-container>
  <div class="">
    <h2 id="title" ref="content">PDF Form Maker</h2>
  <b-row>
    <b-col>
      <b-alert 
          :show="dismissCountDown"
          dismissible
          variant="info"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          >Generating your PDF, please wait...</b-alert>
      <div id="app">
        <!-- <h5>Please fill out all fields</h5> -->
        <b-button variant='success' @click="makePdf">Download</b-button>
      </div>
      <br>
      <br>
      <div>
        <b-form-group id="fieldset-name">
						<b-form-input id="name" v-model="name" placeholder="Name"></b-form-input>
				</b-form-group>
      </div>
      <div>
        <b-form-group id="fieldset-name">
						<b-form-input id="address" v-model="address" placeholder="Address"></b-form-input>
				</b-form-group>
      </div>
      <div>
      <b-form-textarea
                id="textarea"
                v-model="description"
                placeholder="Description"
                rows="5"
                max-rows="10"
              ></b-form-textarea>
               <!-- <pre class="mt-3 mb-0">{{ influencer_description }}</pre> -->
      </div>
      <br>
      <br>
      <div class="text-left">
          <b-form-group label="Do you like pistachio ice cream?" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Yes">Yes</b-form-radio>
            <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="No">No</b-form-radio>
          </b-form-group>
          <div class="mt-3">Choice: <strong>{{ selected }}</strong></div>
        <br>
       <div>
         <p>Favorite Food<p>
          <b-form-select v-model="selectedOpt" :options="options" aria-placeholder="Favorite Food"></b-form-select>
          <div class="mt-3">Choice: <strong>{{ selectedOpt }}</strong></div>
        </div>
      </div>
      <br>
      <br>
      <div>
        <p id="print" ref="content" class="text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed earum nostrum laborum laboriosam cumque exercitationem sapiente voluptatibus. Provident praesentium, voluptatibus sint commodi porro aliquid fugit necessitatibus ut asperiores, aliquam nisi!</p>
      </div>
      <div>
           <b-button-group>
              <!-- <save-button :validationConfiguration="validationConfiguration" :record="selected_record" @sendSave="saveForm" /> -->
              <!-- <b-button variant="success" @click="saveForm">Save</b-button> -->
              <!-- <delete-button :disabled="!selected_record.id" @delete="deleteRecord" /> 
              <b-button variant="warning" @click.prevent="clearAll">Clear</b-button> -->
           </b-button-group>
      </div>
           <br>
           <br>
    </b-col>
  </b-row>
  </div>
</b-container>
</template>

<script>
import jspdf from 'jspdf'

export default {
  name: 'PdfTest',
  props: {
    msg: String
  },
  data: () => {
    return {
      name: '',
      address: '',
      description: '',
      selected: '',
      selectedOpt: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'Lagagna', text: 'lasagna' },
          { value: 'Jello', text: 'Jello' },
          { value: 'Jam Sammy', text: 'jam sammy' },
          { value: 'Tofu', text: 'Tofu', disabled: true }
        ],
      disclaimer: "The department is not responsible for the information found here.",
                   
      title: '',
    }
  },
  computed: {

  },
  methods: {
    // selected_record: function() {
    //   return {
    //     name: this.name,
    //     address: this.address,
    //     description: this.description,
    //     selected: this.selected,
    //     selectedOpt: this.selectedOpt,
    //   }
    // },
  clearForm() {
    // return 
    //       this.name = '',
    //       this.address = '',
    //       this.description ='',
    //       this.selected = '',
    //       this.selectedOpt ='',
  
	},
    makePdf() {
      this.showAlert();// alert('PDF Downloading Please wait...')
      console.log('Making PDF');
      const doc = new jspdf({
        // orientation: "portrait",
        // unit: "in",
        // format: "letter"
      });

      // const contentHtml = this.$refs.content.innerHTML;
      // const sourceTag = window.document.getElementsByTagName("body")[0];
      // const sourceItem = window.document.getElementsById("print")[0];
      
      // doc.fromHTML(contentHtml,15,15, {'width': 180,'elementHandlers': elementHandler});
      doc.text(this.name +"'s PDF" , 15, 10);
      doc.text('Name: ' + this.name, 15,25);
      doc.text('Address: ' + this.address, 15,35);
      doc.text('Description: ' + this.description, 15,45);
      doc.text('Do you like pistachio ice cream?: ' + this.selected, 15,55);
      doc.text('Favorite Food: ' + this.selectedOpt, 15,65);
      // doc.fromHTML(contentHtml, 15, 15,);
      doc.text(this.disclaimer, 15, 85);
      doc.save(this.name +'.pdf');
      this.clearForm();
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
        // console.log('Show Alert');
        this.dismissCountDown = this.dismissSecs
    },
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

