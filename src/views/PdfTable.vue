<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>This will generate a Table on a PDF.</h2>
          <title>display/box/float/clear test</title>
          <div>
            <b-button-group class="mb-5">
              <!-- <b-button variant="success" @click="previewPdf">Preview</b-button> -->
              <b-button variant="info" @click="genTable">Make Table</b-button>
              <b-button variant="warning" @click="clearPdf">Close</b-button>
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
    genTable(){
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
    }
    
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
