<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>This will generate a PDF Preview from an HTML page.</h2>
        <div>
          <title>display/box/float/clear test</title>
          <div>
            <b-button-group>
              <b-button variant="success" @click="previewPdf">Preview</b-button>
              <b-button variant="warning" @click="clearPdf">Clear</b-button>
            </b-button-group>
          </div>
            <br>
            <br>
          <title>The Second Acid Test</title>
              <div id="" class="text-left">
                <h1>Ordered And Unordered Lists</h1>
                <h2>Implemented</h2>
                <ol>
                  <li>OL Item (default)</li>
                  <li>OL Item (decimal)</li>
                    <li>OL Item (upper-alpha)</li>
                    <li>OL Item (lower-alpha)</li>
                    <li>OL Item (upper-roman)</li>
                    <li>OL Item (lower-roman)</li>
                    <li>OL Item (none)</li>
                  </ol>
                  <ul>
                    <li>UL Item (default)</li>
                    <li>UL Item (circle)</li>
                    <li>UL Item (square)</li>
                    <li>UL Item (disc)</li>
                    <li>OL Item (none)</li>
                  </ul>

                  <h2>Not Implemented</h2>
                  <pre>
                  upper-latin
                  lower-latin
                  armenian
                  cjk-ideographic
                  decimal-leading-zero
                  georgian
                  hebrew
                  hiragana
                  hiragana-iroha
                  katakana
                  katakana-iroha
                  </pre>
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
    return {};
  },
  computed: {},
  methods: {
    previewPdf() {
      let pdf = new jspdf("p", "pt", "letter");
      pdf.html(document.body, {
        callback: function (pdf) {
          var iframe = document.createElement("iframe");
          iframe.setAttribute(
            "style",
            "position:absolute;right:0; top:0; bottom:0; height:100%; width:500px"
          );
          document.body.appendChild(iframe);
          iframe.src = pdf.output("datauristring");
        }
      });
    },
    clearPdf() {
        console.log("Clearing Preview");
        location.reload();
        // this.iframe.src===null;
    },
    // onLoad2() {
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
