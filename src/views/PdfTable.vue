<template>
  <b-container>
      <div>
           <h2>This will generate a Table on a PDF.</h2>
      </div>
    <b-row>
      <b-col>
        <b-alert 
          :show="dismissCountDown"
          dismissible
          variant="info"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          >Generating your PDF, please wait...</b-alert>
       
          <div>
            <b-button-group class="mb-5">
              <!-- <b-button variant="success" @click="previewPdf">Preview</b-button> -->
              <b-button variant="info" @click="genTable">Download</b-button>
              <!-- <b-button variant="warning" @click="clearPdf">Close</b-button> -->
            </b-button-group>
          </div>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <div>
            <b-card class="text-center ">
                <div class="bg-dark text-light p-3">
                    This is javascript used to generate this PDF Table content. <br>
                    <div class="text-left m-3">
                    <samp>genTable(){  <br>
                    <div class="ml-3">
                    const pdf = new jspdf(); <br>
                    let header = ["id","name"]; <br>
                    let headerConfig = header.map(key=>({ 'name': key, <br>
                    'prompt': key, <br>
                    'width':50, <br>
                    'align':'center', <br>
                    'padding':0})); <br>
                    let data = [{id: 1, name: "Peter"},{id: 2, name: "Chris"}]; <br>
                    pdf.table(20, 30, data, headerConfig); <br>
                    </div>
                            <!-- pdf.save("table.pdf");<br>
                        }&lt;b-card-body&gt;</samp> block of the
                        <samp>&lt;b-card&gt;</samp> component. Notice the padding between the card's border and this
                        gray <samp>&lt;div&gt; -->
                    </samp>
                    </div>
                </div>
            </b-card>
            <!-- <b-card img-src="src/assets/Screen Shot 2021-01-27 at 4.12.27 PM.png" img-alt="Card image" img-right> -->
            <!-- <b-card "require('../assets/Screen Shot 2021-01-27 at 4.12.27 PM.png')" img-alt="Card image" img-bottom>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card> -->
            
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import jspdf from "jspdf";
export default {
  name: "PdfTable",
  props: {},
  data: () => {
    return {
        dismissSecs: 5,
        dismissCountDown: 0,

    };
  },
  computed: {},
  methods: {
    previewPdf() {
      const doc = new jspdf("p", "pt", "letter");
      // const doc = new jspdf({
      //   orientation: "portrait",
      //   unit: "in",
      //   format: "letter"
      // });
     
      doc.html(document.body, {
        callback: function (doc) {
          var iframe = document.createElement("iframe");
          iframe.setAttribute(
            "style",
            "position:absolute;right:0; top:0; bottom:0; height:100%; width:500px"
          );
          document.body.appendChild(iframe);
          iframe.src = doc.output("datauristring");
        }
      });
    },
    clearPdf() {
        console.log("Clearing Preview");
        location.reload();
        // this.iframe.src===null;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    genTable(){
      this.showAlert();
      const pdf = new jspdf();
      let header = ["id","name"];
      let headerConfig = header.map(key=>({ 'name': key,
      'prompt': key,
      'width':50,
      'align':'center',
      'padding':0}));
      let data = [{id: 1, name: "Peter"},{id: 2, name: "Chris"}];
      pdf.table(20, 30, data, headerConfig);
      pdf.save("table.pdf");
    },
    showAlert() {
        // console.log('Show Alert');
        this.dismissCountDown = this.dismissSecs
    },
    
    // onLoad() {
    // var pdf = new jspdf('p', 'pt', 'letter');
		// pdf.html(document.getElementById('html'), {
		// 	callback: function (pdf) {
		// 		var iframe = document.createElement('iframe');
		// 		iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
		// 		document.body.appendChild(iframe);
		// 		iframe.src = pdf.output('datauristring');
		// 	}
    // });
    // },
    /////////////////////////////
    // onLoad() {
    // window.setTimeout (function () {
    // document.body.style.width = 400 + 'px';
		
    //   let pdf = new jspdf('p', 'pt', 'letter');
    //   pdf.html(document.body, {
    //     callback: function(pdf) {
    //       var iframe = document.createElement('iframe');
    //       iframe.setAttribute('style','position:fixed;right:0; top:0; bottom:0; height:100%; width:500px');
    //       document.body.appendChild(iframe);
    //       iframe.src = pdf.output('datauristring');
    //       }
		// 	  });
	  // }, 2000);
    // }
    /////////////////////////
    // var pdf = new jspdf('p', 'pt', 'letter');
		// var canvas = pdf.canvas;

		// pdf.html(document.getElementById('html'), {
		// 	callback: function (pdf) {
		// 		var iframe = document.createElement('iframe');
		// 		iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
		// 		document.body.appendChild(iframe);
		// 		iframe.src = pdf.output('datauristring');
		// 	}
		// });
  },
};
</script>

<style scoped>

#html {
  position: absolute; 
  left: 200; 
  top: 0; 
  bottom: 0; 
  width: 400px; 
  overflow: auto;
}

</style>
