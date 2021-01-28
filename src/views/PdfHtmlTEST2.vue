<template>
  <b-container>
    <b-row>
      <b-col>
        <b-alert 
          :show="dismissCountDown"
          dismissible
          variant="info"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
          >Generating your PDF, please wait...</b-alert>
        <h2>This will generate an example PDF Preview page.</h2>
          <title>display/box/float/clear test</title>
          <div>
            <b-button-group class="mb-5">
              <b-button variant="success" @click="previewPdf">Preview</b-button>
              <b-button variant="info" @click="makePdf">Download</b-button>
              <b-button variant="warning" @click="clearPdf">Close</b-button>
            </b-button-group>
          </div>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <div id="container" >
            <div id="topbar" class="slide"><a id="menu-button">Scroll!</a>
            Scroll button does not work on android4, though interestingly it works on Android 2 even though finger scrolling does not work</div>
            <div id="wrapper" class="slide">
              <ul class="text-left my-5">
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Content</li>
                <li>Prashanth</li>
              </ul>
            </div>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import jspdf from "jspdf";
export default {
  name: "PdfHtmlTest",
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
      pdf.save("pdf.pdf");
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

      doc.text("This is the default font.", 20, 20);

      doc.setFont("courier", "normal");
      doc.text("This is courier normal.", 20, 30);

      doc.setFont("times", "italic");
      doc.text("This is times italic.", 20, 40);

      doc.setFont("helvetica", "bold");
      doc.text("This is helvetica bold.", 20, 50);

      doc.setFont("courier", "bolditalic");
      doc.text("This is courier bolditalic.", 20, 60);

      doc.setFont("times", "normal");
      doc.text("This is centred text.", 105, 80, null, null, "center");
      doc.text("And a little bit more underneath it.", 105, 90, null, null, "center");
      doc.text("This is right aligned text", 200, 100, null, null, "right");
      doc.text("And some more", 200, 110, null, null, "right");
      doc.text("Back to left", 20, 120);

      doc.text("10 degrees rotated", 20, 140, null, 10);
      doc.text("-10 degrees rotated", 20, 160, null, -10);

      doc.addPage();
      doc.save('example.pdf');
      // , sizes = [12, 16, 20]
      // , fonts = [['Times','Roman'],['Helvetica',''], ['Times','Italic']]
      // , font, size, lines
      // , verticalOffset = 0.5 // inches on a 8.5 x 11 inch sheet.
      this.clearPdf();
    },
    
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
        // console.log('Show Alert');
        this.dismissCountDown = this.dismissSecs
    },
    clearPdf() {
      console.log("Clearing Preview");
      location.reload();
      // this.iframe.src===null;
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
