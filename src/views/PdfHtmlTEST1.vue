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
            <div class="text-left my-5">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dicta voluptatum, doloremque possimus iste, eum esse dolorem suscipit odit eveniet dolorum. Recusandae at ea voluptatem omnis neque obcaecati voluptatibus cupiditate.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deserunt ipsam aliquid doloribus in, consectetur culpa dolore ut officia fugit sed, sit ratione magni distinctio ex odit accusantium optio autem. Lorem, ipsum dolor sit 
                amet consectetur adipisicing elit. Neque, velit. Fuga commodi consequuntur obcaecati adipisci doloribus suscipit nostrum! Odit harum incidunt et autem iure? Ipsa numquam saepe minus eos veritatis! Sed ut perspiciatis unde omnis iste natus 
                error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
                aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
                et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit 
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et 
                quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut 
                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
                qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet 
                ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.Sed ut perspiciatis unde omnis iste 
                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam 
                quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              </p>
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
        },
      });
    },
    clearPdf() {
        console.log("Clearing Preview");
        location.reload();
        // this.iframe.src===null;
    }
  },
};
</script>

<style scoped>
/* last modified: 1 Dec 98 */
html {
  font: 10px/1 Verdana, sans-serif;
  background-color: blue;
  color: white;
}

body {
  margin: 1.5em;
  border: 0.5em solid black;
  padding: 0;
  width: 48em;
  background-color: white;
}
p {
    color: black;
    font-size: 1em;
    line-height: 1.3em;
    clear: both;
}

dl {
  margin: 0;
  border: 0;
  padding: 0.5em;
}

dt {
  background-color: rgb(204, 0, 0);
  margin: 0;
  padding: 1em;
  width: 10.638%;
  /* refers to parent element's width of 47em. = 5em or 50px */
  height: 28em;
  border: 0.5em solid black;
  float: left;
}

dd {
  float: right;
  margin: 0 0 0 1em;
  border: 1em solid black;
  padding: 1em;
  width: 34em;
  height: 27em;
}

ul {
  margin: 0;
  border: 0;
  padding: 0;
}

li {
  display: block;
  /* i.e., suppress marker */
  color: black;
  height: 9em;
  width: 5em;
  margin: 0;
  border: 0.5em solid black;
  padding: 1em;
  float: left;
  background-color: #fc0;
}

#bar {
  background-color: black;
  color: white;
  width: 41.17%;
  /* = 14em */
  border: 0;
  margin: 0 1em;
}

#baz {
  margin: 1em 0;
  border: 0;
  padding: 1em;
  width: 10em;
  height: 10em;
  background-color: black;
  color: white;
}

form {
  margin: 0;
  display: inline;
}

p {
  margin: 0;
}

form p {
  line-height: 1.9;
}

blockquote {
  margin: 1em 1em 1em 2em;
  border-width: 1em 1.5em 2em 0.5em;
  border-style: solid;
  border-color: black;
  padding: 1em 0;
  width: 5em;
  height: 9em;
  float: left;
  background-color: #fc0;
  color: black;
}

address {
  font-style: normal;
}

h1 {
  background-color: black;
  color: white;
  float: left;
  margin: 1em 0;
  border: 0;
  padding: 1em;
  width: 10em;
  height: 10em;
  font-weight: normal;
  font-size: 1em;
}
</style>