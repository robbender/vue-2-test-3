<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div id="nav" class="mx-auto">
      <router-link class="mx-3" to="/">Home</router-link> 
      <router-link class="mx-3" to="/PdfTEST">Form</router-link>  
      <router-link class="mx-3" to="/PdfHtmlTEST1">HTML 1</router-link> 
      <router-link class="mx-3" to="/PdfHtmlTEST2">HTML 2</router-link> 
      <router-link class="mx-3" to="/PdfTable">Table</router-link>
        <b-dropdown id="dropdown-left" text="PRAC" variant="outline-primary" class="m-2">
          <b-dropdown-item href="#">
            <router-link class="mx-3" to="/Counter">Counter</router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <router-link class="mx-3" to="/Conditions">Conditions</router-link>
          </b-dropdown-item>
          <!-- <b-dropdown-item href="#">Something else here</b-dropdown-item> -->
        </b-dropdown>
    
    </div>
    </nav>
    <div class="my-5">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
